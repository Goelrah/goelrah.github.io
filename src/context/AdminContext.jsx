import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import contentData from '../data/content.json'

const AdminContext = createContext(null)

// SHA-256 hash of the admin password (pre-computed)
// Default password: "RahulAdmin2025!" — change this hash if you change the password
const PASSWORD_HASH = '9f087ba9d515bf1c10c296b477ed3e1e563f586107e4c0de65832395bcb07795'

async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [content, setContent] = useState(contentData)
  const [hasChanges, setHasChanges] = useState(false)

  // Secret key combo: Ctrl+Shift+K to toggle admin login
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault()
        if (isAdmin) {
          setIsAdmin(false)
        } else {
          setShowLoginModal(true)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isAdmin])

  const login = useCallback(async (password) => {
    const hash = await hashPassword(password)
    if (hash === PASSWORD_HASH) {
      setIsAdmin(true)
      setShowLoginModal(false)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    setIsAdmin(false)
    setHasChanges(false)
  }, [])

  const updateContent = useCallback((path, value) => {
    setContent(prev => {
      const updated = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let obj = updated
      for (let i = 0; i < keys.length - 1; i++) {
        const key = isNaN(keys[i]) ? keys[i] : parseInt(keys[i])
        obj = obj[key]
      }
      const lastKey = isNaN(keys[keys.length - 1]) ? keys[keys.length - 1] : parseInt(keys[keys.length - 1])
      obj[lastKey] = value
      return updated
    })
    setHasChanges(true)
  }, [])

  const addCertification = useCallback((cert) => {
    setContent(prev => ({
      ...prev,
      certifications: [...prev.certifications, { id: Date.now().toString(), ...cert }]
    }))
    setHasChanges(true)
  }, [])

  const removeCertification = useCallback((id) => {
    setContent(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c.id !== id)
    }))
    setHasChanges(true)
  }, [])

  const saveContent = useCallback(() => {
    const json = JSON.stringify(content, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'content.json'
    a.click()
    URL.revokeObjectURL(url)
    setHasChanges(false)
  }, [content])

  return (
    <AdminContext.Provider value={{
      isAdmin,
      showLoginModal,
      setShowLoginModal,
      login,
      logout,
      content,
      updateContent,
      addCertification,
      removeCertification,
      saveContent,
      hasChanges,
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider')
  return ctx
}

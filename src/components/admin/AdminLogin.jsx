import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, X, AlertCircle } from 'lucide-react'
import { useAdmin } from '../../context/AdminContext'

export default function AdminLogin() {
  const { showLoginModal, setShowLoginModal, login } = useAdmin()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const success = await login(password)
    if (!success) {
      setError('Invalid password')
    }
    setPassword('')
    setLoading(false)
  }

  return (
    <AnimatePresence>
      {showLoginModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowLoginModal(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-surface-900 border border-surface-700 rounded-2xl p-8 shadow-2xl"
          >
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-surface-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-primary-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Admin Access</h2>
              <p className="text-sm text-surface-400 mt-1">Enter password to enable editing</p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                className="w-full px-4 py-3 bg-surface-800 border border-surface-700 rounded-xl text-white placeholder-surface-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 mb-3"
              />

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm mb-3">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Unlock'}
              </button>
            </form>

            <p className="text-[11px] text-surface-500 text-center mt-4">
              Press Ctrl+Shift+K to toggle admin mode
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

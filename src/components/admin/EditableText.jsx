import { useState, useRef, useEffect } from 'react'
import { Pencil, Check, X } from 'lucide-react'
import { useAdmin } from '../../context/AdminContext'

export default function EditableText({ path, value, as: Tag = 'span', className = '', multiline = false }) {
  const { isAdmin, updateContent } = useAdmin()
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const inputRef = useRef(null)

  useEffect(() => {
    setDraft(value)
  }, [value])

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editing])

  const handleSave = () => {
    updateContent(path, draft)
    setEditing(false)
  }

  const handleCancel = () => {
    setDraft(value)
    setEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault()
      handleSave()
    }
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  if (!isAdmin) {
    return <Tag className={className}>{value}</Tag>
  }

  if (editing) {
    return (
      <span className="inline-flex items-start gap-1 relative">
        {multiline ? (
          <textarea
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            className={`${className} bg-primary-500/10 border border-primary-500/40 rounded-lg px-2 py-1 outline-none focus:border-primary-500 w-full min-w-[200px] resize-y`}
          />
        ) : (
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`${className} bg-primary-500/10 border border-primary-500/40 rounded-lg px-2 py-0.5 outline-none focus:border-primary-500 min-w-[100px]`}
          />
        )}
        <button onClick={handleSave} className="p-1 rounded bg-green-500 text-white hover:bg-green-400 flex-shrink-0">
          <Check className="w-3 h-3" />
        </button>
        <button onClick={handleCancel} className="p-1 rounded bg-surface-700 text-surface-300 hover:bg-surface-600 flex-shrink-0">
          <X className="w-3 h-3" />
        </button>
      </span>
    )
  }

  return (
    <Tag
      className={`${className} relative group/edit cursor-pointer hover:bg-primary-500/5 hover:outline hover:outline-1 hover:outline-primary-500/30 rounded px-0.5 -mx-0.5 transition-all`}
      onClick={() => setEditing(true)}
    >
      {value}
      <Pencil className="w-3 h-3 text-primary-400 absolute -top-1 -right-4 opacity-0 group-hover/edit:opacity-100 transition-opacity" />
    </Tag>
  )
}

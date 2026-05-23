import { motion, AnimatePresence } from 'framer-motion'
import { Save, LogOut, Pencil } from 'lucide-react'
import { useAdmin } from '../../context/AdminContext'

export default function AdminToolbar() {
  const { isAdmin, logout, saveContent, hasChanges } = useAdmin()

  return (
    <AnimatePresence>
      {isAdmin && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-3 px-5 py-3 bg-surface-900/95 backdrop-blur-xl border border-primary-500/30 rounded-full shadow-2xl shadow-primary-500/10"
        >
          <div className="flex items-center gap-2 text-primary-400 text-sm font-medium pr-3 border-r border-surface-700">
            <Pencil className="w-4 h-4" />
            Admin Mode
          </div>

          <button
            onClick={saveContent}
            disabled={!hasChanges}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              hasChanges
                ? 'bg-green-500 text-white hover:bg-green-400 shadow-lg shadow-green-500/25'
                : 'bg-surface-800 text-surface-500 cursor-not-allowed'
            }`}
          >
            <Save className="w-4 h-4" />
            {hasChanges ? 'Save Changes' : 'No Changes'}
          </button>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800 text-surface-300 hover:text-white hover:bg-surface-700 text-sm font-medium transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Exit
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

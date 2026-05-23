import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Clock, ExternalLink, Plus, Trash2, Calendar } from 'lucide-react'
import { useAdmin } from '../context/AdminContext'

export default function Certifications() {
  const { isAdmin, content, updateContent, addCertification, removeCertification } = useAdmin()
  const [showAddForm, setShowAddForm] = useState(false)

  const obtained = content.certifications.filter(c => c.status === 'obtained')
  const pursuing = content.certifications.filter(c => c.status === 'pursuing')

  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Certifications</span>
          <h2 className="section-title text-white">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Industry-recognized certifications across cloud architecture, program management, and AI/ML.
          </p>
        </motion.div>

        {/* Obtained Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-wrap justify-center gap-8 lg:gap-10 mb-16"
        >
          {obtained.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{ hidden: { opacity: 0, scale: 0.8, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.25 } }}
              className="flex flex-col items-center text-center group cursor-default relative"
            >
              {/* Admin delete button */}
              {isAdmin && (
                <button
                  onClick={() => removeCertification(cert.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-400"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}

              {/* Badge */}
              <div className="relative mb-4">
                <a
                  href={cert.verifyUrl || '#'}
                  target={cert.verifyUrl ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-surface-800/50 border-2 border-surface-700/50 p-2 group-hover:border-primary-500/50 group-hover:shadow-xl group-hover:shadow-primary-500/10 transition-all duration-300">
                    <img
                      src={cert.badgeUrl}
                      alt={cert.fullName}
                      className="w-full h-full object-contain rounded-full"
                      loading="lazy"
                    />
                  </div>
                </a>
                {/* Verified checkmark */}
                <div className="absolute -bottom-1 right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center ring-4 ring-surface-950 shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-sm font-bold text-white mb-0.5 max-w-[150px] leading-tight">{cert.name}</h3>
              <p className="text-[11px] text-surface-400 max-w-[150px]">{cert.issuer} • {cert.year}</p>

              {/* Expiry */}
              {cert.expiry && (
                <p className="text-[10px] text-amber-400/80 mt-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Expires {cert.expiry}
                </p>
              )}

              {/* Verify link */}
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-primary-400 hover:text-primary-300 mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="w-3 h-3" />
                  Verify
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        {pursuing.length > 0 && (
          <div className="flex items-center gap-4 mb-10 max-w-md mx-auto">
            <div className="flex-1 h-px bg-surface-800" />
            <div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
              <Clock className="w-4 h-4" />
              Currently Pursuing
            </div>
            <div className="flex-1 h-px bg-surface-800" />
          </div>
        )}

        {/* Pursuing Badges */}
        {pursuing.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-wrap justify-center gap-8 lg:gap-10"
          >
            {pursuing.map((cert) => (
              <motion.div
                key={cert.id}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center group cursor-default relative"
              >
                {/* Admin delete */}
                {isAdmin && (
                  <button
                    onClick={() => removeCertification(cert.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-400"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}

                <div className="relative mb-4">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[3px] border-dashed border-amber-500/40 p-2 group-hover:border-amber-400/70 transition-all duration-300">
                    <img
                      src={cert.badgeUrl}
                      alt={cert.fullName}
                      className="w-full h-full object-contain rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-1 right-1 w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center ring-4 ring-surface-950">
                    <Clock className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white mb-0.5 max-w-[150px] leading-tight">{cert.name}</h3>
                <p className="text-[11px] text-surface-400 max-w-[160px]">{cert.issuer} • Target {cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Admin: Add Certification */}
        {isAdmin && (
          <div className="mt-10">
            {!showAddForm ? (
              <button
                onClick={() => setShowAddForm(true)}
                className="mx-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium hover:bg-primary-500/20 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Certification
              </button>
            ) : (
              <AddCertForm onClose={() => setShowAddForm(false)} onAdd={addCertification} />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function AddCertForm({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: '',
    fullName: '',
    issuer: '',
    year: '',
    expiry: '',
    status: 'pursuing',
    badgeUrl: '',
    verifyUrl: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({
      ...form,
      expiry: form.expiry || null,
      verifyUrl: form.verifyUrl || null,
    })
    onClose()
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto glass-card p-6 space-y-3"
    >
      <h4 className="text-sm font-bold text-white mb-4">Add New Certification</h4>

      <div className="grid grid-cols-2 gap-3">
        <input
          placeholder="Short name (e.g. AWS SA)"
          value={form.name}
          onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
          required
          className="px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
        />
        <input
          placeholder="Full name"
          value={form.fullName}
          onChange={(e) => setForm(f => ({ ...f, fullName: e.target.value }))}
          required
          className="px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
        />
        <input
          placeholder="Issuer"
          value={form.issuer}
          onChange={(e) => setForm(f => ({ ...f, issuer: e.target.value }))}
          required
          className="px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
        />
        <input
          placeholder="Year"
          value={form.year}
          onChange={(e) => setForm(f => ({ ...f, year: e.target.value }))}
          required
          className="px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
        />
        <input
          placeholder="Expiry year (optional)"
          value={form.expiry}
          onChange={(e) => setForm(f => ({ ...f, expiry: e.target.value }))}
          className="px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
        />
        <select
          value={form.status}
          onChange={(e) => setForm(f => ({ ...f, status: e.target.value }))}
          className="px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary-500"
        >
          <option value="obtained">Obtained</option>
          <option value="pursuing">Pursuing</option>
        </select>
      </div>

      <input
        placeholder="Badge image URL (Credly)"
        value={form.badgeUrl}
        onChange={(e) => setForm(f => ({ ...f, badgeUrl: e.target.value }))}
        required
        className="w-full px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
      />
      <input
        placeholder="Verify URL (optional)"
        value={form.verifyUrl}
        onChange={(e) => setForm(f => ({ ...f, verifyUrl: e.target.value }))}
        className="w-full px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-sm text-white placeholder-surface-500 focus:outline-none focus:border-primary-500"
      />

      <div className="flex gap-3 pt-2">
        <button type="submit" className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-400 transition-colors">
          Add
        </button>
        <button type="button" onClick={onClose} className="px-4 py-2 bg-surface-800 text-surface-300 text-sm font-medium rounded-lg hover:bg-surface-700 transition-colors">
          Cancel
        </button>
      </div>
    </motion.form>
  )
}

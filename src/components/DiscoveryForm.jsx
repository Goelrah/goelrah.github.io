import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Calendar, ArrowRight } from 'lucide-react'

const serviceOptions = [
  'GenAI Program Rescue',
  'Cloud FinOps Transformation',
  'TPM Org Design & Coaching',
  'Fractional Technical Leadership',
  'Full-Time Staff/Principal TPM Role',
  'Other',
]

const budgetOptions = [
  'Under $10K',
  '$10K – $50K',
  '$50K – $150K',
  '$150K+',
  'Not sure yet',
  'Full-time role (salary)',
]

const timelineOptions = [
  'Immediately',
  'Within 1 month',
  '1-3 months',
  '3+ months',
  'Just exploring',
]

export default function DiscoveryForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    challenge: '',
  })
  const [sent, setSent] = useState(false)

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Discovery Call Request — ${form.company || form.name}`
    const body = `Hi Rahul,\n\nI'd like to book a discovery call.\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nChallenge:\n${form.challenge}\n\nBest,\n${form.name}`
    window.open(`mailto:Rahul.g2510@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank')
    setSent(true)
  }

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }))

  if (!isOpen) return null

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 999999 }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
        >
          {!sent ? (
            <div className="grid lg:grid-cols-[1fr_1.4fr]">
              {/* Left — Value prop */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 lg:p-10 text-white hidden lg:flex flex-col justify-between">
                <div>
                  <Calendar className="w-8 h-8 mb-6 opacity-80" />
                  <h2 className="text-2xl font-bold mb-3">Book a Discovery Call</h2>
                  <p className="text-primary-100 text-sm leading-relaxed mb-8">
                    Free 30-minute consultation. I'll listen to your challenge, ask the right questions, 
                    and tell you honestly if I can help.
                  </p>

                  <div className="space-y-4">
                    {[
                      'No obligation — just a conversation',
                      'I respond within 24 hours',
                      'Clear next steps after the call',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-primary-100">
                        <ArrowRight className="w-3.5 h-3.5 text-primary-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-500/30 mt-8">
                  <p className="text-xs text-primary-200">
                    "I don't do slide decks. I embed with your team, own the delivery, and leave you with a working system."
                  </p>
                  <p className="text-xs text-primary-300 mt-2">— Rahul Goel</p>
                </div>
              </div>

              {/* Right — Form */}
              <div className="p-6 lg:p-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-surface-500 hover:text-surface-700 hover:bg-surface-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Mobile header */}
                <div className="lg:hidden mb-6">
                  <h2 className="text-xl font-bold text-surface-900">Book a Discovery Call</h2>
                  <p className="text-sm text-surface-500">Free 30-minute consultation</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-surface-700 mb-1.5 block">Your Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 text-sm border border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-surface-900 placeholder-surface-400 bg-surface-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-surface-700 mb-1.5 block">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 text-sm border border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-surface-900 placeholder-surface-400 bg-surface-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-surface-700 mb-1.5 block">Company</label>
                    <input
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-2.5 text-sm border border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-surface-900 placeholder-surface-400 bg-surface-50"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-surface-700 mb-1.5 block">What do you need help with? *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-surface-900 bg-surface-50 appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-surface-700 mb-1.5 block">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => update('budget', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-surface-900 bg-surface-50 appearance-none"
                      >
                        <option value="">Select...</option>
                        {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-surface-700 mb-1.5 block">Timeline</label>
                      <select
                        value={form.timeline}
                        onChange={(e) => update('timeline', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-surface-900 bg-surface-50 appearance-none"
                      >
                        <option value="">Select...</option>
                        {timelineOptions.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-surface-700 mb-1.5 block">Describe your challenge *</label>
                    <textarea
                      required
                      value={form.challenge}
                      onChange={(e) => update('challenge', e.target.value)}
                      placeholder="What problem are you trying to solve? What have you tried? What does success look like?"
                      rows={3}
                      className="w-full px-4 py-2.5 text-sm border border-surface-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-surface-900 placeholder-surface-400 bg-surface-50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    Send & Schedule Call
                  </button>
                  <p className="text-[11px] text-surface-400 text-center">
                    Opens your email client with pre-filled details. I respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          ) : (
            /* Success */
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
                <Send className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-surface-900 mb-2">You're all set!</h3>
              <p className="text-sm text-surface-600 mb-8 max-w-sm mx-auto">
                Your email client opened with the details. Hit send and I'll respond within 24 hours to schedule our call.
              </p>
              <button
                onClick={() => { setSent(false); onClose(); }}
                className="px-6 py-2.5 text-sm font-medium bg-surface-100 rounded-xl text-surface-700 hover:bg-surface-200 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>,
    document.body
  )
}

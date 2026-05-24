import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Calendar, Building2, User, Mail, MessageSquare } from 'lucide-react'

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

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build email body
    const subject = `Discovery Call Request — ${form.company || form.name}`
    const body = `Hi Rahul,

I'd like to book a discovery call. Here are my details:

Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Service Interested In: ${form.service}
Budget Range: ${form.budget}
Timeline: ${form.timeline}

Challenge / Requirements:
${form.challenge}

Looking forward to connecting.

Best,
${form.name}`

    // Open email client with pre-filled content
    const mailtoLink = `mailto:Rahul.g2510@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
    setSent(true)
  }

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <div className="fixed inset-0 bg-surface-900/50 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-surface-200 my-8"
          >
            {/* Header */}
            <div className="p-6 border-b border-surface-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-surface-900">Book a Discovery Call</h2>
                    <p className="text-xs text-surface-500">Free 30-minute consultation</p>
                  </div>
                </div>
                <button onClick={onClose} className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-surface-500 hover:text-surface-700 hover:bg-surface-200 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!sent ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-surface-600 mb-1 block">Your Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-surface-200 rounded-lg focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 text-surface-900 placeholder-surface-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-surface-600 mb-1 block">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="john@company.com"
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-surface-200 rounded-lg focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 text-surface-900 placeholder-surface-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-medium text-surface-600 mb-1 block">Company</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                    <input
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Acme Inc."
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-surface-200 rounded-lg focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 text-surface-900 placeholder-surface-400"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="text-xs font-medium text-surface-600 mb-1 block">What do you need help with? *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-surface-200 rounded-lg focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 text-surface-900 bg-white"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Budget + Timeline */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-surface-600 mb-1 block">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => update('budget', e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-surface-200 rounded-lg focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 text-surface-900 bg-white"
                    >
                      <option value="">Select...</option>
                      {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-surface-600 mb-1 block">Timeline</label>
                    <select
                      value={form.timeline}
                      onChange={(e) => update('timeline', e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-surface-200 rounded-lg focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 text-surface-900 bg-white"
                    >
                      <option value="">Select...</option>
                      {timelineOptions.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <label className="text-xs font-medium text-surface-600 mb-1 block">Describe your challenge *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-surface-400" />
                    <textarea
                      required
                      value={form.challenge}
                      onChange={(e) => update('challenge', e.target.value)}
                      placeholder="Tell me about the problem you're trying to solve, what you've tried, and what success looks like..."
                      rows={4}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-surface-200 rounded-lg focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 text-surface-900 placeholder-surface-400 resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
                >
                  <Send className="w-4 h-4" />
                  Send & Open Email
                </button>
                <p className="text-[11px] text-surface-400 text-center">
                  This opens your email client with a pre-filled message. I respond within 24 hours.
                </p>
              </form>
            ) : (
              /* Success state */
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-2">Email Ready!</h3>
                <p className="text-sm text-surface-600 mb-6">
                  Your email client should have opened with the pre-filled details. 
                  Just hit send — I'll respond within 24 hours to schedule our call.
                </p>
                <button
                  onClick={() => { setSent(false); onClose(); }}
                  className="px-5 py-2.5 text-sm font-medium border border-surface-200 rounded-lg text-surface-700 hover:bg-surface-50 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

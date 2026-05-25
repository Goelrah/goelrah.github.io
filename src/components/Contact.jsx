import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import { PiEnvelopeDuotone, PiLinkedinLogoDuotone, PiGithubLogoDuotone, PiFileArrowDownDuotone } from 'react-icons/pi'
import DiscoveryForm from './DiscoveryForm'
import AnimatedIcon3D from './AnimatedIcon3D'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Contact() {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
    <section id="contact" className="relative py-16 lg:py-20 bg-primary-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full mb-8">
              <motion.span
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-sm text-green-700 font-medium">Accepting new clients for Q3 2026</span>
            </div>
          </motion.div>

          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block text-sm text-surface-500 font-mono tracking-wider mb-4">
            06 // Let's Talk
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-surface-900">
            Ready to ship<br /><span className="text-primary-600">something real?</span>
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-lg text-surface-600 mb-4 leading-relaxed">
            Book a free 30-minute discovery call. I'll listen to your challenge, ask hard questions, 
            and tell you honestly whether I can help.
          </motion.p>

          {/* Ideal client + openness */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-10 p-5 rounded-xl bg-white border border-surface-200">
            <p className="text-sm text-surface-700 mb-3">
              <span className="font-semibold">I work best with:</span> Series B+ startups, enterprise engineering orgs, and Fortune 500 teams 
              navigating AI adoption, cloud scale, or engineering org design.
            </p>
            <p className="text-sm text-surface-700 mb-3">
              <span className="font-semibold">Engagement models:</span> Fixed-price projects · Monthly retainers · Fractional leadership · 
              <span className="text-primary-600 font-medium"> Also open to full-time Staff/Principal TPM roles at the right organization.</span>
            </p>
            <p className="text-sm text-surface-500">
              <span className="font-semibold">Pricing:</span> Engagements typically start at $150/hour or fixed-price based on scope. 
              Discovery call is always free.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors text-base shadow-lg shadow-primary-600/20"
            >
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <p className="text-xs text-surface-500 mt-2 ml-1">Fill a short form — I respond within 24 hours</p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: PiEnvelopeDuotone, label: 'Email', href: 'mailto:Rahul.g2510@outlook.com', color: '#dc2626', animation: 'pulse' },
              { icon: PiLinkedinLogoDuotone, label: 'LinkedIn', href: 'https://www.linkedin.com/in/goelrahul25', color: '#0077b5', animation: 'float' },
              { icon: PiGithubLogoDuotone, label: 'GitHub', href: 'https://github.com/rahgoel2510', color: '#1f2937', animation: 'tilt' },
              { icon: PiFileArrowDownDuotone, label: 'Resume', href: '/assets/RahulGoel_Resume.pdf', color: '#059669', animation: 'bounce' },
            ].map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                download={l.label === 'Resume' ? true : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.03, boxShadow: '0 8px 25px -5px rgba(99,102,241,0.15)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-5 py-3 border border-surface-300 text-surface-700 font-medium rounded-xl hover:border-primary-300 hover:text-primary-700 hover:bg-white transition-colors text-sm"
              >
                <AnimatedIcon3D color={l.color} size="sm" animation={l.animation} delay={i * 0.2}>
                  <l.icon className="w-full h-full" />
                </AnimatedIcon3D>
                {l.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-8 text-sm text-surface-500 pt-8 border-t border-surface-200">
            <div>
              <span className="block text-surface-400 text-xs uppercase tracking-wider mb-1">Based in</span>
              Bangalore, India · Remote worldwide
            </div>
            <div>
              <span className="block text-surface-400 text-xs uppercase tracking-wider mb-1">Relocation</span>
              Open to relocation · Indian citizen
            </div>
            <div>
              <span className="block text-surface-400 text-xs uppercase tracking-wider mb-1">Response</span>
              Within 24 hours
            </div>
            <div>
              <span className="block text-surface-400 text-xs uppercase tracking-wider mb-1">Engagement</span>
              Fixed-price · Retainers · Fractional · Full-time
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <DiscoveryForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  )
}

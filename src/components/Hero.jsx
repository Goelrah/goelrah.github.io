import { motion } from 'framer-motion'
import { ArrowRight, Download, Calendar } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero({ scrollToSection }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Availability */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-surface-800 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-green-400" />
              <span className="text-sm text-surface-400">Currently booking for Q3 2026</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] mb-8 max-w-4xl"
          >
            I turn stalled AI programs into <span className="text-primary-400">production systems that generate ROI.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-surface-400 max-w-2xl mb-6 leading-relaxed"
          >
            Independent Technology Consultant. 20 years. I'm the person you hire when your GenAI initiative 
            is stuck between PoC and production, your cloud portfolio is bleeding money, or your engineering 
            org has stopped scaling.
          </motion.p>

          {/* Credibility line */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-sm text-surface-500 mb-12"
          >
            Previously: Amazon (Staff TPM) · Deloitte (Engineering Director) · 10+ Fortune 500 clients · AWS Certified Solutions Architect
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-wrap items-center gap-4 mb-20">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-surface-950 font-semibold rounded-lg hover:bg-surface-200 transition-colors text-base"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 px-7 py-4 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors"
            >
              See how I work
            </motion.button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-surface-800/50"
          >
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '$8M+', label: 'Client Savings Delivered' },
              { value: '88%', label: 'AI Automation Rate' },
              { value: '0', label: 'Missed Deadlines' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-white">{m.value}</div>
                <div className="text-sm text-surface-500 mt-1">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

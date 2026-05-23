import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

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
          {/* Availability badge */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-surface-800 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-surface-400">Available for Staff TPM & AI Leadership roles · Booking for Q3 2026</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl"
          >
            I build AI systems that <span className="text-primary-400">save millions</span> and programs that never miss.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-surface-400 max-w-2xl mb-4 leading-relaxed"
          >
            Rahul Goel — Senior TPM & AWS Certified Solutions Architect. 20 years. $165M cloud portfolio. GenAI systems at Amazon scale.
          </motion.p>

          {/* Location & preferences */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-sm text-surface-500 mb-4"
          >
            📍 Bangalore, India · Open to Remote · Open to Relocation
          </motion.p>

          {/* Target & visa */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-sm text-surface-500 mb-12"
          >
            Open to: FAANG, Enterprise SaaS, AI-native startups · Indian citizen · No visa sponsorship required for India roles
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-wrap items-center gap-4 mb-20">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-surface-950 font-semibold rounded-lg hover:bg-surface-200 transition-colors"
            >
              Let's work together
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors"
            >
              Learn more
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/assets/RahulGoel_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>

          {/* Metrics — animated counters */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-surface-800/50"
          >
            {[
              { value: '20+', label: 'Years Shipping' },
              { value: '$165M', label: 'AWS Portfolio' },
              { value: '88%', label: 'AI Resolution Rate' },
              { value: '45+', label: 'Team Built' },
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

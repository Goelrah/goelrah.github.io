import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, Calendar, ArrowRight } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-500/30 bg-green-500/5 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400 font-medium">Accepting new clients for Q3 2026</span>
            </div>
          </motion.div>

          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block text-sm text-surface-500 font-mono tracking-wider mb-4">
            06 // Let's Talk
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Ready to ship<br /><span className="text-primary-400">something real?</span>
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-lg text-surface-400 mb-12 leading-relaxed">
            Book a free 30-minute discovery call. I'll listen to your challenge, ask hard questions, 
            and tell you honestly whether I can help — and exactly how.
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-8">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:Rahul.g2510@outlook.com?subject=Discovery%20Call%20Request"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-surface-950 font-semibold rounded-lg hover:bg-surface-200 transition-colors text-base"
            >
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Other contact methods */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-3 mb-12">
            <a
              href="mailto:Rahul.g2510@outlook.com"
              className="inline-flex items-center gap-2 px-5 py-3 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/goelrahul25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/rahgoel2510"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="/assets/RahulGoel_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Details */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-8 text-sm text-surface-500 pt-8 border-t border-surface-800/50">
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Based in</span>
              Bangalore, India · Work remotely worldwide
            </div>
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Email</span>
              Rahul.g2510@outlook.com
            </div>
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Response</span>
              Within 24 hours
            </div>
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Engagement</span>
              Fixed-price projects · Retainers · Fractional
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

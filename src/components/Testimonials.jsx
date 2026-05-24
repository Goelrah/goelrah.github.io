import { motion } from 'framer-motion'
import { Linkedin, ExternalLink } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-surface-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="text-sm text-surface-500 font-mono tracking-wider block">
            // Client & Colleague Feedback
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-2xl lg:text-3xl font-bold mt-4 mb-4 leading-tight">
            Don't take my word for it.
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-surface-400 mb-8">
            Read what VPs, Directors, and clients say about working with me — directly on LinkedIn.
          </motion.p>
          <motion.a
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            href="https://www.linkedin.com/in/goelrahul25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0077B5] text-white font-semibold rounded-lg hover:bg-[#006097] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            View Recommendations
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

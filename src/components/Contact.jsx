import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download } from 'lucide-react'

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-surface-800 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-surface-400">Currently open to opportunities</span>
            </div>
          </motion.div>

          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="block text-sm text-surface-500 font-mono tracking-wider mb-4">
            05 // Contact
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Ready to build<br /><span className="text-primary-400">something real?</span>
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-lg text-surface-400 mb-12 leading-relaxed">
            Whether you need a Staff TPM to own AI program delivery, a strategic advisor 
            for cloud architecture, or a fractional leader to scale your engineering org.
          </motion.p>

          {/* Contact links */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:Rahul.g2510@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-surface-950 font-semibold rounded-lg hover:bg-surface-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/goelrahul25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/rahgoel2510"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-700 text-surface-300 font-medium rounded-lg hover:border-surface-500 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
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

          {/* Details */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-8 text-sm text-surface-500">
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Location</span>
              Bangalore, India · Open to remote
            </div>
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Email</span>
              Rahul.g2510@outlook.com
            </div>
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Phone</span>
              Available on request
            </div>
            <div>
              <span className="block text-surface-600 text-xs uppercase tracking-wider mb-1">Response</span>
              Within 24-48 hours
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

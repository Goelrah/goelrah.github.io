import { motion } from 'framer-motion'
import { Linkedin, Github, PenLine, ExternalLink } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const channels = [
  {
    icon: PenLine,
    title: 'Writing & Insights',
    description: 'I share frameworks, lessons, and technical deep-dives on AI delivery, cloud governance, and engineering leadership.',
    link: 'https://www.linkedin.com/in/goelrahul25/recent-activity/articles/',
    linkText: 'Read on LinkedIn',
    color: 'bg-blue-50 border-blue-200 text-blue-600',
  },
  {
    icon: Github,
    title: 'Open Source',
    description: 'Production-grade tools for LLM evaluation, AI automation pipelines, and enterprise RAG systems.',
    link: 'https://github.com/rahgoel2510',
    linkText: 'View on GitHub',
    color: 'bg-surface-100 border-surface-300 text-surface-700',
  },
]

export default function ThoughtLeadership() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-8">
            <span className="text-sm text-surface-500 font-mono tracking-wider">// Thought Leadership</span>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid sm:grid-cols-2 gap-5 max-w-3xl"
          >
            {channels.map((ch) => (
              <motion.a
                key={ch.title}
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-surface-200 bg-white hover:shadow-lg hover:border-primary-200 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl ${ch.color} border flex items-center justify-center mb-4`}>
                  <ch.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-surface-900 mb-2">{ch.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed mb-4">{ch.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                  {ch.linkText}
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

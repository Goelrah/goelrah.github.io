import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Calendar, Briefcase, MessageSquare, Download, ArrowRight, MapPin, Clock } from 'lucide-react'
import { useAdmin } from '../context/AdminContext'
import EditableText from './admin/EditableText'

const workOptions = [
  {
    icon: Briefcase,
    title: 'Full-Time Roles',
    description: 'Staff/Principal TPM, GenAI Program Leadership, or Cloud Platform Leadership positions.',
    color: '#6366f1',
  },
  {
    icon: MessageSquare,
    title: 'Advisory & Consulting',
    description: 'GenAI strategy, Cloud FinOps reviews, or program governance for startups and scale-ups.',
    color: '#10b981',
  },
  {
    icon: Calendar,
    title: 'Speaking & Workshops',
    description: 'Conference talks, workshops, or executive briefings on GenAI, FinOps, and TPM leadership.',
    color: '#f59e0b',
  },
]

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Rahul.g2510@outlook.com',
    href: 'mailto:Rahul.g2510@outlook.com',
    color: '#6366f1',
    hoverBg: 'hover:bg-primary-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/goelrahul25',
    href: 'https://www.linkedin.com/in/goelrahul25',
    color: '#0077B5',
    hoverBg: 'hover:bg-blue-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/rahgoel2510',
    href: 'https://github.com/rahgoel2510',
    color: '#8b5cf6',
    hoverBg: 'hover:bg-violet-500/20',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  const { content } = useAdmin()
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4">Let's Connect</span>
          <h2 className="section-title text-white">
            <EditableText path="contact.title" value={content.contact.title} as="span" className="section-title text-white" />
          </h2>
          <p className="section-subtitle mx-auto">
            <EditableText path="contact.subtitle" value={content.contact.subtitle} as="span" className="section-subtitle" multiline />
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Work Options (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {workOptions.map((option) => (
                <motion.div
                  key={option.title}
                  variants={itemVariants}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-5 text-center group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${option.color}15` }}
                  >
                    <option.icon className="w-6 h-6" style={{ color: option.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{option.title}</h3>
                  <p className="text-xs text-surface-400 leading-relaxed">{option.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  transition={{ duration: 0.4 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-surface-800/40 border border-surface-700/40 ${link.hoverBg} transition-colors group`}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${link.color}15` }}
                  >
                    <link.icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-surface-400">{link.label}</p>
                    <p className="text-sm text-white font-medium truncate">{link.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-surface-500 group-hover:text-primary-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: CTA Card (2 cols) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-6 lg:p-8 relative overflow-hidden h-full flex flex-col justify-between">
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 bg-green-400 rounded-full"
                  />
                  <span className="text-sm text-green-400 font-medium">Available for opportunities</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Rahul Goel</h3>
                <p className="text-sm text-surface-300 mb-6">
                  Staff Technical Program Manager with 20 years owning portfolio-scale AI and platform programs.
                </p>

                {/* Location & Response */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-surface-300">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span>Bangalore, India • Open to remote globally</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-surface-300">
                    <Clock className="w-4 h-4 text-primary-400" />
                    <span>Typically responds within 24-48 hours</span>
                  </div>
                </div>

                {/* Resume Download */}
                <motion.a
                  href="/assets/RahulGoel_Resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-500 text-white font-medium text-sm hover:bg-primary-400 transition-colors shadow-lg shadow-primary-500/25 mb-4"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </motion.a>

                <motion.a
                  href="mailto:Rahul.g2510@outlook.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-surface-800 text-white font-medium text-sm hover:bg-surface-700 transition-colors border border-surface-700"
                >
                  <Mail className="w-4 h-4" />
                  Send an Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

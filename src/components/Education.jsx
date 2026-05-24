import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const education = [
  {
    degree: 'Master of Science, Information Technology',
    institution: 'Karnataka State Open University, Mysore',
    year: '2008',
  },
  {
    degree: 'Bachelor of Science, Information Technology',
    institution: 'Karnataka State Open University, Mysore',
    year: '2006',
  },
]

export default function Education() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-6">
            <span className="text-sm text-surface-500 font-mono tracking-wider">// Education</span>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid sm:grid-cols-2 gap-4 max-w-3xl"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-surface-200 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-surface-900">{edu.degree}</h3>
                  <p className="text-xs text-surface-600 mt-1">{edu.institution}</p>
                  <p className="text-xs text-surface-500 mt-0.5">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

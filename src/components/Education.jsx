import { motion } from 'framer-motion'
import { PiGraduationCapDuotone } from 'react-icons/pi'
import AnimatedIcon3D from './AnimatedIcon3D'

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
    <section className="relative py-12">
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
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid sm:grid-cols-2 gap-4 max-w-3xl"
          >
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3, boxShadow: '0 10px 40px -10px rgba(99,102,241,0.15)' }}
                className="flex items-start gap-4 p-5 rounded-xl border border-surface-200 bg-white group"
              >
                <AnimatedIcon3D color="#6366f1" size="sm" animation={i === 0 ? 'float' : 'bounce'} delay={i * 0.4}>
                  <PiGraduationCapDuotone className="w-full h-full" />
                </AnimatedIcon3D>
                <div>
                  <h3 className="text-sm font-bold text-surface-900 group-hover:text-primary-700 transition-colors">{edu.degree}</h3>
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

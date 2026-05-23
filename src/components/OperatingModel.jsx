import { motion } from 'framer-motion'
import { Target, BarChart3, Users, Zap, RefreshCw, MessageSquare } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const principles = [
  {
    icon: Target,
    title: 'Outcome-First Scoping',
    description: 'Every program starts with a measurable business outcome. I work backwards from the KPI to define scope, milestones, and success criteria.',
  },
  {
    icon: BarChart3,
    title: 'Weekly Cadence',
    description: 'Weekly exec updates, bi-weekly architecture reviews, sprint-level delivery tracking. No surprises — stakeholders always know where we stand.',
  },
  {
    icon: Users,
    title: 'Cross-Functional Alignment',
    description: 'I align engineering, product, finance, and operations around shared goals. Single-threaded ownership with clear RACI across teams.',
  },
  {
    icon: Zap,
    title: 'PoC Before Scale',
    description: 'Feasibility experiments and PoC validation before committing engineering resources. Fail fast, learn cheap, scale what works.',
  },
  {
    icon: RefreshCw,
    title: 'Automation-First Culture',
    description: 'If a human is doing it repeatedly, it should be automated. I build playbooks, guardrails, and self-service capabilities that compound.',
  },
  {
    icon: MessageSquare,
    title: 'Executive Translation',
    description: 'I translate engineering complexity into business language. VP and C-suite stakeholders get clarity, not jargon.',
  },
]

export default function OperatingModel() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-14">
            <span className="text-sm text-surface-500 font-mono tracking-wider">// How I Operate</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-tight max-w-2xl">
              My program management <span className="text-primary-400">operating model.</span>
            </h2>
            <p className="text-surface-400 mt-4 max-w-2xl">
              Consistent principles I apply across every program — whether it's a $5.3B capital initiative or a 2-week GenAI PoC.
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {principles.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl border border-surface-800/50 bg-surface-950/50 hover:border-primary-500/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <p.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-surface-400 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

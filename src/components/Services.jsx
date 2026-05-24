import { motion } from 'framer-motion'
import { Brain, Cloud, Users, Zap } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const services = [
  {
    icon: Brain,
    title: 'GenAI Program Rescue',
    description: 'Your AI initiative is stuck between PoC and production. I take over end-to-end — agentic workflows, RAG architecture, LLM selection — and ship it with measurable ROI.',
    outcome: 'Production AI generating revenue, not a stalled experiment.',
    timeline: '8-16 weeks',
    color: 'bg-violet-50 text-violet-600 border-violet-200',
    borderColor: '#7c3aed',
  },
  {
    icon: Cloud,
    title: 'Cloud FinOps Transformation',
    description: 'Your cloud bill grows faster than revenue. I audit, implement guardrails, rightsizing, RI optimization, and build the governance your CFO needs.',
    outcome: 'Millions in annual savings with executive visibility.',
    timeline: '3-6 weeks',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    borderColor: '#2563eb',
  },
  {
    icon: Users,
    title: 'TPM Org Design & Coaching',
    description: 'Your engineering org ships slower as it grows. I design the TPM function, hire leaders, and build the operating cadence that makes delivery predictable.',
    outcome: 'Self-sustaining TPM org that ships on time.',
    timeline: '3-6 months',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    borderColor: '#059669',
  },
  {
    icon: Zap,
    title: 'Fractional Technical Leadership',
    description: 'You need senior leadership but can\'t justify full-time. I embed part-time — architecture reviews, stakeholder alignment, delivery accountability.',
    outcome: 'Senior leadership without full-time overhead.',
    timeline: 'Ongoing retainer',
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    borderColor: '#d97706',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Why Me */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-20 max-w-3xl">
            <span className="text-sm text-surface-500 font-mono tracking-wider">01 // Why Hire Me</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-8 leading-tight text-surface-900">
              Most consultants give you a deck. <span className="text-primary-600">I give you a shipped product.</span>
            </h2>
            <div className="text-surface-600 leading-relaxed space-y-4">
              <p>
                I'm not a strategy consultant who disappears after the PowerPoint. I'm a builder who owns 
                delivery end-to-end — from feasibility experiment through production — with full 
                accountability for business outcomes.
              </p>
              <p>
                At Amazon, I governed a $162M AWS portfolio (saving $8M/year), shipped GenAI systems that 
                resolve 88% of tickets autonomously, and directed a $5.3B capital program. At Deloitte, I 
                built a 45-person engineering practice for 10+ Fortune 500 clients.
              </p>
              <p className="text-surface-900 font-medium">
                I bring that same intensity to every consulting engagement.
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-10">
            <span className="text-sm text-surface-500 font-mono tracking-wider">02 // Services</span>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid lg:grid-cols-2 gap-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-7 rounded-2xl border border-surface-200 bg-white hover:shadow-lg transition-all group border-l-4"
                style={{ borderLeftColor: service.borderColor }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${service.color}`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-surface-500 px-2.5 py-1 rounded-full bg-surface-100">
                    {service.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-2">{service.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed mb-5">{service.description}</p>
                <div className="pt-4 border-t border-surface-100">
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Outcome</span>
                  <p className="text-sm text-primary-700 mt-1 font-medium">{service.outcome}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* How It Works */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-16 p-8 rounded-2xl border border-surface-200 bg-white">
            <h3 className="text-lg font-bold text-surface-900 mb-6">How It Works</h3>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery Call', desc: '30 minutes. I listen, ask hard questions, and tell you honestly if I can help.' },
                { step: '02', title: 'Proposal', desc: 'Clear scope, deliverables, timeline, and fixed price. No surprises.' },
                { step: '03', title: 'Execute', desc: 'I embed with your team. Weekly updates. Full accountability. I ship.' },
                { step: '04', title: 'Handoff', desc: 'Documentation, knowledge transfer, and a team that sustains without me.' },
              ].map((s) => (
                <div key={s.step}>
                  <div className="text-2xl font-bold text-primary-500 mb-2">{s.step}</div>
                  <h4 className="text-sm font-semibold text-surface-900 mb-1">{s.title}</h4>
                  <p className="text-xs text-surface-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

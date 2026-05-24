import { motion } from 'framer-motion'
import { Brain, Cloud, Users, Zap } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const services = [
  {
    icon: Brain,
    title: 'GenAI Program Rescue',
    description: 'Your AI initiative is stuck between PoC and production. I take over end-to-end delivery — agentic workflow design, RAG architecture, LLM selection, and LLMOps — and ship it to production with measurable ROI.',
    outcome: 'Production AI system generating revenue, not a stalled experiment.',
    timeline: '8-16 weeks',
  },
  {
    icon: Cloud,
    title: 'Cloud FinOps Transformation',
    description: 'Your cloud bill is growing faster than your revenue. I audit your portfolio, implement automated guardrails, rightsizing, and RI optimization, and build the governance framework your CFO needs.',
    outcome: 'Millions in annual savings with executive-level visibility.',
    timeline: '3-6 weeks',
  },
  {
    icon: Users,
    title: 'TPM Org Design & Coaching',
    description: 'Your engineering org is shipping slower as it grows. I design the TPM function, hire the first leaders, establish delivery standards, and build the operating cadence that makes delivery predictable.',
    outcome: 'Self-sustaining TPM org that ships on time, every time.',
    timeline: '3-6 months',
  },
  {
    icon: Zap,
    title: 'Fractional Technical Leadership',
    description: 'You need a senior technical leader but can\'t justify a full-time hire yet. I embed with your team part-time — architecture reviews, stakeholder alignment, and delivery accountability at VP level.',
    outcome: 'Senior leadership without the full-time overhead.',
    timeline: 'Ongoing retainer',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-surface-900/20">
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
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-8 leading-tight">
              Most consultants give you a deck. <span className="text-primary-400">I give you a shipped product.</span>
            </h2>
            <div className="text-surface-400 leading-relaxed space-y-4">
              <p>
                I'm not a strategy consultant who disappears after the PowerPoint. I'm a builder who owns 
                delivery end-to-end — from feasibility experiment through production deployment — with full 
                accountability for business outcomes.
              </p>
              <p>
                At Amazon, I governed a $162M AWS portfolio (saving $8M/year), shipped GenAI systems that 
                resolve 88% of tickets autonomously, and directed a $5.3B capital program. At Deloitte, I 
                built a 45-person engineering practice and delivered for 10+ Fortune 500 clients.
              </p>
              <p className="text-white font-medium">
                I bring that same intensity to every consulting engagement — whether it's a 3-week audit 
                or a 6-month transformation.
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-10">
            <span className="text-sm text-surface-500 font-mono tracking-wider">02 // Services</span>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, borderColor: 'rgba(99, 102, 241, 0.3)', transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl border border-surface-800/60 bg-surface-950/50 hover:bg-surface-900/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="text-[11px] font-mono text-surface-500 px-2 py-1 rounded bg-surface-800/50">
                    {service.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed mb-5">{service.description}</p>
                <div className="pt-4 border-t border-surface-800/50">
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Outcome</span>
                  <p className="text-sm text-primary-300 mt-1 font-medium">{service.outcome}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* How to Engage */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-16 p-8 rounded-2xl border border-surface-800/60 bg-surface-900/30">
            <h3 className="text-lg font-bold text-white mb-6">How It Works</h3>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery Call', desc: '30 minutes. I listen to your problem, ask hard questions, and tell you honestly if I can help.' },
                { step: '02', title: 'Proposal', desc: 'Clear scope, deliverables, timeline, and fixed price. No surprises. No hourly billing games.' },
                { step: '03', title: 'Execute', desc: 'I embed with your team. Weekly updates. Full accountability. I ship, not advise.' },
                { step: '04', title: 'Handoff', desc: 'Documentation, knowledge transfer, and a team that can sustain what I built without me.' },
              ].map((s) => (
                <div key={s.step}>
                  <div className="text-2xl font-bold text-primary-400 mb-2">{s.step}</div>
                  <h4 className="text-sm font-semibold text-white mb-1">{s.title}</h4>
                  <p className="text-xs text-surface-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

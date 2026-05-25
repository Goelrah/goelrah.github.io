import { motion } from 'framer-motion'
import { PiBrainDuotone, PiCloudArrowUpDuotone, PiUsersFourDuotone, PiLightningDuotone } from 'react-icons/pi'
import AnimatedIcon3D from './AnimatedIcon3D'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const services = [
  {
    icon: PiBrainDuotone,
    title: 'GenAI Program Rescue',
    description: 'Your AI initiative is stuck between PoC and production. I take over end-to-end — agentic workflows, RAG architecture, LLM selection — and ship it with measurable ROI.',
    outcome: 'Production AI generating revenue, not a stalled experiment.',
    timeline: '8-16 weeks',
    color: '#7c3aed',
    animation: 'float',
  },
  {
    icon: PiCloudArrowUpDuotone,
    title: 'Cloud FinOps Transformation',
    description: 'Your cloud bill grows faster than revenue. I audit, implement guardrails, rightsizing, RI optimization, and build the governance your CFO needs.',
    outcome: 'Millions in annual savings with executive visibility.',
    timeline: '3-6 weeks',
    color: '#2563eb',
    animation: 'pulse',
  },
  {
    icon: PiUsersFourDuotone,
    title: 'TPM Org Design & Coaching',
    description: 'Your engineering org ships slower as it grows. I design the TPM function, hire leaders, and build the operating cadence that makes delivery predictable.',
    outcome: 'Self-sustaining TPM org that ships on time.',
    timeline: '3-6 months',
    color: '#059669',
    animation: 'bounce',
  },
  {
    icon: PiLightningDuotone,
    title: 'Fractional Technical Leadership',
    description: 'You need senior leadership but can\'t justify full-time. I embed part-time — architecture reviews, stakeholder alignment, delivery accountability.',
    outcome: 'Senior leadership without full-time overhead.',
    timeline: 'Ongoing retainer',
    color: '#d97706',
    animation: 'tilt',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-20">
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
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-7 rounded-2xl border border-surface-200 bg-white hover:shadow-lg transition-all group border-l-4"
                style={{ borderLeftColor: service.color }}
              >
                <div className="flex items-start justify-between mb-4">
                  <AnimatedIcon3D color={service.color} size="md" animation={service.animation} delay={idx * 0.3}>
                    <service.icon className="w-full h-full" />
                  </AnimatedIcon3D>
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
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-16 p-8 rounded-2xl border border-surface-200 bg-white overflow-hidden relative">
            {/* Subtle animated background */}
            <motion.div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
              animate={{ backgroundPosition: ['0px 0px', '24px 24px'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <h3 className="text-lg font-bold text-surface-900 mb-6 relative">How It Works</h3>
            <div className="grid sm:grid-cols-4 gap-6 relative">
              {[
                { step: '01', title: 'Discovery Call', desc: '30 minutes. I listen, ask hard questions, and tell you honestly if I can help.' },
                { step: '02', title: 'Proposal', desc: 'Clear scope, deliverables, timeline, and fixed price. No surprises.' },
                { step: '03', title: 'Execute', desc: 'I embed with your team. Weekly updates. Full accountability. I ship.' },
                { step: '04', title: 'Handoff', desc: 'Documentation, knowledge transfer, and a team that sustains without me.' },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <motion.div
                    className="text-2xl font-bold text-primary-500 mb-2"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {s.step}
                  </motion.div>
                  <h4 className="text-sm font-semibold text-surface-900 mb-1">{s.title}</h4>
                  <p className="text-xs text-surface-500">{s.desc}</p>
                  {/* Animated connector dot */}
                  {i < 3 && (
                    <motion.div
                      className="hidden sm:block absolute top-4 -right-3 w-1.5 h-1.5 rounded-full bg-primary-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

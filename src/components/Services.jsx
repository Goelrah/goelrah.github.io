import { motion } from 'framer-motion'
import { Brain, Cloud, Users } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const services = [
  {
    icon: Brain,
    title: 'AI Program Delivery',
    description: 'I take GenAI initiatives from PoC to production. Agentic workflow design, RAG architecture, LLM selection, and LLMOps — with full accountability for business outcomes at VP and C-suite level.',
    outcome: 'Production AI systems with measurable ROI, not stalled experiments.',
  },
  {
    icon: Cloud,
    title: 'Cloud Governance & FinOps',
    description: 'I build governance frameworks that make $100M+ cloud portfolios predictable. Automated guardrails, rightsizing, Reserved Instance optimization, and executive KPI reporting.',
    outcome: 'Millions in annual savings with VP-level visibility and control.',
  },
  {
    icon: Users,
    title: 'Engineering Leadership',
    description: 'I build and scale engineering organizations. Hiring, performance management, architecture reviews, delivery standards, and TPM capability building across distributed teams.',
    outcome: 'High-performing teams that ship predictably across global markets.',
  },
]

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Why Me */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-20">
            <span className="text-sm text-surface-500 font-mono tracking-wider">01 // Why Me?</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-8 leading-tight max-w-3xl">
              I turn complex, high-stakes technical programs into <span className="text-primary-400">measurable business outcomes</span> — at Amazon scale.
            </h2>
            <div className="text-surface-400 leading-relaxed max-w-3xl space-y-5">
              <p>
                With 20 years of experience at Amazon, I lead production GenAI delivery end-to-end — architecting 
                RAG pipelines that achieve 88% autonomous resolution, ML-driven procurement systems that save millions 
                annually, and multi-region observability platforms on AWS Bedrock. I've built and coached TPM 
                organizations delivering global capabilities across a $162M AWS portfolio.
              </p>
              <p>
                Before Amazon, I led 10+ Fortune 500 engagements at Deloitte Digital, from ML campaign automation 
                to branchless banking platforms. Every engagement focused on one thing: measurable business outcomes. 
                I translate engineering complexity into executive decisions and I'm proven across 15+ global markets.
              </p>
            </div>
          </motion.div>

          {/* What I Do */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-12">
            <span className="text-sm text-surface-500 font-mono tracking-wider">// What I Do</span>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, borderColor: 'rgba(99, 102, 241, 0.3)', transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl border border-surface-800/60 bg-surface-950/50 hover:bg-surface-900/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed mb-6">{service.description}</p>
                <div className="pt-4 border-t border-surface-800/50">
                  <span className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider">Outcome</span>
                  <p className="text-sm text-primary-300 mt-1 font-medium">{service.outcome}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Engagement Model */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-16 p-8 rounded-2xl border border-surface-800/60 bg-surface-900/30">
            <h3 className="text-lg font-bold text-white mb-6">How to Engage</h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-2">01</div>
                <h4 className="text-sm font-semibold text-white mb-1">Discovery Call</h4>
                <p className="text-xs text-surface-400">30-minute call to understand your challenge, constraints, and goals.</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-2">02</div>
                <h4 className="text-sm font-semibold text-white mb-1">Scope & Proposal</h4>
                <p className="text-xs text-surface-400">Clear deliverables, timeline, and engagement model — retainer, project-based, or fractional.</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-2">03</div>
                <h4 className="text-sm font-semibold text-white mb-1">Deliver & Measure</h4>
                <p className="text-xs text-surface-400">Execute with full accountability. Weekly updates. Measurable outcomes tied to business KPIs.</p>
              </div>
            </div>

            {/* Packaged Offerings */}
            <div className="pt-6 border-t border-surface-800/50">
              <h4 className="text-sm font-semibold text-white mb-4">Packaged Offerings</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-surface-800/50 bg-surface-950/50">
                  <h5 className="text-xs font-bold text-primary-400 mb-1">GenAI Readiness Assessment</h5>
                  <p className="text-[11px] text-surface-400 mb-2">2-week engagement</p>
                  <p className="text-[11px] text-surface-500">Deliverable: Architecture doc + Implementation roadmap + Vendor evaluation scorecard</p>
                </div>
                <div className="p-4 rounded-lg border border-surface-800/50 bg-surface-950/50">
                  <h5 className="text-xs font-bold text-primary-400 mb-1">Cloud FinOps Audit</h5>
                  <p className="text-[11px] text-surface-400 mb-2">3-week engagement</p>
                  <p className="text-[11px] text-surface-500">Deliverable: Cost optimization report + Guardrail framework + KPI dashboard design</p>
                </div>
                <div className="p-4 rounded-lg border border-surface-800/50 bg-surface-950/50">
                  <h5 className="text-xs font-bold text-primary-400 mb-1">TPM Org Design</h5>
                  <p className="text-[11px] text-surface-400 mb-2">3-month engagement</p>
                  <p className="text-[11px] text-surface-500">Deliverable: Org structure + Hiring plan + Delivery standards + Playbooks</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-surface-500 mt-6 pt-4 border-t border-surface-800/50">
              Available for advisory retainers, fractional leadership, and project-based engagements. Contact for pricing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const caseStudies = [
  {
    category: 'GENAI DELIVERY',
    title: 'Production AI That Resolves 88% of Tickets Autonomously',
    color: '#7c3aed',
    challenge: 'Engineering teams overwhelmed by thousands of repetitive support tickets daily. Manual resolution consuming senior engineer time.',
    approach: 'Designed and shipped agentic RAG system on AWS Bedrock. LLM selection, prompt engineering, and LLMOps pipeline from PoC through production.',
    outcome: '88% autonomous resolution rate. $2.3M annual ROI. 25% reduction in manual effort across the organization.',
    tech: ['AWS Bedrock', 'RAG', 'OpenSearch', 'Lambda', 'LLMOps'],
  },
  {
    category: 'CLOUD FINOPS',
    title: '$8M Annual Savings on a $162M AWS Portfolio',
    color: '#2563eb',
    challenge: '$162M cloud portfolio with no centralized governance. Teams overspending with no visibility or accountability.',
    approach: 'Built automated guardrails, rightsizing automation, and RI optimization. Designed FinOps governance framework and executive KPI dashboards.',
    outcome: '$8M annual cloud cost savings. VP-level governance framework adopted org-wide. 20+ automated guardrails.',
    tech: ['AWS', 'Terraform', 'FinOps', 'Cost Explorer', 'CloudFormation'],
  },
  {
    category: 'CAPITAL PROGRAM',
    title: '$5.3B Program Delivered — $50M/Year Cost Avoidance',
    color: '#d97706',
    challenge: '$5.3B capital planning program spanning 4 cross-functional teams with no unified governance or KPI tracking.',
    approach: 'Established governance cadences, executive reporting dashboards, and cross-functional alignment across engineering, finance, and operations.',
    outcome: '$50M/year in cost avoidance. Zero missed deadlines. C-suite visibility into program health.',
    tech: ['Program Governance', 'KPI Dashboards', 'Cross-Functional Delivery'],
  },
  {
    category: 'PLATFORM DELIVERY',
    title: 'Customer Data Platform — 2.5x Marketing ROI',
    color: '#059669',
    challenge: 'Fortune 500 retail client with manual campaign management, no unified customer data, and declining marketing effectiveness.',
    approach: 'Designed full-stack CDP on Snowflake with LLM-driven orchestration. End-to-end data pipelines, behavioral segmentation, and automated campaign rollout.',
    outcome: '2.5x marketing ROI. 22% e-commerce sales increase. 12% churn reduction. Deployed at scale.',
    tech: ['Snowflake', 'LLM Orchestration', 'Adobe Magento', 'Data Science'],
  },
  {
    category: 'ENGINEERING ORG',
    title: '45-Person Engineering Practice Built From Scratch',
    color: '#dc2626',
    challenge: 'Deloitte needed a scalable engineering capability for Fortune 500 client delivery. No existing team or standards.',
    approach: 'Hired, trained, and scaled from 0 to 45 engineers. Established delivery standards, career frameworks, and client engagement models.',
    outcome: 'Best Performing Manager (2 consecutive years). 10+ Fortune 500 clients delivered. Self-sustaining practice.',
    tech: ['Team Building', 'Delivery Standards', 'Client Management'],
  },
  {
    category: 'OBSERVABILITY',
    title: 'Multi-Region Platform Across 15+ Global Markets',
    color: '#0891b2',
    challenge: 'No unified observability across 15+ international markets. 45-minute detection time, 3-hour resolution.',
    approach: 'Led cross-org delivery of EagleEye platform (Python, Lambda, Prometheus, Datadog). Drove adoption across distributed teams.',
    outcome: '20% throughput improvement. Operational readiness standards adopted globally.',
    tech: ['Python', 'Lambda', 'Prometheus', 'Datadog', 'Multi-Region'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-14">
            <span className="text-sm text-surface-500 font-mono tracking-wider">05 // Case Studies</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-tight text-surface-900">
              Real problems. <span className="text-primary-600">Shipped solutions.</span>
            </h2>
            <p className="text-surface-600 mt-3 max-w-2xl">
              Every engagement below was delivered end-to-end with full ownership — the same way I deliver for consulting clients today.
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-7 rounded-2xl border border-surface-200 bg-white hover:shadow-lg transition-all group border-l-4"
                style={{ borderLeftColor: study.color }}
              >
                <span className="text-[11px] font-mono tracking-wider uppercase font-semibold" style={{ color: study.color }}>
                  {study.category}
                </span>
                <h3 className="text-base font-bold text-surface-900 mt-2 mb-5 group-hover:text-primary-700 transition-colors">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-5">
                  <div>
                    <h4 className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider mb-1">The Problem</h4>
                    <p className="text-sm text-surface-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider mb-1">My Approach</h4>
                    <p className="text-sm text-surface-600 leading-relaxed">{study.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider mb-1">The Result</h4>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: study.color }}>{study.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-100">
                  {study.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-surface-100 text-surface-600 border border-surface-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

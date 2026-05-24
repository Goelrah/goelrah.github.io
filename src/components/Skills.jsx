import { motion } from 'framer-motion'
import { Brain, Cloud, BarChart3, Shield, Code, Users } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const expertAreas = [
  {
    icon: Brain,
    title: 'AI & GenAI Strategy',
    color: '#7c3aed',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    description: 'From LLM selection to production deployment. I design and ship agentic systems that replace manual operations at scale.',
    skills: ['AWS Bedrock Agents', 'RAG Architecture', 'LLMOps', 'Agentic Workflows', 'LangChain', 'Prompt Engineering', 'Multi-Agent Orchestration', 'LLM Evaluation'],
  },
  {
    icon: Cloud,
    title: 'Cloud & FinOps',
    color: '#2563eb',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    description: 'I make $100M+ cloud portfolios predictable. Automated guardrails, governance frameworks, and executive-level cost visibility.',
    skills: ['AWS (Solutions Architect)', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Serverless', 'FinOps Governance', 'Cost Optimization'],
  },
  {
    icon: Users,
    title: 'Program & Delivery Leadership',
    color: '#059669',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    description: 'I build TPM orgs, establish delivery cadences, and align cross-functional teams around shared outcomes at VP/C-suite level.',
    skills: ['Agile / SAFe', 'OKR Planning', 'Stakeholder Management', 'Executive Communication', 'PoC Experimentation', 'Roadmap Development', 'Risk Management'],
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    color: '#0891b2',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    description: 'End-to-end data platforms — from ingestion and modeling to ML-driven insights and automated decision systems.',
    skills: ['Snowflake', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Apache Spark', 'BigQuery', 'ETL Pipelines', 'Data Governance'],
  },
  {
    icon: Code,
    title: 'Engineering & Architecture',
    color: '#dc2626',
    bg: 'bg-red-50',
    border: 'border-red-200',
    description: 'I design systems that scale. Microservices, event-driven architecture, and production-grade platforms across 15+ global markets.',
    skills: ['Java / Spring', 'Python', 'Node.js', 'ReactJS', 'Microservices', 'Event-Driven', 'REST APIs', 'CI/CD', 'GitHub Actions', 'ArgoCD'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    color: '#7c3aed',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    description: 'GDPR, Privacy by Design, and Zero-Trust — delivered 2 months ahead of deadline across all Tier 1 services at Amazon.',
    skills: ['GDPR', 'Privacy by Design', 'SOC2', 'OAuth 2.0', 'Zero-Trust', 'IAM Frameworks', 'Data Governance', 'OWASP'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-surface-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-14 max-w-2xl">
            <span className="text-sm text-surface-500 font-mono tracking-wider">// Areas of Expertise</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-tight text-surface-900">
              Deep expertise where it <span className="text-primary-600">matters most.</span>
            </h2>
            <p className="text-surface-600 mt-3">
              Not a generalist. I go deep in the areas that drive the most business value — AI delivery, 
              cloud economics, and engineering leadership at scale.
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {expertAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-surface-200 bg-white hover:shadow-lg hover:border-primary-200 transition-all group"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${area.bg} border ${area.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-5 h-5" style={{ color: area.color }} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-surface-900 mb-2">{area.title}</h3>

                {/* Description */}
                <p className="text-sm text-surface-600 leading-relaxed mb-4">{area.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface-50 text-surface-600 border border-surface-200 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                    >
                      {skill}
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

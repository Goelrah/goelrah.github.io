import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Brain, Cpu, Monitor, Bot, Cloud, CreditCard, Truck, BarChart3, Shield, Layers, X, TrendingUp } from 'lucide-react'

const filters = ['All', 'Enterprise AI', 'Cloud & Platform', 'Open Source']

const projects = [
  {
    id: 'askgenie',
    icon: Bot,
    title: 'AskGenie',
    tagline: 'AI Ticket Resolution',
    category: 'Enterprise AI',
    color: '#a855f7',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Production GenAI system on AWS Bedrock Agents replacing manual support workflows with autonomous resolution using RAG architecture.',
    fullDescription: 'Drove end-to-end delivery of AskGenie, a human+machine intelligence program on AWS Bedrock Agents. The system replaced manual support review workflows with autonomous resolution, achieving 88% autonomous resolution rate and significantly reducing human escalation load at scale. Applied LLM selection, RAG architecture, prompt engineering, agentic workflow design, and LLMOps throughout delivery. Drove feasibility experiments and PoC validation before full-scale engineering handoff.',
    tech: ['AWS Bedrock', 'RAG', 'OpenSearch', 'Lambda', 'LLMOps', 'Prompt Engineering', 'Agentic Workflows'],
    metrics: [
      { label: 'Resolution Rate', value: '88%' },
      { label: 'Annual ROI', value: '$2.3M' },
      { label: 'Effort Reduction', value: '25%' },
    ],
    impact: 'Significantly reduced human escalation load at scale, freeing engineering teams to focus on high-value work instead of repetitive ticket resolution.',
    role: 'Owned end-to-end delivery of AI-first and platform programs. Served as single point of accountability for VP and C-suite programs, driving goal alignment across engineering, finance, and operations.',
  },
  {
    id: 'procurement-advisor',
    icon: BarChart3,
    title: 'Procurement Advisor',
    tagline: 'Inventory AI Automation',
    category: 'Enterprise AI',
    color: '#10b981',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Automated inventory management across 1,200+ global facilities on $250M+ spend using agentic workflows and LLM-driven procurement decisions.',
    fullDescription: 'Procurement Advisor automated inventory management across 1,200+ global facilities on $250M+ spend, generating $2.3M annual ROI and 25% reduction in manual effort. The system uses agentic workflow design with LLM-driven procurement decisions, applying LLM selection and evaluation to optimize cost and accuracy. Drove feasibility experiments and PoC validation before full-scale engineering handoff.',
    tech: ['AWS Bedrock', 'Agentic Workflows', 'DynamoDB', 'Lambda', 'LLM Selection', 'PoC Validation'],
    metrics: [
      { label: 'Facilities', value: '1,200+' },
      { label: 'Spend Managed', value: '$250M+' },
      { label: 'Annual ROI', value: '$2.3M' },
    ],
    impact: 'Transformed procurement operations from manual approval workflows to AI-driven autonomous decisions across global facilities.',
    role: 'Owned end-to-end delivery — drove feasibility experiments and PoC validation before full-scale engineering handoff. Applied LLM selection, RAG architecture, prompt engineering, agentic workflow design, and LLMOps throughout delivery.',
  },
  {
    id: 'cloud-finops',
    icon: Cloud,
    title: 'Cloud FinOps',
    tagline: '$162M AWS Portfolio Governance',
    category: 'Cloud & Platform',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Automated guardrails, rightsizing, and Reserved Instance optimization. Defined cloud spend KPIs and FinOps governance framework for VP-level stakeholders.',
    fullDescription: 'Implemented automated guardrails, rightsizing, and Reserved Instance optimization across $162M AWS portfolio driving $8M annual cloud cost savings. Defined and owned cloud spend KPIs, architectural investment decisions, and FinOps governance framework used by VP-level stakeholders. Built executive reporting dashboards and mobilized cross-functional teams to deliver high-impact cost optimization outcomes.',
    tech: ['AWS', 'Terraform', 'FinOps', 'Cost Explorer', 'CloudFormation', 'Reserved Instances', 'Rightsizing'],
    metrics: [
      { label: 'Annual Savings', value: '$8M' },
      { label: 'Portfolio', value: '$162M' },
      { label: 'Guardrails', value: '20+' },
    ],
    impact: 'Established a repeatable FinOps governance framework adopted by VP-level stakeholders across the organization.',
    role: 'Defined and owned cloud spend KPIs, architectural investment decisions, and FinOps governance framework used by VP-level stakeholders. Built executive reporting dashboards.',
  },
  {
    id: 'capital-program',
    icon: CreditCard,
    title: 'Capital Planning',
    tagline: '$5.3B Program Delivery',
    category: 'Cloud & Platform',
    color: '#f59e0b',
    gradient: 'from-orange-500 to-yellow-500',
    description: 'Directed $5.3B Capital Planning program across 4 cross-functional teams, securing $50M/year in cost avoidance through governance cadences and executive KPI reporting.',
    fullDescription: 'Directed $5.3B Capital Planning program across 4 cross-functional teams, securing $50M/year in cost avoidance through governance cadences and executive KPI reporting. Served as single point of accountability for VP and C-suite programs, driving goal alignment across engineering, finance, and operations. Built executive reporting dashboards and mobilized cross-functional teams.',
    tech: ['Program Governance', 'KPI Dashboards', 'Executive Reporting', 'FinOps', 'Cross-Functional Delivery'],
    metrics: [
      { label: 'Program Size', value: '$5.3B' },
      { label: 'Cost Avoidance', value: '$50M/yr' },
      { label: 'Teams', value: '4' },
    ],
    impact: 'Secured $50M/year in cost avoidance through structured governance cadences and data-driven executive reporting.',
    role: 'Directed program across 4 cross-functional teams. Served as single point of accountability for VP and C-suite programs, driving goal alignment across engineering, finance, and operations.',
  },
  {
    id: 'eagleeye',
    icon: Truck,
    title: 'EagleEye',
    tagline: 'Multi-Region Observability',
    category: 'Cloud & Platform',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Cross-org delivery of multi-region observability platform across 15+ global markets. Scalable technical capability improving platform throughput by 20%.',
    fullDescription: 'Led cross-org delivery of EagleEye multi-region platform (Python, Lambda, Prometheus, Datadog) across 15+ global markets, delivering a scalable technical capability that improved platform throughput by 20%. Drove adoption across distributed engineering teams, managed stakeholder alignment across geographies, and owned operational readiness standards for the rollout.',
    tech: ['Python', 'Lambda', 'Prometheus', 'Datadog', 'Multi-Region', 'EKS', 'Operational Readiness'],
    metrics: [
      { label: 'Throughput', value: '+20%' },
      { label: 'Markets', value: '15+' },
      { label: 'Stack', value: 'Full SRE' },
    ],
    impact: 'Delivered a scalable observability capability adopted across 15+ international markets with unified operational standards.',
    role: 'Led cross-org delivery across 15+ global markets. Drove adoption across distributed engineering teams, managed stakeholder alignment across geographies, and owned operational readiness standards for the rollout.',
  },
  {
    id: 'gdpr',
    icon: Shield,
    title: 'GDPR Compliance',
    tagline: 'Global Regulatory Rollout',
    category: 'Cloud & Platform',
    color: '#ef4444',
    gradient: 'from-red-500 to-orange-500',
    description: 'Delivered global GDPR compliance across all Tier 1 and Tier 2 services 2 months ahead of deadline. Secured org-wide Privacy by Design adoption.',
    fullDescription: 'Delivered global GDPR compliance across all Tier 1 and Tier 2 services 2 months ahead of deadline. Secured org-wide adoption of Privacy by Design across Amazon\'s global engineering surface. Coordinated across multiple engineering teams to implement data governance standards and ensure regulatory readiness.',
    tech: ['Privacy by Design', 'GDPR', 'Data Governance', 'Compliance', 'IAM', 'Encryption'],
    metrics: [
      { label: 'Delivery', value: '2mo early' },
      { label: 'Coverage', value: 'All Tiers' },
      { label: 'Adoption', value: 'Org-wide' },
    ],
    impact: 'Established Privacy by Design as an org-wide engineering standard, ensuring regulatory compliance at scale.',
    role: 'Delivered global GDPR compliance across all Tier 1 and Tier 2 services. Secured org-wide adoption of Privacy by Design across Amazon\'s global engineering surface.',
  },
  {
    id: 'hux',
    icon: Layers,
    title: 'HUX Platform',
    tagline: 'Customer Data Platform + CX',
    category: 'Enterprise AI',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-blue-500',
    description: 'Full-stack CDP on Snowflake with LLM-driven orchestration automating campaign management and personalized offer rollout via Adobe Magento for e-commerce execution.',
    fullDescription: 'Designed and delivered HUX, a full-stack Customer Data Platform and CX orchestration solution built on Snowflake, integrating end-to-end data pipelines covering ingestion, metadata formation, PII/PHI filtering, cleansing, modeling, and behavioral segmentation. Applied data science models to bucketize users by propensity and behavior, then used Snowflake-hosted data as context in LLM-driven orchestration to automate campaign management and personalized offer rollout via Adobe Magento for e-commerce execution. Delivered 22% increase in e-commerce sales, 2.5x marketing ROI, 30% targeting precision gain, and 12% churn reduction.',
    tech: ['Snowflake', 'LLM Orchestration', 'Adobe Magento', 'Data Science', 'Segmentation', 'PII Filtering', 'ETL'],
    metrics: [
      { label: 'Marketing ROI', value: '2.5x' },
      { label: 'Sales Lift', value: '+22%' },
      { label: 'Churn Cut', value: '12%' },
    ],
    impact: 'Transformed marketing operations from manual campaign management to AI-driven personalization at Fortune 500 scale.',
    role: 'Built and led engineering teams across Fortune 500 client engagements. Partnered directly with CTO and C-suite stakeholders to define technology strategy, manage program budgets, and deliver measurable outcomes.',
  },
  {
    id: 'llm-eval-compass',
    icon: Brain,
    title: 'LLM Eval Compass',
    tagline: 'LLM Evaluation Framework',
    category: 'Open Source',
    color: '#d946ef',
    gradient: 'from-fuchsia-500 to-pink-500',
    description: 'Production-grade framework for evaluating LLMs across quality, cost, latency, safety, and compliance. CI/CD eval gates, RAGAS integration, and weighted scorecards.',
    fullDescription: 'A production-grade, reusable framework for evaluating, comparing, and selecting Large Language Models across quality, cost, latency, safety, and domain-specific criteria. Built for teams who need a structured, repeatable process for LLM evaluation — not just a one-time benchmark comparison. Includes CI/CD eval gates that block merges if quality drops, production monitoring with alerting, RAGAS integration for RAG evaluation, and weighted scorecards for structured decision documentation.',
    tech: ['Python', 'AWS Bedrock', 'RAGAS', 'MLflow', 'DeepEval', 'LangSmith', 'Promptfoo'],
    metrics: [
      { label: 'Dimensions', value: '6' },
      { label: 'Models', value: '10+' },
      { label: 'Integrations', value: '7' },
    ],
    impact: 'Provides a structured, repeatable process for LLM evaluation that documents every decision for future reference.',
    role: 'Creator and maintainer — architecture design, implementation, and documentation.',
    repoUrl: 'https://github.com/rahgoel2510/llm-eval-compass',
  },
  {
    id: 'n8n-job-hunter',
    icon: Cpu,
    title: 'n8n Job Hunter',
    tagline: 'AI Job Hunting Automation',
    category: 'Open Source',
    color: '#22c55e',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Automated pipeline scraping Indeed and LinkedIn every 12 hours, scoring role fitment via Claude Haiku, and emailing HTML digests of matching roles.',
    fullDescription: 'Automated job hunting pipeline for Staff/Senior TPM roles. Scrapes Indeed and LinkedIn every 12 hours, fetches full job descriptions, scores fitment against a candidate profile using Claude Haiku (0-100 score), filters for matches above 72% threshold, deduplicates already-seen jobs, builds an HTML digest table, and emails via SMTP. Runs on Docker with resource-capped containers (1 CPU, 1GB RAM).',
    tech: ['Python', 'n8n', 'Docker', 'Claude Haiku', 'SMTP', 'Shell', 'Gemini Flash'],
    metrics: [
      { label: 'Cycle', value: '12hr' },
      { label: 'Scoring', value: 'AI' },
      { label: 'Delivery', value: 'Email' },
    ],
    impact: 'Eliminates manual job searching by automating discovery, evaluation, and notification in a single pipeline.',
    role: 'Creator — end-to-end design, implementation, and deployment.',
    repoUrl: 'https://github.com/rahgoel2510/n8n-job-hunter',
  },
  {
    id: 'ai-architect-portfolio',
    icon: Monitor,
    title: 'AI Architect System',
    tagline: 'RAG + MLOps Notebooks',
    category: 'Open Source',
    color: '#0ea5e9',
    gradient: 'from-sky-500 to-cyan-500',
    description: 'End-to-end enterprise AI: RAG with LangChain, vector DBs, MLOps with MLflow, serverless deployment, observability, GDPR compliance, and agentic systems.',
    fullDescription: 'A comprehensive project demonstrating Senior AI Architect skills: building a Retrieval-Augmented Generation (RAG) system deployed on the cloud with monitoring, compliance, and optimization. Covers 10 modules: LLM evaluation, model selection, vector databases (Pinecone, FAISS, Weaviate), RAG pipeline with LangChain, MLOps with MLflow and DVC, cloud deployment on AWS Lambda, observability with Prometheus and OpenTelemetry, GDPR compliance with Presidio, prompt engineering, and autonomous multi-step agents.',
    tech: ['Jupyter', 'LangChain', 'Pinecone', 'FAISS', 'MLflow', 'AWS Lambda', 'Prometheus', 'OpenTelemetry'],
    metrics: [
      { label: 'Notebooks', value: '10' },
      { label: 'Pipeline', value: 'E2E' },
      { label: 'Deploy', value: 'AWS' },
    ],
    impact: 'Demonstrates all Senior AI Architect competencies in a single deployable project with live Colab notebooks.',
    role: 'Creator — architecture, implementation, and documentation.',
    repoUrl: 'https://github.com/rahgoel2510/ai-architect-portfolio',
  },
]

// Modal overlay backdrop
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Modal content
const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-surface-700/50 bg-surface-900 shadow-2xl"
      >
        {/* Top accent */}
        <div
          className="h-1.5 w-full rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}60)` }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-800 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}88)` }}
            >
              <project.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm font-medium" style={{ color: project.color }}>{project.tagline}</p>
              <span className="inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full bg-surface-800 text-surface-400">
                {project.category}
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-surface-800/60 border border-surface-700/40">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-[11px] text-surface-400 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Full Description */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-sm text-surface-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Role */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-2">My Role</h4>
            <p className="text-sm text-surface-300 leading-relaxed">{project.role}</p>
          </div>

          {/* Impact */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-2">Business Impact</h4>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-green-300">{project.impact}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{
                    color: project.color,
                    backgroundColor: `${project.color}12`,
                    borderColor: `${project.color}30`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub link for open source */}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-800 text-surface-300 hover:text-white hover:bg-surface-700 transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="tag mb-4">Projects & Impact</span>
          <h2 className="section-title text-white">
            Production Systems & <span className="gradient-text">Open Source</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Enterprise AI systems delivering millions in ROI alongside open-source tools 
            for the GenAI community.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-surface-800/80 text-surface-300 hover:bg-surface-700 hover:text-white border border-surface-700'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <span className="ml-2 text-xs opacity-80">
                  ({filtered.length})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(project)}
                className="group relative glass-card overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Top gradient accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }}
                />

                <div className="p-5 flex flex-col flex-grow">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
                    >
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white group-hover:text-primary-300 transition-colors">
                          {project.title}
                        </h3>
                        {project.repoUrl && (
                          <Github className="w-4 h-4 text-surface-500" />
                        )}
                      </div>
                      <p className="text-xs font-medium mt-0.5" style={{ color: project.color }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-surface-300 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg bg-surface-800/50">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-sm font-bold text-white">{metric.value}</div>
                        <div className="text-[10px] text-surface-400 uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-surface-700/40">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors"
                        style={{
                          color: project.color,
                          backgroundColor: `${project.color}12`,
                          borderColor: `${project.color}30`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface-800 text-surface-400">
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Click hint */}
                  <button className="mt-3 w-full py-2 text-xs font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-lg hover:bg-primary-500/20 transition-colors">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/rahgoel2510"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github className="w-4 h-4" />
            View All Repositories
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

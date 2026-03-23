import { ArrowRight, Bot, Cloud, CreditCard, Shield, Truck, BarChart3 } from 'lucide-react'

const caseStudies = [
  {
    id: 'askgenie',
    icon: Bot,
    title: 'AskGenie: RAG-Based Ticket Automation',
    subtitle: '4,500 tickets/day auto-resolved • $2.3M ROI',
    category: 'GenAI / Automation',
    color: 'from-purple-500 to-pink-500',
    problem: 'SRE and Support teams were overwhelmed with repetitive tickets, spending 40% of time on issues that could be automated.',
    approach: 'Built RAG-based automation using AWS Bedrock with 88% confidence threshold. Leveraged Kiro CLI to accelerate development cycles.',
    results: [
      '4,500 tickets/day resolved without engineer intervention',
      '25% reduction in manual effort',
      '$2.3M annual ROI',
      '88% confidence threshold ensures quality',
    ],
    tech: ['AWS Bedrock', 'RAG Architecture', 'LangChain', 'Kiro CLI'],
  },
  {
    id: 'ada',
    icon: BarChart3,
    title: 'Ada: AI-Powered Procurement',
    subtitle: '1,200+ facilities • 3,500+ managers • Auto-approval',
    category: 'AI / Procurement',
    color: 'from-green-500 to-emerald-500',
    problem: 'Procurement approvals were bottlenecked by manual manager sign-offs, even for routine maintenance orders.',
    approach: 'Scaled AI procurement system with intelligent thresholds—orders under $10K auto-approved by AI, above $10K routed for human approval.',
    results: [
      '1,200+ global facilities served',
      '3,500+ managers using the system',
      'Orders under $10K auto-approved',
      'Eliminated manual overhead for routine procurement',
    ],
    tech: ['Machine Learning', 'Threshold Optimization', 'Workflow Automation'],
  },
  {
    id: 'cloud-finops',
    icon: Cloud,
    title: 'Cloud FinOps: $165M Portfolio Governance',
    subtitle: '$24M savings over 2 years • 85% discount rate',
    category: 'Cloud / FinOps',
    color: 'from-blue-500 to-cyan-500',
    problem: '$165M AWS portfolio with 85+ engineering teams lacked centralized cost governance and automated guardrails.',
    approach: 'Implemented 20+ automated cost guardrails, audited sub-org AWS accounts, and negotiated 85% discounted rate.',
    results: [
      '$165M portfolio at 85% discounted rate',
      '$12M/year savings for 2 consecutive years',
      '$24M total cost savings',
      '20+ automated guardrails deployed',
    ],
    tech: ['AWS', 'Terraform', 'CloudFormation', 'FinOps'],
  },
  {
    id: 'naazir',
    icon: CreditCard,
    title: 'Naazir: $5.3B Payment Modernization',
    subtitle: 'Global Engineering & Security Service',
    category: 'Payments / Program',
    color: 'from-orange-500 to-yellow-500',
    problem: 'Legacy payment infrastructure needed modernization to support global scale and security requirements.',
    approach: 'Principal Program Lead with full roadmap ownership across parallel delivery streams. Executive stakeholder management across C-suite, engineering, and finance.',
    results: [
      '$5.3B program charter',
      'Global Engineering and Security Service',
      'C-suite executive stakeholder management',
      'Parallel delivery streams coordinated',
    ],
    tech: ['Payment Rails', 'Security', 'Program Management'],
  },
  {
    id: 'safedrive',
    icon: Shield,
    title: 'SafeDrive: Real-Time Safety Monitoring',
    subtitle: '24% incident reduction • 18% delivery improvement',
    category: 'IoT / Safety',
    color: 'from-red-500 to-orange-500',
    problem: 'Delivery partner safety incidents were impacting both human welfare and delivery reliability.',
    approach: 'Built real-time safety monitoring system that optimizes routes using live risk data.',
    results: [
      '24% reduction in serious incidents',
      '18% improvement in on-time delivery',
      'Real-time route optimization',
      'Live risk data integration',
    ],
    tech: ['IoT', 'Real-time Analytics', 'Route Optimization'],
  },
  {
    id: 'eagleeye',
    icon: Truck,
    title: 'EagleEye: Global Operations Tracking',
    subtitle: '2.5M+ data points/day • 15+ markets',
    category: 'Observability / Scale',
    color: 'from-indigo-500 to-purple-500',
    problem: 'Lack of unified visibility across international operations was limiting throughput optimization.',
    approach: 'Deployed comprehensive tracking system with Prometheus and DataDog observability integration.',
    results: [
      '2.5M+ data points tracked daily',
      '15+ international markets covered',
      '20% improvement in operational throughput',
      'Unified observability dashboard',
    ],
    tech: ['Prometheus', 'DataDog', 'Real-time Tracking'],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="tag mb-4">Case Studies</span>
          <h2 className="section-title text-white">
            AI & Cloud Programs with <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real problems, real solutions, real outcomes. Each case study represents a significant 
            program where AI and automation delivered measurable business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0`}>
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{study.title}</h3>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-primary-400 font-semibold text-sm mb-4">{study.subtitle}</p>

              {/* Problem */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">Problem</h4>
                <p className="text-sm text-surface-300">{study.problem}</p>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">Results</h4>
                <ul className="space-y-1">
                  {study.results.slice(0, 3).map((result, i) => (
                    <li key={i} className="text-sm text-surface-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-surface-700/50">
                {study.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-surface-800 rounded text-surface-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
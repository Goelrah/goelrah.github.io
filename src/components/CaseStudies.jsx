import { Bot, Cloud, CreditCard, Shield, Truck, BarChart3, Cpu, Smartphone, Factory, Layers } from 'lucide-react'

const caseStudies = [
  {
    id: 'askgenie',
    icon: Bot,
    title: 'AskGenie — AI Ticket Resolution',
    subtitle: '4,500 tickets/day • $2.3M ROI • 88% confidence',
    category: 'GenAI / RAG / Automation',
    color: 'from-purple-500 to-pink-500',
    problem: 'Engineers spent hours on repetitive tickets — password resets, service restarts, config errors. 6,000 tickets/day overwhelming the team.',
    results: [
      '4,500 tickets/day auto-resolved',
      '25% reduction in manual effort',
      '$2.3M annual ROI',
    ],
    tech: ['AWS Bedrock', 'RAG', 'OpenSearch', 'Lambda', 'LLM', 'NLP'],
  },
  {
    id: 'ada',
    icon: BarChart3,
    title: 'Ada — Procurement AI Auto-Approval',
    subtitle: '1,200+ facilities • $10.5M/year savings • 92% auto-approved',
    category: 'ML / XGBoost / Fraud Detection',
    color: 'from-green-500 to-emerald-500',
    problem: '3,500 managers wasted 1-2 hours/day approving routine $50 orders. Annual cost: $14M.',
    results: [
      '92% of orders auto-approved',
      '$10.5M/year cost savings',
      '300ms approval latency (was 15 min)',
    ],
    tech: ['XGBoost', 'SageMaker', 'StepFunctions', 'DynamoDB', 'Fraud Detection'],
  },
  {
    id: 'mcp-pmo',
    icon: Layers,
    title: 'MCP PMO — AI Project Prioritization',
    subtitle: 'RICE Algorithm • 75% time reduction • $192K savings',
    category: 'MCP / GenAI / Portfolio Management',
    color: 'from-indigo-500 to-blue-500',
    problem: '200 PMs spent 4 hours each ranking 500 projects. Decisions driven by politics, not data.',
    results: [
      '75% reduction in scoring time',
      'AI suggestions accepted 72%',
      '$192K annual savings',
    ],
    tech: ['MCP', 'AWS Bedrock', 'RICE Algorithm', 'Prompt Engineering', 'Lambda'],
  },
  {
    id: 'cloud-finops',
    icon: Cloud,
    title: 'Cloud FinOps — $165M Portfolio',
    subtitle: '$24M savings • 85% discount • 20+ guardrails',
    category: 'AWS / Terraform / Cost Optimization',
    color: 'from-blue-500 to-cyan-500',
    problem: '$165M AWS portfolio with 85+ teams lacked centralized governance.',
    results: [
      '$165M at 85% discounted rate',
      '$24M total savings (2 years)',
      '20+ automated guardrails',
    ],
    tech: ['AWS', 'Terraform', 'CloudFormation', 'FinOps', 'Cost Explorer'],
  },
  {
    id: 'naazir',
    icon: CreditCard,
    title: 'Naazir — $5.3B Payment Modernization',
    subtitle: '99.995% uptime • 18-month delivery • Zero incidents',
    category: 'Microservices / Saga / FinTech',
    color: 'from-orange-500 to-yellow-500',
    problem: '15-year-old monolith: 6-9 months to add payment methods, 4 hours downtime/year.',
    results: [
      '99.995% availability',
      'New methods in 3 weeks (was 6-9 months)',
      'Zero customer incidents during migration',
    ],
    tech: ['Microservices', 'Saga Pattern', 'ECS Fargate', 'Aurora', 'PCI-DSS'],
  },
  {
    id: 'safedrive',
    icon: Shield,
    title: 'SafeDrive — Real-Time Safety',
    subtitle: '24% incident reduction • 10K events/sec • 1.5s latency',
    category: 'Stream Processing / IoT / ML',
    color: 'from-red-500 to-orange-500',
    problem: '5,600 accidents, 3,900 dog assaults, 3,300 customer assaults across 47,000 drivers.',
    results: [
      '24% reduction in serious incidents',
      '18% improvement in on-time delivery',
      '1.5-second alert latency',
    ],
    tech: ['Apache Flink', 'Kinesis', 'IoT', 'Real-time ML', 'WebSocket'],
  },
  {
    id: 'procurement-advisor',
    icon: Cpu,
    title: 'Procurement Advisor — IoT Smart Ordering',
    subtitle: '78K sensors • $7.5M savings • 40% fewer stock-outs',
    category: 'IoT / Amazon Forecast / Supply Chain',
    color: 'from-teal-500 to-green-500',
    problem: '500 stock-outs/month costing $12M annually. $250M+ spend with minimal optimization.',
    results: [
      '40% reduction in stock-outs',
      '$7.5M vendor cost savings',
      '2-second sensor-to-PO latency',
    ],
    tech: ['IoT Core', 'Amazon Forecast', 'DeepAR', 'Lambda', 'DynamoDB'],
  },
  {
    id: 'eagleeye',
    icon: Truck,
    title: 'EagleEye — Multi-Market Observability',
    subtitle: '2.5M+ data points/day • 15+ markets • 20% throughput gain',
    category: 'Prometheus / DataDog / SRE',
    color: 'from-violet-500 to-purple-500',
    problem: 'No unified view across 15+ markets. 45 min to detect issues, 2-4 hours to resolve.',
    results: [
      '20% throughput improvement',
      'MTTD: 45 min → 15 min',
      'MTTR: 3 hours → 1 hour',
    ],
    tech: ['Prometheus', 'DataDog', 'Grafana', 'EKS', 'Kinesis'],
  },
  {
    id: 'campaign-automation',
    icon: BarChart3,
    title: 'Campaign Automation — ML + GenAI',
    subtitle: '2.5x ROI • 12% churn reduction • 90 A/B variants',
    category: 'K-Means / GenAI / Personalization',
    color: 'from-pink-500 to-rose-500',
    problem: 'One-size-fits-all campaigns. $2:$1 ROI. 20% churn rate across 5M users.',
    results: [
      'ROI improved 2.5x ($5:$1)',
      '12% churn reduction',
      'Content creation: 2 days → 30 min',
    ],
    tech: ['K-Means', 'XGBoost', 'AWS Bedrock', 'SageMaker', 'Adobe Campaign'],
  },
  {
    id: 'branchless-banking',
    icon: Smartphone,
    title: 'Branchless Banking — AI Avatars',
    subtitle: '200K users • 40% cost reduction • 95% offline success',
    category: 'Computer Vision / NLP / Financial Inclusion',
    color: 'from-amber-500 to-orange-500',
    problem: 'Millions unbanked. 60% semi-literate. 2G-only connectivity. $6.8M/year agent costs.',
    results: [
      '200K users enrolled',
      '40% operational cost reduction',
      '95% offline transaction success',
    ],
    tech: ['Rekognition', 'Lex', 'Polly', 'TFLite', 'Facial Recognition'],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="tag mb-4">AI & Cloud Projects</span>
          <h2 className="section-title text-white">
            10 Production Systems with <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Enterprise-scale AI, GenAI, and cloud solutions — each solving real business problems 
            with quantified outcomes. From RAG-based automation to $5.3B payment modernization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="glass-card p-5 hover:scale-[1.02] transition-transform duration-300 animate-on-scroll flex flex-col"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0`}>
                  <study.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-primary-400 font-medium uppercase tracking-wider block truncate">
                    {study.category}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-0.5 leading-tight">{study.title}</h3>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-primary-400 font-semibold text-xs mb-3">{study.subtitle}</p>

              {/* Problem */}
              <p className="text-xs text-surface-400 mb-3 line-clamp-2">{study.problem}</p>

              {/* Results */}
              <ul className="space-y-1 mb-3 flex-grow">
                {study.results.map((result, i) => (
                  <li key={i} className="text-xs text-surface-300 flex items-start gap-1.5">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="line-clamp-1">{result}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 pt-3 border-t border-surface-700/50">
                {study.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[10px] px-1.5 py-0.5 bg-surface-800 rounded text-surface-400">
                    {tech}
                  </span>
                ))}
                {study.tech.length > 4 && (
                  <span className="text-[10px] px-1.5 py-0.5 bg-surface-800 rounded text-surface-500">
                    +{study.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-lg font-bold text-white mb-6 text-center">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <h4 className="text-primary-400 font-semibold mb-2">AI/ML & GenAI</h4>
              <p className="text-surface-400 text-xs">AWS Bedrock, SageMaker, RAG, XGBoost, K-Means, LSTM, LangChain, MCP</p>
            </div>
            <div>
              <h4 className="text-primary-400 font-semibold mb-2">Compute & Data</h4>
              <p className="text-surface-400 text-xs">Lambda, ECS Fargate, EKS, DynamoDB, Aurora, Kinesis, OpenSearch</p>
            </div>
            <div>
              <h4 className="text-primary-400 font-semibold mb-2">IoT & Edge</h4>
              <p className="text-surface-400 text-xs">IoT Core, Greengrass, SageMaker Neo, TFLite, 78K+ sensors</p>
            </div>
            <div>
              <h4 className="text-primary-400 font-semibold mb-2">Observability</h4>
              <p className="text-surface-400 text-xs">Prometheus, DataDog, Grafana, CloudWatch, X-Ray</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
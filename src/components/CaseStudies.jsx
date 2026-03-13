import { ArrowRight, CreditCard, Brain, DollarSign, Megaphone, Users, Server } from 'lucide-react'

const caseStudies = [
  {
    icon: CreditCard,
    title: 'Payment Modernization at Scale',
    context: 'Global Financial Services | Amazon',
    color: 'from-blue-500 to-cyan-500',
    problem: 'Legacy payment infrastructure couldn\'t scale to meet growing transaction volumes while maintaining regulatory compliance across 15+ markets.',
    approach: 'Led architecture redesign with event-driven microservices, implemented circuit breakers and bulkheads, established real-time monitoring with sub-second alerting.',
    result: '99.99% uptime achieved for $5.3B transaction charter. Millions of daily transactions processed with <100ms P99 latency. Zero critical incidents in 18 months.',
    metrics: ['$5.3B Charter', '99.99% Uptime', '<100ms P99'],
  },
  {
    icon: Brain,
    title: 'AskGenie: Enterprise GenAI RAG System',
    context: 'Knowledge Management | Amazon',
    color: 'from-purple-500 to-pink-500',
    problem: 'Operations teams spent 40% of time searching documentation and tribal knowledge. New hire onboarding took 6+ weeks due to scattered information.',
    approach: 'Architected RAG system using AWS Bedrock (Claude), LangChain, and Pinecone. Implemented semantic chunking, hybrid search, and citation tracking.',
    result: '25% improvement in operational efficiency. Onboarding time reduced to 3 weeks. $2.3M annual ROI from productivity gains.',
    metrics: ['$2.3M ROI', '25% Efficiency', '50% Faster Onboarding'],
  },
  {
    icon: DollarSign,
    title: 'Cloud Cost Optimization',
    context: 'AWS Cost Governance | Amazon',
    color: 'from-green-500 to-emerald-500',
    problem: '$162M AWS portfolio with 30% YoY cost growth. No visibility into cost drivers. Teams had no accountability for cloud spend.',
    approach: 'Implemented FinOps framework with Terraform guardrails, automated tagging, real-time cost dashboards, and monthly business reviews with cost owners.',
    result: '$8M/year in sustained savings (5% of portfolio). Established cost culture with 100% tag compliance. Prevented $12M in projected overspend.',
    metrics: ['$8M/yr Savings', '100% Tag Compliance', '$162M Governed'],
  },
  {
    icon: Megaphone,
    title: 'AI-Powered Marketing Automation',
    context: 'Marketing Technology | Consulting',
    color: 'from-orange-500 to-red-500',
    problem: 'Marketing team creating 500+ campaign variations manually. 2-week lead time for personalized content. High error rate in compliance-sensitive copy.',
    approach: 'Built GenAI templating system with guardrails for brand voice and compliance. Integrated with existing DAM and campaign management tools.',
    result: '80% reduction in content creation time. Campaign launch time reduced from 2 weeks to 2 days. Zero compliance violations post-launch.',
    metrics: ['80% Time Saved', '2 Days vs 2 Weeks', '0 Violations'],
  },
  {
    icon: Users,
    title: 'Engineering Practice Building',
    context: 'Organizational Design | Deloitte',
    color: 'from-indigo-500 to-violet-500',
    problem: 'Fragmented delivery teams with inconsistent practices. High attrition due to lack of growth paths. Quality issues from missing standards.',
    approach: 'Built 45-member practice with clear career ladders, standardized tech stack, CI/CD templates, and TPM coaching program.',
    result: '40% improvement in delivery velocity. Attrition reduced from 25% to 12%. Practice grew from 5 to 45 engineers in 3 years.',
    metrics: ['45 Engineers', '40% Velocity Gain', '12% Attrition'],
  },
  {
    icon: Server,
    title: 'Multi-Region Disaster Recovery',
    context: 'Infrastructure | Cloud Architecture',
    color: 'from-teal-500 to-cyan-500',
    problem: 'Single-region deployment with no DR capability. Previous outage cost $500K in lost revenue. Leadership demanded enterprise-grade resilience.',
    approach: 'Designed multi-region active-passive architecture with automated failover. Implemented chaos engineering practices and monthly DR drills.',
    result: 'Achieved 99.97% availability. Failover time reduced to 28 seconds. DR cost: $2/month using native AWS features.',
    metrics: ['99.97% Uptime', '28s Failover', '$2/mo DR Cost'],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-surface-900/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="tag mb-4">Case Studies</span>
          <h2 className="section-title text-white">
            Selected <span className="gradient-text">Programs & Impact</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real problems, real solutions, real outcomes. Each case study represents 
            a significant program where I drove measurable business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="glass-card overflow-hidden card-hover animate-on-scroll group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${study.color} bg-opacity-10`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{study.title}</h3>
                      <p className="text-sm text-surface-400">{study.context}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Problem</h4>
                  <p className="text-sm text-surface-400">{study.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-1">Approach</h4>
                  <p className="text-sm text-surface-400">{study.approach}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">Result</h4>
                  <p className="text-sm text-surface-300">{study.result}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-700/50">
                  {study.metrics.map((metric) => (
                    <span key={metric} className="tag text-xs">{metric}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
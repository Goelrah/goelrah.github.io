import { Rocket, Brain, DollarSign, Users, Lightbulb } from 'lucide-react'

const currentFocus = [
  {
    icon: Brain,
    title: 'Leading GenAI Deployments',
    description: 'Architecting and deploying production-grade RAG systems using AWS Bedrock, LangChain, and vector databases for enterprise knowledge management.',
  },
  {
    icon: DollarSign,
    title: 'Cloud FinOps Governance',
    description: 'Running cost optimization reviews and implementing Terraform-based guardrails for $100M+ AWS portfolios. Targeting 20-30% cost reduction.',
  },
  {
    icon: Users,
    title: 'TPM Coaching & Mentorship',
    description: 'Coaching senior TPMs on architecture-led program strategy, stakeholder management, and navigating complex multi-team initiatives.',
  },
  {
    icon: Rocket,
    title: 'Payment Modernization',
    description: 'Leading high-availability payment systems serving millions of daily transactions with 99.99% uptime requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Exploring AI-Powered Tools',
    description: 'Building internal tools and frameworks that leverage GenAI for automated documentation, code review, and operational efficiency.',
  },
]

export default function Now() {
  return (
    <section id="now" className="relative bg-surface-900/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="tag mb-4">What I'm Doing Now</span>
          <h2 className="section-title text-white">
            Current <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Here's what I'm actively working on and thinking about. Updated regularly 
            to reflect my current priorities and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFocus.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-6 card-hover animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12">
          <p className="text-sm text-surface-500">
            Last updated: March 2026
          </p>
        </div>
      </div>
    </section>
  )
}
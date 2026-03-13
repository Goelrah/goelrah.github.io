import { Rocket, DollarSign, GitBranch, Search, Shield } from 'lucide-react'

const playbooks = [
  {
    icon: Rocket,
    name: 'GenAI Discovery-to-Production Framework',
    tagline: 'From POC to Production in 12 Weeks',
    description: 'A structured approach to taking GenAI initiatives from ideation through production deployment. Covers use case prioritization, technical feasibility assessment, MVP scoping, and production hardening.',
    whenToUse: 'When your organization wants to move beyond GenAI experiments to production systems with measurable ROI.',
    results: ['Clear go/no-go criteria at each stage', 'Reduced time-to-production by 60%', 'Built-in guardrails for responsible AI'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: DollarSign,
    name: '4-Week FinOps Cost Sprint',
    tagline: 'Find 20% Savings in 4 Weeks',
    description: 'An intensive cost optimization sprint that identifies quick wins and establishes sustainable cost governance. Includes automated tagging, rightsizing analysis, reserved instance planning, and cost accountability frameworks.',
    whenToUse: 'When cloud costs are growing faster than business value, or when you need to establish cost culture in engineering teams.',
    results: ['Typical 15-25% cost reduction identified', '100% resource tagging compliance', 'Monthly cost review cadence established'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: GitBranch,
    name: 'Program Governance for Scale',
    tagline: 'Align 10+ Teams Without Bureaucracy',
    description: 'A lightweight governance framework for large, multi-team initiatives. Covers decision rights, escalation paths, dependency management, and progress visibility without creating overhead.',
    whenToUse: 'When leading programs with 10+ teams, multiple workstreams, and executive stakeholders who need visibility without micromanagement.',
    results: ['Clear RACI for all decisions', 'Weekly rhythm that respects team autonomy', 'Risk visibility without blame culture'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    name: 'Architecture Review Loop',
    tagline: 'TPM-Led Technical Due Diligence',
    description: 'A repeatable process for TPMs to lead architecture reviews without being the technical expert. Focuses on asking the right questions, identifying risks, and ensuring alignment with business goals.',
    whenToUse: 'When you need to assess technical proposals, evaluate vendor solutions, or ensure architecture decisions align with program goals.',
    results: ['Structured review templates', 'Risk identification checklist', 'Decision documentation standards'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Shield,
    name: 'Production Readiness Checklist',
    tagline: 'Ship with Confidence',
    description: 'A comprehensive checklist ensuring systems are ready for production traffic. Covers observability, alerting, runbooks, capacity planning, security review, and rollback procedures.',
    whenToUse: 'Before any major launch or migration. Prevents the "we forgot about X" moments that cause production incidents.',
    results: ['Zero launch-day surprises', 'Complete runbook coverage', 'Clear ownership for every alert'],
    color: 'from-red-500 to-pink-500',
  },
]

export default function Playbooks() {
  return (
    <section id="playbooks" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="tag mb-4">GenAI & FinOps Playbooks</span>
          <h2 className="section-title text-white">
            Productized <span className="gradient-text">Frameworks & Methods</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Battle-tested frameworks I've developed and refined across multiple organizations. 
            Each playbook represents hundreds of hours of learning compressed into actionable guidance.
          </p>
        </div>

        <div className="space-y-6">
          {playbooks.map((playbook, index) => (
            <div
              key={playbook.name}
              className="glass-card overflow-hidden card-hover animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left: Icon and Title */}
                <div className={`lg:w-96 p-6 lg:p-8 bg-gradient-to-br ${playbook.color} bg-opacity-10 flex flex-col justify-center`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${playbook.color} flex items-center justify-center flex-shrink-0`}>
                      <playbook.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{playbook.name}</h3>
                      <p className="text-sm text-primary-400 font-medium">{playbook.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <p className="text-surface-300 mb-4">{playbook.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">When to Use</h4>
                    <p className="text-sm text-surface-400">{playbook.whenToUse}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">Expected Results</h4>
                    <div className="flex flex-wrap gap-2">
                      {playbook.results.map((result) => (
                        <span key={result} className="tag text-xs">{result}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-surface-400 mb-4">
            Interested in applying these frameworks to your organization?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Let's Discuss Your Challenges
          </button>
        </div>
      </div>
    </section>
  )
}
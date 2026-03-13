import { Building2, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Amazon',
    role: 'Senior Technical Program Manager (Principal Scope)',
    period: 'Mar 2022 – Present',
    location: 'Bangalore, India',
    color: 'from-orange-500 to-yellow-500',
    highlights: [
      'Cloud Portfolio Governance: Governed $162M AWS infrastructure, implemented automated cost-control frameworks and Terraform-based guardrails, delivering $8M/year recurring savings',
      'GenAI Architecture: Architected "AskGenie" – production RAG system using AWS Bedrock + LangChain with optimized vector embeddings, achieving 25% efficiency gain and $2.3M annual ROI',
      'Payment Modernization: Principal lead for $5.3B charter, authored System Design reviews for cloud-native Java API Gateways, ensuring 99.99% uptime for millions of daily transactions',
      'TPM Excellence: Established enterprise-wide governance frameworks optimizing cross-functional velocity by 15%, mentored 10+ Senior Engineers and TPMs',
    ],
  },
  {
    company: 'Deloitte',
    role: 'Senior Manager – Technology Consulting',
    period: '2015 – 2021',
    location: 'Bangalore, India',
    color: 'from-green-500 to-emerald-500',
    highlights: [
      'Built and led a 45-member cross-disciplinary engineering practice delivering end-to-end digital transformations for Fortune 500 clients',
      'Established modern microservices architecture standards, CI/CD pipelines, and security-by-design practices across the practice',
      'Drove 40% improvement in delivery velocity through standardized program governance frameworks and TPM coaching programs',
    ],
  },
  {
    company: 'Earlier Career',
    role: 'Technical Lead & Architect',
    period: '2009 – 2015',
    location: 'Various',
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      'RBS: Built high-availability trading systems processing $10B+ daily transactions with sub-millisecond latency requirements',
      'Shell Infotech / Emerio: Architected enterprise integration solutions and led offshore delivery teams for global clients',
      'Developed deep expertise in distributed systems, financial services technology, and large-scale program delivery',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="tag mb-4">Experience & Impact</span>
          <h2 className="section-title text-white">
            15+ Years of <span className="gradient-text">Measurable Outcomes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From building trading systems to governing $100M+ cloud portfolios—every role 
            focused on delivering business value through technical excellence.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="glass-card overflow-hidden animate-on-scroll"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Company Header */}
                <div className={`lg:w-80 p-6 lg:p-8 bg-gradient-to-br ${exp.color} bg-opacity-10`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-sm text-surface-300">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-white font-medium mb-1">{exp.role}</p>
                  <p className="text-sm text-surface-400">{exp.location}</p>
                </div>

                {/* Highlights */}
                <div className="flex-1 p-6 lg:p-8">
                  <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span className="text-surface-300 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume CTA */}
        <div className="text-center mt-12">
          <a
            href="/assets/RahulGoel_Resume.pdf"
            download
            className="btn-secondary inline-flex"
          >
            <ExternalLink className="w-4 h-4" />
            Download Full Resume (PDF)
          </a>
          <p className="text-sm text-surface-500 mt-2">Last updated: March 2026</p>
        </div>
      </div>
    </section>
  )
}
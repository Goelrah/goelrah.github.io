import { Building2, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Amazon',
    role: 'Senior Technical Program Manager',
    period: 'Mar 2022 – Present',
    location: 'Bangalore, India',
    color: 'from-orange-500 to-yellow-500',
    highlights: [
      'Governed $165M AWS cloud portfolio at 85% discounted rate across 85+ engineering teams; implemented 20+ automated cost guardrails — $12M/year savings for 2 consecutive years ($24M total)',
      'Built AskGenie RAG-based automation — 88% confidence threshold, 4,500 tickets/day auto-resolved without engineer intervention; $2.3M annual ROI',
      'Scaled Ada procurement AI to 1,200+ global facilities serving 3,500+ managers — orders under $10K auto-approved by AI',
      'Principal Program Lead for $5.3B Naazir payment modernization (Global Engineering and Security Service); executive stakeholder management across C-suite',
      'Built SafeDrive real-time safety monitoring — cut serious incidents by 24%, improved on-time delivery by 18%',
      'Deployed EagleEye tracking 2.5M+ data points/day across 15+ international markets; improved operational throughput by 20%',
    ],
  },
  {
    company: 'Deloitte',
    role: 'Engineering Lead / Director of Engineering',
    period: 'Nov 2015 – Mar 2022',
    location: 'Gurgaon, India',
    color: 'from-green-500 to-emerald-500',
    highlights: [
      'Founded and scaled 45-member engineering practice; directed global talent acquisition for Fortune 500 clients (Broadcom, Scholastic)',
      'Built Campaign Automation Platform with Adobe Campaign Manager — ML-based user bucketing and GenAI coupon generation; improved ROI by 2.5x, reduced churn by 12%',
      'Led legacy CMS to cloud-native microservices migration for Scholastic; reduced time-to-market by 35%',
      'Delivered branchless banking rollout with AI avatars and facial recognition — cut operational overhead by 40%',
      'Led AR/VR integration into smart manufacturing — achieved 20% downtime reduction',
    ],
  },
  {
    company: 'Earlier Career',
    role: 'Project Manager → Team Lead → Senior Developer',
    period: '2005 – 2015',
    location: 'India & Malaysia',
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      'Shell Infotech / Deloitte: Architected Salesforce Commerce Cloud platform; lifted conversion rates by 25%',
      'EMERIO Malaysia: Delivered process automation reducing manual effort by 10% using Sitecore CMS',
      'Royal Bank of Scotland: Supported 16 mission-critical applications; improved uptime by 22% and incident response by 35%',
      'Cincom Systems: Migrated Ruby rule engine to .NET saving $1.2M in annual royalty fees',
      'Kale Consultants: Built airline booking systems for BCD Travel and Air India across 9 countries',
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
            19+ Years of <span className="gradient-text">Measurable Outcomes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From building airline booking systems to governing $165M+ cloud portfolios and deploying 
            AI that resolves 4,500 tickets daily—every role focused on automation and business value.
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
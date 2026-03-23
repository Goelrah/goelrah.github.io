import { MapPin, Award, Users, Briefcase, Bot, Cloud } from 'lucide-react'

const highlights = [
  { icon: Briefcase, label: '19+ Years', description: 'Enterprise Experience' },
  { icon: Users, label: '85+ Teams', description: 'Cloud Portfolio' },
  { icon: Bot, label: '4,500/day', description: 'AI Auto-Resolved' },
  { icon: Cloud, label: '$24M', description: 'Cost Savings' },
]

const certifications = [
  'AWS Certified Solutions Architect',
  'AWS Certified Cloud Practitioner',
  'PMP (Project Management Professional)',
  'Generative AI for Leaders (Vanderbilt)',
  'PRINCE2 Practitioner',
  'ITIL v3 Foundation',
]

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <span className="tag mb-4">About Me</span>
            <h2 className="section-title text-white">
              Engineering Leader with a{' '}
              <span className="gradient-text">Bias for Automation</span>
            </h2>
            
            <div className="space-y-6 text-surface-300 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Senior Technical Program Manager</span> at 
                Amazon with 19+ years of experience at Fortune 500 scale. Currently managing a{' '}
                <span className="text-primary-400 font-medium">$165M AWS cloud portfolio</span> across 
                85+ engineering teams, delivering production GenAI solutions that resolve{' '}
                <span className="text-primary-400 font-medium">4,500+ tickets daily</span> without 
                engineer intervention.
              </p>
              
              <p>
                My career spans from building airline booking systems at Kale Consultants to leading 
                mission-critical banking applications at RBS, scaling a 45-member engineering practice 
                at Deloitte, and now architecting AI/GenAI solutions at Amazon that deliver{' '}
                <span className="text-white font-medium">$2.3M annual ROI</span>.
              </p>
              
              <p>
                I specialize in the intersection of <span className="text-white font-medium">AI/GenAI</span>,{' '}
                <span className="text-white font-medium">Cloud FinOps</span>, and{' '}
                <span className="text-white font-medium">large-scale program delivery</span>. Whether it's 
                building RAG-based automation (AskGenie), scaling AI procurement (Ada), or leading a{' '}
                <span className="text-primary-400 font-medium">$5.3B payment modernization</span> program—I 
                focus on measurable outcomes.
              </p>
              
              <p className="text-primary-400 font-medium">
                My approach: Automate everything possible, measure relentlessly, and always tie 
                technical decisions to business outcomes.
              </p>
            </div>

            {/* Brand Adjectives */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['AI/GenAI Leader', 'Cloud FinOps', 'Automation-First', 'Data-Driven', 'Executive Stakeholder Mgmt', 'Open to Relocation'].map((adj) => (
                <span key={adj} className="tag">{adj}</span>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="animate-on-scroll stagger-2">
            <div className="glass-card p-8 lg:p-10">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-surface-700/50">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-3xl font-bold text-white">
                  RG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Rahul Goel</h3>
                  <p className="text-surface-400">Senior TPM | AI/GenAI Leader</p>
                  <p className="text-sm text-primary-400">Open to Relocation</p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="text-lg font-bold text-white">{item.label}</div>
                    <div className="text-sm text-surface-400">{item.description}</div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="pt-6 border-t border-surface-700/50">
                <h4 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span key={cert} className="text-xs px-2 py-1 bg-surface-800 rounded text-surface-300">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-surface-700/50">
                <blockquote className="text-surface-300 italic">
                  "If a human is doing it repeatedly, an AI should be doing it instead. 
                  My job is to make that transition seamless and measurable."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
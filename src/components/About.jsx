import { Briefcase, Users, Bot, Cloud, Award } from 'lucide-react'
import { useScrollReveal } from '../utils/motion'

const highlights = [
  { icon: Briefcase, label: '20 Years', description: 'Enterprise Experience' },
  { icon: Users, label: '15+', description: 'Global Markets' },
  { icon: Bot, label: '88%', description: 'AI Resolution Rate' },
  { icon: Cloud, label: '$165M', description: 'AWS Portfolio' },
]

const certifications = [
  'PMP - Project Management Professional (PMI, 2025)',
  'AWS Certified Solutions Architect Associate (AWS, 2024)',
  'Google Cloud Generative AI Leader Specialization (2025)',
  'PRINCE2 Practitioner (AXELOS, UK)',
  'ITIL v3 Foundation (APMG International, UK)',
]

const awards = [
  'GenAI Program Lead Award - Amazon (2024)',
  'Best Performing Engineering Manager - Deloitte (FY2020 & FY2021)',
  'Best Team Lead - Royal Bank of Scotland (2011, 2012)',
  'Ovation Excellence Award - Royal Bank of Scotland (2011)',
]

export default function About() {
  const leftRef = useScrollReveal({ x: -30, y: 0 })
  const rightRef = useScrollReveal({ x: 30, y: 0, delay: 0.15 })

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={leftRef}>
            <span className="tag mb-4">About Me</span>
            <h2 className="section-title text-white">
              Staff TPM with a{' '}
              <span className="gradient-text">Bias for Automation</span>
            </h2>
            
            <div className="space-y-6 text-surface-300 leading-relaxed">
              <p>
                Staff Technical Program Manager with <span className="text-white font-medium">20 years</span> owning 
                portfolio-scale AI and platform programs at VP and C-suite level. At Amazon, built and coached a TPM org 
                delivering production GenAI systems, <span className="text-primary-400 font-medium">$5.3B capital programs</span>, 
                and global platform capabilities across a <span className="text-primary-400 font-medium">$165M AWS portfolio</span>.
              </p>
              
              <p>
                Drove production GenAI delivery on <span className="text-white font-medium">AWS Bedrock Agents</span> including 
                agentic workflow design, RAG architecture, LLM selection, and LLMOps, replacing manual operations with 
                autonomous systems at scale. Proven track record building scalable technical capabilities across{' '}
                <span className="text-white font-medium">15+ global markets</span>, running PoC experiments to validate 
                automation feasibility, and translating engineering complexity into executive-level decisions.
              </p>
              
              <p>
                Client-facing delivery experience across <span className="text-white font-medium">10+ Fortune 500 engagements</span> at 
                Deloitte Digital. From building ML campaign automation to delivering branchless banking platforms, 
                every engagement focused on measurable business outcomes.
              </p>
            </div>

            {/* Brand Adjectives */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['AI Program Leadership', 'GenAI Delivery', 'Cloud FinOps', 'Automation-First', 'AWS Certified', 'Global Execution'].map((adj) => (
                <span key={adj} className="tag">{adj}</span>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div ref={rightRef}>
            <div className="glass-card p-8 lg:p-10">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-surface-700/50">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-3xl font-bold text-white">
                  RG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Rahul Goel</h3>
                  <p className="text-surface-400">Staff TPM | AI Program Portfolio Leadership</p>
                  <p className="text-sm text-primary-400">Bangalore, India</p>
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

              {/* Awards */}
              <div className="mt-6 pt-6 border-t border-surface-700/50">
                <h4 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4 inline mr-1" />
                  Awards & Recognition
                </h4>
                <div className="flex flex-wrap gap-2">
                  {awards.map((award) => (
                    <span key={award} className="text-xs px-2 py-1 bg-primary-500/10 border border-primary-500/20 rounded text-primary-300">
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

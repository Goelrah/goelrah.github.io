import { MapPin, Award, Users, Briefcase } from 'lucide-react'

const highlights = [
  { icon: Briefcase, label: '15+ Years', description: 'Enterprise Experience' },
  { icon: Users, label: '45+ Engineers', description: 'Teams Led' },
  { icon: Award, label: 'AWS Certified', description: 'Solutions Architect' },
  { icon: MapPin, label: 'Bangalore', description: 'India' },
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
              Systems-Driven Leader with a{' '}
              <span className="gradient-text">Bias for Outcomes</span>
            </h2>
            
            <div className="space-y-6 text-surface-300 leading-relaxed">
              <p>
                My journey began in the trenches of financial services technology—building 
                high-availability systems at RBS, architecting enterprise solutions at Shell 
                Infotech, and learning the craft of large-scale program delivery. These early 
                years taught me that great technology is meaningless without disciplined execution.
              </p>
              
              <p>
                At <span className="text-white font-medium">Deloitte</span>, I evolved from 
                technical lead to practice builder. I grew and led a 45-member cross-disciplinary 
                engineering practice, delivering end-to-end digital transformations across 
                microservices, CI/CD, and security-by-design. We didn't just ship code—we 
                shipped organizational capability.
              </p>
              
              <p>
                At <span className="text-white font-medium">Amazon</span>, I operate at 
                principal scope: governing a $162M AWS cloud portfolio, architecting production 
                GenAI systems like "AskGenie" (AWS Bedrock + LangChain) with $2.3M annual ROI, 
                and leading a $5.3B payment modernization charter with 99.99% uptime. I bring 
                the same rigor to Cloud FinOps frameworks that I bring to system architecture.
              </p>
              
              <p className="text-primary-400 font-medium">
                My approach: measure everything, optimize relentlessly, and always tie 
                technical decisions to business outcomes.
              </p>
            </div>

            {/* Brand Adjectives */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Systems-Driven', 'Pragmatic', 'High-Leverage', 'Outcome-Focused', 'Calm Under Pressure', 'Global Perspective'].map((adj) => (
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
                  <p className="text-surface-400">Principal TPM & GenAI Leader</p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-6">
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

              {/* Quote */}
              <div className="mt-8 pt-8 border-t border-surface-700/50">
                <blockquote className="text-surface-300 italic">
                  "The best architecture isn't the most sophisticated—it's the one that 
                  solves the business problem efficiently using boring, reliable technology."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
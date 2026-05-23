import { Briefcase, Users, Bot, Cloud } from 'lucide-react'
import { useScrollReveal } from '../utils/motion'
import { useAdmin } from '../context/AdminContext'
import EditableText from './admin/EditableText'

const highlights = [
  { icon: Briefcase, label: '20 Years', description: 'Enterprise Experience' },
  { icon: Users, label: '15+', description: 'Global Markets' },
  { icon: Bot, label: '88%', description: 'AI Resolution Rate' },
  { icon: Cloud, label: '$165M', description: 'AWS Portfolio' },
]

export default function About() {
  const leftRef = useScrollReveal({ x: -30, y: 0 })
  const rightRef = useScrollReveal({ x: 30, y: 0, delay: 0.15 })
  const { content } = useAdmin()

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
                <EditableText path="about.paragraph1" value={content.about.paragraph1} as="span" className="text-surface-300" multiline />
              </p>
              
              <p>
                <EditableText path="about.paragraph2" value={content.about.paragraph2} as="span" className="text-surface-300" multiline />
              </p>
              
              <p>
                <EditableText path="about.paragraph3" value={content.about.paragraph3} as="span" className="text-surface-300" multiline />
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

              {/* Awards — infographic style */}
              <div className="pt-6 border-t border-surface-700/50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg animate-pulse">🏅</span>
                  <h4 className="text-sm font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent tracking-wide">
                    Recognized Excellence
                  </h4>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'GenAI Program Lead', org: 'Amazon', year: '2024', color: '#f59e0b', emoji: '🏆', width: '100%' },
                    { title: 'Best Engineering Manager', org: 'Deloitte', year: 'FY2020 & FY2021', color: '#10b981', emoji: '⭐', width: '90%' },
                    { title: 'Best Team Lead', org: 'Royal Bank of Scotland', year: '2011, 2012', color: '#6366f1', emoji: '🎯', width: '75%' },
                    { title: 'Ovation Excellence Award', org: 'Royal Bank of Scotland', year: '2011', color: '#8b5cf6', emoji: '✨', width: '65%' },
                  ].map((a) => (
                    <div key={a.title} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{a.emoji}</span>
                          <span className="text-xs font-bold text-white">{a.title}</span>
                        </div>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${a.color}15`, color: a.color }}>
                          {a.year}
                        </span>
                      </div>
                      <div className="relative h-6 rounded-full bg-surface-800/80 overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full flex items-center pl-3 transition-all duration-500 group-hover:brightness-125"
                          style={{ width: a.width, background: `linear-gradient(90deg, ${a.color}40, ${a.color}20)`, borderRight: `2px solid ${a.color}` }}
                        >
                          <span className="text-[10px] font-semibold text-white/80 truncate">{a.org}</span>
                        </div>
                      </div>
                    </div>
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

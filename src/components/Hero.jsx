import { useState, useEffect } from 'react'
import { ArrowRight, Download, ChevronDown, Zap, Cloud, Brain, TrendingUp } from 'lucide-react'

const roles = [
  'Principal TPM',
  'GenAI Architect',
  'Engineering Director',
  'Director of Technology',
  'Engineering Manager',
  'Cloud Expert & Optimizer',
  'AWS Solutions Architect',
]

const metrics = [
  { value: '$162M', label: 'AWS Portfolio Managed', icon: Cloud },
  { value: '$8M/yr', label: 'Cost Savings Delivered', icon: TrendingUp },
  { value: '$2.3M', label: 'GenAI ROI Generated', icon: Brain },
  { value: '99.99%', label: 'System Uptime', icon: Zap },
]

export default function Hero({ scrollToSection }) {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing animation effect
  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-surface-300">Available for Principal TPM & GenAI Leadership roles</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Complex Cloud Portfolios into{' '}
            <span className="gradient-text">High-Leverage Outcomes</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-12 sm:h-16 flex items-center justify-center mb-8">
            <span className="text-xl sm:text-2xl lg:text-3xl text-surface-300">
              I'm a{' '}
              <span className="text-primary-400 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-surface-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            15+ years driving large-scale programs at Amazon, Deloitte, and global enterprises. 
            I architect GenAI systems, govern $100M+ cloud portfolios, and deliver measurable 
            business outcomes—from $8M/year savings to 99.99% uptime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('experience')}
              className="btn-primary text-lg px-8 py-4"
            >
              View Experience
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('playbooks')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore GenAI Playbooks
            </button>
            <a
              href="/assets/RahulGoel_Resume.pdf"
              download
              className="btn-ghost text-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="metric-card animate-on-scroll"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <metric.icon className="w-6 h-6 text-primary-400 mx-auto mb-3" />
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 text-surface-500 hover:text-primary-400 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
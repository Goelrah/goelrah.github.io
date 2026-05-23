import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, Download, ChevronDown, Zap, Cloud, Brain, TrendingUp } from 'lucide-react'
import { useAdmin } from '../context/AdminContext'
import EditableText from './admin/EditableText'

const roles = [
  'Staff TPM',
  'AI Program Leader',
  'Solutions Architect',
  'Cloud FinOps Expert',
  'GenAI Delivery Lead',
  'AWS Certified Architect',
]

const metrics = [
  { value: '$165M', label: 'AWS Portfolio Managed', icon: Cloud },
  { value: '$8M', label: 'Annual Cloud Savings', icon: TrendingUp },
  { value: '88%', label: 'AI Autonomous Resolution', icon: Brain },
  { value: '$5.3B', label: 'Capital Program Led', icon: Zap },
]

export default function Hero({ scrollToSection }) {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const heroRef = useRef(null)
  const { content } = useAdmin()
  const metricsRef = useRef(null)

  // GSAP entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { y: -20, opacity: 0, duration: 0.5 })
        .from('.hero-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-typing', { opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.hero-summary', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.metric-item', {
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
        }, '-=0.2')
        .from('.hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.1')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Typing animation
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
    <section id="top" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <EditableText path="hero.badge" value={content.hero.badge} className="text-sm text-surface-300" />
          </div>

          {/* Main Headline */}
          <h1 className="hero-title text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <EditableText path="hero.headline" value={content.hero.headline} as="span" className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white" />
          </h1>

          {/* Sub-headline */}
          <h2 className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-primary-400 font-medium mb-4">
            <EditableText path="hero.subheadline" value={content.hero.subheadline} as="span" className="text-lg sm:text-xl lg:text-2xl text-primary-400 font-medium" />
          </h2>

          {/* Typing Animation */}
          <div className="hero-typing h-10 sm:h-12 flex items-center justify-center mb-6">
            <span className="text-lg sm:text-xl lg:text-2xl text-surface-300">
              Also a{' '}
              <span className="text-primary-400 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </div>

          {/* Supporting Text */}
          <p className="hero-summary text-base sm:text-lg text-surface-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            <EditableText path="hero.summary" value={content.hero.summary} as="span" className="text-base sm:text-lg text-surface-400" multiline />
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('experience')}
              className="btn-primary text-lg px-8 py-4"
            >
              View Experience
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Projects
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
          <div ref={metricsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-item metric-card">
                <metric.icon className="w-6 h-6 text-primary-400 mx-auto mb-3" />
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 text-surface-500 hover:text-primary-400 transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

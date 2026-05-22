import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '../utils/motion'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    company: 'Amazon India Development Centre',
    role: 'Senior Technical Program Manager',
    period: 'Mar 2022 – Present',
    duration: '4+ years',
    location: 'Bangalore, India',
    color: 'from-orange-500 to-yellow-500',
    dotColor: 'bg-orange-500',
    highlights: [
      'GenAI and Agentic Platform Delivery: Drove end-to-end delivery of human+machine intelligence programs on AWS Bedrock Agents. AskGenie replaced manual support review workflows with autonomous resolution, achieving 88% autonomous resolution rate and significantly reducing human escalation load at scale. Procurement Advisor automated inventory management across 1,200+ global facilities on $250M+ spend, generating $2.3M annual ROI and 25% reduction in manual effort.',
      'Cloud Governance: Implemented automated guardrails, rightsizing, and Reserved Instance optimization across $162M AWS portfolio driving $8M annual cloud cost savings. Defined and owned cloud spend KPIs, architectural investment decisions, and FinOps governance framework used by VP-level stakeholders.',
      'Regulatory and Compliance Execution: Delivered global GDPR compliance across all Tier 1 and Tier 2 services 2 months ahead of deadline. Secured org-wide adoption of Privacy by Design across Amazon\'s global engineering surface.',
      'Capital Program Delivery: Directed $5.3B Capital Planning program across 4 cross-functional teams, securing $50M/year in cost avoidance through governance cadences and executive KPI reporting.',
      'Platform Reliability and Observability: Led cross-org delivery of EagleEye multi-region platform (Python, Lambda, Prometheus, Datadog) across 15+ global markets, delivering a scalable technical capability that improved platform throughput by 20%.',
      'Engineering Leadership and AI Productivity: Managed and coached a team of 10+ Senior Engineers and TPMs across multiple concurrent programs. Recognized as GenAI Program Lead (2024) and AI Automator Award recipient.',
    ],
  },
  {
    company: 'Deloitte Consulting India Pvt. Ltd.',
    role: 'Engineering Lead and Delivery Manager',
    period: 'Nov 2015 – Mar 2022',
    duration: '6.5 years',
    location: 'Gurgaon, India',
    color: 'from-green-500 to-emerald-500',
    dotColor: 'bg-green-500',
    highlights: [
      'People Leadership: Built, managed, and grew 45-member engineering teams across client engagements. Recognized as Best Performing Manager (FY2020 and FY2021).',
      'Marketing Technology and SaaS Platform Delivery: Designed and delivered HUX, a full-stack Customer Data Platform and CX orchestration solution built on Snowflake, integrating end-to-end data pipelines covering ingestion, metadata formation, PII/PHI filtering, cleansing, modeling, and behavioral segmentation. Applied data science models to bucketize users by propensity and behavior, then used Snowflake-hosted data as context in LLM-driven orchestration to automate campaign management and personalized offer rollout via Adobe Magento for e-commerce execution. Delivered 22% increase in e-commerce sales, 2.5x marketing ROI, 30% targeting precision gain, and 12% churn reduction across the client engagement.',
      'Java Architecture and SDLC Ownership: Led Java engineering team on Broadcom Customer Service Portal, owning HLD/LLD API architecture, Java microservices, and full SDLC from SOW through production.',
      'Platform Architecture and Search: Owned catalog taxonomy and Solr full-text search on Scholastic\'s digital commerce platform. Delivered 35% time-to-market reduction through modular architecture and CI/CD automation.',
      'Banking Platform on Azure: Led delivery of ING Group\'s branchless banking platform on Azure (.NET, Java), integrating AI avatar and facial recognition. Delivered 40% operational overhead reduction.',
    ],
  },
  {
    company: 'Shell Infotech India Pvt. Ltd. (at Deloitte)',
    role: 'Project Manager',
    period: 'Mar 2015 – Nov 2015',
    duration: '8 months',
    location: 'India',
    color: 'from-blue-500 to-cyan-500',
    dotColor: 'bg-blue-500',
    highlights: [
      'Managed project delivery for Deloitte client engagements prior to transitioning into a full-time Deloitte role.',
    ],
  },
  {
    company: 'Royal Bank of Scotland Group (now NatWest Group)',
    role: 'Team Lead',
    period: 'Jul 2009 – Jul 2014',
    duration: '5 years',
    location: 'India',
    color: 'from-indigo-500 to-blue-500',
    dotColor: 'bg-indigo-500',
    highlights: [
      'Owned and managed a portfolio of 16 mission-critical core banking and back-office applications serving 15M+ retail and commercial banking customers across the UK.',
      'Drove 22% uptime improvement and 35% MTTR reduction through proactive incident management and platform stabilization.',
      'Delivered platform migrations $250K under budget, maintaining zero disruption to live banking operations.',
    ],
  },
  {
    company: 'Cincom Systems India Pvt. Ltd.',
    role: 'Sr Member Technical Staff',
    period: 'Dec 2007 – Jun 2009',
    duration: '1.5 years',
    location: 'India',
    color: 'from-violet-500 to-purple-500',
    dotColor: 'bg-violet-500',
    highlights: [
      'Senior technical contributor working on enterprise software systems.',
    ],
  },
  {
    company: 'Kale Consultants (now Accelya)',
    role: 'Software Engineer',
    period: '2005 – Dec 2007',
    duration: '2.5 years',
    location: 'India',
    color: 'from-pink-500 to-rose-500',
    dotColor: 'bg-pink-500',
    highlights: [
      'Built airline booking and reservation systems for BCD Travel and Air India, deployed across 9 countries.',
      'Developed core modules for airline departure control and passenger service systems used by international carriers.',
    ],
  },
]

export default function Experience() {
  const headerRef = useScrollReveal()
  const timelineRef = useRef(null)

  // GSAP timeline animation — animates the vertical line + cards as you scroll
  useEffect(() => {
    const el = timelineRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Animate the progress line growing as user scrolls
      gsap.to('.timeline-progress', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 0.5,
        },
      })

      // Animate each card sliding in
      const cards = el.querySelectorAll('.timeline-card')
      cards.forEach((card, i) => {
        const direction = i % 2 === 0 ? -30 : 30
        gsap.from(card, {
          x: direction,
          opacity: 0.2,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
        })
      })

      // Animate dots popping in
      const dots = el.querySelectorAll('.timeline-dot')
      dots.forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.4,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: dot,
            start: 'top 88%',
            once: true,
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <div ref={headerRef} className="text-center mb-16">
          <span className="tag mb-4">Career Journey</span>
          <h2 className="section-title text-white">
            20 Years of <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From airline booking systems at Kale Consultants (2005) to mission-critical banking at RBS, 
            Fortune 500 delivery at Deloitte, and AI program leadership at Amazon — a continuous arc of increasing scope and impact.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line track */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-surface-800">
            {/* Animated progress fill */}
            <div className="timeline-progress absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 rounded-full" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`timeline-card relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10">
                  <div className={`timeline-dot w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-surface-950 shadow-lg shadow-primary-500/20`} />
                </div>

                {/* Card */}
                <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:pr-0' : 'lg:pl-0'}`}>
                  <div className="glass-card overflow-hidden hover:border-primary-500/30 transition-colors duration-300">
                    <div className="flex flex-col">
                      {/* Company Header */}
                      <div className={`p-5 bg-gradient-to-r ${exp.color} bg-opacity-10`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white leading-tight">{exp.company}</h3>
                            <p className="text-xs text-surface-300">{exp.period}</p>
                          </div>
                          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-white/90 font-medium text-sm">{exp.role}</p>
                        <p className="text-xs text-surface-400">{exp.location}</p>
                      </div>

                      {/* Highlights */}
                      <div className="p-5">
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                              <span className="text-sm text-surface-300 leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <div className="text-center mt-16">
          <a
            href="/assets/RahulGoel_Resume.pdf"
            download
            className="btn-secondary inline-flex"
          >
            <ExternalLink className="w-4 h-4" />
            Download Full Resume (PDF)
          </a>
          <p className="text-sm text-surface-500 mt-2">Last updated: May 2026</p>
        </div>
      </div>
    </section>
  )
}

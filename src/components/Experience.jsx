import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '../utils/motion'
import { useAdmin } from '../context/AdminContext'
import EditableText from './admin/EditableText'

gsap.registerPlugin(ScrollTrigger)

const colors = [
  { color: 'from-orange-500 to-yellow-500', dotColor: 'bg-orange-500' },
  { color: 'from-green-500 to-emerald-500', dotColor: 'bg-green-500' },
  { color: 'from-blue-500 to-cyan-500', dotColor: 'bg-blue-500' },
  { color: 'from-indigo-500 to-blue-500', dotColor: 'bg-indigo-500' },
  { color: 'from-violet-500 to-purple-500', dotColor: 'bg-violet-500' },
  { color: 'from-pink-500 to-rose-500', dotColor: 'bg-pink-500' },
]

export default function Experience() {
  const headerRef = useScrollReveal()
  const timelineRef = useRef(null)
  const { content } = useAdmin()
  const experiences = content.experience.entries

  useEffect(() => {
    const el = timelineRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to('.timeline-progress', {
        height: '100%',
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 60%', scrub: 0.5 },
      })

      el.querySelectorAll('.timeline-card').forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -30 : 30,
          opacity: 0.2,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 88%', once: true },
        })
      })

      el.querySelectorAll('.timeline-dot').forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.4,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: dot, start: 'top 88%', once: true },
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
            <EditableText path="experience.title" value={content.experience.title} as="span" className="section-title text-white" />
          </h2>
          <p className="section-subtitle mx-auto">
            <EditableText path="experience.subtitle" value={content.experience.subtitle} as="span" className="section-subtitle" multiline />
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-surface-800">
            <div className="timeline-progress absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 rounded-full" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const style = colors[index % colors.length]
              return (
                <div
                  key={exp.id}
                  className={`timeline-card relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10">
                    <div className={`timeline-dot w-4 h-4 rounded-full ${style.dotColor} ring-4 ring-surface-950 shadow-lg shadow-primary-500/20`} />
                  </div>

                  <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:pr-0' : 'lg:pl-0'}`}>
                    <div className="glass-card overflow-hidden hover:border-primary-500/30 transition-colors duration-300">
                      <div className={`p-5 bg-gradient-to-r ${style.color} bg-opacity-10`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${style.color} flex items-center justify-center`}>
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white leading-tight">
                              <EditableText path={`experience.entries.${index}.company`} value={exp.company} as="span" className="text-lg font-bold text-white" />
                            </h3>
                            <p className="text-xs text-surface-300">
                              <EditableText path={`experience.entries.${index}.period`} value={exp.period} as="span" className="text-xs text-surface-300" />
                            </p>
                          </div>
                          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-white/90 font-medium text-sm">
                          <EditableText path={`experience.entries.${index}.role`} value={exp.role} as="span" className="text-white/90 font-medium text-sm" />
                        </p>
                        <p className="text-xs text-surface-400">{exp.location}</p>
                      </div>

                      <div className="p-5">
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                              <span className="text-sm text-surface-300 leading-relaxed">
                                <EditableText path={`experience.entries.${index}.highlights.${i}`} value={highlight} as="span" className="text-sm text-surface-300" multiline />
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/assets/RahulGoel_Resume.pdf" download className="btn-secondary inline-flex">
            <ExternalLink className="w-4 h-4" />
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

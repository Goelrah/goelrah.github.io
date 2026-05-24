import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Calendar, MapPin } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const track = [
  {
    company: 'Amazon India Development Centre',
    shortName: 'Amazon',
    role: 'Senior Technical Program Manager',
    period: 'Mar 2022 – Present',
    location: 'Bangalore, India',
    logo: '/logos/amazon.png',
    color: '#FF9900',
    tagline: 'The systems I built here are what I now help clients replicate.',
    wins: [
      { metric: '$8M/yr', desc: 'cloud cost savings through automated FinOps governance' },
      { metric: '88%', desc: 'autonomous ticket resolution via production GenAI' },
      { metric: '$5.3B', desc: 'capital program delivered — $50M/yr cost avoidance' },
      { metric: '15+', desc: 'global markets with unified observability platform' },
    ],
    responsibilities: [
      'Owned end-to-end delivery of AI-first and platform programs across Amazon\'s $165M AWS portfolio',
      'Single point of accountability for VP and C-suite programs, driving goal alignment across engineering, finance, and operations',
      'Built and coached a TPM org, led architecture reviews, defined KPIs, built executive reporting dashboards',
      'Drove production GenAI delivery on AWS Bedrock Agents — agentic workflow design, RAG architecture, LLM selection, LLMOps',
      'Implemented automated guardrails, rightsizing, and RI optimization across $162M AWS portfolio',
      'Delivered global GDPR compliance across all Tier 1 and Tier 2 services 2 months ahead of deadline',
      'Directed $5.3B Capital Planning program across 4 cross-functional teams',
      'Led EagleEye multi-region observability platform across 15+ global markets',
      'Managed and coached 10+ Senior Engineers and TPMs across multiple concurrent programs',
    ],
  },
  {
    company: 'Deloitte Consulting India Pvt. Ltd.',
    shortName: 'Deloitte',
    role: 'Engineering Lead and Delivery Manager',
    period: 'Nov 2015 – Mar 2022',
    location: 'Gurgaon, India',
    logo: '/logos/deloitte.png',
    color: '#86BC25',
    tagline: '10+ Fortune 500 clients. Every engagement delivered measurable outcomes.',
    wins: [
      { metric: '2.5x', desc: 'marketing ROI via AI-driven customer data platform' },
      { metric: '45', desc: 'engineers hired, trained, and scaled from zero' },
      { metric: '40%', desc: 'operational cost reduction for branchless banking' },
      { metric: '35%', desc: 'time-to-market improvement through modular architecture' },
    ],
    responsibilities: [
      'Built and led engineering teams across 10+ Fortune 500 client engagements spanning marketing technology, banking, retail, and digital experience',
      'Partnered directly with CTO and C-suite stakeholders to define technology strategy, manage program budgets, and deliver measurable outcomes',
      'Built, managed, and grew 45-member engineering teams — full lifecycle including hiring, performance, career development, and succession planning',
      'Designed and delivered HUX Customer Data Platform on Snowflake with LLM-driven orchestration via Adobe Magento',
      'Led Java engineering team on Broadcom Customer Service Portal — HLD/LLD API architecture, Java microservices, full SDLC',
      'Owned catalog taxonomy and Solr full-text search on Scholastic\'s digital commerce platform',
      'Led delivery of ING Group\'s branchless banking platform on Azure with AI avatar and facial recognition',
    ],
  },
  {
    company: 'Shell Infotech (at Deloitte client)',
    shortName: 'Shell Infotech',
    role: 'Project Manager',
    period: 'Mar 2015 – Nov 2015',
    location: 'India',
    logo: '/logos/deloitte.png',
    color: '#3b82f6',
    tagline: 'Managed project delivery for Deloitte client engagements before transitioning to full-time Deloitte role.',
    wins: [],
    responsibilities: [
      'Managed project delivery for Deloitte client engagements',
      'Transitioned into full-time Deloitte role based on delivery performance',
    ],
  },
  {
    company: 'Royal Bank of Scotland Group (now NatWest)',
    shortName: 'Royal Bank of Scotland',
    role: 'Team Lead',
    period: 'Jul 2009 – Jul 2014',
    location: 'India',
    logo: '/logos/rbs.png',
    color: '#42145F',
    tagline: 'Mission-critical banking. 15M+ customers. Zero tolerance for downtime.',
    wins: [
      { metric: '22%', desc: 'uptime improvement across 16 banking applications' },
      { metric: '$250K', desc: 'under budget on platform migrations — zero disruption' },
    ],
    responsibilities: [
      'Owned and managed a portfolio of 16 mission-critical core banking and back-office applications serving 15M+ retail and commercial banking customers across the UK',
      'Drove 22% uptime improvement and 35% MTTR reduction through proactive incident management and platform stabilization',
      'Delivered platform migrations $250K under budget, maintaining zero disruption to live banking operations',
    ],
  },
  {
    company: 'Cincom Systems India Pvt. Ltd.',
    shortName: 'Cincom Systems',
    role: 'Sr Member Technical Staff',
    period: 'Dec 2007 – Jun 2009',
    location: 'India',
    logo: '/logos/cincom.png',
    color: '#6366f1',
    tagline: 'Enterprise software systems — building the engineering foundation.',
    wins: [],
    responsibilities: [
      'Senior technical contributor working on enterprise software systems',
    ],
  },
  {
    company: 'Kale Consultants (now Accelya)',
    shortName: 'Kale Consultants',
    role: 'Software Engineer',
    period: '2005 – Dec 2007',
    location: 'India',
    logo: '/logos/kale.png',
    color: '#ec4899',
    tagline: 'Airline booking and reservation systems for BCD Travel and Air India across 9 countries.',
    wins: [],
    responsibilities: [
      'Built airline booking and reservation systems for BCD Travel and Air India, deployed across 9 countries',
      'Developed core modules for airline departure control and passenger service systems',
    ],
  },
]

function ExperienceModal({ exp, onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 pb-10 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-surface-900/50 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-surface-200"
      >
        {/* Accent bar */}
        <div className="h-1.5 w-full rounded-t-2xl" style={{ backgroundColor: exp.color }} />

        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-surface-500 hover:text-surface-700 hover:bg-surface-200 transition-colors z-10">
          <X className="w-4 h-4" />
        </button>

        {/* Fixed header */}
        <div className="p-6 pb-4 border-b border-surface-100">
          <div className="flex items-start gap-4">
            {exp.logo && (
              <img src={exp.logo} alt={exp.shortName} className="h-10 max-w-[100px] object-contain" />
            )}
            <div>
              <h3 className="text-xl font-bold text-surface-900">{exp.company}</h3>
              <p className="text-base font-medium" style={{ color: exp.color }}>{exp.role}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-surface-500">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="p-6 pt-4 overflow-y-auto max-h-[60vh]">
          {/* Tagline */}
          <p className="text-sm text-surface-600 italic mb-6">{exp.tagline}</p>

          {/* Wins */}
          {exp.wins.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Key Results</h4>
              <div className="grid grid-cols-2 gap-3">
                {exp.wins.map((w) => (
                  <div key={w.desc} className="p-3 rounded-xl bg-surface-50 border border-surface-100">
                    <div className="text-lg font-bold" style={{ color: exp.color }}>{w.metric}</div>
                    <p className="text-xs text-surface-700 mt-0.5">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          <div>
            <h4 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">Roles & Responsibilities</h4>
            <ul className="space-y-2.5">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="text-sm text-surface-700 leading-relaxed flex gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-14 max-w-2xl">
            <span className="text-sm text-surface-500 font-mono tracking-wider">04 // Track Record</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-tight text-surface-900">
              I don't just advise. <span className="text-primary-600">Here's proof I deliver.</span>
            </h2>
            <p className="text-surface-600 mt-3">
              20 years of shipped systems, saved millions, and teams that still perform after I leave. Click any role to see full details.
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="space-y-5"
          >
            {track.map((t) => (
              <motion.div
                key={t.company}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                onClick={() => setSelected(t)}
                className="p-6 lg:p-8 rounded-2xl border border-surface-200 bg-white hover:shadow-lg hover:border-primary-200 transition-all cursor-pointer group"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {t.logo ? (
                    <img src={t.logo} alt={t.shortName} className="h-8 max-w-[100px] object-contain" />
                  ) : (
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: t.color }}>
                      {t.shortName[0]}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold text-surface-900">{t.shortName}</h3>
                      <span className="text-sm text-surface-700 font-medium">{t.role}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-surface-600 bg-surface-100 px-3 py-1 rounded-full">
                    {t.period}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-sm text-surface-700 italic mb-5">{t.tagline}</p>

                {/* Wins grid */}
                {t.wins.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    {t.wins.map((w) => (
                      <div key={w.desc} className="p-3 rounded-xl bg-surface-50 border border-surface-100">
                        <div className="text-xl font-bold" style={{ color: t.color }}>{w.metric}</div>
                        <p className="text-xs text-surface-700 mt-1 leading-relaxed">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  View roles & responsibilities
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && <ExperienceModal exp={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

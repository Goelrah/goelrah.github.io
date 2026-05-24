import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const track = [
  {
    company: 'Amazon',
    role: 'Staff Technical Program Manager',
    period: '2022 – Present',
    logo: '/logos/amazon.png',
    color: '#FF9900',
    tagline: 'The systems I built here are what I now help clients replicate.',
    wins: [
      { metric: '$8M/yr', desc: 'cloud cost savings through automated FinOps governance' },
      { metric: '88%', desc: 'autonomous ticket resolution via production GenAI' },
      { metric: '$5.3B', desc: 'capital program delivered — $50M/yr cost avoidance' },
      { metric: '15+', desc: 'global markets with unified observability platform' },
    ],
  },
  {
    company: 'Deloitte',
    role: 'Engineering Director',
    period: '2015 – 2022',
    logo: '/logos/deloitte.png',
    color: '#86BC25',
    tagline: '10+ Fortune 500 clients. Every engagement delivered measurable outcomes.',
    wins: [
      { metric: '2.5x', desc: 'marketing ROI via AI-driven customer data platform' },
      { metric: '45', desc: 'engineers hired, trained, and scaled from zero' },
      { metric: '40%', desc: 'operational cost reduction for branchless banking' },
      { metric: '35%', desc: 'time-to-market improvement through modular architecture' },
    ],
  },
  {
    company: 'Royal Bank of Scotland',
    role: 'Team Lead',
    period: '2009 – 2014',
    logo: '/logos/rbs.png',
    color: '#42145F',
    tagline: 'Mission-critical banking. 15M+ customers. Zero tolerance for downtime.',
    wins: [
      { metric: '22%', desc: 'uptime improvement across 16 banking applications' },
      { metric: '$250K', desc: 'under budget on platform migrations — zero disruption' },
    ],
  },
  {
    company: 'Earlier Career',
    role: 'Cincom Systems · Kale Consultants',
    period: '2005 – 2009',
    logo: '/logos/kale.png',
    color: '#6366f1',
    tagline: 'Enterprise software and airline systems across 9 countries.',
    wins: [],
  },
]

export default function Experience() {
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
              20 years of shipped systems, saved millions, and teams that still perform after I leave.
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="space-y-6"
          >
            {track.map((t) => (
              <motion.div
                key={t.company}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="p-6 lg:p-8 rounded-2xl border border-surface-200 bg-white hover:shadow-lg hover:border-primary-200 transition-all"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {t.logo ? (
                    <img src={t.logo} alt={t.company} className="h-8 max-w-[100px] object-contain" />
                  ) : (
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: t.color }}>
                      {t.company[0]}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold text-surface-900">{t.company}</h3>
                      <span className="text-sm text-surface-500">{t.role}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-surface-400 bg-surface-100 px-3 py-1 rounded-full">
                    {t.period}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-sm text-surface-600 italic mb-5">{t.tagline}</p>

                {/* Wins grid */}
                {t.wins.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {t.wins.map((w) => (
                      <div key={w.desc} className="p-3 rounded-xl bg-surface-50 border border-surface-100">
                        <div className="text-xl font-bold text-surface-900" style={{ color: t.color }}>{w.metric}</div>
                        <p className="text-xs text-surface-600 mt-1 leading-relaxed">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

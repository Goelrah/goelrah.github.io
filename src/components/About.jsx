import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24 bg-surface-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="text-sm text-surface-500 font-mono tracking-wider block">
            03 // About
          </motion.span>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex items-center gap-6 mt-6 mb-10">
            <img
              src="/rahul-goel.jpg"
              alt="Rahul Goel"
              className="w-32 h-32 lg:w-60 lg:h-60 rounded-full object-cover object-[center_20%] border-4 border-white shadow-xl -mt-2 -ml-2"
            />
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-surface-900 leading-tight mb-2">
                Rahul Goel
              </h2>
              <p className="text-primary-600 font-medium">Independent Technology Consultant</p>
              <p className="text-sm text-surface-500 mt-1">Bangalore, India · Remote worldwide</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-5 text-surface-600 leading-relaxed">
              <p>
                I spent 17 years inside Amazon and Deloitte building the systems and teams that most 
                consultants only advise on. I've governed a $162M AWS portfolio, shipped production GenAI 
                that resolves 88% of tickets without human intervention, and directed a $5.3B capital program.
              </p>
              <p>
                Now I bring that same execution intensity to organizations that need senior technical 
                leadership without the 6-month hiring cycle. I don't do slide decks. I embed with your 
                team, own the delivery, and leave you with a working system and a team that can sustain it.
              </p>
              <p className="text-surface-800 font-medium border-l-3 border-primary-400 pl-4 bg-primary-50/50 py-3 rounded-r-lg">
                "If you're hiring a consultant to tell you what to do, you don't need me. If you're hiring 
                someone to actually do it — at the quality level of a Staff engineer at Amazon — let's talk."
              </p>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-8">
              <div>
                <h3 className="text-sm text-surface-500 font-mono tracking-wider mb-4">Credentials</h3>
                {[
                  { name: 'PMP — Project Management Professional', org: 'PMI, 2025' },
                  { name: 'AWS Certified Solutions Architect', org: 'AWS, 2024' },
                  { name: 'Google Cloud GenAI Leader', org: 'Google, 2025' },
                  { name: 'PRINCE2 Practitioner', org: 'AXELOS, UK' },
                  { name: 'ITIL v3 Foundation', org: 'APMG International' },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-2.5 border-b border-surface-200 group hover:border-primary-300 transition-colors">
                    <span className="text-sm text-surface-800 font-medium group-hover:text-primary-700 transition-colors">{c.name}</span>
                    <span className="text-xs text-surface-500 flex-shrink-0 ml-4">{c.org}</span>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm text-surface-500 font-mono tracking-wider mb-4">Track Record</h3>
                {[
                  { name: 'GenAI Program Lead Award', org: 'Amazon, 2024' },
                  { name: 'Best Performing Engineering Manager', org: 'Deloitte, FY2020 & FY2021' },
                  { name: 'Best Team Lead', org: 'RBS, 2011 & 2012' },
                  { name: 'Ovation Excellence Award', org: 'RBS, 2011' },
                ].map((a) => (
                  <div key={a.name} className="flex items-center justify-between py-2.5 border-b border-surface-200 group hover:border-primary-300 transition-colors">
                    <span className="text-sm text-surface-800 font-medium group-hover:text-primary-700 transition-colors">{a.name}</span>
                    <span className="text-xs text-surface-500 flex-shrink-0 ml-4">{a.org}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

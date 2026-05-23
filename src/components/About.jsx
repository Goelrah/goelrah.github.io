import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="text-sm text-surface-500 font-mono tracking-wider block">
              01 // About
            </motion.span>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-bold mt-4 mb-8 leading-tight">
              I help organizations deliver AI programs that <span className="text-primary-400">actually ship.</span>
            </motion.h2>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-6 text-surface-400 leading-relaxed">
              <p>
                20 years delivering portfolio-scale programs where the stakes are high and the margin 
                for error is low. Production GenAI systems that resolve 88% of tickets autonomously. 
                Cloud governance that saves $8M annually. Capital programs worth $5.3B.
              </p>
              <p>
                I've built TPM orgs, coached engineering teams across 15+ global markets, and translated 
                technical complexity into executive decisions at Amazon, Deloitte, and Fortune 500 clients.
              </p>
              <p>
                Whether it's agentic workflow design, RAG architecture, cloud FinOps governance, or 
                scaling engineering teams — I specialize in the gap between "promising PoC" and 
                "production system generating ROI."
              </p>
            </motion.div>
          </motion.div>

          {/* Right — credentials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
            className="space-y-8"
          >
            {/* Certifications */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <h3 className="text-sm text-surface-500 font-mono tracking-wider mb-4">Certifications</h3>
              <div className="space-y-0">
                {[
                  { name: 'PMP — Project Management Professional', org: 'PMI, 2025' },
                  { name: 'AWS Certified Solutions Architect', org: 'AWS, 2024' },
                  { name: 'Google Cloud GenAI Leader', org: 'Google, 2025' },
                  { name: 'PRINCE2 Practitioner', org: 'AXELOS, UK' },
                  { name: 'ITIL v3 Foundation', org: 'APMG International' },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-3 border-b border-surface-800/50 group hover:border-primary-500/30 transition-colors">
                    <span className="text-sm text-white font-medium group-hover:text-primary-300 transition-colors">{c.name}</span>
                    <span className="text-xs text-surface-500 flex-shrink-0 ml-4">{c.org}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <h3 className="text-sm text-surface-500 font-mono tracking-wider mb-4">Recognition</h3>
              <div className="space-y-0">
                {[
                  { name: 'GenAI Program Lead Award', org: 'Amazon, 2024' },
                  { name: 'Best Performing Engineering Manager', org: 'Deloitte, FY2020 & FY2021' },
                  { name: 'Best Team Lead', org: 'RBS, 2011 & 2012' },
                  { name: 'Ovation Excellence Award', org: 'RBS, 2011' },
                ].map((a) => (
                  <div key={a.name} className="flex items-center justify-between py-3 border-b border-surface-800/50 group hover:border-primary-500/30 transition-colors">
                    <span className="text-sm text-white font-medium group-hover:text-primary-300 transition-colors">{a.name}</span>
                    <span className="text-xs text-surface-500 flex-shrink-0 ml-4">{a.org}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

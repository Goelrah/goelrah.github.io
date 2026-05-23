import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="text-sm text-surface-500 font-mono tracking-wider block">
            01 // About
          </motion.span>

          {/* Header with photo */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex items-center gap-6 mt-6 mb-10">
            <img
              src="/rahul-goel.jpg"
              alt="Rahul Goel"
              className="w-32 h-32 lg:w-60 lg:h-60 rounded-full object-cover object-[center_20%] border-3 border-primary-500/30 shadow-xl shadow-primary-500/10 -mt-2 -ml-2"
            />
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                I help organizations deliver AI programs that <span className="text-primary-400">actually ship.</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">
            {/* Left — About text */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-5 text-surface-400 leading-relaxed">
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

            {/* Right — Credentials */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-8">
              {/* Certifications */}
              <div>
                <h3 className="text-sm text-surface-500 font-mono tracking-wider mb-4">Certifications</h3>
                {[
                  { name: 'PMP — Project Management Professional', org: 'PMI, 2025' },
                  { name: 'AWS Certified Solutions Architect', org: 'AWS, 2024' },
                  { name: 'Google Cloud GenAI Leader', org: 'Google, 2025' },
                  { name: 'PRINCE2 Practitioner', org: 'AXELOS, UK' },
                  { name: 'ITIL v3 Foundation', org: 'APMG International' },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-2.5 border-b border-surface-800/50 group hover:border-primary-500/30 transition-colors">
                    <span className="text-sm text-white font-medium group-hover:text-primary-300 transition-colors">{c.name}</span>
                    <span className="text-xs text-surface-500 flex-shrink-0 ml-4">{c.org}</span>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-sm text-surface-500 font-mono tracking-wider mb-4">Recognition</h3>
                {[
                  { name: 'GenAI Program Lead Award', org: 'Amazon, 2024' },
                  { name: 'Best Performing Engineering Manager', org: 'Deloitte, FY2020 & FY2021' },
                  { name: 'Best Team Lead', org: 'RBS, 2011 & 2012' },
                  { name: 'Ovation Excellence Award', org: 'RBS, 2011' },
                ].map((a) => (
                  <div key={a.name} className="flex items-center justify-between py-2.5 border-b border-surface-800/50 group hover:border-primary-500/30 transition-colors">
                    <span className="text-sm text-white font-medium group-hover:text-primary-300 transition-colors">{a.name}</span>
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

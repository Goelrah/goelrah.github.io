import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { useState } from 'react'
import DiscoveryForm from './DiscoveryForm'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Hero({ scrollToSection }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
    <section id="top" className="relative min-h-screen flex items-center bg-gradient-to-br from-surface-50 via-primary-50/30 to-surface-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <Calendar className="w-3.5 h-3.5 text-green-600" />
                <span className="text-sm text-green-700 font-medium">Currently booking for Q3 2026</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 max-w-xl text-surface-900"
            >
              I turn complex technical programs into <span className="text-primary-600">shipped products that generate ROI.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg text-surface-600 max-w-lg mb-8 leading-relaxed"
            >
              Independent Technology Consultant & Senior TPM. 20 years. I'm the person you hire — full-time 
              or on contract — when your GenAI initiative is stuck, your cloud portfolio is bleeding money, 
              or your engineering org has stopped scaling.
            </motion.p>

            {/* Expertise tags */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-wrap gap-2 mb-10">
              {['AI & GenAI', 'Cloud & FinOps', 'Platform Engineering', 'Capital Programs', 'Open Source', 'IoT', 'BFSI', 'Salesforce', 'SAP', 'Custom Development'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.08, y: -2, transition: { duration: 0.2 } }}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-surface-200 text-surface-700 shadow-sm hover:border-primary-300 hover:text-primary-700 hover:shadow-md transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors text-base shadow-lg shadow-primary-600/20"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-2 px-7 py-4 border border-surface-300 text-surface-700 font-medium rounded-xl hover:border-primary-300 hover:text-primary-700 transition-colors bg-white"
              >
                See how I work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — Infographic card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative p-8 rounded-3xl bg-white border border-surface-200 shadow-xl">
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <img
                  src="/rahul-goel.jpg"
                  alt="Rahul Goel"
                  className="w-28 h-28 rounded-full object-cover object-[center_20%] border-4 border-primary-100 shadow-lg"
                />
              </div>

              <h3 className="text-center text-lg font-bold text-surface-900 mb-1">Rahul Goel</h3>
              <p className="text-center text-sm text-primary-600 font-medium mb-1">Technology Consultant & Senior TPM</p>
              <p className="text-center text-[11px] text-surface-500 mb-6">Consulting · Fractional · Full-Time</p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-violet-50 border border-violet-100 text-center">
                  <div className="text-xl font-bold text-violet-700">20+</div>
                  <div className="text-[10px] text-violet-600 font-medium">Years</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
                  <div className="text-xl font-bold text-blue-700">$8M+</div>
                  <div className="text-[10px] text-blue-600 font-medium">Savings Delivered</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                  <div className="text-xl font-bold text-emerald-700">88%</div>
                  <div className="text-[10px] text-emerald-600 font-medium">AI Automation</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
                  <div className="text-xl font-bold text-amber-700">15+</div>
                  <div className="text-[10px] text-amber-600 font-medium">Global Markets</div>
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-surface-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  AWS Certified Solutions Architect
                </div>
                <div className="flex items-center gap-2 text-xs text-surface-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  PMP — Project Management Professional
                </div>
                <div className="flex items-center gap-2 text-xs text-surface-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  Google Cloud GenAI Leader
                </div>
              </div>

              {/* Previously at */}
              <div className="mt-5 pt-4 border-t border-surface-100">
                <p className="text-[10px] text-surface-400 uppercase tracking-wider mb-2">Previously at</p>
                <p className="text-xs text-surface-600 font-medium">Amazon · Deloitte · RBS · 10+ Fortune 500</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <DiscoveryForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  )
}

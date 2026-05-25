import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { PiBrainDuotone, PiCloudDuotone, PiCpuDuotone, PiDatabaseDuotone, PiGlobeDuotone, PiRocketLaunchDuotone, PiSparkle, PiLightningDuotone } from 'react-icons/pi'
import { useState, useRef } from 'react'
import DiscoveryForm from './DiscoveryForm'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

// Floating background icons for the hero
const floatingIcons = [
  { Icon: PiBrainDuotone, x: '8%', y: '18%', delay: 0, duration: 6, size: 32, color: '#7c3aed' },
  { Icon: PiCloudDuotone, x: '82%', y: '12%', delay: 1, duration: 7, size: 36, color: '#2563eb' },
  { Icon: PiCpuDuotone, x: '72%', y: '72%', delay: 2, duration: 5, size: 28, color: '#059669' },
  { Icon: PiDatabaseDuotone, x: '12%', y: '68%', delay: 0.5, duration: 8, size: 30, color: '#d97706' },
  { Icon: PiGlobeDuotone, x: '88%', y: '48%', delay: 1.5, duration: 6.5, size: 34, color: '#0891b2' },
  { Icon: PiRocketLaunchDuotone, x: '4%', y: '42%', delay: 3, duration: 7, size: 28, color: '#dc2626' },
  { Icon: PiSparkle, x: '68%', y: '22%', delay: 2.5, duration: 5.5, size: 26, color: '#7c3aed' },
  { Icon: PiLightningDuotone, x: '22%', y: '82%', delay: 1.8, duration: 6, size: 30, color: '#f59e0b' },
]

export default function Hero({ scrollToSection }) {
  const [showForm, setShowForm] = useState(false)
  const cardRef = useRef(null)

  // Mouse-tracking tilt values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 15 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 15 })

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <>
    <section id="top" className="relative min-h-screen flex items-center bg-gradient-to-br from-surface-50 via-primary-50/30 to-surface-100 overflow-hidden">
      {/* Animated floating background icons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {floatingIcons.map(({ Icon, x, y, delay, duration, size, color }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0.5, 0],
              scale: [0.6, 1.1, 1, 0.6],
              y: [0, -25, 25, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          >
            <div
              className="rounded-xl flex items-center justify-center"
              style={{
                width: size + 16,
                height: size + 16,
                background: `linear-gradient(135deg, ${color}15, ${color}30)`,
                boxShadow: `0 4px 12px ${color}30, inset 0 1px 2px rgba(255,255,255,0.4)`,
                border: `1px solid ${color}25`,
              }}
            >
              <Icon size={size} color={color} strokeWidth={1.5} />
            </div>
          </motion.div>
        ))}

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-primary-300/30 blur-3xl"
          style={{ top: '10%', right: '10%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-violet-300/25 blur-3xl"
          style={{ bottom: '10%', left: '5%' }}
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-amber-200/20 blur-3xl"
          style={{ top: '50%', left: '40%' }}
          animate={{
            scale: [0.9, 1.2, 0.9],
            opacity: [0.2, 0.5, 0.2],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

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
              I turn complex technical programs into{' '}
              <motion.span
                className="text-primary-600 relative inline-block"
                initial={{ backgroundSize: '0% 3px' }}
                animate={{ backgroundSize: '100% 3px' }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                style={{
                  backgroundImage: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom left',
                }}
              >
                shipped products that generate ROI.
              </motion.span>
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
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(79, 70, 229, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="relative inline-flex items-center gap-2 px-7 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors text-base shadow-lg shadow-primary-600/20 overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                />
                <span className="relative">Book a Discovery Call</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#6366f1' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-2 px-7 py-4 border border-surface-300 text-surface-700 font-medium rounded-xl hover:border-primary-300 hover:text-primary-700 transition-colors bg-white"
              >
                See how I work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — 3D Tilted Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative" style={{ perspective: '1000px' }}>
              {/* Colored background panel (behind the card, slightly offset) */}
              <motion.div
                className="absolute -inset-6 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                }}
                animate={{ rotateY: [-8, -5, -8], rotateX: [3, 5, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* White card — tilted */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative bg-white rounded-3xl shadow-2xl p-10 w-[400px]"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                animate={{ rotateY: [-5, 5, -5], rotateX: [3, -3, 3] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Photo with colored ring */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-[5px] rounded-full"
                      style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    />
                    <img
                      src="/rahul-goel.jpg"
                      alt="Rahul Goel — Staff TPM & Technology Consultant"
                      className="relative w-32 h-32 rounded-full object-cover object-[center_20%] border-4 border-white shadow-lg z-10"
                    />
                    {/* Available badge */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      Available
                    </motion.div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-center text-2xl font-bold text-surface-900 mt-2 mb-1">Rahul Goel</h3>
                <p className="text-center text-sm text-surface-500 mb-6 leading-relaxed">
                  Technology Consultant &<br />Senior Technical Program Manager
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { value: '20+', label: 'Years' },
                    { value: '$8M', label: 'Saved' },
                    { value: '88%', label: 'AI Auto' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-lg font-black text-primary-600">{stat.value}</div>
                      <div className="text-[10px] text-surface-500 font-medium uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Credential pills */}
                <div className="space-y-2 mb-6">
                  {[
                    'AWS Solutions Architect',
                    'PMP Certified',
                    'Google Cloud GenAI Leader',
                  ].map((cred, i) => (
                    <motion.div
                      key={cred}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                      className="flex items-center gap-2 text-xs text-surface-700 bg-surface-50 rounded-lg px-3 py-2 border border-surface-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500" />
                      <span className="font-medium">{cred}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Client logos marquee */}
                <div className="pt-4 border-t border-surface-200 overflow-hidden">
                  <p className="text-[11px] text-surface-600 uppercase tracking-widest font-bold text-center mb-3">Trusted by</p>
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    <motion.div
                      className="flex items-center gap-6 whitespace-nowrap"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    >
                      {[...Array(2)].flatMap((_, setIdx) =>
                        [
                          { name: 'Amazon', logo: '/logos/amazon.png' },
                          { name: 'Deloitte', logo: '/logos/deloitte.png' },
                          { name: 'RBS', logo: '/logos/rbs.png' },
                          { name: 'Broadcom', logo: '/logos/broadcom.png' },
                          { name: 'Scholastic', logo: '/logos/scholashtic.png' },
                        ].map((company, i) => (
                          <img
                            key={`${setIdx}-${company.name}`}
                            src={company.logo}
                            alt={company.name}
                            className="h-5 max-w-[70px] object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                          />
                        ))
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <DiscoveryForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  )
}

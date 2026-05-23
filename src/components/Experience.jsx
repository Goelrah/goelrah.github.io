import { useState, useRef, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, MapPin, ArrowRight } from 'lucide-react'
import * as THREE from 'three'

const experiences = [
  {
    id: 'amazon',
    company: 'Amazon India Development Centre',
    shortName: 'Amazon',
    role: 'Senior Technical Program Manager',
    period: 'Mar 2022 – Present',
    duration: '4+ years',
    location: 'Bangalore, India',
    color: '#f59e0b',
    logo: '/logos/amazon.png',
    teaser: 'Owning $165M AWS portfolio, production GenAI, and $5.3B capital programs at VP/C-suite level.',
    description: 'Owned end-to-end delivery of AI-first and platform programs across Amazon\'s $165M AWS portfolio. Served as single point of accountability for VP and C-suite programs, driving goal alignment across engineering, finance, and operations. Built and coached a TPM org, led architecture reviews, defined KPIs, built executive reporting dashboards, and mobilized cross-functional teams.',
    highlights: [
      'GenAI and Agentic Platform Delivery: Drove end-to-end delivery on AWS Bedrock Agents. AskGenie achieved 88% autonomous resolution rate. Procurement Advisor automated inventory across 1,200+ facilities on $250M+ spend — $2.3M annual ROI, 25% manual effort reduction.',
      'Cloud Governance: Automated guardrails, rightsizing, and RI optimization across $162M AWS portfolio — $8M annual cloud cost savings. Owned FinOps governance framework for VP-level stakeholders.',
      'Regulatory and Compliance: Global GDPR compliance across all Tier 1 and Tier 2 services, 2 months ahead of deadline. Org-wide Privacy by Design adoption.',
      'Capital Program: Directed $5.3B Capital Planning across 4 cross-functional teams — $50M/year cost avoidance through governance cadences and executive KPI reporting.',
      'Platform Reliability: EagleEye multi-region platform (Python, Lambda, Prometheus, Datadog) across 15+ global markets — 20% throughput improvement.',
      'Engineering Leadership: Managed 10+ Senior Engineers and TPMs. GenAI Program Lead Award (2024). AI Automator Award recipient.',
    ],
  },
  {
    id: 'deloitte',
    company: 'Deloitte Consulting India Pvt. Ltd.',
    shortName: 'Deloitte',
    role: 'Engineering Lead and Delivery Manager',
    period: 'Nov 2015 – Mar 2022',
    duration: '6.5 years',
    location: 'Gurgaon, India',
    color: '#86bc25',
    logo: '/logos/deloitte.png',
    teaser: 'Led 45-member engineering teams across 10+ Fortune 500 clients. Best Performing Manager.',
    description: 'Built and led engineering teams across 10+ Fortune 500 client engagements spanning marketing technology, banking, retail, and digital experience. Partnered directly with CTO and C-suite stakeholders to define technology strategy, manage program budgets, and deliver measurable outcomes.',
    highlights: [
      'People Leadership: Built and grew 45-member engineering teams. Best Performing Manager (FY2020 and FY2021).',
      'HUX Platform: Full-stack CDP on Snowflake with LLM-driven orchestration via Adobe Magento — 2.5x marketing ROI, 22% e-commerce sales increase, 12% churn reduction.',
      'Java Architecture: Broadcom Customer Service Portal — HLD/LLD API architecture, Java microservices, full SDLC from SOW through production.',
      'Platform Architecture: Scholastic digital commerce — Solr full-text search, 35% time-to-market reduction through modular architecture and CI/CD.',
      'Banking Platform: ING Group branchless banking on Azure (.NET, Java) with AI avatar and facial recognition — 40% operational overhead reduction.',
    ],
  },
  {
    id: 'shell',
    company: 'Shell Infotech India Pvt. Ltd. (at Deloitte)',
    shortName: 'Shell Infotech',
    role: 'Project Manager',
    period: 'Mar 2015 – Nov 2015',
    duration: '8 months',
    location: 'India',
    color: '#3b82f6',
    logo: '/logos/deloitte.png',
    teaser: 'Managed project delivery for Deloitte client engagements.',
    description: 'Managed project delivery for Deloitte client engagements prior to transitioning into a full-time Deloitte role.',
    highlights: [],
  },
  {
    id: 'rbs',
    company: 'Royal Bank of Scotland Group (now NatWest Group)',
    shortName: 'RBS',
    role: 'Team Lead',
    period: 'Jul 2009 – Jul 2014',
    duration: '5 years',
    location: 'India',
    color: '#6366f1',
    logo: '/logos/rbs.png',
    teaser: '16 mission-critical banking apps serving 15M+ customers. 22% uptime improvement.',
    description: 'Owned and managed a portfolio of 16 mission-critical core banking and back-office applications serving 15M+ retail and commercial banking customers across the UK.',
    highlights: [
      'Drove 22% uptime improvement and 35% MTTR reduction through proactive incident management and platform stabilization.',
      'Delivered platform migrations $250K under budget, maintaining zero disruption to live banking operations.',
    ],
  },
  {
    id: 'cincom',
    company: 'Cincom Systems India Pvt. Ltd.',
    shortName: 'Cincom',
    role: 'Sr Member Technical Staff',
    period: 'Dec 2007 – Jun 2009',
    duration: '1.5 years',
    location: 'India',
    color: '#8b5cf6',
    logo: '/logos/cincom.png',
    teaser: 'Enterprise software systems development.',
    description: 'Senior technical contributor working on enterprise software systems.',
    highlights: [],
  },
  {
    id: 'kale',
    company: 'Kale Consultants (now Accelya)',
    shortName: 'Kale',
    role: 'Software Engineer',
    period: '2005 – Dec 2007',
    duration: '2.5 years',
    location: 'India',
    color: '#ec4899',
    logo: '/logos/kale.png',
    teaser: 'Airline booking systems for BCD Travel and Air India across 9 countries.',
    description: 'Built airline booking and reservation systems for BCD Travel and Air India, deployed across 9 countries. Developed core modules for airline departure control and passenger service systems.',
    highlights: [],
  },
]

// Minimal 3D decoration — just the glowing path with nodes (no text inside)
function JourneyDecoration() {
  const groupRef = useRef()

  const curve = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 3, 0),
    new THREE.Vector3(0.5, 1.8, 0),
    new THREE.Vector3(-0.3, 0.6, 0),
    new THREE.Vector3(0.4, -0.6, 0),
    new THREE.Vector3(-0.2, -1.8, 0),
    new THREE.Vector3(0.3, -3, 0),
  ]), [])

  const linePoints = useMemo(() => {
    const pts = curve.getPoints(80)
    const pos = new Float32Array(pts.length * 3)
    pts.forEach((p, i) => { pos[i*3]=p.x; pos[i*3+1]=p.y; pos[i*3+2]=p.z })
    return pos
  }, [curve])

  const nodePositions = useMemo(() => {
    return experiences.map((_, i) => curve.getPoint(i / (experiences.length - 1)))
  }, [curve])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={81} array={linePoints} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.6} />
      </line>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={81} array={linePoints} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#a78bfa" transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </line>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={experiences[i].color} />
        </mesh>
      ))}
      <Particles curve={curve} />
    </group>
  )
}

function Particles({ curve }) {
  const ref = useRef()
  const count = 15
  const positions = useMemo(() => new Float32Array(count * 3), [])
  const speeds = useMemo(() => Array.from({ length: count }, () => ({ t: Math.random(), s: 0.01 + Math.random() * 0.02 })), [])

  useFrame(() => {
    speeds.forEach((p, i) => {
      p.t += p.s * 0.016; if (p.t > 1) p.t = 0
      const pt = curve.getPoint(p.t)
      positions[i*3]=pt.x; positions[i*3+1]=pt.y; positions[i*3+2]=pt.z
    })
    if (ref.current) ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#06b6d4" transparent opacity={0.8} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

// Modal
function ExperienceModal({ experience, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-4 z-[9999] overflow-y-auto"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="fixed inset-0 bg-surface-950/95" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-surface-900 border border-surface-700/50 shadow-2xl"
      >
        <div className="h-1.5 w-full rounded-t-2xl" style={{ backgroundColor: experience.color }} />
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-800 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700 transition-colors z-10">
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            {experience.logo ? (
              <img src={experience.logo} alt={experience.shortName} className="h-14 max-w-[160px] object-contain flex-shrink-0 bg-white rounded-xl p-2.5 shadow-lg" />
            ) : (
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0" style={{ backgroundColor: experience.color }}>
                {experience.shortName[0]}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white">{experience.company}</h3>
              <p className="text-base font-medium" style={{ color: experience.color }}>{experience.role}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-surface-400">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{experience.period}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{experience.location}</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: `${experience.color}20`, color: experience.color }}>{experience.duration}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-surface-300 leading-relaxed mb-6">{experience.description}</p>

          {experience.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {experience.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-surface-300 leading-relaxed flex gap-2.5">
                    <span className="mt-1 flex-shrink-0" style={{ color: experience.color }}>→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main
export default function Experience() {
  const [selected, setSelected] = useState(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm text-surface-500 font-mono tracking-wider">02 // Career</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 leading-tight">
            20 years of <span className="text-primary-400">increasing scope and impact.</span>
          </h2>
          <p className="text-surface-400 max-w-2xl">
            From enterprise software to mission-critical banking, Fortune 500 delivery, and AI program leadership at Amazon.
          </p>
        </motion.div>

        {/* Split layout: 3D decoration left, vertical timeline right */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          {/* 3D Path — decorative, vertical */}
          <div className="hidden lg:block h-full min-h-[600px] rounded-2xl border border-surface-800/30 bg-surface-900/20 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
              <JourneyDecoration />
            </Canvas>
          </div>

          {/* Vertical Timeline — large, readable cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-surface-800 to-surface-800" />

            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-14 group"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-[14px] top-6 w-[13px] h-[13px] rounded-full border-[3px] border-surface-950 group-hover:scale-150 transition-transform duration-300"
                    style={{ backgroundColor: exp.color }}
                  />

                  {/* Card */}
                  <motion.button
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    onClick={() => setSelected(exp)}
                    className="w-full text-left p-5 rounded-xl border border-surface-800/50 bg-surface-900/40 hover:border-primary-500/30 hover:bg-surface-800/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Period + Duration */}
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-surface-500">{exp.period}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${exp.color}20`, color: exp.color }}>
                            {exp.duration}
                          </span>
                        </div>

                        {/* Company + Role */}
                        <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">{exp.shortName}</h3>
                        <p className="text-sm text-surface-400 mt-0.5">{exp.role}</p>

                        {/* Teaser */}
                        <p className="text-sm text-surface-300 mt-2 leading-relaxed">{exp.teaser}</p>
                      </div>

                      {/* Company logo */}
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.shortName} className="h-10 max-w-[120px] object-contain flex-shrink-0 bg-white rounded-lg p-1.5 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: exp.color }}>
                          {exp.shortName[0]}
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1 mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: exp.color }}>
                      View full details <ArrowRight className="w-3 h-3" />
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal — rendered via portal to escape stacking contexts */}
      {createPortal(
        <AnimatePresence>
          {selected && <ExperienceModal experience={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

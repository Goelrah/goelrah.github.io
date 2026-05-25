import { motion } from 'framer-motion'

// Floating icon that bobs up and down
export function FloatingIcon({ children, delay = 0, duration = 3, y = 8, className = '' }) {
  return (
    <motion.div
      animate={{ y: [-y, y, -y] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Icon that pulses/breathes
export function PulsingIcon({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Icon that rotates continuously
export function SpinningIcon({ children, duration = 8, className = '' }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Icon that glows on hover
export function GlowIcon({ children, color = '#6366f1', className = '' }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}40)`,
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Icon that bounces in on scroll
export function BounceInIcon({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Orbiting dot/icon around a center point
export function OrbitingElement({ children, radius = 30, duration = 6, delay = 0, className = '' }) {
  return (
    <motion.div
      animate={{
        x: [radius, 0, -radius, 0, radius],
        y: [0, radius, 0, -radius, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Morphing blob background
export function MorphBlob({ className = '', color = 'rgba(99, 102, 241, 0.08)' }) {
  return (
    <motion.div
      animate={{
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute ${className}`}
      style={{ backgroundColor: color }}
    />
  )
}

// Typing cursor blink
export function BlinkingCursor({ className = '' }) {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className={`inline-block w-0.5 h-5 bg-primary-600 ml-1 ${className}`}
    />
  )
}

// Staggered icon grid - wraps children and staggers their entrance
export function StaggeredIconGrid({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

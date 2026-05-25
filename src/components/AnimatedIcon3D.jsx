import { motion } from 'framer-motion'

/**
 * Modern 3D Animated Icon — colorful gradient background with depth,
 * glossy highlight, colored shadow, and continuous animation.
 */

const sizes = {
  sm: { container: 'w-11 h-11', icon: 'w-5 h-5' },
  md: { container: 'w-14 h-14', icon: 'w-7 h-7' },
  lg: { container: 'w-16 h-16', icon: 'w-8 h-8' },
  xl: { container: 'w-20 h-20', icon: 'w-10 h-10' },
}

const animations = {
  float: {
    animate: { y: [0, -7, 0], rotateY: [0, 8, 0], rotateX: [0, -4, 0] },
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
  pulse: {
    animate: { scale: [1, 1.08, 1], rotateZ: [0, 2, -2, 0] },
    transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
  },
  spin: {
    animate: { rotateY: [0, 360] },
    transition: { duration: 6, repeat: Infinity, ease: 'linear' },
  },
  bounce: {
    animate: { y: [0, -10, 0], scale: [1, 1.06, 1] },
    transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
  },
  tilt: {
    animate: { rotateZ: [-4, 4, -4], rotateX: [-6, 6, -6], rotateY: [-4, 4, -4] },
    transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
  },
  glow: {
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function AnimatedIcon3D({
  children,
  color = '#6366f1',
  gradientTo,
  size = 'md',
  animation = 'float',
  delay = 0,
  className = '',
}) {
  const anim = animations[animation] || animations.float
  const s = sizes[size] || sizes.md
  const toColor = gradientTo || shiftHue(color)

  return (
    <motion.div
      className={`relative ${s.container} flex-shrink-0 ${className}`}
      style={{ perspective: '300px' }}
      animate={anim.animate}
      transition={{ ...anim.transition, delay }}
      whileHover={{
        scale: 1.18,
        rotateY: 20,
        rotateX: -12,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Colored glow underneath */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-lg"
        style={{ background: `linear-gradient(135deg, ${color}50, ${toColor}40)` }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
      />

      {/* Main 3D body */}
      <div
        className={`relative ${s.container} rounded-2xl flex items-center justify-center overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, ${color}, ${toColor})`,
          boxShadow: `
            0 8px 24px -4px ${color}50,
            0 2px 8px -2px ${color}30,
            inset 0 2px 4px rgba(255,255,255,0.3),
            inset 0 -3px 6px rgba(0,0,0,0.15)
          `,
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
        }}
      >
        {/* Top glossy highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[45%] rounded-t-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 100%)',
          }}
        />

        {/* Subtle inner ring */}
        <div
          className="absolute inset-[3px] rounded-xl pointer-events-none"
          style={{
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        />

        {/* Icon */}
        <div className={`relative z-10 ${s.icon} text-white drop-shadow-sm`}>
          {children}
        </div>
      </div>
    </motion.div>
  )
}

// Utility: shift hue slightly for gradient "to" color
function shiftHue(hex) {
  const pairs = {
    '#7c3aed': '#a855f7', // violet → purple
    '#2563eb': '#06b6d4', // blue → cyan
    '#059669': '#10b981', // emerald → green
    '#d97706': '#f59e0b', // amber → yellow
    '#dc2626': '#f97316', // red → orange
    '#0891b2': '#06b6d4', // cyan → teal
    '#6366f1': '#8b5cf6', // indigo → violet
    '#1f2937': '#4b5563', // gray → lighter gray
    '#0077b5': '#0ea5e9', // linkedin blue → sky
    '#f59e0b': '#fbbf24', // amber → yellow
    '#ec4899': '#f472b6', // pink → lighter pink
  }
  return pairs[hex] || lighten(hex)
}

function lighten(hex) {
  // Simple lighten by mixing with white
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const lr = Math.min(255, r + 40)
  const lg = Math.min(255, g + 40)
  const lb = Math.min(255, b + 40)
  return `#${lr.toString(16).padStart(2, '0')}${lg.toString(16).padStart(2, '0')}${lb.toString(16).padStart(2, '0')}`
}

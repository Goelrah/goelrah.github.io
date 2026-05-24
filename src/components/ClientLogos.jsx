import { motion } from 'framer-motion'

const clients = [
  { name: 'Amazon', logo: '/logos/amazon.png' },
  { name: 'Deloitte', logo: '/logos/deloitte.png' },
  { name: 'Broadcom', logo: '/logos/broadcom.png' },
  { name: 'Scholastic', logo: '/logos/scholashtic.png' },
  { name: 'NatWest', logo: '/logos/rbs.png' },
  { name: 'Cincom', logo: '/logos/cincom.png' },
  { name: 'Kale / Accelya', logo: '/logos/kale.png' },
]

const marqueeItems = [...clients, ...clients]

export default function ClientLogos() {
  return (
    <section className="relative py-10 border-y border-surface-200 overflow-hidden">
      <p className="text-[11px] text-surface-400 font-mono tracking-widest text-center uppercase mb-6">
        Trusted by teams at
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling marquee */}
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeItems.map((client, i) => (
            <img
              key={`${client.name}-${i}`}
              src={client.logo}
              alt={client.name}
              className="h-8 lg:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 flex-shrink-0 grayscale hover:grayscale-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

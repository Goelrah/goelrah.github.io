import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const clients = [
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Deloitte', color: '#86BC25' },
  { name: 'Broadcom', color: '#CC092F' },
  { name: 'Scholastic', color: '#E31837' },
  { name: 'ING Group', color: '#FF6200' },
  { name: 'NatWest', color: '#42145F' },
  { name: 'Adobe', color: '#FF0000' },
  { name: 'Shell', color: '#FFD500' },
]

export default function ClientLogos() {
  return (
    <section className="relative py-16 border-y border-surface-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="text-xs text-surface-500 font-mono tracking-wider text-center mb-8 uppercase">
            Trusted by teams at
          </motion.p>
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
          >
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="text-lg lg:text-xl font-bold tracking-tight opacity-40 hover:opacity-90 transition-opacity cursor-default"
                style={{ color: client.color }}
              >
                {client.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

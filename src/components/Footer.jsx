import { motion } from 'framer-motion'
import { PiLinkedinLogoDuotone, PiGithubLogoDuotone, PiEnvelopeDuotone } from 'react-icons/pi'
import AnimatedIcon3D from './AnimatedIcon3D'

export default function Footer({ scrollToSection }) {
  return (
    <footer className="border-t border-surface-200 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-surface-500">
          © {new Date().getFullYear()} Rahul Goel. Independent Technology Consultant & Senior TPM.
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: PiLinkedinLogoDuotone, href: 'https://www.linkedin.com/in/goelrahul25', label: 'LinkedIn', color: '#0077b5', animation: 'float' },
            { icon: PiGithubLogoDuotone, href: 'https://github.com/rahgoel2510', label: 'GitHub', color: '#1f2937', animation: 'pulse' },
            { icon: PiEnvelopeDuotone, href: 'mailto:Rahul.g2510@outlook.com', label: 'Email', color: '#dc2626', animation: 'tilt' },
          ].map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
            >
              <AnimatedIcon3D color={social.color} size="sm" animation={social.animation} delay={i * 0.3}>
                <social.icon className="w-full h-full" />
              </AnimatedIcon3D>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer({ scrollToSection }) {
  return (
    <footer className="border-t border-surface-200 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-surface-500">
          © {new Date().getFullYear()} Rahul Goel. Independent Technology Consultant.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/goelrahul25" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-primary-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/rahgoel2510" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-primary-600 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:Rahul.g2510@outlook.com" className="text-surface-400 hover:text-primary-600 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

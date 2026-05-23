import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer({ scrollToSection }) {
  return (
    <footer className="border-t border-surface-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-surface-500">
          © {new Date().getFullYear()} Rahul Goel. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/goelrahul25" target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/rahgoel2510" target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:Rahul.g2510@outlook.com" className="text-surface-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

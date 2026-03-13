import { Sparkles, Linkedin, Github, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'playbooks', label: 'Playbooks' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer({ scrollToSection }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface-900/50 border-t border-surface-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Rahul Goel</span>
            </button>
            <p className="text-surface-400 mb-6 max-w-md">
              Principal Technical Program Manager and GenAI Architect transforming 
              complex cloud portfolios into high-leverage, measurable outcomes.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/goelrahul25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:bg-surface-700 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Goelrah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:bg-surface-700 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:rahul.g2510@outlook.com"
                className="w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary-400 hover:bg-surface-700 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-surface-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/assets/RahulGoel_Resume.pdf"
                  download
                  className="text-surface-400 hover:text-primary-400 transition-colors"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('playbooks')}
                  className="text-surface-400 hover:text-primary-400 transition-colors"
                >
                  GenAI Playbooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="text-surface-400 hover:text-primary-400 transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-surface-400 hover:text-primary-400 transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-500">
            © {currentYear} Rahul Goel. All rights reserved.
          </p>
          <p className="text-sm text-surface-500">
            Built with React + Tailwind CSS. Hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  )
}
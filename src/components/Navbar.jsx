import { useState, useEffect } from 'react'
import { Menu, X, Download, Sparkles } from 'lucide-react'

const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'now', label: 'Now' },
  { id: 'experience', label: 'Experience' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'playbooks', label: 'Playbooks' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-950/80 backdrop-blur-xl border-b border-surface-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('top')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              Rahul Goel
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-surface-300 hover:text-white hover:bg-surface-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/assets/RahulGoel_Resume.pdf"
              download
              className="btn-secondary text-sm"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary text-sm"
            >
              Work With Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-surface-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-surface-950/95 backdrop-blur-xl border-b border-surface-800/50 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-primary-400 bg-primary-500/10'
                  : 'text-surface-300 hover:text-white hover:bg-surface-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="/assets/RahulGoel_Resume.pdf"
              download
              className="btn-secondary justify-center"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary justify-center"
            >
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
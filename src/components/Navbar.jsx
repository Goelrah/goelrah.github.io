import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Career' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-950/90 backdrop-blur-xl border-b border-surface-800/50' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Name */}
          <button onClick={() => handleNavClick('top')} className="flex items-center gap-2 text-lg font-bold text-white hover:text-primary-400 transition-colors">
            <img src="/rahul-goel.jpg" alt="" className="w-8 h-8 rounded-full object-cover object-[center_20%]" />
            Rahul Goel
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-white bg-surface-800/50'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 text-sm font-medium bg-white text-surface-950 rounded-lg hover:bg-surface-200 transition-colors"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-surface-300">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-surface-950/95 backdrop-blur-xl border-b border-surface-800/50 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-4 py-3 text-surface-300 hover:text-white rounded-lg hover:bg-surface-800/50 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

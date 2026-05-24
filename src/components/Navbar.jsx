import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Track Record' },
  { id: 'projects', label: 'Case Studies' },
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
          <button onClick={() => handleNavClick('top')} className="flex items-center gap-2.5 text-lg font-bold text-white hover:text-primary-400 transition-colors">
            <img src="/rahul-goel.jpg" alt="" className="w-8 h-8 rounded-full object-cover object-[center_20%]" />
            Rahul Goel
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id ? 'text-white bg-surface-800/50' : 'text-surface-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 text-sm font-semibold bg-white text-surface-950 rounded-lg hover:bg-surface-200 transition-colors"
            >
              Hire Me
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-surface-300">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-center px-4 py-3 mt-2 bg-white text-surface-950 font-semibold rounded-lg"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  )
}

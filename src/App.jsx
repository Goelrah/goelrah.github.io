import { useState, useEffect, lazy, Suspense } from 'react'
import { AdminProvider } from './context/AdminContext'
import AdminLogin from './components/admin/AdminLogin'
import AdminToolbar from './components/admin/AdminToolbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Lazy load Three.js background — doesn't block content rendering
const ParticleBackground = lazy(() => import('./components/ParticleBackground'))

function App() {
  const [activeSection, setActiveSection] = useState('top')

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => sectionObserver.observe(section))

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section))
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AdminProvider>
      <div className="min-h-screen bg-surface-950 relative">
        {/* Three.js Particle Background — lazy loaded, non-blocking */}
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>

        {/* Subtle grid overlay */}
        <div className="fixed inset-0 grid-pattern pointer-events-none z-[1]" />
        
        {/* Navigation */}
        <Navbar 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer scrollToSection={scrollToSection} />
        
        {/* Floating Components */}
        <ScrollToTop />

        {/* Admin Components */}
        <AdminLogin />
        <AdminToolbar />
      </div>
    </AdminProvider>
  )
}

export default App

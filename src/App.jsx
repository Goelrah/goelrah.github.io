import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [activeSection, setActiveSection] = useState('top')

  // Intersection Observer for scroll animations and active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    
    // Active section observer
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

    // Animation observer
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    sections.forEach((section) => sectionObserver.observe(section))
    animatedElements.forEach((el) => animationObserver.observe(el))

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section))
      animatedElements.forEach((el) => animationObserver.unobserve(el))
    }
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-surface-950 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 ai-mesh-bg pointer-events-none" />
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      
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
        <CaseStudies />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
      
      {/* Floating Components */}
      <ScrollToTop />
    </div>
  )
}

export default App
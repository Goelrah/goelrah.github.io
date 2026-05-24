import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ThoughtLeadership from './components/ThoughtLeadership'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((section) => sectionObserver.observe(section))
    return () => sections.forEach((section) => sectionObserver.unobserve(section))
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 relative">
      {/* Subtle background */}
      <div className="fixed inset-0 bg-gradient-to-br from-surface-50 via-white to-primary-50/20 pointer-events-none" />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <ClientLogos />
        <Services />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <ThoughtLeadership />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTop />
    </div>
  )
}

export default App

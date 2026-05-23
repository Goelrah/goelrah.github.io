import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import About from './components/About'
import OperatingModel from './components/OperatingModel'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const ParticleBackground = lazy(() => import('./components/ParticleBackground'))

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
    <div className="min-h-screen bg-surface-950 text-white relative">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <ClientLogos />
        <Services />
        <About />
        <OperatingModel />
        <Experience />
        <Skills />
        <Testimonials />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTop />
    </div>
  )
}

export default App

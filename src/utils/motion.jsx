import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Hook: animate element on scroll into view using GSAP
// Content is always in DOM and visible — animation is purely decorative transform
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 30,
      x = 0,
      scale = 1,
      duration = 0.6,
      delay = 0,
      ease = 'power2.out',
    } = options

    // Set initial transform state (content still visible via opacity)
    gsap.set(el, {
      y,
      x,
      scale,
      opacity: 0.6,
    })

    const tween = gsap.to(el, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        once: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [])

  return ref
}

// Hook: stagger children on scroll
export function useStaggerReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.children
    if (!children.length) return

    const {
      y = 20,
      stagger = 0.06,
      duration = 0.5,
      ease = 'power2.out',
    } = options

    gsap.set(children, { y, opacity: 0.6 })

    const tween = gsap.to(children, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        once: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [])

  return ref
}

// Hook: parallax float effect for background elements
export function useParallax(speed = 0.5) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tween = gsap.to(el, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [speed])

  return ref
}

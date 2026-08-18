"use client"

import { useEffect } from "react"
import { animate, stagger } from "animejs"

export default function MotionEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    animate("[data-hero-reveal]", {
      opacity: { from: 0 },
      y: { from: 28 },
      duration: 900,
      delay: stagger(105),
      ease: "outExpo",
    })

    animate(".hero-orbit", {
      rotate: { from: 0, to: 360 },
      duration: 22000,
      delay: stagger(1400),
      loop: true,
      ease: "linear",
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const targets = entry.target.querySelectorAll<HTMLElement>("[data-reveal]")
        if (targets.length) animate(targets, { opacity: { from: 0 }, y: { from: 34 }, scale: { from: 0.985 }, duration: 760, delay: stagger(85), ease: "outCubic" })
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })

    document.querySelectorAll<HTMLElement>(".content-section").forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return null
}

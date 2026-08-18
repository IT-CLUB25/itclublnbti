"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  tone: "blue" | "violet"
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const pointer = { x: -1000, y: -1000, active: false }
    let nodes: Node[] = []
    let width = 0
    let height = 0
    let animationFrame = 0

    const createNodes = () => {
      const isMobile = width < 768
      const count = Math.max(12, Math.min(isMobile ? 28 : 72, Math.round((width * height) / (isMobile ? 35000 : 22000))))
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: index % 8 === 0 ? 2 : 1.25,
        tone: index % 3 === 0 ? "violet" : "blue",
      }))
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      createNodes()
      if (reducedMotion.matches) draw(false)
    }

    const draw = (move = true) => {
      context.clearRect(0, 0, width, height)
      const linkDistance = width < 700 ? 112 : 148

      nodes.forEach((node, index) => {
        if (move) {
          node.x += node.vx
          node.y += node.vy
          if (node.x < -10 || node.x > width + 10) node.vx *= -1
          if (node.y < -10 || node.y > height + 10) node.vy *= -1
        }

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const next = nodes[nextIndex]
          const dx = node.x - next.x
          const dy = node.y - next.y
          const distance = Math.hypot(dx, dy)
          if (distance >= linkDistance) continue
          const opacity = (1 - distance / linkDistance) * 0.24
          context.beginPath()
          context.moveTo(node.x, node.y)
          context.lineTo(next.x, next.y)
          context.strokeStyle = `rgba(112, 143, 255, ${opacity})`
          context.lineWidth = 0.7
          context.stroke()
        }

        if (pointer.active) {
          const dx = node.x - pointer.x
          const dy = node.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < 175) {
            context.beginPath()
            context.moveTo(node.x, node.y)
            context.lineTo(pointer.x, pointer.y)
            context.strokeStyle = `rgba(167, 139, 250, ${(1 - distance / 175) * 0.34})`
            context.lineWidth = 0.8
            context.stroke()
          }
        }

        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fillStyle = node.tone === "violet" ? "rgba(196, 181, 253, .72)" : "rgba(147, 197, 253, .78)"
        context.shadowColor = node.tone === "violet" ? "rgba(139, 92, 246, .65)" : "rgba(59, 130, 246, .65)"
        context.shadowBlur = node.radius > 1.5 ? 8 : 4
        context.fill()
        context.shadowBlur = 0
      })
    }

    const animate = () => {
      draw(true)
      animationFrame = window.requestAnimationFrame(animate)
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
    }
    const onPointerLeave = () => { pointer.active = false }
    const onVisibilityChange = () => {
        if (document.hidden) {
          window.cancelAnimationFrame(animationFrame)
        } else {
          if (!reducedMotion.matches) animate()
          else draw(false)
        }
      }

    const onMotionChange = () => {
      window.cancelAnimationFrame(animationFrame)
      if (reducedMotion.matches) draw(false)
      else animate()
    }

    resize()
    if (!reducedMotion.matches) animate()
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("pointerleave", onPointerLeave)
    document.addEventListener("visibilitychange", onVisibilityChange)
    reducedMotion.addEventListener("change", onMotionChange)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerleave", onPointerLeave)
      document.removeEventListener("visibilitychange", onVisibilityChange)
      reducedMotion.removeEventListener("change", onMotionChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />
}

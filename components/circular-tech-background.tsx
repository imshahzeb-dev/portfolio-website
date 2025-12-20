"use client"

import { useEffect, useRef } from "react"

export function CircularTechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full size of container
    const handleResize = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.max(canvas.width, canvas.height)

    // Animation variables
    let rotation = 0
    const circles = [
      { radius: maxRadius * 0.4, speed: 0.0005, opacity: 0.4, dashArray: [5, 15] },
      { radius: maxRadius * 0.5, speed: -0.0008, opacity: 0.3, dashArray: [2, 8] },
      { radius: maxRadius * 0.6, speed: 0.0012, opacity: 0.2, dashArray: [1, 5] },
      { radius: maxRadius * 0.7, speed: -0.0006, opacity: 0.15, dashArray: [8, 12] },
      { radius: maxRadius * 0.8, speed: 0.0009, opacity: 0.1, dashArray: [3, 10] },
      { radius: maxRadius * 0.9, speed: -0.0004, opacity: 0.05, dashArray: [10, 15] },
    ]

    // Animation function
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw circles
      circles.forEach((circle) => {
        rotation += circle.speed

        ctx.beginPath()
        ctx.arc(centerX, centerY, circle.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 120, 255, ${circle.opacity})`
        ctx.lineWidth = 1
        ctx.setLineDash(circle.dashArray)
        ctx.lineDashOffset = rotation * 1000
        ctx.stroke()
      })

      // Draw radial lines
      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2
        const length = maxRadius * 0.4 + Math.sin(rotation * 10 + i) * 20

        const startX = centerX + Math.cos(angle) * (maxRadius * 0.3)
        const startY = centerY + Math.sin(angle) * (maxRadius * 0.3)
        const endX = centerX + Math.cos(angle) * (length + maxRadius * 0.3)
        const endY = centerY + Math.sin(angle) * (length + maxRadius * 0.3)

        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = "rgba(0, 150, 255, 0.2)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw data points
      for (let i = 0; i < 60; i++) {
        const angle = (i / 60) * Math.PI * 2 + rotation
        const radius = maxRadius * 0.3 + Math.sin(i * 5) * (maxRadius * 0.2)

        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.beginPath()
        ctx.arc(x, y, 1 + Math.random(), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 200, 255, ${0.3 + Math.random() * 0.4})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute top-0 left-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

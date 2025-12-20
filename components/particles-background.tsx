"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Initialize particles
    function initParticles() {
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 100)
      particlesRef.current = []

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        })
      }
    }

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 150, 255, 0.6)"
        ctx.fill()

        // Connect particles
        connectParticles(particle, index)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Connect particles with lines if they're close enough
    function connectParticles(particle: Particle, index: number) {
      const connectionDistance = 150

      for (let i = index + 1; i < particlesRef.current.length; i++) {
        const otherParticle = particlesRef.current[i]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          // Calculate opacity based on distance
          const opacity = 1 - distance / connectionDistance

          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.3})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  )
}

"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  /** Duration in ms. */
  duration?: number
  threshold?: number
  className?: string
}

const OFFSET: Record<NonNullable<RevealProps["direction"]>, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Scroll-triggered entrance. Ported from the reference repo and simplified
 * to this project's framer-motion version. Honours prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 600,
  threshold = 0.15,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  const prefersReduced = useReducedMotion()

  const base = OFFSET[direction]
  const variants: Variants = {
    hidden: {
      opacity: prefersReduced ? 1 : 0,
      x: prefersReduced ? 0 : base.x * distance,
      y: prefersReduced ? 0 : base.y * distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReduced ? 0 : duration / 1000,
        delay: prefersReduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

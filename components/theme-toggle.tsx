"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-white" />}
    </button>
  )
}

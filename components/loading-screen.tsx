'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const logoVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 0.3,
    scale: 1.2,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const curtainVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 0,
    transition: {
      duration: 0,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsMounted(true)

    // Check if window is defined (client-side only)
    if (typeof window === 'undefined') return

    // Check if this is a fresh load (not a navigation)
    const hasLoaded = sessionStorage.getItem('hasLoaded')

    if (hasLoaded && !shouldReduceMotion) {
      // Skip loading screen on subsequent loads
      setIsLoading(false)
      return
    }

    // Mark as loaded
    sessionStorage.setItem('hasLoaded', 'true')

    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setIsExiting(true)
    }, 2000)

    // Remove loading screen after exit animation
    const exitTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)

    return () => {
      clearTimeout(timer)
      clearTimeout(exitTimer)
    }
  }, [shouldReduceMotion])

  // Don't render until mounted (prevents hydration mismatch)
  if (!isMounted) return null

  if (!isLoading || shouldReduceMotion) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#0A0A0A] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow effect */}
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate={isExiting ? "exit" : "animate"}
            className="absolute w-64 h-64 bg-foreground rounded-full blur-3xl"
          />

          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate={isExiting ? "exit" : "animate"}
            className="relative z-10 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
              SYNTAX/LOFT
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted text-sm tracking-[0.3em] uppercase mt-4"
            >
              Premium Software Development
            </motion.p>
          </motion.div>

          {/* Curtain wipe on exit */}
          <motion.div
            variants={curtainVariants}
            initial="initial"
            animate={isExiting ? "exit" : "animate"}
            className="absolute inset-0 bg-[#0A0A0A] origin-top"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

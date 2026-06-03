'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const contentVariants = {
  initial: {
    opacity: 0,
    scale: 1.02,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const curtainVariants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

const logoVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady || shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
      >
        {/* Curtain wipe overlay */}
        <motion.div
          variants={curtainVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[100] bg-[#0A0A0A] origin-top pointer-events-none flex items-center justify-center"
        >
          <motion.span
            variants={logoVariants}
            className="text-foreground font-display font-bold text-xl tracking-tight"
          >
            SYNTAX/LOFT
          </motion.span>
        </motion.div>

        {/* Page content */}
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

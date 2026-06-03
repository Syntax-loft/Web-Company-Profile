'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const variants = {
  initial: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: 'blur(8px)',
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const overlayVariants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
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
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="relative"
      >
        {/* Wipe overlay */}
        <motion.div
          variants={overlayVariants}
          className="fixed inset-0 z-[100] bg-[#0A0A0A] origin-top pointer-events-none"
        />
        
        {/* Content */}
        <div>{children}</div>
      </motion.div>
    </AnimatePresence>
  )
}

'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to('.parallax-slow', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })

      gsap.to('.parallax-medium', {
        yPercent: 28,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })

      gsap.to('.hero-content', {
        yPercent: -8,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'center top', end: 'bottom top', scrub: true },
      })
    })

    return () => mm.revert()
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed photographic backdrop */}
      <div
        className="parallax-slow absolute inset-[-10%] bg-cover bg-center grayscale contrast-125 opacity-50"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/dark-workspace/1920/1080)' }}
      />
      {/* Radial cinematic wash */}
      <div className="parallax-medium absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.92)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
      {/* Ambient orbs for depth */}
      <div className="parallax-medium absolute top-1/4 left-[15%] w-[26rem] h-[26rem] bg-white/[0.03] rounded-full blur-3xl" />
      <div className="parallax-medium absolute bottom-1/4 right-[12%] w-80 h-80 bg-white/[0.03] rounded-full blur-3xl" />

      {/* Content */}
      <div className="hero-content relative z-10 w-full max-w-6xl mx-auto px-6 text-center pt-36 pb-44">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-display font-bold tracking-tight leading-[1.04] text-[clamp(2.75rem,6vw,5.5rem)] text-foreground"
        >
          We engineer digital products that move{' '}
          <span className="text-gradient">ambitious brands</span> forward.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mt-8 text-lg md:text-xl text-muted-dark max-w-2xl mx-auto leading-relaxed"
        >
          Syntax Loft designs and builds high-performance websites and applications for companies that refuse to blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/project-brief"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-muted transition-colors duration-300"
          >
            Start Your Project
            <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-white/5 transition-colors duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

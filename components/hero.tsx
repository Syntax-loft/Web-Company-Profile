'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'
import { MagneticButton } from './magnetic-button'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.syntax-loft-text', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })

    gsap.to('.parallax-slow', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    gsap.to('.parallax-medium', {
      yPercent: 35,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    gsap.to('.parallax-fast', {
      yPercent: 55,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    })

    gsap.to('.hero-content', {
      yPercent: -10,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'center top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, heroRef)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient - slowest layer */}
      <div className="parallax-slow absolute inset-0 bg-gradient-to-b from-background via-background to-[#0f0f0f]" />
      
      {/* Grid pattern overlay - medium layer */}
      <div className="parallax-medium absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Animated circles - medium layer */}
      <div className="parallax-medium absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl animate-pulse" />
      <div className="parallax-medium absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating accent shapes - fast layer */}
      <div className="parallax-fast absolute top-1/3 right-1/5 w-32 h-32 border border-white/5 rounded-full" />
      <div className="parallax-fast absolute bottom-1/3 left-1/5 w-24 h-24 border border-white/5 rounded-full" />

      {/* Content with parallax */}
      <div ref={textRef} className="hero-content relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-muted-dark text-sm tracking-[0.3em] uppercase mb-6">
            Premium Software House
          </p>
        </motion.div>

        <h1 className="syntax-loft-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8">
          <span className="block text-foreground">SYNTAX</span>
          <span className="block text-gradient">LOFT</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transforming bold ideas into high-performance digital experiences. 
          We build premium websites and applications that drive business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/project-brief"
            className="group px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-muted transition-colors duration-300 flex items-center gap-2"
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

        {/* Stats with stagger */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
              },
            },
          }}
          className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto px-4"
        >
          {[
            { value: 'Modern Tech Stack', label: 'Built with the latest and most secure technologies.' },
            { value: '100% Client Focus', label: 'Dedicated attention for your unique business needs.' },
            { value: 'Scalable Architecture', label: 'Designed to grow seamlessly with your business.' },
            { value: 'Agile Development', label: 'Fast, transparent, and adaptive workflow.' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                },
              }}
            >
              <motion.div 
                className="text-lg md:text-xl font-display font-bold text-foreground mb-2 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-dark leading-relaxed">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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

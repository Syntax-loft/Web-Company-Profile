'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
<<<<<<< HEAD
import { ArrowDownRight } from 'lucide-react'
=======
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { MagneticButton } from './magnetic-button'
import heroLogo from '../public/assets/hero-logo.webp'
import Image from "next/image";
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2

gsap.registerPlugin(ScrollTrigger)

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
<<<<<<< HEAD
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
=======
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useGSAP(() => {
    // Respect user motion preference: skip parallax entirely
    if (shouldReduceMotion) return

    gsap.from('.wirasa-text', {
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
  }, {
    scope: heroRef,
    dependencies: [shouldReduceMotion],
  })

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient - slowest layer */}
      <div className="parallax-slow absolute inset-0 bg-gradient-to-b from-background via-background to-[#0f0f0f]" />

      {/* Grid pattern with radial fade mask - medium layer */}
      <div
        className="parallax-medium absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_45%,black_25%,transparent_78%)]"
        aria-hidden
      />

      {/* Static depth glow (deliberate: no infinite pulse loops) - medium layer */}
      <div className="parallax-medium absolute -top-40 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-white/[0.035] blur-[130px]" aria-hidden />

      {/* Geometric accents - fast layer */}
      <div className="parallax-fast absolute top-[22%] right-[12%] w-36 h-36 border border-white/[0.06] rotate-45 hidden md:block" aria-hidden />
      <div className="parallax-fast absolute bottom-[18%] left-[10%] w-24 h-24 border border-white/[0.06] rounded-full hidden md:block" aria-hidden />

      {/* Film grain for tactile depth */}
      <div className="grain absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" aria-hidden />

      {/* Hairline framing rules */}
      <div className="absolute inset-x-6 lg:inset-x-8 top-24 h-px bg-white/[0.06]" aria-hidden />
      <div className="absolute inset-x-6 lg:inset-x-8 bottom-24 h-px bg-white/[0.06]" aria-hidden />

      {/* Content with parallax */}
      <div ref={textRef} className="hero-content relative z-10 max-w-7xl mt-28 mx-auto px-6 lg:px-8 text-center">
        <motion.div
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-display font-bold tracking-tight leading-[1.04] text-[clamp(2.75rem,6vw,5.5rem)] text-foreground"
        >
<<<<<<< HEAD
          We engineer digital products that move{' '}
          <span className="text-gradient">ambitious brands</span> forward.
        </motion.h1>
=======
          <p className="text-muted-dark text-xs tracking-[0.3em] uppercase mb-2 font-mono">
            Studio Rekayasa Perangkat Lunak &amp; Web Modern
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={heroLogo}
            alt='WIRASA TECH — Jasa Pembuatan Website & Software House'
            width={630}
            height={200}
            priority
            className='mx-auto h-auto w-[clamp(260px,72vw,630px)]'
          ></Image>
        </motion.div>
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mt-8 text-lg md:text-xl text-muted-dark max-w-2xl mx-auto leading-relaxed"
        >
          Syntax Loft designs and builds high-performance websites and applications for companies that refuse to blend in.
=======
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Kami membangun website modern, aplikasi web kustom berkinerja tinggi, dan infrastruktur digital yang scalable untuk mempercepat pertumbuhan bisnis Anda.
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/project-brief"
<<<<<<< HEAD
            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-muted transition-colors duration-300"
=======
            className="group px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-muted transition-all duration-300 flex items-center gap-2 tactile-btn shadow-xl shadow-white/5"
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
          >
            Mulai Proyek Anda
            <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
          <Link
            href="/work"
            className="group px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-white/5 transition-all duration-300 tactile-btn flex items-center gap-2"
          >
            <span>Lihat Portofolio Pilihan</span>
            <ArrowRight size={16} className="text-muted-dark group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </motion.div>
<<<<<<< HEAD
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
=======

        {/* Stats — data strip with hairlines, not a row of identical cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 w-full max-w-4xl mx-auto mb-20 px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-white/10 pt-6 text-left">
            {[
              { value: 'Arsitektur Next.js & Edge', label: 'Stack modern Next.js, React & TypeScript dengan latensi rendah di bawah 80ms.' },
              { value: 'Direct Engineer Access', label: 'Konsultasi dan perancangan sistem langsung bersama lead engineer tanpa perantara.' },
              { value: '100% Client IP Ownership', label: 'Repositori Git, arsitektur cloud, dan kode seutuhnya menjadi hak milik Anda tanpa lock-in.' },
              { value: 'Standar Kode Zero-Drift', label: 'Pengetikan statis TypeScript ketat, arsitektur scalable, dan zero visual drift.' },
            ].map((stat, index) => (
              <div
                key={stat.value}
                className={`px-4 first:pl-0 md:border-l md:border-white/10 md:first:border-l-0 ${index >= 2 ? 'border-t border-white/10 pt-6 md:border-t-0 md:pt-0' : ''}`}
              >
                <p className="font-mono text-xs text-muted-dark tracking-widest mb-2" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="font-display font-bold text-foreground text-sm md:text-base leading-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-dark leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
    </section>
  )
}

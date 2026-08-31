'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Crown,
  Sparkles,
  Linkedin,
  Github,
  Quote,
  ShieldCheck,
} from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface LeaderProfile {
  id: 'dava' | 'arul'
  name: string
  role: string
  focus: string
  tagline: string
  image: string
  fallback: string
  badgeIcon: typeof Crown
  badgeColor: string
  badgeText: string
  github: string
  linkedin: string
  quote: string
  attribution: string
  specialtyPill: string
}

export function FounderSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeLeaderId, setActiveLeaderId] = useState<'dava' | 'arul'>('dava')
  const [davaSrc, setDavaSrc] = useState('/assets/team/dava.webp')
  const [arulSrc, setArulSrc] = useState('/assets/team/frontend-lead.webp')

  const leaders: LeaderProfile[] = [
    {
      id: 'dava',
      name: 'Muhamad Dava Rayhan',
      role: 'Founder & Lead Architect',
      focus: 'Fullstack Architect & Cloud Systems',
      tagline: 'Arsitektur sistem tangguh, scalable & zero vendor lock-in.',
      specialtyPill: 'Fullstack Architecture',
      image: davaSrc,
      fallback: '/assets/team/dava.jpg',
      badgeIcon: Crown,
      badgeColor: 'text-amber-300',
      badgeText: 'Founder & Lead Architect',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      quote:
        'Kualitas sebuah produk digital ditentukan oleh integritas arsitekturnya sejak baris kode pertama. Kami memastikan klien memegang kendali penuh atas aset teknologi berstandar tinggi yang mereka miliki 100%.',
      attribution: 'Muhamad Dava Rayhan // Founder & Lead Architect',
    },
    {
      id: 'arul',
      name: 'Muhammad Arul Andriansyah',
      role: 'Co-Founder & Lead Frontend',
      focus: 'Interface Architect & Modern Web Specialist',
      tagline: 'Pengalaman visual interaktif, mulus 60fps & pixel-perfect.',
      specialtyPill: 'Interface & Motion',
      image: arulSrc,
      fallback:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      badgeIcon: Sparkles,
      badgeColor: 'text-blue-300',
      badgeText: 'Co-Founder & Lead Frontend',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      quote:
        'Antarmuka yang luar biasa bukan sekadar estetika visual, melainkan bagaimana setiap piksel, interaksi mikro, dan transisi bekerja secara presisi tanpa kompromi performa beban pengguna.',
      attribution: 'Muhammad Arul Andriansyah // Co-Founder & Lead Frontend',
    },
  ]

  const activeLeader = leaders.find((l) => l.id === activeLeaderId) || leaders[0]

  useGSAP(
    () => {
      // Ambient parallax drifting
      gsap.to('.spotlight-ambient-glow', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="py-32 lg:py-48 bg-[#08080a] relative overflow-hidden border-b border-border/40"
    >
      {/* Cinematic Ambient Lighting */}
      <div
        className="spotlight-ambient-glow absolute top-1/4 -left-40 w-[45rem] h-[45rem] rounded-full bg-blue-600/[0.035] blur-[180px] pointer-events-none"
        aria-hidden
      />
      <div
        className="spotlight-ambient-glow absolute bottom-10 right-0 w-[50rem] h-[50rem] rounded-full bg-emerald-500/[0.03] blur-[200px] pointer-events-none"
        aria-hidden
      />
      <div className="grain absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Overhead Tag & Tab Switcher Bar */}
        <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/5">
          <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.28em] uppercase">
            <span className="inline-block w-8 h-px bg-white/40" aria-hidden />
            // Arsitektur Kepemimpinan &amp; Konsultansi
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-muted-dark uppercase tracking-wider hidden sm:inline">
              Pilih Profil:
            </span>
            <div className="inline-flex p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              {leaders.map((leader) => {
                const isSelected = activeLeaderId === leader.id
                return (
                  <button
                    key={leader.id}
                    onClick={() => setActiveLeaderId(leader.id)}
                    className="relative px-4 py-1.5 text-xs font-mono rounded-full transition-colors duration-300 z-10"
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="active-leader-pill"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="absolute inset-0 bg-white rounded-full shadow-lg z-[-1]"
                      />
                    )}
                    <span
                      className={`transition-colors duration-200 ${
                        isSelected ? 'text-black font-semibold' : 'text-muted-dark hover:text-white'
                      }`}
                    >
                      {leader.name.split(' ')[1] || leader.name}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Expansive Full-Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Interactive Leadership Cards (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {leaders.map((leader, index) => {
              const BadgeIcon = leader.badgeIcon
              const isActive = activeLeaderId === leader.id

              return (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  onClick={() => setActiveLeaderId(leader.id)}
                  onMouseEnter={() => setActiveLeaderId(leader.id)}
                  className={`relative group cursor-pointer transition-all duration-500 rounded-[2rem] ${
                    isActive
                      ? 'ring-2 ring-white/40 shadow-[0_0_40px_rgba(255,255,255,0.09)]'
                      : 'opacity-60 hover:opacity-100 ring-1 ring-white/10'
                  }`}
                >
                  {/* Outer Atmospheric Aura when Active */}
                  {isActive && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-white/10 to-blue-500/20 rounded-[2.25rem] blur-xl opacity-80 pointer-events-none transition-opacity duration-500" />
                  )}

                  {/* Framing Canvas */}
                  <div className="relative w-full h-[290px] sm:h-[320px] rounded-[2rem] overflow-hidden bg-[#121215] border border-white/15">
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      onError={() => {
                        if (leader.id === 'dava') setDavaSrc(leader.fallback)
                        else setArulSrc(leader.fallback)
                      }}
                      className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                        isActive
                          ? 'grayscale-0 scale-105 contrast-105'
                          : 'grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-102'
                      }`}
                    />

                    {/* Dynamic Vignette Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/35 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent pointer-events-none" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                      <Badge
                        className={`font-mono text-xs px-3.5 py-1 rounded-full shadow-lg border transition-colors ${
                          isActive
                            ? 'bg-black/90 border-white/30 text-white'
                            : 'bg-black/70 border-white/10 text-white/80'
                        }`}
                      >
                        <BadgeIcon size={12} className={`mr-1.5 ${leader.badgeColor} inline`} />
                        {leader.badgeText}
                      </Badge>
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]'
                            : 'bg-white/30'
                        }`}
                      />
                    </div>

                    {/* Bottom Overlaid Metadata Bar */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl backdrop-blur-xl border shadow-2xl z-10 transition-colors ${
                        isActive
                          ? 'bg-black/85 border-white/25'
                          : 'bg-black/65 border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-display font-bold text-white tracking-tight">
                              {leader.name}
                            </h3>
                            {isActive && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                Aktif
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-mono text-muted-dark mt-0.5">
                            {leader.focus}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a
                                  href={leader.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                  aria-label={`GitHub profile ${leader.name}`}
                                >
                                  <Github size={15} />
                                </a>
                              </TooltipTrigger>
                              <TooltipContent side="top">GitHub</TooltipContent>
                            </Tooltip>

                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a
                                  href={leader.linkedin}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                  aria-label={`LinkedIn profile ${leader.name}`}
                                >
                                  <Linkedin size={15} />
                                </a>
                              </TooltipTrigger>
                              <TooltipContent side="top">LinkedIn</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* RIGHT: Dynamic Editorial Narrative & Monumental Person-Specific Quote (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            {/* Editorial Heading with Wide Container Flow */}
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[3.1rem] font-display font-bold text-foreground leading-[1.08] tracking-tight">
                Membangun dengan presisi,{' '}
                <span className="text-gradient">
                  tanpa birokrasi &amp; kompromi teknis.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-dark font-light leading-relaxed">
                Di WIRASA TECH, kami menolak model agensi tradisional yang membebankan perantara tidak perlu. Setiap sistem dirancang dan diawasi langsung oleh lead architect &amp; interface engineer untuk kecepatan rilis tertinggi.
              </p>
            </div>

            {/* Monumental Dynamic Quote Box with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLeader.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 sm:p-9 rounded-[2rem] bg-[#111114] border border-white/15 relative shadow-2xl shadow-black/60 overflow-hidden"
              >
                {/* Background Giant Glyph Watermark */}
                <Quote
                  className="absolute -right-4 -bottom-6 w-36 h-36 text-white/[0.025] pointer-events-none"
                  aria-hidden
                />

                {/* Accent Top Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                    activeLeader.id === 'dava'
                      ? 'from-amber-400 via-emerald-400 to-blue-500'
                      : 'from-blue-400 via-teal-400 to-indigo-500'
                  }`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Focus Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Prinsip Utama: {activeLeader.specialtyPill}</span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-lg sm:text-xl lg:text-[1.35rem] text-foreground/95 italic font-light leading-relaxed">
                    &ldquo;{activeLeader.quote}&rdquo;
                  </p>

                  {/* Author Sign-off Footer */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-white/90 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{activeLeader.attribution}</span>
                    </div>
                    <span className="text-[11px] font-mono text-muted-dark">
                      {activeLeader.tagline}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  )
}




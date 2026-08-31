'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
  Terminal,
  Layers,
  Code2,
  Cpu,
} from 'lucide-react'
import Link from 'next/link'

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
  stats: Array<{ label: string; value: string; icon: typeof Terminal }>
  pillars: string[]
}

export function FounderSpotlight() {
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
      stats: [
        { label: 'Next.js & Cloud Edge', value: 'Next.js 15+', icon: Terminal },
        { label: 'Standar Mutu Arsitektur', value: '100/100', icon: Zap },
        { label: 'Kepemilikan Source Code', value: '100%', icon: ShieldCheck },
      ],
      pillars: [
        'Next.js 14/15 App Router & SSR',
        'Arsitektur Database & Cloud Edge',
        'Optimasi Core Web Vitals & Keamanan',
        'Skalabilitas Backend & API Terstruktur',
      ],
    },
    {
      id: 'arul',
      name: 'Muhammad Arul Andriansyah',
      role: 'Co-Founder & Lead Frontend',
      focus: 'Interface Architect & Modern Web Specialist',
      tagline: 'Pengalaman visual interaktif, mulus 60fps & pixel-perfect.',
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
      stats: [
        { label: 'Fluid Motion & GSAP', value: '60 FPS', icon: Cpu },
        { label: 'Zero Visual Drift', value: 'Pixel Perfect', icon: Layers },
        { label: 'Modern React & TypeScript', value: 'Strict Type', icon: Code2 },
      ],
      pillars: [
        'Design System & Atomic Token UI',
        'Advanced GSAP & Framer Motion',
        'Antarmuka Responsif & Tactile Feel',
        'Standar Aksesibilitas & Micro UX',
      ],
    },
  ]

  const activeLeader = leaders.find((l) => l.id === activeLeaderId) || leaders[0]

  return (
    <section className="py-28 lg:py-40 bg-[#0a0a0a] relative overflow-hidden border-b border-border/50">
      {/* Ambient Lighting */}
      <div
        className="absolute top-1/4 -left-32 w-[38rem] h-[38rem] rounded-full bg-blue-600/[0.03] blur-[160px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-10 right-0 w-[42rem] h-[42rem] rounded-full bg-emerald-600/[0.025] blur-[180px] pointer-events-none"
        aria-hidden
      />
      <div className="grain absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Overhead Tag */}
        <div className="mb-10 lg:mb-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
            <span className="inline-block w-8 h-px bg-white/40" aria-hidden />
            // Arsitektur Kepemimpinan &amp; Konsultansi
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-muted-dark uppercase tracking-wider hidden sm:inline">
              Pilih Profil:
            </span>
            <div className="inline-flex p-1 rounded-full bg-white/[0.04] border border-white/10">
              {leaders.map((leader) => (
                <button
                  key={leader.id}
                  onClick={() => setActiveLeaderId(leader.id)}
                  className={`px-3.5 py-1 text-xs font-mono rounded-full transition-all duration-300 ${
                    activeLeaderId === leader.id
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'text-muted-dark hover:text-white'
                  }`}
                >
                  {leader.name.split(' ')[1] || leader.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Expansive Full-Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Interactive Leadership Cards (5 Columns) */}
          <div className="lg:col-span-5 space-y-5">
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
                  className={`relative group cursor-pointer transition-all duration-500 rounded-[1.75rem] ${
                    isActive
                      ? 'ring-2 ring-white/40 shadow-[0_0_35px_rgba(255,255,255,0.08)]'
                      : 'opacity-65 hover:opacity-100 ring-1 ring-white/10'
                  }`}
                >
                  {/* Outer Atmospheric Aura when Active */}
                  {isActive && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-white/10 to-blue-500/20 rounded-[2rem] blur-lg opacity-80 pointer-events-none transition-opacity duration-500" />
                  )}

                  {/* Framing Canvas */}
                  <div className="relative w-full h-[280px] sm:h-[310px] rounded-[1.75rem] overflow-hidden bg-[#141416] border border-white/15">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/35 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                      <Badge
                        className={`font-mono text-xs px-3 py-1 rounded-full shadow-lg border transition-colors ${
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
                      className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-xl border shadow-2xl z-10 transition-colors ${
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

          {/* RIGHT: Dynamic Editorial Narrative & Person-Specific Quote (7 Columns) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Editorial Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-display font-bold text-foreground leading-[1.1] tracking-tight">
                Membangun dengan presisi,{' '}
                <span className="text-gradient">
                  tanpa birokrasi &amp; kompromi teknis.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-dark font-light leading-relaxed">
                Di WIRASA TECH, kami menolak model agensi tradisional yang membebankan perantara tidak perlu. Setiap sistem dirancang langsung oleh lead engineer &amp; arsitek antarmuka untuk hasil tercepat dan terandal.
              </p>
            </div>

            {/* Dynamic Quote Box with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLeader.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="p-6 sm:p-7 rounded-2xl bg-[#121214] border border-white/15 relative shadow-2xl shadow-black/50 overflow-hidden"
              >
                {/* Accent line top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                    activeLeader.id === 'dava'
                      ? 'from-amber-400 via-emerald-400 to-blue-500'
                      : 'from-blue-400 via-teal-400 to-indigo-500'
                  }`}
                />

                <p className="text-base sm:text-lg text-foreground/95 italic font-light leading-relaxed">
                  &ldquo;{activeLeader.quote}&rdquo;
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/90 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activeLeader.attribution}</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-dark">
                    {activeLeader.tagline}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Telemetry Numbers */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stats-${activeLeader.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3.5"
              >
                {activeLeader.stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={15} className="text-muted-dark" />
                        <span className="text-lg sm:text-xl font-display font-extrabold text-white">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-muted-dark leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Core Architectural / Frontend Focus Pillars */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`pillars-${activeLeader.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2.5 pt-1"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-muted-dark">
                  Fokus Spesialisasi {activeLeader.name.split(' ')[1] || activeLeader.name}:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeLeader.pillars.map((pillar) => (
                    <div
                      key={pillar}
                      className="flex items-center gap-2.5 text-xs text-foreground/85 font-mono py-0.5"
                    >
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Bar (Full Team CTA) */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono uppercase tracking-wider h-12 px-7 shadow-xl shadow-white/5">
                <Link href="/about#team" className="inline-flex items-center justify-center gap-2">
                  <Users size={16} />
                  <span>Kenali Seluruh Tim Kami (7 Ahli)</span>
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </Button>

              <Link
                href="/project-brief"
                className="text-xs font-mono text-muted-dark hover:text-white transition-colors underline underline-offset-4"
              >
                Mulai konsultasi proyek baru &rarr;
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
} from 'lucide-react'
import Link from 'next/link'

export function FounderSpotlight() {
  const [davaSrc, setDavaSrc] = useState('/assets/team/dava.webp')
  const [arulSrc, setArulSrc] = useState('/assets/team/frontend-lead.webp')

  const telemetryStats = [
    { label: 'Penguasaan Stack Modern', value: 'Next.js 15+', icon: Terminal },
    { label: 'Standar Mutu Performa', value: '100/100', icon: Zap },
    { label: 'Kepemilikan Source Code', value: '100%', icon: ShieldCheck },
  ]

  const corePillars = [
    'Next.js 14/15 App Router & SSR',
    'Arsitektur Sistem Skalabel',
    'Design System & Token Berstandar',
    'Keamanan & Optimasi Core Web Vitals',
  ]

  const leaders = [
    {
      id: 'dava',
      name: 'Muhamad Dava Rayhan',
      role: 'Founder & Lead Architect',
      focus: 'Fullstack Architect & Cloud Systems',
      image: davaSrc,
      fallback: '/assets/team/dava.jpg',
      onError: () => setDavaSrc('/assets/team/dava.jpg'),
      badgeIcon: Crown,
      badgeColor: 'text-amber-300',
      badgeText: 'Founder & Lead Architect',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 'arul',
      name: 'Muhammad Arul Andriansyah',
      role: 'Co-Founder & Lead Frontend',
      focus: 'Interface Architect & Modern Web Specialist',
      image: arulSrc,
      fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      onError: () => setArulSrc('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'),
      badgeIcon: Sparkles,
      badgeColor: 'text-blue-300',
      badgeText: 'Co-Founder & Lead Frontend',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  ]

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
        <div className="mb-10 lg:mb-14">
          <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
            <span className="inline-block w-8 h-px bg-white/40" aria-hidden />
            // Arsitektur Kepemimpinan &amp; Konsultansi
          </p>
        </div>

        {/* Expansive Full-Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT: Leadership Portraits (5 Columns - Stacked Dava & Arul) */}
          <div className="lg:col-span-5 space-y-6">
            {leaders.map((leader, index) => {
              const BadgeIcon = leader.badgeIcon
              return (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Outer Atmospheric Aura */}
                  <div className="absolute -inset-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent rounded-[2rem] blur-lg opacity-30 group-hover:opacity-65 transition-opacity duration-700 pointer-events-none" />

                  {/* Framing Canvas */}
                  <div className="relative w-full h-[320px] sm:h-[350px] rounded-[1.75rem] overflow-hidden bg-[#141416] border border-white/15 shadow-xl">
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      onError={leader.onError}
                      className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Dynamic Vignette Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                      <Badge className="bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs px-3 py-1 rounded-full shadow-lg">
                        <BadgeIcon size={12} className={`mr-1.5 ${leader.badgeColor} inline`} />
                        {leader.badgeText}
                      </Badge>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    </div>

                    {/* Bottom Overlaid Metadata Bar */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-display font-bold text-white tracking-tight">
                            {leader.name}
                          </h3>
                          <p className="text-xs font-mono text-muted-dark mt-0.5">
                            {leader.focus}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
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

          {/* RIGHT: Editorial Narrative (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Editorial Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-display font-bold text-foreground leading-[1.1] tracking-tight">
                Membangun dengan presisi,{' '}
                <span className="text-gradient">
                  tanpa birokrasi &amp; kompromi teknis.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-dark font-light leading-relaxed pt-1">
                Di WIRASA TECH, kami menolak model agensi tradisional yang membebankan perantara tidak perlu. Setiap sistem dirancang dan diawasi langsung oleh lead architect &amp; frontend engineer, memastikan kode yang bersih, scalable, dan cepat rilis ke pasar.
              </p>
            </div>

            {/* Leadership Quote Block */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 relative shadow-xl shadow-black/40">
              <p className="text-sm sm:text-base text-foreground/90 italic font-light leading-relaxed">
                &ldquo;Kualitas sebuah produk digital ditentukan oleh integritas arsitekturnya sejak baris kode pertama. Kami memastikan klien memegang kendali penuh atas aset teknologi berstandar tinggi yang mereka miliki 100%.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-muted-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Muhamad Dava Rayhan &amp; Muhammad Arul Andriansyah // Prinsip Rekayasa Studio
              </div>
            </div>

            {/* Telemetry Numbers Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {telemetryStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors shadow-md"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-muted-dark" />
                      <span className="text-xl sm:text-2xl font-display font-extrabold text-white">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-muted-dark leading-tight">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Core Architectural Pillars */}
            <div className="space-y-3 pt-1">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-dark">
                Fokus Utama Arsitektur:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {corePillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-2.5 text-xs text-foreground/80 font-mono py-1"
                  >
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar (Full Team CTA) */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono uppercase tracking-wider h-13 px-8 shadow-xl shadow-white/5">
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

          </motion.div>

        </div>
      </div>
    </section>
  )
}


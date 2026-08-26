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
  const [imageSrc, setImageSrc] = useState('/assets/team/dava.webp')

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

  return (
    <section className="py-32 lg:py-48 bg-[#0a0a0a] relative overflow-hidden border-b border-border/50">
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
        <div className="mb-12 lg:mb-16">
          <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
            <span className="inline-block w-8 h-px bg-white/40" aria-hidden />
            // Arsitektur Kepemimpinan &amp; Konsultansi
          </p>
        </div>

        {/* Expansive Full-Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Dominant Portrait (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            {/* Outer Atmospheric Aura */}
            <div className="absolute -inset-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

            {/* Dominant Framing Canvas */}
            <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] rounded-[2rem] overflow-hidden bg-[#141416] border border-white/15 shadow-2xl">
              <img
                src={imageSrc}
                alt="Muhamad Dava Rayhan - Founder & Lead Consultant"
                onError={() =>
                  setImageSrc(
                    '/assets/team/dava.jpg'
                  )
                }
                className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Dynamic Vignette Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Top Floating Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
                <Badge className="bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-xs px-3.5 py-1.5 rounded-full shadow-lg">
                  <Crown size={13} className="mr-1.5 text-amber-300 inline" />
                  Founder &amp; Lead Architect
                </Badge>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              </div>

              {/* Bottom Overlaid Metadata Bar */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/10 shadow-2xl z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      Muhamad Dava Rayhan
                    </h3>
                    <p className="text-xs font-mono text-muted-dark mt-0.5">
                      Fullstack Architect &amp; Design Technologist
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                            aria-label="GitHub profile"
                          >
                            <Github size={16} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="top">GitHub</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                            aria-label="LinkedIn profile"
                          >
                            <Linkedin size={16} />
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
              <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-display font-bold text-foreground leading-[1.08] tracking-tight">
                Membangun dengan presisi,{' '}
                <span className="text-gradient">
                  tanpa birokrasi &amp; kompromi teknis.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-dark font-light leading-relaxed pt-2">
                Di WIRASA TECH, kami menolak model agensi tradisional yang membebankan perantara tidak perlu. Setiap sistem dirancang langsung dari arsitektur level atas, memastikan kode yang bersih, scalable, dan cepat rilis ke pasar.
              </p>
            </div>

            {/* Founder Quote Block */}
            <div className="p-6 rounded-2xl bg-[#121214] border-l-2 border-white/40 border-y border-r border-border/60 relative shadow-xl">
              <p className="text-sm sm:text-base text-foreground/90 italic font-light leading-relaxed">
                &ldquo;Kualitas sebuah produk digital ditentukan oleh integritas arsitekturnya sejak baris kode pertama. Kami memastikan klien kami mendapatkan aset teknologi berstandar tinggi yang mereka miliki 100%.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-muted-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Muhamad Dava Rayhan // Prinsip Rekayasa Studio
              </div>
            </div>

            {/* Telemetry Numbers Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
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
            <div className="space-y-3 pt-2">
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

'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Terminal,
  Activity,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

export function CapabilitiesBento() {
  return (
    <section className="py-32 lg:py-48 bg-[#0a0a0a] relative overflow-hidden border-b border-border/50">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[55rem] h-[55rem] rounded-full bg-white/[0.015] blur-[150px] pointer-events-none"
        aria-hidden
      />
      <div className="grain absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase mb-4">
              <span className="inline-block w-8 h-px bg-white/30" aria-hidden />
              // Kapabilitas Utama
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.05] tracking-tight">
              Dirancang untuk Skala Besar,{' '}
              <span className="text-gradient">Dibuat dengan Presisi.</span>
            </h2>
          </div>

          <p className="text-muted-dark text-sm sm:text-base font-light max-w-md leading-relaxed">
            Kami merekayasa solusi digital menyeluruh yang memadukan keandalan infrastruktur cloud dengan
            antarmuka web modern yang cepat, rapi, dan konversi tinggi.
          </p>
        </div>

        {/* Gapless Bento Grid: grid-flow-dense with mathematically interlocking spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-flow-dense gap-6">
          
          {/* Tile 1: Flagship (8 cols x 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-2 p-8 sm:p-12 rounded-3xl bg-[#121212] border border-border/80 hover:border-white/30 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.04] transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-muted-dark tracking-widest uppercase">
                  Arsitektur &amp; Kecepatan
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Code2 size={22} />
                </div>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
                Arsitektur Web Fullstack &amp; Sistem Next.js
              </h3>
              <p className="text-muted-dark text-sm sm:text-base leading-relaxed max-w-xl font-light mb-8">
                Kami merancang aplikasi web tangguh dengan streaming server rendering, batasan tipe TypeScript yang ketat,
                serta caching edge teroptimasi untuk menjamin waktu respon di bawah 80 milidetik.
              </p>
            </div>

            {/* Interactive Code / Architecture Spec Visual */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 font-mono text-xs space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-muted-dark border-b border-white/5 pb-2.5">
                <span className="flex items-center gap-2 text-foreground/80">
                  <Terminal size={13} className="text-emerald-400" /> wirasa.config.ts
                </span>
                <span className="text-[11px] text-emerald-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> strict_mode: true
                </span>
              </div>
              <div className="space-y-1 text-muted-dark">
                <p><span className="text-purple-400">export const</span> runtime = <span className="text-amber-300">&apos;edge&apos;</span>;</p>
                <p><span className="text-purple-400">export const</span> revalidate = <span className="text-blue-400">0</span>; <span className="text-muted-dark/60">// Streaming real-time tanpa lag</span></p>
                <p><span className="text-emerald-400">type</span> <span className="text-yellow-200">CoreVitals</span> = &#123; latency: <span className="text-amber-300">&apos;&lt;80ms&apos;</span>, accessibility: <span className="text-blue-400">1.00</span> &#125;;</p>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: UI/UX & Design Systems (4 cols x 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 p-8 rounded-3xl bg-[#121212] border border-border/80 hover:border-white/30 transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-muted-dark tracking-widest uppercase">
                  Design System
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Layers size={18} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 leading-snug">
                UI/UX Berbasis Token &amp; Komponen
              </h3>
              <p className="text-muted-dark text-xs sm:text-sm leading-relaxed font-light mb-6">
                Design token presisi, kurva animasi mikro yang halus, dan komponen UI yang konsisten tanpa drift visual.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-muted-dark">
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">Zero-Drift Tokens</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">Fluid Motion</span>
            </div>
          </motion.div>

          {/* Tile 3: Cloud & Distributed Services (4 cols x 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 p-8 rounded-3xl bg-[#121212] border border-border/80 hover:border-white/30 transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-muted-dark tracking-widest uppercase">
                  Cloud &amp; DevOps
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Cpu size={18} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 leading-snug">
                API Terdistribusi &amp; Cloud Skalabel
              </h3>
              <p className="text-muted-dark text-xs sm:text-sm leading-relaxed font-light mb-6">
                Backend tangguh, pipeline CI/CD otomatis, containerization modern, dan protokol keamanan data tingkat tinggi.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-muted-dark">
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">Docker / K8s</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">PostgreSQL</span>
            </div>
          </motion.div>

          {/* Tile 4: AI & Autonomous Workflows (4 cols x 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 p-8 rounded-3xl bg-[#121212] border border-border/80 hover:border-white/30 transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-muted-dark tracking-widest uppercase">
                  Kecerdasan Buatan (AI)
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Sparkles size={18} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 leading-snug">
                Integrasi AI &amp; Otomasi Cerdas
              </h3>
              <p className="text-muted-dark text-xs sm:text-sm leading-relaxed font-light mb-6">
                Alur kerja agen AI kustom, pencarian semantik (vector search), dan otomasi cerdas yang terhubung ke database Anda.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-muted-dark">
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">Puter.js / Claude</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">Vector Search</span>
            </div>
          </motion.div>

          {/* Tile 5: Direct Partnership & IP Ownership (8 cols x 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-1 p-8 sm:p-10 rounded-3xl bg-[#121212] border border-border/80 hover:border-white/30 transition-all duration-500 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group relative overflow-hidden"
          >
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={18} className="text-white" />
                <span className="font-mono text-xs text-muted-dark tracking-widest uppercase">
                  Kepemilikan Kode Penuh
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2 leading-snug">
                Bebas Vendor Lock-In. Serah Terima Source Code 100%.
              </h3>
              <p className="text-muted-dark text-xs sm:text-sm leading-relaxed font-light">
                Kepemilikan repositori Git penuh, manifest deployment otomatis, dan dokumentasi arsitektur lengkap sejak hari pertama.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full shrink-0 group/btn">
              <Link href="/project-brief" className="inline-flex items-center gap-2">
                <span>Bangun Bersama Kami</span>
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

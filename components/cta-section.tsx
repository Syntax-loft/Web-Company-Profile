'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Closing CTA — giant typographic statement instead of a generic
 * glassmorphism card with blur blobs.
 */
export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48 border-t border-border">
      {/* Ambient radial depth + film grain for a cinematic closing chapter */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 w-[55rem] h-[55rem] rounded-full bg-white/[0.03] blur-[150px] pointer-events-none"
        aria-hidden
      />
      <div className="grain absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase mb-8">
            <span className="inline-block w-10 h-px bg-white/30" aria-hidden />
            // Langkah Selanjutnya
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[1.02] tracking-tight max-w-6xl mb-10">
            Siap membangun{' '}
            <span
              className="hidden md:inline-block align-middle w-[1.35em] h-[0.58em] rounded-full bg-cover bg-center ring-1 ring-white/20"
              style={{ backgroundImage: "url('/assets/studio-craft.jpg')" }}
              aria-hidden
            />
            <br />
            <span className="text-gradient">platform digital yang andal &amp; scalable?</span>
          </h2>

          <p className="text-muted text-lg max-w-xl font-light leading-relaxed mb-12">
            Bermitralah dengan tim engineering yang berdedikasi. Kami menghadirkan website kustom,
            API berkecepatan tinggi, dan antarmuka web modern yang siap mendukung pertumbuhan bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/project-brief"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-muted transition-all duration-300 tactile-btn"
            >
              Mulai Proyek Anda
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-white/5 transition-all duration-300 tactile-btn"
            >
              Lihat Portofolio Pilihan
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


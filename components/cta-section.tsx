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
    <section className="py-28 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase mb-8">
            <span className="inline-block w-10 h-px bg-white/30" aria-hidden />
            Next Step
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[1.02] tracking-tight max-w-5xl mb-10">
            Ready to build<br />
            <span className="text-gradient">something that lasts?</span>
          </h2>

          <p className="text-muted text-lg max-w-xl font-light leading-relaxed mb-12">
            Partner with a dedicated engineering team. We deliver custom web platforms,
            scalable APIs, and refined user experiences tailored for growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/project-brief"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-muted transition-all duration-300 tactile-btn"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-white/5 transition-all duration-300 tactile-btn"
            >
              View Selected Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


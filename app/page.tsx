import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { ScrubReveal } from '@/components/scrub-reveal'
import { HorizontalAccordion } from '@/components/horizontal-accordion'
import { WorkGallery } from '@/components/work-gallery'
import { CTASection } from '@/components/cta-section'
import Link from 'next/link'
import { ArrowRight, Code2, Layers, Palette, Zap } from 'lucide-react'

const pillA = 'https://picsum.photos/seed/team-collab/400/200'
const pillB = 'https://picsum.photos/seed/sketch-wireframe/400/200'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Client / tech ticker */}
      <Marquee />

      {/* Interest: gapless bento grid */}
      <section className="py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="max-w-5xl font-display font-bold tracking-tight leading-[1.1] text-4xl md:text-6xl text-foreground">
            We build{' '}
            <span
              aria-hidden
              className="inline-block align-middle w-20 h-10 md:w-28 md:h-14 rounded-full bg-cover bg-center mx-2 border border-border"
              style={{ backgroundImage: `url(${pillA})` }}
            />{' '}
            digital products people rely on every single day.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-dark leading-relaxed">
            Strategy, design, and engineering under one roof, so nothing gets lost between the people who imagine the product and the people who ship it.
          </p>

          {/* 4 cols x 3 rows = 12 cells. Spans: 4 + 2 + 1 + 1 + 2 + 2 = 12. Zero voids. */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] grid-flow-dense gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {/* A: Web Development (2x2) */}
            <Link
              href="/services"
              className="group relative sm:col-span-2 sm:row-span-2 overflow-hidden bg-background"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale-[40%] scale-105 group-hover:scale-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
                style={{ backgroundImage: 'url(https://picsum.photos/seed/code-dark/1200/1200)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <Code2 size={28} className="text-white mb-4" />
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white">Web Development</h3>
                <p className="mt-2 text-sm text-neutral-300 max-w-md leading-relaxed">
                  High-performance websites and applications built on Next.js, React, and TypeScript.
                </p>
              </div>
            </Link>

            {/* B: UI/UX Design (2x1) with inline typography image */}
            <Link
              href="/services"
              className="group relative sm:col-span-2 overflow-hidden bg-[#0d0d0d] p-8 flex flex-col justify-between hover:bg-[#111111] transition-colors duration-300"
            >
              <Palette size={24} className="text-muted-dark" />
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl leading-[1.15] text-foreground">
                  Interfaces that feel{' '}
                  <span
                    aria-hidden
                    className="inline-block align-middle w-16 h-8 md:w-24 md:h-11 rounded-full bg-cover bg-center mx-1 border border-border group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${pillB})` }}
                  />{' '}
                  effortless.
                </h3>
                <p className="mt-3 text-sm text-muted-dark">Research-driven design systems that scale.</p>
              </div>
            </Link>

            {/* C: System Integration (1x1) */}
            <Link href="/services" className="group relative overflow-hidden bg-background p-7 flex flex-col justify-between">
              <Layers size={24} className="text-muted-dark" />
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">System Integration</h3>
                <p className="mt-2 text-xs text-muted-dark leading-relaxed">APIs, legacy systems, and third-party services, unified.</p>
              </div>
            </Link>

            {/* D: Performance (1x1) */}
            <Link href="/services" className="group relative overflow-hidden bg-background p-7 flex flex-col justify-between">
              <Zap size={24} className="text-muted-dark" />
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">Performance First</h3>
                <p className="mt-2 text-xs text-muted-dark leading-relaxed">Sub-second loads and green Core Web Vitals, always.</p>
              </div>
            </Link>

            {/* F: Process teaser (2x1) */}
            <Link
              href="#process"
              className="group relative overflow-hidden bg-[#0d0d0d] p-8 flex items-end justify-between hover:bg-[#111111] transition-colors duration-300"
            >
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground">From first sketch to production deploy</h3>
                <p className="mt-2 text-sm text-muted-dark">See exactly how a project moves through our studio.</p>
              </div>
              <div className="shrink-0 w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* E: Client words (2x1) */}
            <figure className="relative overflow-hidden bg-background p-8 flex flex-col justify-between">
              <blockquote className="font-display font-semibold text-xl md:text-2xl leading-snug text-foreground">
                They shipped in six weeks what our previous vendor could not ship in six months.
              </blockquote>
              <figcaption className="text-sm text-muted-dark">Product Lead, logistics platform client</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Desire 1: process accordion */}
      <HorizontalAccordion />

      {/* Desire 2: scrubbing manifesto */}
      <section className="py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrubReveal
            className="font-display font-semibold tracking-tight leading-[1.18] text-3xl md:text-5xl text-foreground"
            text="Great software is invisible. It loads before you blink, reads like conversation, and gets out of the way so the work itself shines."
          />
        </div>
      </section>

      {/* Desire 3: selected work with scroll-driven media */}
      <section className="py-32 md:py-48 pt-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-3xl font-display font-bold tracking-tight leading-[1.08] text-4xl md:text-6xl text-foreground">
              Selected work, built to last.
            </h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-white/5 transition-colors duration-300"
            >
              View all work
              <ArrowRight size={18} />
            </Link>
          </div>
          <WorkGallery />
        </div>
      </section>

      {/* Action */}
      <CTASection />
    </>
  )
}

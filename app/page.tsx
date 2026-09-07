<<<<<<< HEAD
﻿import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { ScrubReveal } from '@/components/scrub-reveal'
import { HorizontalAccordion } from '@/components/horizontal-accordion'
import { WorkGallery } from '@/components/work-gallery'
import { CTASection } from '@/components/cta-section'
=======
import dynamic from 'next/dynamic'
import { Hero } from '@/components/hero'
import { PortfolioCard } from '@/components/portfolio-card'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal'
import { ScrubText, ScrollScaleImage } from '@/components/gsap-effects'
import { Marquee } from '@/components/marquee'
import { ServiceRow } from '@/components/service-row'
import { CapabilitiesBento } from '@/components/capabilities-bento'
import { ArrowRight } from 'lucide-react'
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
import Link from 'next/link'
import { ArrowRight, Code2, Layers, Palette, Zap } from 'lucide-react'

<<<<<<< HEAD
const pillA = 'https://picsum.photos/seed/team-collab/400/200'
const pillB = 'https://picsum.photos/seed/sketch-wireframe/400/200'
=======
// Dynamic imports for code-splitting heavy interactive sections
const TechStackShowcase = dynamic(() => import('@/components/tech-stack-showcase').then(mod => mod.TechStackShowcase), {
  loading: () => <div className="py-24 text-center text-xs font-mono text-muted-dark">Memuat Tech Stack...</div>
})

const FounderSpotlight = dynamic(() => import('@/components/founder-spotlight').then(mod => mod.FounderSpotlight), {
  loading: () => <div className="py-24 text-center text-xs font-mono text-muted-dark">Memuat Profil Founder...</div>
})

const ProjectEstimator = dynamic(() => import('@/components/project-estimator').then(mod => mod.ProjectEstimator), {
  loading: () => <div className="py-24 text-center text-xs font-mono text-muted-dark">Memuat Estimasi Biaya...</div>
})

const services = [
  {
    title: 'Pengembangan Web & Aplikasi Fullstack',
    description: 'Website dan platform berkinerja tinggi yang dibangun dengan Next.js App Router, TypeScript, dan edge rendering modern.',
    href: '/services',
  },
  {
    title: 'Desain UI/UX & Design System',
    description: 'Antarmuka terukur, prototipe interaktif Figma, dan komponen desain konsisten yang meningkatkan angka konversi bisnis.',
    href: '/services',
  },
  {
    title: 'Sistem Cloud, API & DevOps',
    description: 'Otomasi pipeline CI/CD, klaster database terdistribusi, dan deployment edge container teroptimasi dengan pemantauan real-time.',
    href: '/services',
  },
]

const featuredWorks = [
  {
    title: 'FinTech Analytics & Payment Gateway',
    category: 'Arsitektur Fullstack',
    description: 'Platform keuangan real-time dengan alur transaksi instan, integrasi payment gateway multi-kanal, dan audit trail otomatis.',
    image: '/assets/projects/project1',
    fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'AI-Powered SaaS Workflow Platform',
    category: 'Desain UI/UX & Cloud',
    description: 'Dashboard analitik cerdas dengan visualisasi data interaktif, query semantik AI, dan manajemen workspace multi-tenant.',
    image: '/assets/projects/project2',
    fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'Enterprise Multi-Region Web Platform',
    category: 'Pengembangan Web',
    description: 'Website korporasi global dengan edge SSR caching, CMS terintegrasi, dukungan multi-bahasa, dan skor Core Web Vitals optimal.',
    image: '/assets/projects/project3',
    fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    href: '/work',
  },
]
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      {/* 1. ATTENTION: HERO CHAPTER */}
      <Hero />

<<<<<<< HEAD
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
=======
      {/* 2. CREDIBILITY: INFINITE MARQUEE */}
      <Marquee />

      {/* 3. INTEREST: GAPLESS BENTO GRID (AWWWARDS-LEVEL DENSE ARCHITECTURE) */}
      <CapabilitiesBento />

      {/* 4. INTEREST / GSAP PINNING: SERVICES EDITORIAL CHAPTER */}
      <section className="py-20 sm:py-32 lg:py-48 border-b border-border/50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <SectionHeader
                  label="Layanan Kami"
                  title={
                    <>
                      Membangun{' '}
                      <span
                        className="hidden sm:inline-block align-middle w-[1.5em] h-[0.66em] rounded-full mx-1 bg-cover bg-center ring-1 ring-white/20"
                        style={{ backgroundImage: "url('/assets/studio-craft.jpg')" }}
                        aria-hidden
                      />{' '}
                      pengalaman digital yang berdampak nyata
                    </>
                  }
                  description="Dari perencanaan arsitektur awal hingga rilis produksi, kami menghadirkan solusi teknologi mutakhir untuk mempercepat pertumbuhan bisnis Anda."
                />
              </ScrollReveal>
            </div>

            {/* Editorial index list — agency numbered list */}
            <div className="border-b border-border">
              {services.map((service, i) => (
                <ServiceRow key={service.title} index={i} title={service.title} description={service.description} href={service.href} />
              ))}
            </div>
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* 5. TECH STACK & ARCHITECTURE SHOWCASE */}
      <div className="content-visibility-auto transform-gpu">
        <TechStackShowcase />
      </div>

      {/* 6. DESIRE: FEATURED WORK WITH EDITORIAL STAGGER */}
      <section className="py-20 sm:py-32 lg:py-48 bg-[#0c0c0c] content-visibility-auto transform-gpu border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase mb-4">
                  <span className="inline-block w-8 h-px bg-white/30" aria-hidden />
                  // Portofolio Pilihan
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  Studi Kasus &amp; Proyek yang Telah Rilis
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden md:flex items-center gap-2 text-foreground hover:text-muted transition-colors group text-sm font-medium"
              >
                Lihat semua karya
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8" staggerDelay={0.1}>
            {featuredWorks.map((work, idx) => (
              // Alternating vertical offset — editorial rhythm instead of a flat row
              <StaggerItem key={work.title} className={idx % 2 === 1 ? 'lg:translate-y-12' : ''}>
                <PortfolioCard {...work} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground text-sm font-medium"
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
            >
              Lihat semua karya
              <ArrowRight size={16} />
            </Link>
          </div>
          <WorkGallery />
        </div>
      </section>

<<<<<<< HEAD
      {/* Action */}
=======
      {/* 7. DESIRE: GSAP SCRUBBING & SCROLL SCALE APPROACH CHAPTER */}
      <section className="py-20 sm:py-32 lg:py-48 bg-[#0a0a0a] border-b border-border/50 content-visibility-auto transform-gpu relative overflow-hidden">
        {/* Ambient radial depth behind the chapter */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-white/[0.02] blur-[160px] pointer-events-none"
          aria-hidden
        />
        <div className="grain absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <ScrollScaleImage
                src="/assets/studio-craft.jpg"
                alt="WIRASA TECH Software House Jakarta Studio Setup"
                className="relative aspect-[4/3] rounded-3xl border border-white/10 shadow-2xl"
                imgClassName="contrast-110 saturate-[0.9]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" aria-hidden />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase mb-6">
                  <span className="inline-block w-8 h-px bg-white/30" aria-hidden />
                  // Filosofi Rekayasa Kami
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                  Dibangun dengan presisi.<br />
                  <span className="text-gradient">Direkayasa tanpa kompromi.</span>
                </h2>
                <ScrubText
                  text="Setiap baris kode, indeks database, dan interaksi visual dirancang dengan perhitungan matang. Kami memadukan standar enterprise dengan kecepatan eksekusi tim ahli untuk membangun software yang scalable dan tahan lama."
                  className="text-muted-dark text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light"
                />
                <div className="flex flex-wrap gap-2.5">
                  {['Next.js 14/15 App Router', 'TypeScript Ketat', 'CSS Bebas Drift', 'API Terdistribusi'].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono px-3.5 py-1.5 border border-border/80 rounded-full text-xs text-muted-dark hover:border-white/30 hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE FOUNDER SPOTLIGHT & ESTIMATOR */}
      <div className="content-visibility-auto transform-gpu">
        <FounderSpotlight />
      </div>

      <div className="content-visibility-auto transform-gpu">
        <ProjectEstimator />
      </div>

      {/* 9. ACTION: GIANT TYPOGRAPHIC CTA CHAPTER */}
>>>>>>> 75cb26d1dfec24399f916c4a7a3d71a791bcb7a2
      <CTASection />
    </main>
  )
}

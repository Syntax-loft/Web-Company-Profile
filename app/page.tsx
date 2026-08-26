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
import Link from 'next/link'

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
    description: 'Otomasi alur CI/CD, klaster database terdistribusi, dan layanan cloud kontainer dengan garansi uptime 99.99%.',
    href: '/services',
  },
]

const featuredWorks = [
  {
    title: 'Platform E-Commerce Modern',
    category: 'Pengembangan Web',
    description: 'Platform toko online modern dengan alur checkout instan, payment gateway terintegrasi, dan sinkronisasi stok real-time.',
    image: '/assets/projects/project1',
    fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'Dashboard Analitik SaaS',
    category: 'Desain UI/UX',
    description: 'Dashboard analitik finansial dengan visualisasi data interaktif, filter multi-dimensi, dan laporan terotomasi.',
    image: '/assets/projects/project2',
    fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'Website Korporat Profesional',
    category: 'Pengembangan Web',
    description: 'Website perusahaan premium dengan CMS dinamis, dukungan multi-bahasa, dan performa Core Web Vitals 100/100.',
    image: '/assets/projects/project3',
    fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    href: '/work',
  },
]

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      {/* 1. ATTENTION: HERO CHAPTER */}
      <Hero />

      {/* 2. CREDIBILITY: INFINITE MARQUEE */}
      <Marquee />

      {/* 3. INTEREST: GAPLESS BENTO GRID (AWWWARDS-LEVEL DENSE ARCHITECTURE) */}
      <CapabilitiesBento />

      {/* 4. INTEREST / GSAP PINNING: SERVICES EDITORIAL CHAPTER */}
      <section className="py-32 lg:py-48 border-b border-border/50 relative">
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
          </div>
        </div>
      </section>

      {/* 5. TECH STACK & ARCHITECTURE SHOWCASE */}
      <div className="content-visibility-auto transform-gpu">
        <TechStackShowcase />
      </div>

      {/* 6. DESIRE: FEATURED WORK WITH EDITORIAL STAGGER */}
      <section className="py-32 lg:py-48 bg-[#0c0c0c] content-visibility-auto transform-gpu border-b border-border/50">
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
            >
              Lihat semua karya
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DESIRE: GSAP SCRUBBING & SCROLL SCALE APPROACH CHAPTER */}
      <section className="py-32 lg:py-48 bg-[#0a0a0a] border-b border-border/50 content-visibility-auto transform-gpu relative overflow-hidden">
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
      <CTASection />
    </main>
  )
}

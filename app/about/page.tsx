'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TeamSection } from '@/components/team-section'
import { CTASection } from '@/components/cta-section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Code2,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  Linkedin,
  Github,
  Twitter,
  Flame,
} from 'lucide-react'
import Link from 'next/link'

const PILLARS = [
  {
    index: '/01',
    title: 'Presisi Arsitektur & Keamanan Tipe (Type Safety)',
    description:
      'Kami menerapkan 100% batasan tipe TypeScript yang ketat, arsitektur modular yang rapi, dan sistem desain berbasis token. Setiap komponen diaudit untuk durabilitas, konsistensi visual, dan kemudahan pemeliharaan jangka panjang.',
    tags: ['Strict TypeScript', 'Modular Seams', 'Zero-Drift Tokens', 'Deterministic State'],
    icon: Code2,
    span: 'lg:col-span-8',
    highlight: true,
  },
  {
    index: '/02',
    title: 'Prioritas Kecepatan & Latensi Rendah',
    description:
      'Direkayasa untuk target TTFB di bawah 80ms dan skor 100/100 Core Web Vitals. Bebas CSS bloat yang memberatkan, komponen server streaming teroptimasi, serta pipeline kompresi gambar modern.',
    tags: ['< 80ms TTFB', '100 Lighthouse', 'Edge Caching'],
    icon: Zap,
    span: 'lg:col-span-4',
    highlight: false,
  },
  {
    index: '/03',
    title: 'Kemitraan Langsung Tanpa Perantara',
    description:
      'Akses komunikasi langsung dan transparan dengan tim pengembang kami. Tanpa birokrasi berbelit — diskusi teknis langsung dengan tim yang merekayasa solusi Anda.',
    tags: ['Akses Langsung', 'Komunikasi Transparan', 'Update Cepat'],
    icon: Sparkles,
    span: 'lg:col-span-4',
    highlight: false,
  },
  {
    index: '/04',
    title: 'Kepemilikan Source Code 100% Berkelanjutan',
    description:
      'Serah terima hak kekayaan intelektual secara penuh, dokumentasi teknis rapi, dan pipeline CI/CD otomatis. Tim Anda menerima repositori mandiri yang bersih tanpa keterikatan (zero vendor lock-in).',
    tags: ['100% IP Transfer', 'Automated CI/CD', 'Docker / Cloud Native', 'Dokumentasi Lengkap'],
    icon: ShieldCheck,
    span: 'lg:col-span-8',
    highlight: true,
  },
]

const METRICS = [
  {
    value: '100',
    unit: '/100',
    label: 'Standar Core Web Vitals',
    subtext: 'Performa, Aksesibilitas, SEO, dan Best Practices di setiap build produksi.',
  },
  {
    value: '< 80',
    unit: 'ms',
    label: 'Target Latensi TTFB',
    subtext: 'Server components edge-rendered dan strategi caching multi-region.',
  },
  {
    value: '100',
    unit: '%',
    label: 'Kepemilikan Source Code',
    subtext: 'Histori Git commit lengkap, catatan arsitektur, dan bebas keterikatan vendor.',
  },
  {
    value: '24',
    unit: 'Jam',
    label: 'Respon & Roadmap Awal',
    subtext: 'Evaluasi teknis cepat dan terarah tanpa penundaan birokrasi berpekan-pekan.',
  },
]

export default function AboutPage() {
  const [founderImageSrc, setFounderImageSrc] = useState('/assets/team/dava.webp')

  return (
    <>
      {/* 1. ASYMMETRIC SPLIT HERO */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-border/40">
        {/* Ambient subtle lighting & texture */}
        <div
          className="absolute -top-40 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"
          aria-hidden
        />
        <div className="grain absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Studio Meta Coordinates Banner with shadcn Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8 text-xs font-mono text-muted-dark"
          >
            <Badge variant="emerald" className="gap-2 px-3 py-1.5 rounded-full border-white/10 text-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>PROFIL STUDIO // EST. 2026</span>
            </Badge>
            <span className="hidden sm:inline text-border">/</span>
            <span>JAKARTA [6°12&apos;S 106°49&apos;E]</span>
            <span className="hidden sm:inline text-border">/</span>
            <span className="text-muted-dark">KONSULTANSI BOUTIQUE</span>
          </motion.div>

          {/* Asymmetric Split: Large Display Headline + Contextual Meta */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.06] tracking-tight">
                Merekayasa sistem digital dengan{' '}
                <span
                  className="hidden sm:inline-block align-middle w-[1.45em] h-[0.62em] rounded-full mx-1.5 bg-cover bg-center ring-1 ring-white/20"
                  style={{ backgroundImage: "url('/assets/studio-craft.jpg')" }}
                  aria-hidden
                />{' '}
                keyakinan arsitektur tinggi.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-6 lg:pt-3"
            >
              <p className="text-muted-dark text-base sm:text-lg font-light leading-relaxed">
                WIRASA TECH adalah software house dan konsultan teknologi independen. Kami memangkas birokrasi
                agency tradisional untuk menghadirkan website dan aplikasi web modern berstandar enterprise,
                design system kustom, dan infrastruktur cloud yang scalable.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button asChild variant="outline" size="lg" className="justify-between rounded-xl group">
                  <a href="#manifesto">
                    <span>Baca Manifesto Kami</span>
                    <ArrowUpRight size={16} className="text-muted-dark group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </Button>

                <Button asChild size="lg" className="justify-between rounded-xl group">
                  <Link href="/project-brief">
                    <span>Kirim Brief Proyek</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & MANIFESTO (ASYMMETRIC 2-COL ARCHITECTURAL SPLIT) */}
      <section id="manifesto" className="py-24 lg:py-36 bg-[#0c0c0c] border-b border-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Editorial Storytelling */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
                  <span className="inline-block w-8 h-px bg-white/30" aria-hidden />
                  // 01 Manifesto Kami
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
                  Keunggulan Studio Boutique: Tanpa Birokrasi, Murni Keahlian.
                </h2>
              </div>

              <div className="space-y-5 text-muted-dark text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Banyak digital agency membebani proyek dengan lapisan account manager yang panjang,
                  pendelegasian ke staf junior, dan biaya overhead kantor yang tinggi. Hasilnya adalah
                  kode template yang rapuh dan sulit dikembangkan.
                </p>
                <p>
                  <strong className="text-foreground font-medium">WIRASA TECH didirikan atas satu prinsip tegas:</strong>{' '}
                  memberikan kualitas arsitektur modern berstandar tinggi dengan kecepatan dan fokus penuh dari tim boutique ahli.
                  Setiap rancangan sistem, skema basis data, dan interaksi visual dibuat secara presisi.
                </p>
                <p>
                  Saat bermitra dengan kami, Anda berkomunikasi dan berdiskusi langsung dengan para engineer yang
                  menulis baris kode Anda. Tanpa distorsi komunikasi, tanpa kebingungan konteks, dan tanpa kompromi teknis.
                </p>
              </div>

              {/* Architectural Quote Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-border/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-foreground" />
                <p className="text-foreground text-lg sm:text-xl font-display font-medium leading-snug mb-3">
                  &ldquo;Ketelitian berstandar enterprise tanpa hambatan birokrasi yang lambat.&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-muted-dark pt-2 border-t border-border/40">
                  <span>MUHAMAD DAVA RAYHAN</span>
                  <span>FOUNDER &amp; LEAD CONSULTANT</span>
                </div>
              </div>

              {/* Guiding Principles Bullet Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Akses Langsung ke Lead Engineer',
                  '100% Strict Type Safety',
                  'Bebas Vendor Lock-In',
                  'Performa Produksi Sub-80ms',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground/90 font-mono">
                    <CheckCircle2 size={16} className="text-white shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Authentic Founder & Leadership Presentation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="rounded-3xl bg-[#121212] border border-border/80 overflow-hidden shadow-2xl p-4 sm:p-5 space-y-4">
                {/* Visual Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#18181b] border border-white/5 group">
                  <img
                    src={founderImageSrc}
                    alt="Muhamad Dava Rayhan - Founder & Lead Consultant WIRASA TECH"
                    onError={() =>
                      setFounderImageSrc(
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'
                      )
                    }
                    className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                    <span className="text-white font-medium flex items-center gap-2">
                      <Terminal size={13} className="text-emerald-400" />
                      M. Dava Rayhan
                    </span>
                    <span className="text-muted-dark">FOUNDER &amp; LEAD</span>
                  </div>
                </div>

                {/* Founder Details Card */}
                <div className="px-2 pt-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">
                        Muhamad Dava Rayhan
                      </h3>
                      <p className="text-xs font-mono text-muted-dark">
                        Fullstack Architect &amp; Design Technologist
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-muted hover:text-white transition-colors"
                        aria-label="GitHub profile"
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-muted hover:text-white transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <Linkedin size={15} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-muted hover:text-white transition-colors"
                        aria-label="Twitter profile"
                      >
                        <Twitter size={15} />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-muted-dark leading-relaxed">
                    Berfokus pada Next.js App Router, arsitektur sistem modern berkecepatan tinggi,
                    dan antarmuka interaktif presisi. Memimpin langsung strategi teknis di setiap proyek WIRASA TECH.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE ENGINEERING PILLARS (ASYMMETRIC BENTO GRID) */}
      <section className="py-24 lg:py-36 bg-[#0a0a0a] border-b border-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
              <span className="inline-block w-8 h-px bg-white/30" aria-hidden />
              // 02 Pilar &amp; Disiplin Utama
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
              Prinsip yang mengatur setiap rilis produk kami.
            </h2>
            <p className="text-muted-dark text-base sm:text-lg font-light leading-relaxed">
              Kami menggantikan praktik umum yang klise dengan standar arsitektur ketat yang dirancang untuk kecepatan,
              ketahanan sistem, dan kemudahan pengembangan tim Anda.
            </p>
          </div>

          {/* Asymmetric Bento Grid (2-Span + 1-Span Composition) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`${pillar.span} p-8 sm:p-10 rounded-3xl bg-[#121212] border border-border/80 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  {/* Subtle inner lighting */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.015] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.03] transition-colors" />

                  <div>
                    {/* Index & Icon Row */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono text-muted-dark tracking-widest">
                        {pillar.index}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-dark text-sm sm:text-base leading-relaxed mb-8 font-light">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Micro-tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-muted-dark group-hover:text-muted transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. VERIFIED ENGINEERING STANDARDS & METRICS */}
      <section className="py-24 lg:py-32 bg-[#0d0d0d] border-b border-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-4"
            >
              <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
                <span className="inline-block w-8 h-px bg-white/30" aria-hidden />
                // 03 Standar Teruji
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight tracking-tight">
                Standar kualitas yang dapat Anda audit di produksi.
              </h2>
              <p className="text-muted-dark text-sm leading-relaxed font-light">
                Kami tidak menjanjikan angka kosong. Setiap delivery diuji dan dibenchmark menggunakan standar performa
                dunia nyata serta audit arsitektur yang ketat.
              </p>
            </motion.div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {METRICS.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-border/80 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                      {metric.value}
                    </span>
                    <span className="text-xl sm:text-2xl font-mono text-muted-dark">
                      {metric.unit}
                    </span>
                  </div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-foreground mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-muted-dark leading-relaxed font-light">
                    {metric.subtext}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM & LEADERSHIP ROSTER (HIGH DENSITY INTERACTIVE) */}
      <TeamSection />

      {/* 6. CINEMATIC CLOSING CTA */}
      <CTASection />
    </>
  )
}

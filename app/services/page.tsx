'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { TechStackShowcase } from '@/components/tech-stack-showcase'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal'
import { Code2, Palette, Layers, Smartphone, Globe, Database, Check } from 'lucide-react'

const services = [
  {
    icon: <Code2 size={32} />,
    title: 'Pengembangan Web (Web Development)',
    description: 'Kami membangun website dan aplikasi web modern yang cepat, aman, dan scalable menggunakan teknologi Next.js & React terkini.',
    features: [
      'Aplikasi Next.js & React Modern',
      'Integrasi Headless CMS (Strapi/Sanity)',
      'Solusi E-Commerce & Payment Gateway',
      'Aplikasi Web Custom & Dashboard SaaS',
      'Pembuatan & Optimasi REST/GraphQL API',
      'Optimasi Kecepatan & Core Web Vitals',
    ],
  },
  {
    icon: <Palette size={32} />,
    title: 'Desain UI/UX (UI/UX Design)',
    description: 'Desain berorientasi pengguna (user-centered) yang menciptakan impresi visual premium dan meningkatkan rasio konversi bisnis Anda.',
    features: [
      'Riset Pengguna & Analisis Pasar',
      'Wireframing & Prototipe Interaktif Figma',
      'Sistem Desain (Design Systems) Skalabel',
      'Desain Responsif Mobile-First',
      'Mikro-Interaksi & Transisi Halus',
      'Identitas Visual & Branding Digital',
    ],
  },
  {
    icon: <Layers size={32} />,
    title: 'Integrasi Sistem (System Integration)',
    description: 'Menghubungkan ekosistem digital Anda secara mulus untuk otomatisasi proses bisnis dan aliran data yang aman dan efisien.',
    features: [
      'Integrasi API Pihak Ketiga',
      'Integrasi Payment Gateway & Logistik',
      'Migrasi Sistem Legacy ke Cloud',
      'Sinkronisasi Database Real-Time',
      'Integrasi Cloud AWS/GCP/Vercel',
      'Alur Kerja Otomasi & Webhook',
    ],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Pengembangan Aplikasi Mobile (Mobile Apps)',
    description: 'Aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna luar biasa di Android dan iOS.',
    features: [
      'Aplikasi iOS & Android Terpadu',
      'Pengembangan React Native Modern',
      'Progressive Web Apps (PWA)',
      'Optimasi Toko Aplikasi (ASO)',
      'Notifikasi Push Real-Time',
      'Dukungan Fitur Offline',
    ],
  },
  {
    icon: <Globe size={32} />,
    title: 'SEO Teknis & Optimasi Performa',
    description: 'Optimasi menyeluruh untuk memastikan website Anda mudah ditemukan di Google dan memiliki kecepatan akses super cepat.',
    features: [
      'Audit SEO Teknis Mendalam',
      'Skor Core Web Vitals 100/100',
      'Optimasi Kecepatan Waktu Muat (Page Speed)',
      'Penerapan Structured Data & Schema.org',
      'Strategi Konten Berorientasi Search Intent',
      'Konfigurasi Google Analytics & Search Console',
    ],
  },
  {
    icon: <Database size={32} />,
    title: 'Konsultansi & Strategi Teknologi',
    description: 'Panduan strategis dari arsitek perangkat lunak kami untuk memandu transformasi digital dan keputusan teknologi modern bisnis Anda.',
    features: [
      'Perumusan Strategi Arsitektur Digital',
      'Konsultansi Pemilihan Tech Stack',
      'Perencanaan Roadmap Produk & MVP',
      'Audit Keamanan & Skalabilitas Sistem',
      'Pendampingan Tim Teknis (Team Augmentation)',
      'Training & Dukungan Pemeliharaan',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Layanan Kami"
              title="Solusi Digital Menyeluruh Berstandar Enterprise"
              description="Dari perancangan strategi arsitektur hingga rilis produksi, kami menyediakan layanan terpadu untuk mentransformasi kehadiran digital Anda dan mendorong hasil bisnis yang terukur."
              centered
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="p-8 lg:p-10 border border-border rounded-2xl hover:bg-white/[0.02] transition-colors duration-500 h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-white/5 rounded-xl text-foreground shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-dark mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-muted">
                            <Check size={16} className="text-foreground" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack & Architecture Showcase */}
      <TechStackShowcase />

      <CTASection />
    </>
  )
}

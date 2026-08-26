'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { PortfolioCard } from '@/components/portfolio-card'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal } from '@/components/scroll-reveal'

const categories = ['Semua', 'Pengembangan Web', 'Desain UI/UX', 'Aplikasi Mobile', 'E-Commerce']

const projects = [
  {
    title: 'Dashboard Analitik FinTech',
    category: 'Pengembangan Web',
    description: 'Platform visualisasi data finansial real-time dengan grafik interaktif, pelacakan portofolio investasi, dan laporan terotomasi.',
    image: '/assets/projects/project1',
    fallbackImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Platform E-Learning & Kursus',
    category: 'Pengembangan Web',
    description: 'Platform pendidikan online interaktif dengan video streaming cepat, pelacakan progres belajar, modul kuis, dan penerbitan sertifikat otomatis.',
    image: '/assets/projects/project2',
    fallbackImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Sistem Reservasi Restoran & F&B',
    category: 'Pengembangan Web',
    description: 'Sistem booking meja real-time dengan notifikasi WhatsApp/SMS otomatis, integrasi menu digital, dan dashboard manajemen operasional.',
    image: '/assets/projects/project3',
    fallbackImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Portofolio Agensi Kreatif',
    category: 'Desain UI/UX',
    description: 'Website portofolio visual dengan transisi mikro yang halus, presentasi studi kasus yang mendalam, dan form interaktif bernilai konversi tinggi.',
    image: '/assets/projects/project4',
    fallbackImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Landing Page SaaS Berkonversi Tinggi',
    category: 'Desain UI/UX',
    description: 'Landing page berkonversi tinggi dengan arsitektur AIDA, integrasi A/B testing, tabel harga interaktif, dan form pendaftaran newsletter.',
    image: '/assets/projects/project5',
    fallbackImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Platform Listing Properti & Real Estate',
    category: 'Pengembangan Web',
    description: 'Platform pencarian real estate dengan filter multi-kriteria canggih, integrasi peta interaktif, tur virtual 360°, dan manajemen kontak agen.',
    image: '/assets/projects/project6',
    fallbackImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    href: '#',
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredProjects = activeCategory === 'Semua'
    ? projects
    : projects.filter((p) => {
        if (activeCategory === 'Pengembangan Web') return p.category === 'Pengembangan Web'
        if (activeCategory === 'Desain UI/UX') return p.category === 'Desain UI/UX'
        if (activeCategory === 'Aplikasi Mobile') return p.category === 'Aplikasi Mobile'
        if (activeCategory === 'E-Commerce') return p.category === 'E-Commerce'
        return true
      })

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Portofolio Kami"
              title="Karya &amp; Studi Kasus Pilihan"
              description="Jelajahi portofolio proyek unggulan kami yang membuktikan keahlian dalam rekayasa perangkat lunak modern, desain UI/UX, dan optimasi performa."
              centered
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-foreground text-background font-semibold shadow-md'
                    : 'bg-transparent border border-border text-muted hover:text-foreground hover:border-foreground/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <PortfolioCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection />
    </>
  )
}

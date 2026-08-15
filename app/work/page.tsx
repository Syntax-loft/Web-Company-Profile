'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { PortfolioCard } from '@/components/portfolio-card'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal } from '@/components/scroll-reveal'

const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App', 'E-Commerce']

const projects = [
  {
    title: 'FinTech Analytics Dashboard',
    category: 'Web Development',
    description: 'Real-time financial data visualization platform with interactive charts, portfolio tracking, and automated reporting for investment professionals.',
    image: '/assets/projects/project1.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'E-Learning Platform',
    category: 'Web Development',
    description: 'Comprehensive online education platform featuring video streaming, progress tracking, quizzes, and certificate generation for course completion.',
    image: '/assets/projects/project2.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Restaurant Reservation System',
    category: 'Web Development',
    description: 'Table booking system with real-time availability, SMS notifications, menu integration, and staff management dashboard for hospitality businesses.',
    image: '/assets/projects/project3.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Creative Agency Portfolio',
    category: 'UI/UX Design',
    description: 'Visually striking portfolio website with smooth animations, case study presentations, and contact form integration for creative professionals.',
    image: '/assets/projects/project4.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'SaaS Landing Page',
    category: 'UI/UX Design',
    description: 'Conversion-optimized landing page with A/B testing integration, pricing tables, feature showcases, and newsletter signup functionality.',
    image: '/assets/projects/project5.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    href: '#',
  },
  {
    title: 'Property Listing Platform',
    category: 'Web Development',
    description: 'Real estate search platform with advanced filtering, map integration, virtual tour support, and agent contact management.',
    image: '/assets/projects/project6.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    href: '#',
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Portfolio"
              title="Our recent work"
              description="Explore our curated selection of projects that showcase our expertise in design and development."
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
                    ? 'bg-foreground text-background'
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

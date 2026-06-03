'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal'
import { Code2, ShoppingBag, GraduationCap, Heart, Building2, Zap, BarChart3, Users } from 'lucide-react'

const industries = [
  { name: 'Technology', icon: <Code2 size={28} />, description: 'SaaS platforms, developer tools, and tech startups' },
  { name: 'Finance', icon: <BarChart3 size={28} />, description: 'Fintech solutions, banking interfaces, and trading platforms' },
  { name: 'Healthcare', icon: <Heart size={28} />, description: 'Patient portals, telemedicine, and health tracking apps' },
  { name: 'Education', icon: <GraduationCap size={28} />, description: 'E-learning platforms, course management, and training portals' },
  { name: 'E-Commerce', icon: <ShoppingBag size={28} />, description: 'Online stores, marketplaces, and retail solutions' },
  { name: 'Real Estate', icon: <Building2 size={28} />, description: 'Property listings, virtual tours, and agent platforms' },
  { name: 'Energy', icon: <Zap size={28} />, description: 'Utility dashboards, monitoring systems, and sustainability tools' },
  { name: 'Professional Services', icon: <Users size={28} />, description: 'Agency websites, portfolios, and service platforms' },
]

const whyWorkWithUs = [
  {
    title: 'Technical Excellence',
    description: 'We write clean, maintainable code using modern frameworks like Next.js, React, and TypeScript. Our solutions are built to scale.',
  },
  {
    title: 'Design-First Approach',
    description: 'Every project starts with understanding your users. We create intuitive interfaces that look beautiful and function flawlessly.',
  },
  {
    title: 'Clear Communication',
    description: 'No technical jargon or black boxes. We keep you informed at every stage with regular updates and transparent timelines.',
  },
]

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Expertise"
              title="Industries we serve"
              description="We bring domain knowledge and technical expertise across multiple sectors, helping businesses of all sizes build impactful digital products."
              centered
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid with Stagger */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 border border-border rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-dark">{industry.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Work With Us with Stagger */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our Approach"
              title="Why work with us"
              centered
            />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" staggerDelay={0.15}>
            {whyWorkWithUs.map((item, index) => (
              <StaggerItem key={item.title}>
                <div className="p-8 border border-border rounded-2xl h-full">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-foreground mb-6">
                    <span className="text-lg font-display font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}

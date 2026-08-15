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
    title: 'Web Development',
    description: 'We build fast, scalable, and secure web applications using cutting-edge technologies.',
    features: [
      'Next.js & React Applications',
      'Headless CMS Integration',
      'E-commerce Solutions',
      'Custom Web Applications',
      'API Development',
      'Performance Optimization',
    ],
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Human-centered design that creates meaningful connections between brands and users.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Design Systems',
      'Responsive Design',
      'Interaction Design',
      'Visual Identity',
    ],
  },
  {
    icon: <Layers size={32} />,
    title: 'System Integration',
    description: 'Seamlessly connect your digital ecosystem for improved efficiency and data flow.',
    features: [
      'API Integration',
      'Third-party Services',
      'Legacy System Migration',
      'Data Synchronization',
      'Cloud Integration',
      'Automation Workflows',
    ],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'Progressive Web Apps',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
  },
  {
    icon: <Globe size={32} />,
    title: 'SEO & Performance',
    description: 'Optimize your digital presence for search engines and maximum performance.',
    features: [
      'Technical SEO Audit',
      'Core Web Vitals',
      'Page Speed Optimization',
      'Structured Data',
      'Content Strategy',
      'Analytics Setup',
    ],
  },
  {
    icon: <Database size={32} />,
    title: 'Consulting & Strategy',
    description: 'Strategic guidance to help you navigate digital transformation and technology decisions.',
    features: [
      'Digital Strategy',
      'Technology Consulting',
      'Project Planning',
      'Architecture Review',
      'Team Augmentation',
      'Training & Support',
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
              label="Our Services"
              title="Comprehensive digital solutions"
              description="From strategy to execution, we provide end-to-end services that transform your digital presence and drive measurable results."
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

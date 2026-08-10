'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { Target, Lightbulb, Users, Zap } from 'lucide-react'

const values = [
  {
    icon: <Target size={24} />,
    title: 'Precision',
    description: 'We pay attention to every detail, ensuring pixel-perfect implementation and flawless functionality.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to solve complex problems.',
  },
  {
    icon: <Users size={24} />,
    title: 'Collaboration',
    description: 'We work closely with our clients, treating every project as a true partnership.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Performance',
    description: 'Speed and efficiency are at the core of everything we build.',
  },
]

const teamMembers = [
  {
    id: 1,
    name: 'Muhamad Dava Rayhan',
    role: 'Founder & Lead Consultant',
    bio: 'Bridging enterprise-level development with boutique consultancy. Specialized in Next.js, React, and modern web architecture.',
    isFounder: true,
  },
  {
    id: 2,
    name: 'Nama Cofounder',
    role: 'Co-founder & CTO',
    bio: 'Ahli dalam arsitektur yang dapat diskalakan dan pengembangan full-stack.',
    isFounder: false,
  },
  {
    id: 3,
    name: 'Nama Anggota Tim',
    role: 'Lead Developer',
    bio: 'Spesialisasi dalam performa frontend dan optimisasi React.',
    isFounder: false,
  },
  {
    id: 4,
    name: 'Nama Anggota Tim',
    role: 'Lead Developer',
    bio: 'Spesialisasi dalam performa frontend dan optimisasi React.',
    isFounder: false,
  },
]

export default function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="About Us"
            title="We craft digital excellence"
            description="Premium web development, personal touch. Founded in 2026, Syntax Loft is my boutique consultancy for businesses ready to elevate their digital presence with modern technology."
            centered
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-4 text-muted-dark">
                <p>
                  Syntax Loft launched in 2026 with a simple mission: bring enterprise-level web
                  development to businesses of all sizes, without the enterprise-level bureaucracy.
                </p>
                <p>
                  As a consultant, I bridge the gap between technical complexity and business goals.
                  You get senior-level expertise with the agility of a solo operator who genuinely
                  cares about outcomes.
                </p>
                <p>
                  No cookie-cutter solutions. Every project starts with understanding your unique
                  challenges, then crafting tailored solutions using the latest tech stack.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] lg:aspect-[4/5] rounded-2xl bg-border overflow-hidden max-h-[400px] lg:max-h-none">
                <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-muted-dark">
                  Founder Photo
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="What drives us"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-border rounded-2xl text-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center text-foreground">
                  {value.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-dark">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Clean Grid Layout */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Meet the Team"
            title="Our Expert Team"
            centered
          />
          <div className="grid gap-6">
            {/* Founder Section - Magazine Editorial Layout */}
            <div className="lg:col-span-2 mb-12 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-6 lg:p-12 rounded-3xl border border-border/50 bg-[#121212]/80 backdrop-blur-sm overflow-hidden">

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="lg:col-span-5 relative overflow-hidden rounded-2xl aspect-[3/4]"
                >
                  <div className="absolute inset-0 bg-border/20 transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-dark font-display text-sm tracking-widest uppercase grayscale group-hover:grayscale-0 transition-all duration-700 bg-[#1a1a1a]">
                    <img src="" alt="" />
                  </div>
                  {/* Elegant overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-foreground/50 mb-4 font-semibold"
                    >
                      Founder & Lead Consultant
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight"
                    >
                      Muhamad
                      <br />
                      <span className="text-foreground/40 italic font-light">Dava Rayhan</span>
                    </motion.h3>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative pl-6 md:pl-8 border-l border-white/10"
                  >
                    <p className="text-lg md:text-xl text-muted-dark leading-relaxed font-light italic">
                      "Bridging enterprise-level development with boutique consultancy. Specialized in Next.js, React, and modern web architecture to deliver unparalleled digital experiences."
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex gap-6 pt-4 border-t border-white/5"
                  >
                    <button className="text-sm font-medium text-foreground/60 hover:text-white transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300">
                      LinkedIn
                    </button>
                    <button className="text-sm font-medium text-foreground/60 hover:text-white transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300">
                      Twitter
                    </button>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* Team Members Grid - Horizontal Mini-Cards */}
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 mt-8">
              {teamMembers
                .filter(member => !member.isFounder)
                .map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="group flex flex-col sm:flex-row gap-6 p-5 sm:p-6 rounded-3xl border border-border/50 bg-[#121212]/50 hover:bg-[#1a1a1a]/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 hover:border-white/20"
                  >
                    {/* Left: Image Column */}
                    <div className="w-full sm:w-1/3 shrink-0 relative overflow-hidden rounded-2xl aspect-[3/4] sm:h-full min-h-[200px]">
                      <div className="absolute inset-0 bg-border/20 transition-transform duration-700 ease-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center text-muted-dark font-display text-2xl tracking-widest uppercase grayscale group-hover:grayscale-0 transition-all duration-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {/* Subtle vignette/gradient over image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Right: Content Column */}
                    <div className="flex flex-col justify-center sm:w-2/3 py-2">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2 font-semibold transition-colors duration-500 group-hover:text-foreground/80">
                        {member.role}
                      </p>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-dark leading-relaxed font-light mb-6 flex-1 transition-colors duration-500 group-hover:text-foreground/80">
                        {member.bio}
                      </p>

                      {/* Links */}
                      <div className="flex gap-4 mt-auto border-t border-white/5 pt-4 group-hover:border-white/10 transition-colors duration-500">
                        <button className="text-[10px] font-medium text-foreground/50 hover:text-white transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300">
                          LinkedIn
                        </button>
                        <button className="text-[10px] font-medium text-foreground/50 hover:text-white transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300">
                          Twitter
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

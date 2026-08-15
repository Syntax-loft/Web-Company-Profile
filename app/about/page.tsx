'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { TeamSection } from '@/components/team-section'
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

export default function AboutPage() {

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

      {/* Team - Interactive Vertical Sidebar Section */}
      <TeamSection />
      <CTASection />
    </>
  )
}

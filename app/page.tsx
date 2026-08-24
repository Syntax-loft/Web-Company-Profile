import dynamic from 'next/dynamic'
import { Hero } from '@/components/hero'
import { PortfolioCard } from '@/components/portfolio-card'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal'
import { Marquee } from '@/components/marquee'
import { ServiceRow } from '@/components/service-row'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Dynamic imports for code-splitting heavy interactive sections
const TechStackShowcase = dynamic(() => import('@/components/tech-stack-showcase').then(mod => mod.TechStackShowcase), {
  loading: () => <div className="py-24 text-center text-xs font-mono text-muted-dark">Loading Tech Stack...</div>
})

const TeamSection = dynamic(() => import('@/components/team-section').then(mod => mod.TeamSection), {
  loading: () => <div className="py-24 text-center text-xs font-mono text-muted-dark">Loading Team...</div>
})

const ProjectEstimator = dynamic(() => import('@/components/project-estimator').then(mod => mod.ProjectEstimator), {
  loading: () => <div className="py-24 text-center text-xs font-mono text-muted-dark">Loading Estimator...</div>
})

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites and web applications built with modern technologies like Next.js, React, and TypeScript.',
    href: '/services',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive conversions through thoughtful design systems.',
    href: '/services',
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of third-party services, APIs, and legacy systems for unified digital ecosystems.',
    href: '/services',
  },
]

const featuredWorks = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform with seamless checkout experience and real-time inventory management.',
    image: '/assets/projects/project1',
    fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Analytics dashboard with intuitive data visualization and customizable reporting features.',
    image: '/assets/projects/project2',
    fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Premium corporate website with dynamic content management and multi-language support.',
    image: '/assets/projects/project3',
    fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    href: '/work',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Services Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our Services"
              title="We build digital experiences that matter"
              description="From concept to deployment, we deliver comprehensive solutions that drive business growth and user engagement."
            />
          </ScrollReveal>
          {/* Editorial index list — deliberate anti-pattern to equal-card grids */}
          <div className="mt-12 border-b border-border">
            {services.map((service, i) => (
              <ServiceRow key={service.title} index={i} title={service.title} description={service.description} href={service.href} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Architecture Showcase */}
      <div className="content-visibility-auto transform-gpu">
        <TechStackShowcase />
      </div>

      {/* Featured Work Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] content-visibility-auto transform-gpu">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-muted-dark text-sm tracking-[0.2em] uppercase mb-4">Featured Work</p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  Selected projects
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden md:flex items-center gap-2 text-foreground hover:text-muted transition-colors group"
              >
                View all work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground"
            >
              View all work
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section — clean editorial treatment, no shape dividers */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] border-y border-border content-visibility-auto transform-gpu">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                  alt="Code editor dark theme"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase mb-6">
                  <span className="inline-block w-10 h-px bg-white/30" aria-hidden />
                  Our Approach
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                  Built with precision.<br />
                  <span className="text-gradient">Powered by passion.</span>
                </h2>
                <p className="text-muted-dark text-lg leading-relaxed mb-8">
                  Every line of code is crafted with intention. We combine cutting-edge technology
                  with thoughtful design to create digital experiences that leave lasting impressions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono px-4 py-2 border border-border rounded-full text-sm text-muted hover:border-foreground/50 hover:text-foreground transition-colors"
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

      {/* Our Expert Team Section */}
      <div className="content-visibility-auto transform-gpu">
        <TeamSection />
      </div>

      {/* Interactive Project Scope & Budget Estimator */}
      <div className="content-visibility-auto transform-gpu">
        <ProjectEstimator />
      </div>

      <CTASection />
    </>
  )
}

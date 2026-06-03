import { Hero } from '@/components/hero'
import { ServiceCard } from '@/components/service-card'
import { PortfolioCard } from '@/components/portfolio-card'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal'
import { Code2, Palette, Layers, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites and web applications built with modern technologies like Next.js, React, and TypeScript.',
    icon: <Code2 size={24} />,
    href: '/services',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive conversions through thoughtful design systems.',
    icon: <Palette size={24} />,
    href: '/services',
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of third-party services, APIs, and legacy systems for unified digital ecosystems.',
    icon: <Layers size={24} />,
    href: '/services',
  },
]

const featuredWorks = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform with seamless checkout experience and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Analytics dashboard with intuitive data visualization and customizable reporting features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '/work',
  },
  {
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Premium corporate website with dynamic content management and multi-language support.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    href: '/work',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" staggerDelay={0.12}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f]">
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {featuredWorks.map((work) => (
              <StaggerItem key={work.title}>
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

      {/* Shape Divider Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0f0f0f]"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                  alt="Code editor dark theme"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="text-muted-dark text-sm tracking-[0.2em] uppercase mb-4">Our Approach</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                  Built with precision.<br />
                  <span className="text-gradient">Powered by passion.</span>
                </h2>
                <p className="text-muted-dark text-lg leading-relaxed mb-8">
                  Every line of code is crafted with intention. We combine cutting-edge technology 
                  with thoughtful design to create digital experiences that leave lasting impressions.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 border border-border rounded-full text-sm text-muted hover:border-foreground/50 hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0f0f0f]"></path>
          </svg>
        </div>
      </section>

      <CTASection />
    </>
  )
}

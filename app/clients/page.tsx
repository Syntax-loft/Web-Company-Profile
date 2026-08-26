'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal'
import { Code2, ShoppingBag, GraduationCap, Heart, Building2, Zap, BarChart3, Users } from 'lucide-react'

const industries = [
  { name: 'Teknologi & SaaS', icon: <Code2 size={28} />, description: 'Platform SaaS, developer tools, dan startup teknologi berkembang' },
  { name: 'Keuangan & FinTech', icon: <BarChart3 size={28} />, description: 'Solusi fintech, interface perbankan, dan platform trading aset' },
  { name: 'Kesehatan & Medis', icon: <Heart size={28} />, description: 'Portal pasien, layanan telemedicine, dan aplikasi rekam medis' },
  { name: 'Pendidikan & E-Learning', icon: <GraduationCap size={28} />, description: 'Platform kursus online, LMS institusi, dan portal pelatihan' },
  { name: 'E-Commerce & Ritel', icon: <ShoppingBag size={28} />, description: 'Toko online direct-to-consumer, marketplace, dan POS ritel' },
  { name: 'Properti & Real Estate', icon: <Building2 size={28} />, description: 'Listing properti, tur virtual 360°, dan CRM agen terintegrasi' },
  { name: 'Energi & Manufaktur', icon: <Zap size={28} />, description: 'Dashboard monitoring IoT, utilitas cerdas, dan efisiensi pabrik' },
  { name: 'Layanan Profesional', icon: <Users size={28} />, description: 'Website korporat, agensi konsultansi, dan platform portofolio' },
]

const whyWorkWithUs = [
  {
    title: 'Keunggulan Rekayasa Teknis',
    description: 'Kami menulis kode yang bersih, terdokumentasi rapi, dan mudah dirawat menggunakan Next.js, React, dan TypeScript. Solusi kami dirancang siap menampung lonjakan traffic tinggi.',
  },
  {
    title: 'Pendekatan Berbasis Desain & Konversi',
    description: 'Setiap proyek dimulai dengan memahami psikologi pengguna dan target bisnis Anda. Kami merancang antarmuka intuitif yang memukau secara visual dan memaksimalkan konversi.',
  },
  {
    title: 'Komunikasi Transparan Tanpa Perantara',
    description: 'Tanpa jargon berbelit-belit atau perantara yang membingungkan. Anda mendapatkan update berkala, milestone jelas, dan akses langsung ke developer & arsitek kami.',
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
              label="Sektor &amp; Industri"
              title="Industri yang Kami Dampingi"
              description="Kami membawa pemahaman industri mendalam dan kapabilitas teknologi mutakhir di berbagai sektor, membantu bisnis dari startup hingga enterprise membangun produk digital berdampak nyata."
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
                  <p className="text-sm text-muted-dark leading-relaxed">{industry.description}</p>
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
              label="Pendekatan Kami"
              title="Mengapa Memilih Bermitra dengan WIRASA TECH"
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

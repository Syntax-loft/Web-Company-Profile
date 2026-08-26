import { Metadata } from 'next'
import { GoogleFormEmbed } from '@/components/google-form-embed'
import { ProjectBriefFAQ } from '@/components/project-brief-faq'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { Mail, Phone, ArrowRight, Clock, MessageSquare, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brief Proyek & Konsultasi | WIRASA TECH Software House',
  description:
    'Kirimkan brief kebutuhan proyek website atau aplikasi web Anda ke WIRASA TECH. Tim arsitek kami akan meninjau dan merespons dalam 24-48 jam kerja.',
}

// Tally form integration
const TALLY_FORM_URL = 'https://tally.so/r/ODjpok'

const steps = [
  {
    icon: <FileText size={24} />,
    title: 'Isi Brief Kebutuhan',
    description: 'Lengkapi formulir singkat mengenai detail proyek, target bisnis, dan ekspektasi fitur Anda.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Review Tim Arsitek',
    description: 'Tim kami meninjau spesifikasi teknis dan merumuskan estimasi arsitektur terbaik.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Sesi Discovery Call',
    description: 'Kami menjadwalkan sesi meeting online untuk membahas roadmap dan milestone rilis secara mendalam.',
  },
]

export default function ProjectBriefPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeader
            label="Mulai Proyek Anda"
            title="Kirimkan Brief Kebutuhan Proyek Anda"
            description="Isi formulir ringkas ini untuk membantu kami memahami visi dan kebutuhan teknis Anda. Tim kami akan meninjau dan merespons dalam 24-48 jam kerja dengan estimasi awal dan roadmap pelaksanaan."
            centered
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center p-6 bg-[#121212] border border-border/80 rounded-2xl"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-foreground mb-4">
                  {step.icon}
                </div>
                <div className="text-xs font-mono text-muted-dark mb-2">Langkah {index + 1}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-muted-dark text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tally Form Embed */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0f0f0f] rounded-3xl border border-border p-8 md:p-12 shadow-2xl">
            <GoogleFormEmbed 
              formUrl={TALLY_FORM_URL}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Lebih Suka Berdiskusi Langsung?
            </h2>
            <p className="text-muted-dark leading-relaxed">
              Kami memahami sebagian proyek membutuhkan diskusi tatap muka atau sesi panggilan langsung. Hubungi kami segera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="mailto:hello@wirasa.tech"
              className="group flex items-center gap-4 p-6 border border-border rounded-2xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-dark">Kirim Email ke Kami</div>
                <div className="text-foreground font-medium">hello@wirasa.tech</div>
              </div>
              <ArrowRight size={18} className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-4 p-6 border border-border rounded-2xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors">
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-dark">Jadwalkan Panggilan</div>
                <div className="text-foreground font-medium">Atur Sesi Konsultasi</div>
              </div>
              <ArrowRight size={18} className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-muted-dark text-sm tracking-[0.2em] uppercase mb-4 font-mono">
              FAQ // Pertanyaan Umum
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <ProjectBriefFAQ />
        </div>
      </section>

      <CTASection />
    </>
  )
}

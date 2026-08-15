'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import Link from 'next/link'
import {
  Calculator,
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Cpu,
  ShieldCheck,
  CreditCard,
  MessageSquare,
  Sparkles,
  Languages,
  BarChart3,
  FileText,
  Clock,
  ArrowRight,
  CheckCircle2,
  Layers,
  Users
} from 'lucide-react'

interface ProjectType {
  id: string
  name: string
  description: string
  baseWeeks: number
  complexity: string
  icon: any
}

interface FeatureOption {
  id: string
  name: string
  description: string
  extraDays: number
  icon: any
}

interface TimelineOption {
  id: string
  name: string
  multiplier: number
  timeText: string
  badge: string
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'web-app',
    name: 'Web Application',
    description: 'Aplikasi web modern berperforma tinggi dengan arsitektur Next.js & React.',
    baseWeeks: 3,
    complexity: 'Standard',
    icon: Globe,
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce Platform',
    description: 'Toko online lengkap dengan katalog produk, keranjang belanja, & manajemen inventaris.',
    baseWeeks: 4,
    complexity: 'Advanced',
    icon: ShoppingCart,
  },
  {
    id: 'saas-dashboard',
    name: 'SaaS & Admin Portal',
    description: 'Dashboard analitik, manajemen pengguna, dan antarmuka manajemen data skala besar.',
    baseWeeks: 4,
    complexity: 'Advanced',
    icon: LayoutDashboard,
  },
  {
    id: 'enterprise-system',
    name: 'Enterprise System',
    description: 'Integrasi sistem terdistribusi, API Gateway, dan infrastruktur mikroservis kustom.',
    baseWeeks: 6,
    complexity: 'Enterprise Scale',
    icon: Cpu,
  },
]

const FEATURE_OPTIONS: FeatureOption[] = [
  {
    id: 'auth',
    name: 'Auth & RBAC',
    description: 'Autentikasi aman, OAuth, & manajemen peran pengguna',
    extraDays: 3,
    icon: ShieldCheck,
  },
  {
    id: 'payment',
    name: 'Payment Gateway',
    description: 'Integrasi Midtrans / Stripe, invoice, & histori transaksi',
    extraDays: 4,
    icon: CreditCard,
  },
  {
    id: 'realtime',
    name: 'Real-Time Chat/Sockets',
    description: 'Notifikasi langsung, live chat, atau kolaborasi real-time',
    extraDays: 5,
    icon: MessageSquare,
  },
  {
    id: 'ai-llm',
    name: 'AI & LLM Integration',
    description: 'Fitur AI chatbot, analisis dokumen, atau RAG OpenAI/Gemini',
    extraDays: 7,
    icon: Sparkles,
  },
  {
    id: 'i18n',
    name: 'Multi-Language (i18n)',
    description: 'Dukungan multi-bahasa otomatis & lokalisasi konten',
    extraDays: 3,
    icon: Languages,
  },
  {
    id: 'analytics',
    name: 'Advanced Analytics',
    description: 'Visualisasi grafik interaktif & ekspor laporan PDF/Excel',
    extraDays: 4,
    icon: BarChart3,
  },
  {
    id: 'cms',
    name: 'Custom CMS',
    description: 'Panel admin pengelola konten halaman tanpa perlu koding',
    extraDays: 5,
    icon: FileText,
  },
]

const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: 'express',
    name: 'Express Speed',
    multiplier: 0.8,
    timeText: 'Sprint dipercepat dengan tim penuh',
    badge: 'Fast Delivery',
  },
  {
    id: 'standard',
    name: 'Standard Timeline',
    multiplier: 1.0,
    timeText: 'Alokasi waktu optimal & pengujian menyeluruh',
    badge: 'Recommended',
  },
  {
    id: 'flexible',
    name: 'Flexible Schedule',
    multiplier: 1.2,
    timeText: 'Pengerjaan bertahap secara berkelanjutan',
    badge: 'Flexible',
  },
]

export function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string>('web-app')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payment'])
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard')

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  // Calculation (Scope & Weeks only, NO Price)
  const calculation = useMemo(() => {
    const projectObj = PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0]
    const timelineObj = TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline) || TIMELINE_OPTIONS[1]

    let extraDays = 0
    selectedFeatures.forEach((fId) => {
      const feat = FEATURE_OPTIONS.find((f) => f.id === fId)
      if (feat) {
        extraDays += feat.extraDays
      }
    })

    const rawWeeks = projectObj.baseWeeks + extraDays / 5
    const totalWeeks = Math.max(2, Math.ceil(rawWeeks * timelineObj.multiplier))

    let complexityLevel = projectObj.complexity
    if (selectedFeatures.length >= 5) {
      complexityLevel = 'Enterprise Scale'
    } else if (selectedFeatures.length >= 3 && complexityLevel === 'Standard') {
      complexityLevel = 'Advanced'
    }

    let recommendedTeam = '2 Engineers + 1 UI/UX'
    if (complexityLevel === 'Enterprise Scale') {
      recommendedTeam = '3-4 Engineers + DevOps & QA'
    }

    return {
      weeks: totalWeeks,
      selectedCount: selectedFeatures.length,
      projectName: projectObj.name,
      complexity: complexityLevel,
      recommendedTeam,
    }
  }, [selectedType, selectedFeatures, selectedTimeline])

  return (
    <section className="py-24 bg-[#0d0d0d] relative overflow-hidden border-t border-border/40">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Estimate Your Project"
          title="Interactive Scope & Timeline Estimator"
          description="Rancang dan kalkulasi estimasi skala kebutuhan serta durasi pengerjaan proyek digital Anda secara transparan hanya dalam beberapa klik."
          centered
        />

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Step 1: Project Type */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">1</span>
                Pilih Tipe Proyek
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon
                  const isSelected = selectedType === type.id
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 relative ${
                        isSelected
                          ? 'border-white bg-white/10 shadow-lg shadow-white/5'
                          : 'border-white/10 bg-[#141414] hover:border-white/30 hover:bg-[#181818]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon size={20} className={isSelected ? 'text-white' : 'text-muted-dark'} />
                        {isSelected && <CheckCircle2 size={16} className="text-emerald-400" />}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{type.name}</h4>
                      <p className="text-[11px] text-muted-dark leading-relaxed">{type.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Features Multi-select */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">2</span>
                  Pilih Fitur Kebutuhan (Opsional)
                </span>
                <span className="text-xs text-muted-dark font-mono">{calculation.selectedCount} Terpilih</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FEATURE_OPTIONS.map((feat) => {
                  const Icon = feat.icon
                  const isChecked = selectedFeatures.includes(feat.id)
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                        isChecked
                          ? 'border-white/40 bg-white/10'
                          : 'border-white/5 bg-[#141414] hover:border-white/20 hover:bg-[#181818]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 rounded border-white/20 text-white focus:ring-0 bg-transparent"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon size={14} className={isChecked ? 'text-white' : 'text-muted-dark'} />
                          <h5 className="text-xs font-bold text-white">{feat.name}</h5>
                        </div>
                        <p className="text-[11px] text-muted-dark leading-normal mt-0.5">{feat.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Timeline SLA */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">3</span>
                Kecepatan Waktu Pengerjaan
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINE_OPTIONS.map((time) => {
                  const isSelected = selectedTimeline === time.id
                  return (
                    <div
                      key={time.id}
                      onClick={() => setSelectedTimeline(time.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 relative ${
                        isSelected
                          ? 'border-white bg-white/10'
                          : 'border-white/10 bg-[#141414] hover:border-white/30 hover:bg-[#181818]'
                      }`}
                    >
                      <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-white/10 text-foreground/90 uppercase tracking-wider">
                        {time.badge}
                      </span>
                      <h4 className="text-xs font-bold text-white mt-2 mb-1">{time.name}</h4>
                      <p className="text-[10px] text-muted-dark leading-tight">{time.timeText}</p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Scope Summary Card (NO Prices) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-6 sm:p-8 rounded-3xl border border-white/20 bg-gradient-to-b from-[#181818] to-[#121212] backdrop-blur-2xl shadow-2xl shadow-black relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-dark flex items-center gap-2">
                  <Calculator size={16} className="text-white" /> Scope Overview
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  {calculation.complexity}
                </span>
              </div>

              {/* Scope & Time Display */}
              <div className="mb-6 space-y-4">
                <div>
                  <p className="text-xs text-muted-dark uppercase tracking-wider font-medium mb-1">Tipe Proyek Terpilih:</p>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    {calculation.projectName}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-dark flex items-center gap-2">
                      <Clock size={15} className="text-cyan-400" /> Estimasi Durasi:
                    </span>
                    <span className="text-xs font-bold text-white font-mono">
                      ~ {calculation.weeks} Minggu Pengerjaan
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-2.5">
                    <span className="text-xs text-muted-dark flex items-center gap-2">
                      <Users size={15} className="text-purple-400" /> Rekomendasi Tim:
                    </span>
                    <span className="text-xs font-bold text-white">
                      {calculation.recommendedTeam}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-2.5">
                    <span className="text-xs text-muted-dark flex items-center gap-2">
                      <Layers size={15} className="text-emerald-400" /> Modul Tambahan:
                    </span>
                    <span className="text-xs font-bold text-white font-mono">
                      {calculation.selectedCount} Fitur Terpilih
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Action Button */}
              <Link
                href={`/project-brief?type=${selectedType}&features=${selectedFeatures.join(',')}`}
                className="w-full py-4 rounded-2xl bg-white text-black hover:bg-neutral-200 font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-white/10"
              >
                Konsultasikan Scope Proyek Ini
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-4 text-center">
                <Link
                  href="/contact"
                  className="text-[11px] text-muted-dark hover:text-white transition-colors underline underline-offset-4"
                >
                  Atau jadwalkan sesi diskusi teknis langsung &rarr;
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

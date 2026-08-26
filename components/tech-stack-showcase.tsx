'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import {
  Code2,
  Database,
  Terminal,
  Cloud,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  X
} from 'lucide-react'

interface TechItem {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops'
  categoryLabel: string
  version?: string
  description: string
  whyWeUseIt: string
  performanceMetric: string
  advantages: string[]
  useCase: string
  iconName: string
  badgeColor: string
}

const TECH_CATEGORIES = [
  { id: 'all', label: 'Semua Stack', icon: Layers },
  { id: 'frontend', label: 'Frontend Modern', icon: Code2 },
  { id: 'backend', label: 'Backend & API', icon: Terminal },
  { id: 'database', label: 'Basis Data & Storage', icon: Database },
  { id: 'devops', label: 'Cloud & DevOps', icon: Cloud },
]

const TECH_ITEMS: TechItem[] = [
  {
    id: 'nextjs',
    name: 'Next.js 14+',
    category: 'frontend',
    categoryLabel: 'Frontend Framework',
    version: 'v14.2+',
    description: 'React Framework terkemuka untuk web modern dengan Server Components, App Router, dan Hybrid SSG/SSR.',
    whyWeUseIt: 'Memberikan kecepatan muat sub-detik, SEO sempurna out-of-the-box, dan efisiensi bundling tingkat tinggi.',
    performanceMetric: '99+ Lighthouse Score',
    advantages: ['Server Side Rendering (SSR)', 'Automatic Image Optimization', 'API Routes Integration'],
    useCase: 'Platform E-Commerce, Portal Perusahaan, dan Aplikasi Web SaaS.',
    iconName: 'Next.js',
    badgeColor: 'from-white/20 to-white/5 border-white/30 text-white',
  },
  {
    id: 'react',
    name: 'React 18/19',
    category: 'frontend',
    categoryLabel: 'UI Library',
    version: 'v18.3',
    description: 'Library UI berbasis komponen reusabel dengan React Concurrent Features dan Hooks ekosistem terluas.',
    whyWeUseIt: 'Memungkinkan pembuatan antarmuka kaya interaksi dengan manajemen state yang modular dan terstruktur.',
    performanceMetric: '< 16ms Frame Render',
    advantages: ['Virtual DOM Reconciliation', 'Modular Component Architecture', 'Extensive Ecosystem'],
    useCase: 'Dashboard Admin Interaktif, Single Page Applications (SPA), & Form Kompleks.',
    iconName: 'React',
    badgeColor: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Programming Language',
    version: 'v5.3+',
    description: 'Superset JavaScript bertipe statis yang mencegah runtime error sebelum kode dikirim ke lingkungan produksi.',
    whyWeUseIt: 'Menjamin skalabilitas basis kode besar, auto-complete akurat, dan refactoring aman di tim pengembang.',
    performanceMetric: '0 Runtime Type Errors',
    advantages: ['Strict Type Checking', 'Enhanced Developer DX', 'Seamless IDE Integration'],
    useCase: 'Digunakan di 100% basis kode proyek WIRASA TECH untuk standar enterprise.',
    iconName: 'TS',
    badgeColor: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'CSS Framework',
    version: 'v3.4',
    description: 'Utility-first CSS framework untuk membangun antarmuka kustom tanpa membengkakkan ukuran stylesheet.',
    whyWeUseIt: 'Pembangunan UI 3x lebih cepat dengan kontrol responsif menyeluruh dan konsistensi token desain.',
    performanceMetric: '< 15KB Gzip CSS Size',
    advantages: ['JIT (Just-In-Time) Compiler', 'Dark Mode Support', 'Zero Unused CSS'],
    useCase: 'Desain UI kustom, Animasi Micro-interaction, & Layout Responsif.',
    iconName: 'Tailwind',
    badgeColor: 'from-sky-500/20 to-teal-500/10 border-sky-500/30 text-sky-400',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend Runtime',
    version: 'v20 LTS',
    description: 'JavaScript runtime berbasis V8 engine berkinerja tinggi untuk membangun backend serverless dan mikroservis.',
    whyWeUseIt: 'Arsitektur Non-blocking I/O event-driven yang ideal untuk menangani ribuan permintaan bersamaan.',
    performanceMetric: '10K+ Req/sec Throughput',
    advantages: ['Async Non-blocking I/O', 'V8 Engine Speed', 'Unified Fullstack JS/TS'],
    useCase: 'REST API, Backend Serverless, dan Layanan Autentikasi.',
    iconName: 'Node',
    badgeColor: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-400',
  },
  {
    id: 'nestjs',
    name: 'NestJS / Express',
    category: 'backend',
    categoryLabel: 'Backend Framework',
    version: 'v10+',
    description: 'Framework Node.js bertingkat enterprise dengan arsitektur terstruktur (Dependency Injection & Modules).',
    whyWeUseIt: 'Struktur kode rapi yang teruji untuk aplikasi skala besar dengan integrasi OpenAPI / Swagger otomatis.',
    performanceMetric: 'Enterprise Architecture',
    advantages: ['Dependency Injection', 'Built-in OpenAPI/Swagger', 'Robust Microservices Support'],
    useCase: 'Core API Gateway, Sistem Pembayaran, dan Manajemen Data Bisnis.',
    iconName: 'Nest',
    badgeColor: 'from-rose-500/20 to-red-500/10 border-rose-500/30 text-rose-400',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Relational DB',
    version: 'v16',
    description: 'Database relasional open-source tercanggih di dunia dengan integritas data ACID dan dukungan JSONB murni.',
    whyWeUseIt: 'Keandalan 100% untuk transaksi keuangan, kueri kompleks berkecepatan tinggi, dan indeks performa tinggi.',
    performanceMetric: 'ACID Compliant 100%',
    advantages: ['ACID Transactions', 'JSONB Hybrid Queries', 'Row-Level Security (RLS)'],
    useCase: 'Penyimpanan Data Transaksi, User Data, & Sistem Manajemen Antrean.',
    iconName: 'Postgres',
    badgeColor: 'from-blue-600/20 to-cyan-600/10 border-blue-600/30 text-blue-300',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    categoryLabel: 'In-Memory Cache',
    version: 'v7.2',
    description: 'In-memory data store ultra-cepat yang digunakan untuk caching, rate limiting, dan pub/sub messaging.',
    whyWeUseIt: 'Memangkas waktu respons API dari ratusan milidetik menjadi kurang dari 5 milidetik.',
    performanceMetric: '< 2ms Response Time',
    advantages: ['Sub-millisecond Latency', 'Rate Limiting Guard', 'Session Caching'],
    useCase: 'Caching Hasil Kueri, Session Management, dan Rate Limiter Security.',
    iconName: 'Redis',
    badgeColor: 'from-red-600/20 to-orange-600/10 border-red-600/30 text-red-400',
  },
  {
    id: 'docker',
    name: 'Docker & Container',
    category: 'devops',
    categoryLabel: 'Containerization',
    version: 'v26+',
    description: 'Platform kontainerisasi untuk membungkus aplikasi dan dependensinya sehingga konsisten di semua lingkungan.',
    whyWeUseIt: 'Menghilangkan masalah "it works on my machine" dan mempercepat deployment hingga beberapa detik.',
    performanceMetric: 'Consistent Deployment',
    advantages: ['Isolated Environments', 'Instant Scalability', 'Lightweight Footprint'],
    useCase: 'Staging, Production Deployment, & Automated Testing Pipelines.',
    iconName: 'Docker',
    badgeColor: 'from-sky-600/20 to-blue-600/10 border-sky-600/30 text-sky-300',
  },
]

export function TechStackShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activeTech, setActiveTech] = useState<TechItem | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? TECH_ITEMS
    : TECH_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-border/40">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Tech Stack &amp; Arsitektur"
          title="Didukung oleh Ekosistem Teknologi Terkini"
          description="Kami menggunakan kombinasi teknologi berkinerja tinggi yang teruji untuk menjamin kecepatan, skalabilitas, dan keamanan aplikasi Anda."
          centered
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TECH_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 relative ${
                  isActive
                    ? 'text-white bg-white/15 border border-white/30 shadow-lg shadow-white/5'
                    : 'text-muted-dark hover:text-foreground bg-white/[0.03] border border-white/5 hover:border-white/20'
                }`}
              >
                <Icon size={15} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grid of Tech Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveTech(item)}
                className="group cursor-pointer p-6 rounded-3xl border border-border/60 bg-[#121212]/80 hover:bg-[#161616] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 hover:border-white/25 relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border bg-gradient-to-r ${item.badgeColor}`}>
                    {item.categoryLabel}
                  </span>
                  {item.version && (
                    <span className="text-[10px] text-muted-dark font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {item.version}
                    </span>
                  )}
                </div>

                {/* Tech Title & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    {item.name}
                  </h3>
                  <ArrowUpRight size={18} className="text-muted-dark group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                {/* Short Description */}
                <p className="text-xs text-muted-dark leading-relaxed font-light mb-6 line-clamp-2">
                  {item.description}
                </p>

                {/* Metric Badge & Click CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 flex items-center gap-1.5">
                    <Zap size={12} /> {item.performanceMetric}
                  </span>
                  <span className="text-[11px] text-muted-dark group-hover:text-white font-medium transition-colors">
                    Explore Details &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal / Spotlight Drawer for Active Tech Details */}
        <AnimatePresence>
          {activeTech && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-[#141414] p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveTech(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Header Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border bg-gradient-to-r ${activeTech.badgeColor}`}>
                    {activeTech.categoryLabel}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <Sparkles size={13} /> {activeTech.performanceMetric}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {activeTech.name}
                </h3>
                <p className="text-sm text-muted-dark leading-relaxed mb-6">
                  {activeTech.description}
                </p>

                {/* Content Sections */}
                <div className="space-y-5 border-t border-white/10 pt-5">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-1 flex items-center gap-1.5">
                      <ShieldCheck size={15} className="text-primary" /> Mengapa WIRASA TECH Menggunakannya:
                    </h4>
                    <p className="text-xs text-muted-dark leading-relaxed pl-5">
                      {activeTech.whyWeUseIt}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-2 flex items-center gap-1.5">
                      <Cpu size={15} className="text-cyan-400" /> Keunggulan Utama:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                      {activeTech.advantages.map((adv) => (
                        <div key={adv} className="flex items-center gap-2 text-xs text-foreground/90 bg-white/[0.03] p-2 rounded-xl border border-white/5">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span>{adv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-1 flex items-center gap-1.5">
                      <Layers size={15} className="text-purple-400" /> Use Case di Proyek Klien:
                    </h4>
                    <p className="text-xs text-muted-dark leading-relaxed pl-5">
                      {activeTech.useCase}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-end">
                  <button
                    onClick={() => setActiveTech(null)}
                    className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    Tutup Detail
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

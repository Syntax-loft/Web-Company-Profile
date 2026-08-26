'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { buildImageCandidates } from './image-candidates'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Users,
  Crown,
  Sparkles,
  Code2,
  Database,
  Gamepad2,
  Linkedin,
  Github,
  Twitter,
  ChevronRight,
  Briefcase,
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  category: 'founder' | 'cofounder' | 'frontend' | 'backend' | 'game'
  categoryLabel: string
  bio: string
  avatar: string
  fallbackAvatar: string
  skills: string[]
  socials: {
    linkedin?: string
    github?: string
    twitter?: string
  }
  isLead?: boolean
  focus?: string
}

const CATEGORIES = [
  { id: 'all', label: 'Semua Engineer', icon: Users },
  { id: 'founder', label: 'Founder & Arsitek', icon: Crown },
  { id: 'cofounder', label: 'Co-Founder', icon: Sparkles },
  { id: 'frontend', label: 'Frontend Developer', icon: Code2 },
  { id: 'backend', label: 'Backend Engineer', icon: Database },
  { id: 'game', label: 'Game Developer', icon: Gamepad2 },
]

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dava-rayhan',
    name: 'Muhamad Dava Rayhan',
    role: 'Founder & Lead Architect',
    category: 'founder',
    categoryLabel: 'Founder & Arsitek',
    bio: 'Menjembatani standar rekayasa level modern dengan konsultansi boutique yang lincah. Berfokus pada Next.js App Router, React, dan arsitektur sistem performa tinggi.',
    avatar: '/assets/team/dava',
    fallbackAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    skills: ['Next.js', 'React', 'TypeScript', 'Arsitektur Sistem', 'Tailwind CSS'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    isLead: true,
    focus: 'Fullstack & Architecture',
  },
  {
    id: 'arul-andriansyah',
    name: 'Muhammad Arul Andriansyah',
    role: 'Co-Founder & Lead Frontend',
    category: 'cofounder',
    categoryLabel: 'Co-Founder',
    bio: 'Memimpin arsitektur antarmuka dan standar kualitas frontend di WIRASA TECH. Berfokus pada eksekusi UI modern yang responsif, terstruktur, dan berkinerja tinggi.',
    avatar: '/assets/team/frontend-lead',
    fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    skills: ['Next.js', 'React', 'TypeScript', 'Frontend Architecture', 'Tailwind CSS'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    isLead: true,
    focus: 'Lead Frontend & React',
  },
  {
    id: 'satrio-sangaji',
    name: 'Satrio Rafli Sangaji',
    role: 'Co-Founder & Operations Lead',
    category: 'cofounder',
    categoryLabel: 'Co-Founder',
    bio: 'Menyelaraskan strategi operasional rekayasa software, delivery proyek klien, dan manajemen alur kerja teknis di WIRASA TECH.',
    avatar: '/assets/team/cofounder',
    fallbackAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    skills: ['Project Strategy', 'Engineering Ops', 'Agile Delivery', 'Tech Management'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    isLead: true,
    focus: 'Operations & Strategy',
  },
  {
    id: 'maulana-malik',
    name: 'Maulana Malik',
    role: 'Frontend Developer',
    category: 'frontend',
    categoryLabel: 'Frontend Developer',
    bio: 'Mengembangkan antarmuka interaktif yang presisi, responsif di berbagai perangkat, dan teroptimasi untuk pengalaman pengguna yang mulus.',
    avatar: '/assets/team/frontend-senior',
    fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    skills: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Web Vitals'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    focus: 'UI Components & Motion',
  },
  {
    id: 'raditya-prima',
    name: 'Raditya Prima Alfiansyah',
    role: 'Backend Engineer',
    category: 'backend',
    categoryLabel: 'Backend Engineer',
    bio: 'Merancang API berlatensi rendah, integrasi database relasional yang scalable, serta arsitektur backend yang aman dan andal.',
    avatar: '/assets/team/backend-lead',
    fallbackAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    skills: ['PostgreSQL', 'Node.js', 'REST API', 'Prisma / Drizzle', 'Database Design'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    focus: 'API & Database Systems',
  },
  {
    id: 'salim-nur-rohman',
    name: 'Salim Nur Rohman',
    role: 'Game Developer',
    category: 'game',
    categoryLabel: 'Game Developer',
    bio: 'Merancang mekanika gameplay interaktif, integrasi visual dan fisika 3D, serta optimalisasi performa game engine di berbagai platform.',
    avatar: '/assets/team/salim',
    fallbackAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    skills: ['Unity', 'C#', 'Game Physics', '3D Asset Integration', 'Game Mechanics'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    focus: 'Game Engine & 3D Interactive',
  },
  {
    id: 'dwiki-kurniawan',
    name: 'Dwiki Kurniawan',
    role: 'Frontend Developer',
    category: 'frontend',
    categoryLabel: 'Frontend Developer',
    bio: 'Berfokus pada implementasi antarmuka modern, penataan layout responsif yang rapi, dan optimasi performa halaman web.',
    avatar: '/assets/team/dwiki',
    fallbackAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Responsive UI'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    focus: 'Web App & Component UI',
  },
]

export function TeamSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredMembers = activeCategory === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((member) => member.category === activeCategory)

  return (
    <section id="team" className="py-32 lg:py-48 bg-[#0a0a0a] relative overflow-hidden border-b border-border/50">
      {/* Ambient background depth */}
      <div
        className="absolute top-1/4 left-10 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="grain absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header: Wide 2-line layout with inline visual punctuation */}
        <div className="max-w-3xl mb-16 lg:mb-20 space-y-4">
          <p className="flex items-center gap-3 font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
            <span className="inline-block w-8 h-px bg-white/30" aria-hidden />
            // Tim Rekayasa Kami
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.06] tracking-tight">
            Temui talenta muda inovatif{' '}
            <span
              className="hidden sm:inline-block align-middle w-[1.45em] h-[0.62em] rounded-full mx-1.5 bg-cover bg-center ring-1 ring-white/20"
              style={{ backgroundImage: "url('/assets/studio-craft.jpg')" }}
              aria-hidden
            />{' '}
            di balik setiap sistem kami.
          </h2>
          <p className="text-muted-dark text-sm sm:text-base font-light leading-relaxed max-w-xl pt-2">
            Founder, co-founder, developer, dan talenta rekayasa muda yang berdedikasi menghadirkan
            eksekusi cepat dengan penguasaan teknologi mutakhir dan presisi teknis tinggi.
          </p>
        </div>

        {/* Mobile Filter: Horizontal Scroll Pills (< lg) */}
        <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-2.5 pb-2 mb-8 -mx-6 px-6 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            const count = cat.id === 'all'
              ? TEAM_MEMBERS.length
              : TEAM_MEMBERS.filter((m) => m.category === cat.id).length

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 border ${
                  isActive
                    ? 'bg-white text-black border-white font-semibold shadow-md'
                    : 'bg-[#141414] text-muted-dark border-border/80 hover:text-foreground hover:border-white/20'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-black' : 'text-muted-dark'} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/10 text-black font-bold' : 'bg-white/5 text-muted-dark'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Desktop Sidebar & Grid Layout (Sidebar strictly on Left, Cards on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Vertical Sidebar Category Navigation (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <div className="p-4 sm:p-5 rounded-3xl bg-[#121212]/90 border border-border/70 backdrop-blur-xl shadow-2xl space-y-1.5">
              <div className="px-4 py-3 mb-2 border-b border-border/40 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-dark flex items-center gap-2 font-mono">
                  <Briefcase size={14} className="text-foreground/70" /> Departemen
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-foreground/80 font-mono">
                  {TEAM_MEMBERS.length} Total
                </span>
              </div>

              {CATEGORIES.map((cat) => {
                const Icon = cat.icon
                const isActive = activeCategory === cat.id
                const count = cat.id === 'all'
                  ? TEAM_MEMBERS.length
                  : TEAM_MEMBERS.filter((m) => m.category === cat.id).length

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 relative group ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-muted-dark hover:text-foreground hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTeamTab"
                        className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/5 border border-white/20 rounded-2xl shadow-inner"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-3">
                      <Icon
                        size={17}
                        className={`transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-muted-dark group-hover:text-foreground'
                        }`}
                      />
                      {cat.label}
                    </span>

                    <span
                      className={`relative z-10 text-xs px-2.5 py-0.5 rounded-full transition-colors font-mono ${
                        isActive
                          ? 'bg-white text-black font-bold'
                          : 'bg-white/5 text-muted-dark group-hover:bg-white/10 group-hover:text-foreground'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Mini Callout Box at Bottom of Sidebar */}
            <div className="p-5 rounded-3xl bg-[#141414] border border-border/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-dark uppercase tracking-wider">
                <Sparkles size={13} className="text-white" />
                Proyek Khusus?
              </div>
              <p className="text-xs text-muted-dark leading-relaxed font-light">
                Butuh tim engineering berdedikasi atau arsitek fraksional untuk proyek Anda berikutnya?
              </p>
              <a
                href="/project-brief"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-foreground transition-all tactile-btn group"
              >
                <span>Kirim Brief Kebutuhan</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </aside>

          {/* Right Main Area: 2-Column Grid of Cards */}
          <main className="lg:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {filteredMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative flex flex-col rounded-3xl border border-border/70 bg-[#121212] hover:bg-[#161616] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 hover:border-white/30 overflow-hidden"
                  >
                    {/* Top Image Section */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
                      <img
                        src={buildImageCandidates(member.avatar)[0]}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const img = e.currentTarget
                          const list = [...buildImageCandidates(member.avatar), member.fallbackAvatar]
                          const i = list.indexOf(img.getAttribute('src') ?? '')
                          const next = i > -1 ? list[i + 1] : undefined
                          if (next && img.getAttribute('src') !== next) img.setAttribute('src', next)
                        }}
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out transform-gpu"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                      
                      {/* Badge Experience / Role */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge variant="default" className="text-[10px] font-mono tracking-wider uppercase bg-black/60 border-white/10 text-foreground/90">
                          {member.categoryLabel}
                        </Badge>
                      </div>

                      {member.focus && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="text-[10px] font-mono text-white border-white/10 bg-white/10 backdrop-blur-md">
                            {member.focus}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-dark mb-1 font-mono">
                          {member.role}
                        </p>
                        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-white transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-xs text-muted-dark leading-relaxed font-light mt-2.5 line-clamp-3">
                          {member.bio}
                        </p>
                      </div>

                      {/* Social Links with shadcn Tooltip */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <TooltipProvider delayDuration={150}>
                          <div className="flex items-center gap-2 text-muted-dark">
                            {member.socials.linkedin && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <a
                                    href={member.socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                                    aria-label="LinkedIn profile"
                                  >
                                    <Linkedin size={15} />
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">LinkedIn</TooltipContent>
                              </Tooltip>
                            )}
                            {member.socials.github && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <a
                                    href={member.socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                                    aria-label="GitHub profile"
                                  >
                                    <Github size={15} />
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">GitHub</TooltipContent>
                              </Tooltip>
                            )}
                            {member.socials.twitter && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <a
                                    href={member.socials.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                                    aria-label="Twitter profile"
                                  >
                                    <Twitter size={15} />
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">Twitter</TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                        </TooltipProvider>

                        <span className="text-[11px] font-medium text-muted-dark group-hover:text-white flex items-center gap-1 transition-colors font-mono">
                          Profil <ChevronRight size={13} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </main>

        </div>
      </div>
    </section>
  )
}

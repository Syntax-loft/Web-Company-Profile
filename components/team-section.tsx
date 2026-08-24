'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { buildImageCandidates } from './image-candidates'
import {
  Users,
  Crown,
  Sparkles,
  Code2,
  Database,
  Palette,
  Terminal,
  Linkedin,
  Github,
  Twitter,
  ChevronRight,
  Briefcase
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  category: 'founder' | 'cofounder' | 'frontend' | 'backend' | 'ui-ux' | 'devops'
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
  experience?: string
}

const CATEGORIES = [
  { id: 'all', label: 'Semua Tim', icon: Users },
  { id: 'founder', label: 'Founder & Consultant', icon: Crown },
  { id: 'cofounder', label: 'Co-Founder & CTO', icon: Sparkles },
  { id: 'frontend', label: 'Frontend Engineering', icon: Code2 },
  { id: 'backend', label: 'Backend & Cloud', icon: Database },
  { id: 'ui-ux', label: 'UI/UX Design', icon: Palette },
  { id: 'devops', label: 'DevOps & Security', icon: Terminal },
]

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dava-rayhan',
    name: 'Muhamad Dava Rayhan',
    role: 'Founder & Lead Consultant',
    category: 'founder',
    categoryLabel: 'Founder & Consultant',
    bio: 'Bridging enterprise-level development with boutique consultancy. Specialized in Next.js, React, and modern web architecture.',
    avatar: '/assets/team/dava',
    fallbackAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    skills: ['Next.js', 'React', 'TypeScript', 'System Architecture', 'Tailwind CSS'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    isLead: true,
    experience: '6+ Years Exp.',
  },
  {
    id: 'alexandra-chen',
    name: 'Alexandra Chen',
    role: 'Co-Founder & CTO',
    category: 'cofounder',
    categoryLabel: 'Co-Founder & CTO',
    bio: 'Pakar arsitektur cloud terdistribusi dan sistem berkinerja tinggi. Memimpin visi teknis dan skalabilitas infrastruktur Syntax Loft.',
    avatar: '/assets/team/cofounder',
    fallbackAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    skills: ['Microservices', 'Node.js', 'Go', 'GraphQL', 'AWS'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    isLead: true,
    experience: '8+ Years Exp.',
  },
  {
    id: 'rizky-pratama',
    name: 'Rizky Pratama',
    role: 'Lead Frontend Developer',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    bio: 'Fokus pada micro-interaction, aksesibilitas, dan performa UI/UX tingkat tinggi menggunakan React & Next.js App Router.',
    avatar: '/assets/team/frontend-lead',
    fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    skills: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    experience: '5+ Years Exp.',
  },
  {
    id: 'sarah-wijaya',
    name: 'Sarah Wijaya',
    role: 'Senior Frontend Engineer',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    bio: 'Spesialis dalam pembuatan design system modular, Storybook, dan pengujian komponen web modern.',
    avatar: '/assets/team/frontend-senior',
    fallbackAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    skills: ['Vue.js', 'React', 'Design Systems', 'Jest', 'CSS Architecture'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    experience: '4+ Years Exp.',
  },
  {
    id: 'budi-santoso',
    name: 'Budi Santoso',
    role: 'Senior Backend Architect',
    category: 'backend',
    categoryLabel: 'Backend & Cloud',
    bio: 'Merancang API berkecepatan tinggi, integrasi basis data terdistribusi, serta keamanan enkripsi data end-to-end.',
    avatar: '/assets/team/backend-lead',
    fallbackAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    skills: ['PostgreSQL', 'Redis', 'NestJS', 'Docker', 'Kubernetes'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    experience: '6+ Years Exp.',
  },
  {
    id: 'diana-putri',
    name: 'Diana Putri',
    role: 'Lead UI/UX Product Designer',
    category: 'ui-ux',
    categoryLabel: 'UI/UX Design',
    bio: 'Menciptakan antarmuka yang estetis dan intuitif. Berfokus pada riset pengguna, wireframing, dan prototipe interaktif di Figma.',
    avatar: '/assets/team/uiux-lead',
    fallbackAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'UX Writing'],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    experience: '5+ Years Exp.',
  },
  {
    id: 'kevin-hendra',
    name: 'Kevin Hendra',
    role: 'Cloud & DevOps Specialist',
    category: 'devops',
    categoryLabel: 'DevOps & Security',
    bio: 'Mengelola alur CI/CD otomatis, infrastruktur sebagai kode (IaC), dan pemantauan uptime server 99.99%.',
    avatar: '/assets/team/devops-lead',
    fallbackAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    skills: ['Terraform', 'CI/CD Pipelines', 'AWS / GCP', 'Docker', 'Monitoring'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    experience: '4+ Years Exp.',
  },
]

export function TeamSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredMembers = activeCategory === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((member) => member.category === activeCategory)

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-y border-border/40">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Meet the Team"
          title="Our Expert Team"
          description="Para profesional berpengalaman yang berdedikasi menghadirkan solusi digital kelas dunia untuk bisnis Anda."
          centered
        />

        {/* Sidebar & Full Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          
          {/* Vertical Sidebar Category Navigation */}
          <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28">
            <div className="p-4 sm:p-5 rounded-3xl bg-[#121212]/90 border border-border/60 backdrop-blur-xl shadow-2xl space-y-2">
              <div className="px-4 py-3 mb-2 border-b border-border/40 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-dark flex items-center gap-2">
                  <Briefcase size={14} className="text-foreground/70" /> Roles & Dept
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
                        size={18}
                        className={`transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-muted-dark group-hover:text-foreground'
                        }`}
                      />
                      {cat.label}
                    </span>

                    <span
                      className={`relative z-10 text-xs px-2.5 py-0.5 rounded-full transition-colors ${
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
          </aside>

          {/* Right Main Area: Full Grid of Cards */}
          <main className="lg:col-span-8 xl:col-span-9 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative flex flex-col rounded-3xl border border-border/60 bg-[#121212]/80 hover:bg-[#181818] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 hover:border-white/25 overflow-hidden"
                  >
                    {/* Top Image Section */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
                      <img
                        src={buildImageCandidates(member.avatar)[0]}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          // Rantai format: .webp → .jpg → .png → fallback eksternal
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
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-foreground/90">
                          {member.categoryLabel}
                        </span>
                      </div>

                      {member.experience && (
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-mono border border-white/10">
                            {member.experience}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-dark mb-1">
                          {member.role}
                        </p>
                        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-white transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-xs text-muted-dark leading-relaxed font-light mt-2.5 line-clamp-3">
                          {member.bio}
                        </p>
                      </div>

                      {/* Skill Tags */}
                      <div className="space-y-3 pt-2 border-t border-white/5">
                        <div className="flex flex-wrap gap-1.5">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-foreground/80 font-mono transition-colors group-hover:bg-white/[0.08]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center justify-between pt-3">
                          <div className="flex items-center gap-3 text-muted-dark">
                            {member.socials.linkedin && (
                              <a
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                                title="LinkedIn"
                              >
                                <Linkedin size={15} />
                              </a>
                            )}
                            {member.socials.github && (
                              <a
                                href={member.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                                title="GitHub"
                              >
                                <Github size={15} />
                              </a>
                            )}
                            {member.socials.twitter && (
                              <a
                                href={member.socials.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                                title="Twitter"
                              >
                                <Twitter size={15} />
                              </a>
                            )}
                          </div>

                          <span className="text-[11px] font-medium text-muted-dark group-hover:text-white flex items-center gap-1 transition-colors">
                            Profile <ChevronRight size={13} />
                          </span>
                        </div>
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

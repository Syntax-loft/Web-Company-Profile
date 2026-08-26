'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { buildImageCandidates } from './image-candidates'

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  /** Nama dasar tanpa ekstensi (mis. '/assets/projects/project1') — format .webp/.jpg/.png dicoba berurutan. */
  image: string
  fallbackImage?: string
  href: string
  index?: number
}

export function PortfolioCard({ title, category, description, image, fallbackImage, href, index = 0 }: PortfolioCardProps) {
  // Rantai kandidat: .webp → .jpg → .png → fallback eksternal (placeholder)
  const sources = [...buildImageCandidates(image), ...(fallbackImage ? [fallbackImage] : [])]
  const [imgSrc, setImgSrc] = useState(sources[0])

  const handleError = () => {
    const i = sources.indexOf(imgSrc)
    if (i > -1 && i < sources.length - 1) setImgSrc(sources[i + 1])
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={href} className="block group">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-[#121214] border border-white/10 shadow-2xl group-hover:border-white/30 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center shadow-xl shadow-black/50 group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight size={24} className="text-background" />
            </div>
          </div>

          <div className="absolute inset-0">
            <img
              src={imgSrc}
              alt={title}
              loading="lazy"
              decoding="async"
              onError={handleError}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 contrast-[1.12]"
            />
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-muted-dark uppercase tracking-widest">{category}</span>
            <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-dark text-xs sm:text-sm max-w-sm font-light leading-relaxed">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

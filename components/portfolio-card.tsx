'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  image: string
  fallbackImage?: string
  href: string
  index?: number
}

export function PortfolioCard({ title, category, description, image, fallbackImage, href, index = 0 }: PortfolioCardProps) {
  const [imgSrc, setImgSrc] = useState(image)
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-border">
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center">
              <ArrowUpRight size={24} className="text-background" />
            </div>
          </div>
          <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
            <img
              src={imgSrc}
              alt={title}
              loading="lazy"
              decoding="async"
              onError={() => {
                if (fallbackImage && imgSrc !== fallbackImage) {
                  setImgSrc(fallbackImage)
                }
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
            />
          </motion.div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs text-muted-dark uppercase tracking-wider">{category}</span>
            <h3 className="text-xl font-display font-semibold text-foreground mt-1 group-hover:text-muted transition-colors">
              {title}
            </h3>
            <p className="text-muted-dark text-sm mt-2 max-w-sm">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

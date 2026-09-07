'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceRowProps {
  index: number
  title: string
  description: string
  href: string
}

/**
 * Editorial index-list row — replaces the "three equal feature cards"
 * pattern with an agency-style numbered list.
 */
export function ServiceRow({ index, title, description, href }: ServiceRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <Link
        href={href}
        className="group relative grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,18rem)_auto] items-center gap-x-6 md:gap-x-10 py-8 md:py-10 border-t border-border transition-colors duration-500 focus-visible:bg-white/[0.02]"
      >
        {/* Index */}
        <span className="font-mono text-muted-dark text-sm tracking-widest tabular-nums transition-colors duration-500 group-hover:text-foreground">
          /{String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2">
          {title}
        </h3>

        {/* Description (desktop only) */}
        <p className="hidden md:block text-sm text-muted-dark leading-relaxed max-w-xs transition-colors duration-500 group-hover:text-muted">
          {description}
        </p>

        {/* Arrow */}
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:bg-foreground group-hover:border-foreground">
          <ArrowUpRight size={18} className="text-foreground transition-colors duration-500 group-hover:text-background" />
        </span>
      </Link>
    </motion.div>
  )
}

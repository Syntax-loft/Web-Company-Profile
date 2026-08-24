'use client'

import { motion } from 'framer-motion'
import { SplitText } from './text-reveal'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`font-mono text-muted-dark text-xs tracking-[0.25em] uppercase mb-4 ${centered ? '' : 'flex items-center gap-3'}`}
        >
          {!centered && <span className="inline-block w-10 h-px bg-white/30" aria-hidden />}
          {label}
        </motion.p>
      )}
      <h2 className="mb-0">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="block text-3xl md:text-5xl font-display font-bold text-foreground leading-tight"
        >
          <SplitText text={title} delay={0.15} />
        </motion.span>
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-muted-dark text-lg mt-4 max-w-2xl ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

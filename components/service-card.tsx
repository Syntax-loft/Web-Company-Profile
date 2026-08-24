'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  index?: number
}

export function ServiceCard({ title, description, icon, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="group flex flex-col p-8 border border-border rounded-2xl transition-colors duration-500 hover:bg-foreground hover:border-foreground hover-lift"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="p-4 bg-white/5 group-hover:bg-black/10 rounded-xl text-foreground group-hover:text-background transition-colors duration-500">
            {icon}
          </div>
          <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={20} className="text-background" />
          </div>
        </div>
        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-background mb-3 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-muted-dark text-sm leading-relaxed group-hover:text-background/70 transition-colors duration-500">
          {description}
        </p>
      </Link>
    </motion.div>
  )
}

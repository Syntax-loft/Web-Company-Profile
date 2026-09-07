'use client'

import { motion } from 'framer-motion'

const clients = [
  'Herz',
  'Saraga Wisata',
  'Travel Rajawali',
  'SeblakSS',
]

// Repeat list to ensure track is sufficiently wide for seamless 50% loop on ultra-wide screens
const repeatedClients = [...clients, ...clients, ...clients]

export function Marquee() {
  return (
    <section className="py-16 border-b border-border overflow-hidden bg-[#0a0a0a]" aria-label="Klien yang telah kami dampingi">
      <div className="relative">
        {/* Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" aria-hidden />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" aria-hidden />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="inline-block w-10 h-px bg-white/30" aria-hidden />
          <p className="font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
            Dipercaya oleh Bisnis &amp; Klien Pilihan
          </p>
          <span className="inline-block w-10 h-px bg-white/30" aria-hidden />
        </motion.div>

        <div className="flex overflow-hidden select-none">
          {/* Automatic Pure Continuous Infinite Loop (Zero interaction needed, bright high-contrast text) */}
          <motion.div
            className="flex shrink-0 will-change-transform transform-gpu"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 22,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {/* Primary Track */}
            <div className="flex shrink-0 items-center">
              {repeatedClients.map((client, index) => (
                <div key={`client-1-${index}`} className="flex-shrink-0 px-8 sm:px-14 py-3 flex items-center gap-8 sm:gap-14">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white/85 hover:text-white transition-colors duration-300 whitespace-nowrap cursor-default tracking-tight">
                    {client}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)]" aria-hidden="true" />
                </div>
              ))}
            </div>

            {/* Duplicate Track for Seamless Continuous Loop */}
            <div className="flex shrink-0 items-center" aria-hidden="true">
              {repeatedClients.map((client, index) => (
                <div key={`client-2-${index}`} className="flex-shrink-0 px-8 sm:px-14 py-3 flex items-center gap-8 sm:gap-14">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white/85 hover:text-white transition-colors duration-300 whitespace-nowrap cursor-default tracking-tight">
                    {client}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)]" aria-hidden="true" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

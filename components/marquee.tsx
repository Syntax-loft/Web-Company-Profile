'use client'

import { motion } from 'framer-motion'

const clients = [
  'TechCorp',
  'InnovateLabs',
  'DigitalFirst',
  'CloudNine',
  'DataFlow',
  'NextGen',
  'SmartSystems',
  'FutureTech',
]

export function Marquee() {
  return (
    <section className="py-16 border-b border-border overflow-hidden bg-[#0f0f0f]" aria-label="Klien yang telah kami dampingi">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" aria-hidden />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" aria-hidden />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="inline-block w-10 h-px bg-white/30" aria-hidden />
          <p className="font-mono text-muted-dark text-xs tracking-[0.25em] uppercase">
            Trusted by Industry Leaders
          </p>
          <span className="inline-block w-10 h-px bg-white/30" aria-hidden />
        </motion.div>

        <div className="flex overflow-hidden motion-reduce:overflow-x-auto">
          {/* Wrapper translates -50% of itself = exactly one track → seamless loop */}
          <div className="flex animate-marquee will-change-transform hover:[animation-play-state:paused] motion-reduce:[animation:none]">
            {/* First track (readable by screen readers) */}
            <div className="flex shrink-0">
              {clients.map((client) => (
                <div key={client} className="flex-shrink-0 px-12 py-4">
                  <span className="text-2xl md:text-3xl font-display font-semibold text-muted/30 hover:text-muted/60 transition-colors duration-300 whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate track for seamless loop — hidden from screen readers */}
            <div className="flex shrink-0" aria-hidden="true">
              {clients.map((client) => (
                <div key={`${client}-dup`} className="flex-shrink-0 px-12 py-4">
                  <span className="text-2xl md:text-3xl font-display font-semibold text-muted/30 whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

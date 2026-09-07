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
    <section aria-label="Trusted by industry leaders" className="py-16 border-y border-border overflow-hidden bg-[#0f0f0f]">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 text-muted-dark text-sm tracking-[0.2em] uppercase"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="flex w-max animate-marquee">
          {[false, true].map((isDuplicate) => (
            <div key={String(isDuplicate)} aria-hidden={isDuplicate || undefined} className="flex">
              {clients.map((client) => (
                <div key={`${client}-${isDuplicate}`} className="flex-shrink-0 px-12 py-4">
                  <span className="text-2xl md:text-3xl font-display font-semibold text-muted/30 hover:text-muted/60 transition-colors duration-300 whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface GoogleFormEmbedProps {
  formUrl: string
  height?: number
}

export function GoogleFormEmbed({ formUrl, height = 800 }: GoogleFormEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Ensure the URL uses embedded form format
  const embedUrl = formUrl.includes('embedded=true') 
    ? formUrl 
    : `${formUrl}${formUrl.includes('?') ? '&' : '?'}embedded=true`

  return (
    <div className="relative w-full">
      {/* Loading Skeleton */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-10 bg-[#0f0f0f] rounded-2xl border border-border flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 border-2 border-border border-t-foreground rounded-full animate-spin mb-4" />
          <p className="text-muted text-sm">Loading form...</p>
        </motion.div>
      )}

      {/* Form Iframe */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-[#0f0f0f]">
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          onLoad={() => setIsLoading(false)}
          className="w-full"
          title="Project Brief Form"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
          Loading…
        </iframe>
      </div>

      {/* Note about Tally form */}
      <p className="text-muted-dark text-xs mt-4 text-center">
        Powered by Tally. Your submission will be securely stored and reviewed within 24 hours.
      </p>
    </div>
  )
}

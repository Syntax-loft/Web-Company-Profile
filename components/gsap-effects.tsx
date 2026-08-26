'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

interface ScrubTextProps {
  /** Teks utuh — dirender apa adanya, hanya opasitasnya yang dianimasikan. */
  text: string
  className?: string
}

/**
 * Scrubbing Text Reveal — opasitas kata mulai redup (0.12) dan menyala
 * berurutan menjadi penuh saat pengguna menggulir. Konten teks tidak diubah.
 */
export function ScrubText({ text, className }: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const words = ref.current.querySelectorAll<HTMLElement>('[data-word]')
      if (prefersReducedMotion()) {
        gsap.set(words, { opacity: 1 })
        return
      }
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 82%',
            end: 'bottom 48%',
            scrub: true,
          },
        }
      )
    },
    { scope: ref }
  )

  return (
    <p ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} data-word>
          {word}
          {i < text.split(' ').length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </p>
  )
}

interface ScrollScaleImageProps {
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  className?: string
  imgClassName?: string
}

/**
 * Image Scale & Fade Scroll — gambar tumbuh dari scale 0.8 ke 1.0 saat masuk
 * viewport, lalu meredup & mengecil halus saat keluar dari atas layar.
 */
export function ScrollScaleImage({
  src,
  alt,
  loading = 'lazy',
  className = '',
  imgClassName = '',
}: ScrollScaleImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const img = ref.current.querySelector('img')
      if (!img) return
      if (prefersReducedMotion()) {
        gsap.set(img, { scale: 1, opacity: 1 })
        return
      }

      gsap.fromTo(
        img,
        { scale: 0.8 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 95%',
            end: 'center 55%',
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        img,
        { opacity: 1 },
        {
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'center 35%',
            end: 'bottom 2%',
            scrub: true,
          },
        }
      )
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={`overflow-hidden will-change-transform ${className}`}>
      <img src={src} alt={alt} loading={loading} decoding="async" className={`w-full h-full object-cover ${imgClassName}`} />
    </div>
  )
}

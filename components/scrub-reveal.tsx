'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface ScrubRevealProps {
  text: string
  className?: string
}

/**
 * Word-by-word opacity scrub. Words start nearly invisible and
 * illuminate sequentially as the user scrolls through the block.
 */
export function ScrubReveal({ text, className = '' }: ScrubRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const words = ref.current?.querySelectorAll('[data-word]')
      if (!words || words.length === 0) return

      gsap.fromTo(
        words,
        { opacity: 0.08 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.06,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 45%',
            scrub: true,
          },
        }
      )
    })

    return () => mm.revert()
  }, { scope: ref })

  return (
    <p ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} data-word className="inline-block mr-[0.26em] last:mr-0">
          {word}
        </span>
      ))}
    </p>
  )
}

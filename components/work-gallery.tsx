'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const works = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Seamless checkout, real-time inventory, and a storefront that converts on every device.',
    img: 'https://picsum.photos/seed/commerce-dark/1600/1000',
    href: '/work',
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Data-dense analytics made calm through hierarchy, rhythm, and restraint.',
    img: 'https://picsum.photos/seed/dashboard-ui/1600/1000',
    href: '/work',
  },
  {
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Multilingual corporate presence with a CMS your marketing team enjoys using.',
    img: 'https://picsum.photos/seed/corporate-tower/1600/1000',
    href: '/work',
  },
]

/**
 * Editorial work list. Each media block scales from 0.82 to 1.0 as it
 * enters the viewport, then darkens and fades while scrolling out.
 */
export function WorkGallery() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('.work-item').forEach((item) => {
        const media = item.querySelector('.work-media')
        if (!media) return

        gsap.fromTo(
          media,
          { scale: 0.82, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: item, start: 'top 95%', end: 'center 55%', scrub: true },
          }
        )

        gsap.to(media, {
          opacity: 0.22,
          ease: 'none',
          scrollTrigger: { trigger: item, start: 'bottom 55%', end: 'bottom 15%', scrub: true },
        })
      })
    })

    return () => mm.revert()
  }, { scope: ref })

  return (
    <div ref={ref} className="mt-20 space-y-24 md:space-y-36">
      {works.map((work) => (
        <Link key={work.title} href={work.href} className="work-item group block">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
            <Image
              src={work.img}
              alt={work.title}
              fill
              sizes="100vw"
              className="work-media object-cover grayscale-[35%] contrast-125 group-hover:grayscale-0 transition-[filter] duration-700"
            />
          </div>
          <div className="mt-6 flex items-start justify-between gap-6">
            <div>
              <p className="text-muted-dark text-xs uppercase tracking-[0.25em]">{work.category}</p>
              <h3 className="font-display font-bold text-2xl md:text-4xl mt-2 text-foreground">{work.title}</h3>
              <p className="text-muted-dark mt-2 max-w-xl leading-relaxed">{work.description}</p>
            </div>
            <div className="shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

import Image from 'next/image'

const steps = [
  {
    title: 'Discovery',
    description: 'Deep-dive workshops to map goals, users, and constraints before a single pixel moves.',
    img: 'https://picsum.photos/seed/discovery-notes/900/1200',
  },
  {
    title: 'Design',
    description: 'Interface systems crafted in the open, reviewed weekly, measured against real content.',
    img: 'https://picsum.photos/seed/design-studio/900/1200',
  },
  {
    title: 'Engineering',
    description: 'Typed, tested, performance-budgeted code shipped in small, reviewable increments.',
    img: 'https://picsum.photos/seed/engineering-desk/900/1200',
  },
  {
    title: 'Launch',
    description: 'Analytics wired, Core Web Vitals green, and a handover your team actually understands.',
    img: 'https://picsum.photos/seed/launch-city/900/1200',
  },
]

/**
 * Vertical slices that expand horizontally on hover to reveal
 * imagery and detail. Stacks vertically on small screens.
 */
export function HorizontalAccordion() {
  return (
    <section id="process" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <h2 className="max-w-4xl font-display font-bold tracking-tight leading-[1.08] text-4xl md:text-6xl text-foreground">
          One team. Four disciplines.{' '}
          <span className="text-gradient">Zero handoff friction.</span>
        </h2>
      </div>

      {/* Desktop: horizontal expanding slices */}
      <div className="hidden md:flex h-[70vh] max-h-[720px]">
        {steps.map((step) => (
          <div
            key={step.title}
            className="group relative flex-1 hover:flex-[2.6] transition-all duration-700 ease-out overflow-hidden border-l border-border first:border-l-0"
          >
            <Image
              src={step.img}
              alt=""
              fill
              sizes="33vw"
              className="object-cover grayscale opacity-40 scale-110 group-hover:scale-100 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display font-bold text-xl lg:text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-xs opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden px-6 space-y-4">
        {steps.map((step) => (
          <div key={step.title} className="relative h-44 rounded-2xl overflow-hidden border border-border">
            <Image src={step.img} alt="" fill sizes="100vw" className="object-cover grayscale-[35%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-display font-bold text-lg text-white">{step.title}</h3>
              <p className="mt-1 text-xs text-neutral-300 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

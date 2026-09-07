import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ReadingProgress } from '@/components/reading-progress'
import { LoadingScreen } from '@/components/loading-screen'

// Self-hosted fonts via next/font â€” no render-blocking external request,
// automatic preload + font-display: swap (Lighthouse performance win).
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Syntax Loft | Premium Software Development',
  description: 'Transforming ideas into high-performance digital experiences. Syntax Loft crafts premium websites and applications for ambitious businesses.',
  keywords: ['software house', 'web development', 'UI/UX design', 'Next.js', 'React', 'TypeScript'],
  openGraph: {
    title: 'Syntax Loft | Premium Software Development',
    description: 'Transforming ideas into high-performance digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${syne.variable} antialiased`}>
        {/* Skip link â€” first focusable element for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:px-5 focus:py-2.5 focus:bg-foreground focus:text-background focus:text-sm focus:font-medium focus:rounded-full"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <ReadingProgress />
        <Navigation />
        <main id="main-content" className="w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


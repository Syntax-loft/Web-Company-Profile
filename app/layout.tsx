import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ReadingProgress } from '@/components/reading-progress'
import { LoadingScreen } from '@/components/loading-screen'

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
      <body className="antialiased">
        <LoadingScreen />
        <ReadingProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

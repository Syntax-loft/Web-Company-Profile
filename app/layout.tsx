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
  title: 'WIRASA TECH | Jasa Pembuatan Website & Software House Premium Jakarta Indonesia',
  description:
    'Software house dan konsultan pengembangan web profesional di Indonesia. WIRASA TECH melayani jasa pembuatan website custom, aplikasi Next.js performa tinggi, dan sistem digital terukur untuk bisnis ambisius.',
  keywords: [
    'jasa pembuatan website',
    'software house jakarta',
    'software house indonesia',
    'jasa web development',
    'jasa pembuatan web app',
    'jasa aplikasi nextjs',
    'jasa desain UI UX',
    'konsultan teknologi jakarta',
    'pengembangan website kustom',
    'WIRASA TECH',
    'WIRASA',
    'Next.js',
    'React',
    'TypeScript',
  ],
  authors: [{ name: 'Muhamad Dava Rayhan', url: 'https://wirasa.tech' }],
  creator: 'WIRASA TECH',
  publisher: 'WIRASA TECH',
  openGraph: {
    title: 'WIRASA TECH | Jasa Pembuatan Website & Software House Premium Jakarta',
    description:
      'Transformasi ide bisnis Anda menjadi produk digital berkinerja tinggi. Kami merekayasa website dan aplikasi web modern yang andal, scalable, dan conversion-ready.',
    type: 'website',
    locale: 'id_ID',
    url: 'https://wirasa.tech',
    siteName: 'WIRASA TECH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WIRASA TECH | Jasa Pembuatan Website & Software House Premium',
    description:
      'Jasa pembuatan website, web app Next.js, dan UI/UX design berstandar enterprise di Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
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


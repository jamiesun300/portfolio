import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// ── Fonts ─────────────────────────────────────────────────────────────────────
// Space Grotesk: editorial display headings
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// Inter: body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
  display: 'swap',
})

// ── Metadata ──────────────────────────────────────────────────────────────────
// Update the values below with your own name, description, and URL
export const metadata: Metadata = {
  title: {
    default: 'Studio — Design Portfolio',
    template: '%s | Studio',
  },
  description:
    'Graphic designer and visual storyteller based in Paris. Working across brand identity, editorial design, photography, and digital experiences.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Studio',
  },
}

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink antialiased overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

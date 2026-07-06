import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Sas Effect | Mental Performance Coaching for Competitive Athletes',
    template: '%s | The Sas Effect',
  },
  description:
    "Mental performance and athlete development coaching for competitive athletes. Built by a D1 athlete who has lived every part of the journey.",
  openGraph: {
    type: 'website',
    siteName: 'The Sas Effect',
    title: 'The Sas Effect | Mental Performance Coaching for Competitive Athletes',
    description:
      "Mental performance and athlete development coaching for competitive athletes. Built by a D1 athlete.",
  },
  // TODO: Add favicon using The Sas Effect branding
  // TODO: Add Google Analytics or Vercel Analytics
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

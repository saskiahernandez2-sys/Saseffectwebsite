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
    default: 'The Sas Effect | Mental Performance Coaching for High School Athletes',
    template: '%s | The Sas Effect',
  },
  description:
    "Mental performance & athlete development coaching for high school athletes — built by a D1 athlete who's lived every part of the journey.",
  openGraph: {
    type: 'website',
    siteName: 'The Sas Effect',
    title: 'The Sas Effect | Mental Performance Coaching for High School Athletes',
    description:
      "Mental performance & athlete development coaching for high school athletes — built by a D1 athlete.",
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

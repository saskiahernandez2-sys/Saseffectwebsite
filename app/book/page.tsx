import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Book a Free Intro Call',
  description:
    '20 minutes. Book your free intro call and let\'s talk about where your mental game is and where it needs to go.',
  openGraph: {
    title: 'Book a Free Intro Call | The Sas Effect',
    description:
      '20 minutes. No pressure. Let\'s talk about where your mental game is and where it needs to go.',
  },
}

export default function BookPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#FAF9F6] pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C0392B]/4 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Free Intro Call
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#111111] leading-none mb-6">
              BOOK YOUR FREE<br />INTRO CALL.
            </h1>
            <p className="text-[#111111]/70 text-base sm:text-lg max-w-2xl mx-auto">
              Ready to get started? Book your free 20 minute intro call below and let&apos;s talk about
              where your mental game is and where it needs to go.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CALENDLY EMBED ─── */}
      <section className="bg-[#F0EDE6] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <CalendlyEmbed />
          </FadeIn>
        </div>
      </section>

      {/* ─── PRICING REMINDER ─── */}
      <section className="bg-[#FAF9F6] border-t border-[#DDD8D0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn className="mb-8">
            <p className="text-[#6B6560] text-sm mb-2">Not sure where to start?</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111111]">
              REVIEW PRICING FIRST.
            </h2>
          </FadeIn>

          <FadeIn delay={0.07}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coaching"
                className="bg-[#C0392B] text-white font-bold text-sm px-10 py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 inline-block min-h-[52px] flex items-center justify-center"
              >
                See Packages and Add Ons
              </Link>
              <Link
                href="/addons"
                className="border border-[#111111]/30 text-[#111111] font-bold text-sm px-10 py-4 tracking-wide hover:border-[#C0392B] hover:text-[#C0392B] transition-all inline-block min-h-[52px] flex items-center justify-center"
              >
                Browse Add Ons
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

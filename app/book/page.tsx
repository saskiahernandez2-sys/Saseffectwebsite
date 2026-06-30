import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call',
  description:
    '20 minutes. No pressure. Tell me about your sport and goals — I\'ll walk you through exactly how coaching works and what we\'d focus on. No commitment required.',
  openGraph: {
    title: 'Book a Free Discovery Call | The Sas Effect',
    description:
      '20 minutes. No pressure. We\'ll talk about your goals and figure out if working together makes sense.',
  },
}

const expectItems = [
  'Tell me about your sport, your grade, and what\'s been holding you back',
  "I'll walk you through how coaching works and what we'd focus on together",
  "You'll leave with clarity on next steps — no commitment required",
]

const quickFacts = [
  { label: 'Duration', value: '20 minutes' },
  { label: 'Cost',     value: 'Free' },
  { label: 'Format',   value: 'Zoom or phone' },
  { label: 'Who',      value: 'Athlete and/or parent' },
]

export default function BookPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C0392B]/4 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Free Call
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F0ECE4] leading-none mb-6">
              BOOK YOUR FREE<br />DISCOVERY CALL.
            </h1>
            <p className="text-[#F0ECE4]/70 text-base sm:text-lg max-w-xl mx-auto">
              20 minutes. No pressure. We&apos;ll talk about your goals and figure out if
              working together makes sense.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="bg-[#1a1a1a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left sidebar: what to expect + quick facts */}
            <div className="lg:col-span-1 space-y-8">
              <FadeIn>
                <div>
                  <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-5 font-semibold">
                    What to Expect
                  </p>
                  <ul className="space-y-4">
                    {expectItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[#C0392B] mt-0.5 shrink-0" />
                        <span className="text-[#F0ECE4]/75 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-sm">
                  <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                    Quick Facts
                  </p>
                  <dl className="space-y-3">
                    {quickFacts.map((f) => (
                      <div key={f.label} className="flex justify-between items-center text-sm border-b border-[#2a2a2a] pb-3 last:border-0 last:pb-0">
                        <dt className="text-[#666666]">{f.label}</dt>
                        <dd className="text-[#F0ECE4] font-semibold">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeIn>

              <FadeIn delay={0.12}>
                <div className="border-l-2 border-[#C0392B] pl-5">
                  <p className="text-[#F0ECE4]/80 text-sm italic leading-relaxed">
                    &ldquo;I built The Sas Effect because I wanted to give athletes the conversation
                    I never had growing up. This call is that conversation.&rdquo;
                  </p>
                  <p className="text-[#666666] text-xs mt-3">— Saskia</p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Calendly embed */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.05}>
                <CalendlyEmbed />
              </FadeIn>
            </div>
          </div>

          {/* Reassurance line */}
          <FadeIn delay={0.15}>
            <p className="text-center text-[#666666] text-sm mt-10">
              Questions before booking?{' '}
              {/* TODO: Add Saskia's business email address */}
              <a href="mailto:hello@thesaseffect.com" className="text-[#C0392B] hover:underline">
                hello@thesaseffect.com
              </a>{' '}
              or DM{' '}
              <a
                href="https://instagram.com/thesaseffect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0392B] hover:underline"
              >
                @thesaseffect
              </a>{' '}
              on Instagram.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── PRICING REMINDER ─── */}
      <section className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn className="mb-8">
            <p className="text-[#666666] text-sm mb-2">Not sure where to start?</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F0ECE4]">
              REVIEW PRICING FIRST.
            </h2>
          </FadeIn>

          <FadeIn delay={0.07}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coaching"
                className="bg-[#C0392B] text-white font-bold text-sm px-10 py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 inline-block min-h-[52px] flex items-center justify-center"
              >
                See Core Offer &amp; Add-Ons
              </Link>
              <Link
                href="/addons"
                className="border border-[#F0ECE4]/30 text-[#F0ECE4] font-bold text-sm px-10 py-4 tracking-wide hover:border-[#C0392B] hover:text-[#C0392B] transition-all inline-block min-h-[52px] flex items-center justify-center"
              >
                Browse Add-Ons
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call',
  description:
    '20 minutes. No pressure. Tell me about your sport and goals — I\'ll explain which package fits and what we\'d work on. No commitment required.',
  openGraph: {
    title: 'Book a Free Discovery Call | The Sas Effect',
    description:
      '20 minutes. No pressure. We\'ll talk about your goals and figure out if working together makes sense.',
  },
}

const expectItems = [
  'Tell me about your sport, your grade, and what\'s been holding you back',
  "I'll explain which package fits your situation and what we'd work on",
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
      <section className="relative bg-[#0D0D1A] pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C8F04A]/4 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
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
      <section className="bg-[#1A1A2E] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left sidebar: what to expect + quick facts */}
            <div className="lg:col-span-1 space-y-8">
              <FadeIn>
                <div>
                  <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-5 font-semibold">
                    What to Expect
                  </p>
                  <ul className="space-y-4">
                    {expectItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[#C8F04A] mt-0.5 shrink-0" />
                        <span className="text-[#F0ECE4]/75 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="bg-[#12121F] border border-[#1E1E30] p-6 rounded-sm">
                  <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                    Quick Facts
                  </p>
                  <dl className="space-y-3">
                    {quickFacts.map((f) => (
                      <div key={f.label} className="flex justify-between items-center text-sm border-b border-[#1E1E30] pb-3 last:border-0 last:pb-0">
                        <dt className="text-[#555566]">{f.label}</dt>
                        <dd className="text-[#F0ECE4] font-semibold">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeIn>

              <FadeIn delay={0.12}>
                <div className="border-l-2 border-[#C8F04A] pl-5">
                  <p className="text-[#F0ECE4]/80 text-sm italic leading-relaxed">
                    &ldquo;I built The Sas Effect because I wanted to give athletes the conversation
                    I never had growing up. This call is that conversation.&rdquo;
                  </p>
                  <p className="text-[#555566] text-xs mt-3">— Saskia</p>
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
            <p className="text-center text-[#555566] text-sm mt-10">
              Questions before booking?{' '}
              {/* TODO: Add Saskia's business email address */}
              <a href="mailto:hello@thesaseffect.com" className="text-[#C8F04A] hover:underline">
                hello@thesaseffect.com
              </a>{' '}
              or DM{' '}
              <a
                href="https://instagram.com/thesaseffect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8F04A] hover:underline"
              >
                @thesaseffect
              </a>{' '}
              on Instagram.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── PACKAGES REMINDER ─── */}
      <section className="bg-[#0D0D1A] border-t border-[#1E1E30] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-[#555566] text-sm mb-2">Not sure what you need?</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F0ECE4]">
              REVIEW THE PACKAGES FIRST.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
            {[
              { name: 'Starter', price: '$400/mo', href: '/coaching' },
              { name: 'Core', price: '$650/mo', href: '/coaching', highlight: true },
              { name: 'Elite / D1', price: '$1,000/mo', href: '/coaching' },
            ].map((p) => (
              <FadeIn key={p.name}>
                <Link
                  href={p.href}
                  className={`block border p-5 rounded-sm hover:border-[#C8F04A] transition-all group ${
                    p.highlight
                      ? 'border-[#C8F04A] bg-[#C8F04A]/8'
                      : 'border-[#1E1E30] bg-[#12121F]'
                  }`}
                >
                  <p className="text-[#555566] text-xs uppercase tracking-[0.18em] mb-1">{p.name}</p>
                  <p className="font-display text-2xl text-[#F0ECE4] group-hover:text-[#C8F04A] transition-colors">
                    {p.price}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

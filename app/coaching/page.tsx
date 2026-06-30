import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import AddOnCard from '@/components/AddOnCard'
import { coreOffer, monthlyAddOns, sessionAddOns, pricingExamples } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Coaching | 1-on-1 Mental Performance Coaching',
  description:
    'Mental Performance Coaching at $250/month — the foundation every athlete needs, with optional add-ons for nutrition, conditioning, and recruiting. 3-month minimum.',
  openGraph: {
    title: 'Coaching | 1-on-1 Mental Performance Coaching | The Sas Effect',
    description:
      'One core offer. Customize from there. Mental Performance Coaching at $250/month with optional add-ons.',
  },
}

export default function CoachingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C0392B]/4 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              1-on-1 Coaching
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F0ECE4] leading-none mb-6">
              1-ON-1 MENTAL PERFORMANCE COACHING BUILT AROUND YOUR <span className="text-[#C0392B]">ATHLETE.</span>
            </h1>
            <p className="text-[#F0ECE4]/70 text-base sm:text-lg max-w-2xl mx-auto mb-4">
              One core offer — the mental performance foundation every athlete needs.
              Then customize with add-ons based on what your athlete actually needs right now.
            </p>
            <p className="text-[#666666] text-sm">
              3-month minimum commitment. Pay monthly or save 10% paying in full.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CORE OFFER ─── */}
      <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              The Core Offer
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none">
              {coreOffer.name.toUpperCase()}
            </h2>
          </FadeIn>

          <div className="border-2 border-[#C0392B] rounded-sm overflow-hidden shadow-[0_0_60px_rgba(192,57,43,0.10)]">
            <div className="p-8 lg:p-12 bg-[#C0392B]/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left: price + description + for who */}
                <FadeIn>
                  <div>
                    <p className="font-display text-6xl lg:text-7xl text-[#C0392B] mb-1">{coreOffer.price}</p>
                    <p className="text-[#666666] text-xs uppercase tracking-[0.15em] mb-8">{coreOffer.priceNote}</p>

                    <p className="text-[#F0ECE4]/80 text-base leading-relaxed mb-8">
                      {coreOffer.plainDescription}
                    </p>

                    <div className="border-l-2 border-[#C0392B] pl-5">
                      <p className="text-[#666666] text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
                        This is for you if…
                      </p>
                      <p className="text-[#F0ECE4]/75 text-sm leading-relaxed">{coreOffer.forWho}</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Right: features + CTA */}
                <FadeIn delay={0.1}>
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-[0.18em] mb-5 font-semibold">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-4 mb-8">
                      {coreOffer.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <Check size={16} className="text-[#C0392B] mt-0.5 shrink-0" />
                          <span className="text-[#F0ECE4]/85 leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/book"
                      className="block w-full text-center bg-[#C0392B] text-white font-bold text-sm py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 min-h-[52px] flex items-center justify-center"
                    >
                      Book a Discovery Call
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADD-ONS ─── */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Add-Ons
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none mb-4">
              CUSTOMIZE YOUR PLAN.
            </h2>
            <p className="text-[#666666] text-base max-w-xl">
              All add-ons bolt onto the core Mental Performance Coaching offer.
              Start with the foundation — add what your athlete actually needs.
            </p>
          </FadeIn>

          {/* Monthly add-ons */}
          <div className="mb-10">
            <p className="text-[#666666] text-xs uppercase tracking-[0.18em] mb-5 font-semibold flex items-center gap-3">
              Monthly Add-Ons
              <span className="flex-1 h-px bg-[#2a2a2a]" />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {monthlyAddOns.map((addon, i) => (
                <FadeIn key={addon.title} delay={i * 0.08}>
                  <AddOnCard title={addon.title} price={addon.price} description={addon.description} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Per-session add-ons */}
          <div>
            <p className="text-[#666666] text-xs uppercase tracking-[0.18em] mb-5 font-semibold flex items-center gap-3">
              Per-Session &amp; One-Time
              <span className="flex-1 h-px bg-[#2a2a2a]" />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {sessionAddOns.map((addon, i) => (
                <FadeIn key={addon.title} delay={i * 0.08}>
                  <AddOnCard title={addon.title} price={addon.price} description={addon.description} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT A TYPICAL CLIENT PAYS ─── */}
      <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Pricing Examples
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none mb-4">
              WHAT A TYPICAL CLIENT PAYS.
            </h2>
            <p className="text-[#666666] text-base">
              Every athlete starts with the $250/mo core offer. Add-ons are optional and can be added
              or removed each month.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="border border-[#2a2a2a] rounded-sm overflow-hidden">
              {pricingExamples.map((example, i) => (
                <div
                  key={example.label}
                  className={`flex items-center justify-between px-6 py-5 ${
                    i < pricingExamples.length - 1 ? 'border-b border-[#2a2a2a]' : ''
                  } ${i % 2 === 0 ? 'bg-[#111111]' : 'bg-[#111111]/50'}`}
                >
                  <p className="text-[#F0ECE4]/80 text-sm">{example.label}</p>
                  <p className="font-display text-2xl text-[#C0392B]">{example.price}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-[#666666] text-xs text-center mt-4">
              All prices are monthly. Save 10% when you pay 3 months upfront.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── PAYMENT ─── */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Payment Options
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none">
              FLEXIBLE BILLING. YOUR CHOICE.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <FadeIn delay={0.05}>
              <div className="bg-[#111111] border border-[#2a2a2a] p-8 rounded-sm">
                <p className="text-[#666666] text-xs uppercase tracking-[0.18em] mb-3">Monthly Billing</p>
                <p className="font-display text-3xl text-[#F0ECE4] mb-3">Pay as you go</p>
                <ul className="space-y-2 text-sm text-[#F0ECE4]/70">
                  <li>• Billed monthly, 3-month minimum</li>
                  <li>• Cancel after your initial 3 months</li>
                  <li>• Full price per month</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#C0392B]/10 border border-[#C0392B] p-8 rounded-sm">
                <p className="text-[#C0392B] text-xs uppercase tracking-[0.18em] mb-3">Pay in Full — Best Value</p>
                <p className="font-display text-3xl text-[#F0ECE4] mb-3">Save 10%</p>
                <ul className="space-y-2 text-sm text-[#F0ECE4]/70">
                  <li>• Pay all 3 months upfront</li>
                  <li>• 10% discount applied automatically</li>
                  <li>• Same access, same commitment</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="text-[#666666] text-sm text-center">
              Not sure where to start?{' '}
              <Link href="/book" className="text-[#C0392B] hover:underline">
                Book a free discovery call
              </Link>{' '}
              and I&apos;ll walk you through exactly what makes sense for your athlete.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-[#666666] text-base mb-10">
              Book a free discovery call and we&apos;ll figure out the right plan together. No
              commitment — just a conversation.
            </p>
            <Link
              href="/book"
              className="bg-[#C0392B] text-white font-bold text-sm px-12 py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 inline-block min-h-[52px]"
            >
              Book a Free Discovery Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

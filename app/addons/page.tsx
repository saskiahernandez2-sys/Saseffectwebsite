import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import AddOnCard from '@/components/AddOnCard'
import { monthlyAddOns, sessionAddOns } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Add-On Services | Nutrition, Conditioning, Recruiting & More',
  description:
    'Optional add-ons that bolt onto Mental Performance Coaching — nutrition plan (+$100/mo), conditioning program (+$100/mo), recruiting support (+$150/mo), mock recruiting calls, game film review, and pre-season intensive.',
  openGraph: {
    title: 'Add-On Services | The Sas Effect',
    description:
      'Start with the mental performance foundation. Add nutrition, conditioning, recruiting support, and more based on what your athlete needs.',
  },
}

export default function AddOnsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0D0D1A] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C8F04A]/4 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Add-On Services
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F0ECE4] leading-none mb-6">
              TARGETED SUPPORT<br />FOR SPECIFIC NEEDS.
            </h1>
            <p className="text-[#F0ECE4]/70 text-base sm:text-lg max-w-2xl mx-auto mb-4">
              Add-ons bolt onto your Mental Performance Coaching package. Start with the core
              offer, then customize based on what your athlete needs.
            </p>
            <div className="inline-block bg-[#12121F] border border-[#1E1E30] px-5 py-3 rounded-sm">
              <p className="text-[#555566] text-sm">
                Core offer required:{' '}
                <Link href="/coaching" className="text-[#C8F04A] hover:underline font-semibold">
                  Mental Performance Coaching — $250/month
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MONTHLY ADD-ONS ─── */}
      <section className="bg-[#1A1A2E] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-3 font-semibold">
              Monthly Add-Ons
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F0ECE4] leading-none mb-2">
              ONGOING MONTHLY SUPPORT
            </h2>
            <p className="text-[#555566] text-sm">
              Added to your monthly coaching bill. Can be added or removed each month.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthlyAddOns.map((addon, i) => (
              <FadeIn key={addon.title} delay={i * 0.08}>
                <AddOnCard title={addon.title} price={addon.price} description={addon.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PER-SESSION ADD-ONS ─── */}
      <section className="bg-[#0D0D1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-3 font-semibold">
              Per-Session &amp; One-Time
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F0ECE4] leading-none mb-2">
              TARGETED ONE-OFF SESSIONS
            </h2>
            <p className="text-[#555566] text-sm">
              Book when you need them. No ongoing commitment.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessionAddOns.map((addon, i) => (
              <FadeIn key={addon.title} delay={i * 0.08}>
                <AddOnCard title={addon.title} price={addon.price} description={addon.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#1A1A2E] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                How It Works
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none mb-6">
                BUILD WHAT YOUR ATHLETE NEEDS.
              </h2>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed mb-4">
                Every athlete starts with the Mental Performance Coaching core offer.
                Add-ons layer on top — monthly add-ons run alongside your coaching, and
                per-session add-ons are booked when you need them.
              </p>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed">
                Not sure which add-on fits right now? Book a discovery call and I&apos;ll
                tell you exactly what makes sense for your athlete&apos;s situation.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'Start with the core offer — Mental Performance Coaching at $250/mo.' },
                  { step: '02', text: 'Identify the gaps — recruiting prep, nutrition, conditioning, or specific sessions.' },
                  { step: '03', text: 'Add what you need. Adjust month to month as your athlete progresses.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-[#12121F] border border-[#1E1E30] p-5 rounded-sm">
                    <span className="font-display text-3xl text-[#C8F04A] leading-none shrink-0">{item.step}</span>
                    <p className="text-[#F0ECE4]/75 text-sm leading-relaxed pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#0D0D1A] border-t border-[#1E1E30] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
              READY TO BUILD YOUR PLAN?
            </h2>
            <p className="text-[#555566] text-base mb-10">
              Book a free discovery call and we&apos;ll figure out the right starting point — core offer,
              add-ons, and all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-10 py-4 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 inline-block min-h-[52px] flex items-center justify-center"
              >
                Book a Free Discovery Call
              </Link>
              <Link
                href="/coaching"
                className="border border-[#F0ECE4]/30 text-[#F0ECE4] font-bold text-sm px-10 py-4 tracking-wide hover:border-[#C8F04A] hover:text-[#C8F04A] transition-all inline-block min-h-[52px] flex items-center justify-center"
              >
                See Core Offer &amp; Pricing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

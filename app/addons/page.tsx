import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import AddOnCard from '@/components/AddOnCard'
import { addOns } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Add-On Services | Recruiting Prep & More',
  description:
    'Targeted coaching add-ons including mock recruiting calls, recruiting readiness bundles, pre-season intensives, parent strategy calls, and game film review.',
  openGraph: {
    title: 'Add-On Services | Recruiting Prep & More | The Sas Effect',
    description:
      'Add-ons can be bolted onto any coaching package or purchased as standalone sessions.',
  },
}

export default function AddOnsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0D0D1A] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C8F04A]/4 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Add-On Services
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F0ECE4] leading-none mb-6">
              TARGETED SUPPORT<br />FOR SPECIFIC NEEDS.
            </h1>
            <p className="text-[#F0ECE4]/70 text-base sm:text-lg max-w-2xl mx-auto">
              Add-ons can be bolted onto any coaching package or purchased as standalone
              sessions. No package required — just the specific help you need.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── ADD-ON GRID ─── */}
      <section className="bg-[#1A1A2E] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {addOns.slice(0, 3).map((addon, i) => (
              <FadeIn key={addon.title} delay={i * 0.08}>
                <AddOnCard
                  title={addon.title}
                  price={addon.price}
                  description={addon.description}
                />
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addOns.slice(3).map((addon, i) => (
              <FadeIn key={addon.title} delay={(i + 3) * 0.08}>
                <AddOnCard
                  title={addon.title}
                  price={addon.price}
                  description={addon.description}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW TO ADD ─── */}
      <section className="bg-[#0D0D1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                How It Works
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none mb-6">
                STANDALONE OR BOLTED ON.
              </h2>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed mb-4">
                Every add-on can be purchased independently — no coaching package required.
                If you&apos;re already in a package, we&apos;ll integrate it into your plan seamlessly.
              </p>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed">
                Not sure which add-on fits your situation? Book a discovery call and I&apos;ll
                tell you exactly what makes sense.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'Identify the specific gap — recruiting, film, parent alignment.' },
                  { step: '02', text: 'Book a discovery call or reach out directly to confirm availability.' },
                  { step: '03', text: 'We schedule the session and you get exactly what you paid for.' },
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
      <section className="bg-[#1A1A2E] border-t border-[#1E1E30] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
              WANT TO ADD ONE TO YOUR PLAN?
            </h2>
            <p className="text-[#555566] text-base mb-10">
              Book a discovery call and we&apos;ll build the right plan — package, add-ons, and all.
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
                See Coaching Packages
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

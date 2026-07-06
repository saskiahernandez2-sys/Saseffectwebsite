import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { addOns } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Add Ons | Recruiting, Nutrition, Schedule Mapping and More',
  description:
    'Optional add ons for Foundation and Effect clients. Recruiting strategy plus mock calls at $197 per month. Nutrition guidance at $97 per month. Academic schedule mapping at $97 one time. Unlimited text support at $47 per month for Foundation clients.',
  openGraph: {
    title: 'Add Ons | The Sas Effect',
    description:
      'Add recruiting strategy, nutrition guidance, schedule mapping, or extra text support to either package.',
  },
}

export default function AddOnsPage() {
  const monthlyAddOns = addOns.filter((a) => a.type === 'monthly')
  const oneTimeAddOns = addOns.filter((a) => a.type === 'one time')

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0a0a0a] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C0392B]/4 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Add Ons
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F0ECE4] leading-none mb-6">
              ADD WHAT YOUR ATHLETE ACTUALLY NEEDS.
            </h1>
            <p className="text-[#F0ECE4]/70 text-base sm:text-lg max-w-xl mx-auto mb-6">
              Every add-on works on top of either package. Add them when you need them. Remove them when you do not.
            </p>
            <div className="inline-block bg-[#111111] border border-[#2a2a2a] px-5 py-3 rounded-sm">
              <p className="text-[#666666] text-sm">
                Requires an active coaching package.{' '}
                <Link href="/coaching" className="text-[#C0392B] hover:underline font-semibold">
                  See The Foundation and The Effect
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MONTHLY ADD-ONS ─── */}
      <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-3 font-semibold">
              Monthly Add Ons
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F0ECE4] leading-none mb-2">
              ONGOING MONTHLY SUPPORT
            </h2>
            <p className="text-[#666666] text-sm">
              Billed monthly alongside your coaching package. Add or remove at any time.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyAddOns.map((addon, i) => (
              <FadeIn key={addon.id} delay={i * 0.08}>
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-7 flex flex-col h-full hover:border-[#C0392B]/40 transition-colors">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl text-[#F0ECE4] leading-tight mb-1">{addon.title}</h3>
                    <p className="text-[#C0392B] font-bold text-base">{addon.price}</p>
                    {addon.availability !== 'Both packages' && (
                      <p className="text-[#666666] text-[10px] uppercase tracking-[0.12em] mt-1 font-semibold">
                        {addon.availability}
                      </p>
                    )}
                  </div>
                  <ul className="space-y-2 flex-1">
                    {addon.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] shrink-0 mt-1.5" />
                        <span className="text-[#666666] leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book" className="mt-6 text-[#C0392B] text-sm font-semibold hover:underline block">
                    Add to your package
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ONE-TIME ADD-ONS ─── */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-3 font-semibold">
              One Time Sessions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F0ECE4] leading-none mb-2">
              ONE AND DONE
            </h2>
            <p className="text-[#666666] text-sm">
              Pay once. No subscription. No recurring charge.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {oneTimeAddOns.map((addon, i) => (
              <FadeIn key={addon.id} delay={i * 0.08}>
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-7 flex flex-col h-full hover:border-[#C0392B]/40 transition-colors">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl text-[#F0ECE4] leading-tight mb-1">{addon.title}</h3>
                    <p className="text-[#C0392B] font-bold text-base">{addon.price}</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {addon.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] shrink-0 mt-1.5" />
                        <span className="text-[#666666] leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book" className="mt-6 text-[#C0392B] text-sm font-semibold hover:underline block">
                    Book this session
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
              NOT SURE WHAT YOU NEED?
            </h2>
            <p className="text-[#666666] text-base mb-10">
              Book a free call and I will tell you exactly what makes sense for your athlete right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-[#C0392B] text-white font-bold text-sm px-10 py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 inline-block min-h-[52px] flex items-center justify-center"
              >
                Book a Free Discovery Call
              </Link>
              <Link
                href="/coaching"
                className="border border-[#F0ECE4]/30 text-[#F0ECE4] font-bold text-sm px-10 py-4 tracking-wide hover:border-[#C0392B] hover:text-[#C0392B] transition-all inline-block min-h-[52px] flex items-center justify-center"
              >
                See Both Packages
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

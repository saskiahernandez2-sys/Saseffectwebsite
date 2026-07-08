import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { packages, addOns } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Coaching | The Foundation, The Effect, and The Group Effect',
  description:
    'Three programs built for competitive athletes at any level. The Foundation at $197 per month. The Effect at $397 per month. The Group Effect at $97 per month per person. Pick the level that fits.',
  openGraph: {
    title: 'Coaching Packages | The Sas Effect',
    description:
      'Three mental performance programs for competitive athletes. Individual and group options available.',
  },
}

export default function CoachingPage() {
  const foundation = packages[0]
  const effect = packages[1]
  const groupEffect = packages[2]

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#FAF9F6] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C0392B]/4 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Coaching
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#111111] leading-none mb-6">
              PICK THE PROGRAM THAT FITS<br />
              <span className="text-[#C0392B]">WHERE YOU ARE NOW.</span>
            </h1>
            <p className="text-[#111111]/70 text-base sm:text-lg max-w-xl mx-auto">
              All three programs are built around the mental game. Pick the level and format that fits right now and build from there.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="bg-[#F0EDE6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* The Foundation */}
            <FadeIn>
              <div className="bg-white border border-[#DDD8D0] rounded-sm p-8 flex flex-col h-full">
                <div className="mb-5">
                  <h2 className="font-display text-3xl text-[#111111] mb-2">{foundation.name.toUpperCase()}</h2>
                  <p className="font-display text-5xl text-[#111111] leading-none mb-1">
                    {foundation.price}
                    <span className="text-[#6B6560] text-lg font-sans font-normal"> / month</span>
                  </p>
                  <p className="text-[#6B6560] text-sm leading-relaxed mt-2">{foundation.tagline}</p>
                </div>

                <div className="w-full h-px bg-[#DDD8D0] mb-6" />

                <ul className="space-y-4 mb-8 flex-1">
                  {foundation.includes.map((item) => (
                    <li key={item.main} className="flex items-start gap-3">
                      <Check size={15} className="text-[#C0392B] mt-0.5 shrink-0" />
                      <span>
                        <span className="text-[#111111]/90 text-sm leading-snug block">{item.main}</span>
                        {item.sub && (
                          <span className="text-[#6B6560] text-xs leading-snug block mt-0.5">{item.sub}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="block w-full text-center border-2 border-[#C0392B] text-[#C0392B] font-bold text-sm py-4 tracking-wide hover:bg-[#C0392B] hover:text-white transition-all min-h-[52px] flex items-center justify-center"
                >
                  Start with The Foundation
                </Link>
              </div>
            </FadeIn>

            {/* The Effect — Most Popular */}
            <FadeIn delay={0.08}>
              <div className="bg-white border-2 border-[#C0392B] rounded-sm p-8 flex flex-col h-full shadow-[0_0_50px_rgba(192,57,43,0.12)] relative">
                <div className="absolute top-0 right-0">
                  <span className="bg-[#C0392B] text-white text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 block">
                    Most Popular
                  </span>
                </div>

                <div className="mb-5 pt-2">
                  <h2 className="font-display text-3xl text-[#111111] mb-2">{effect.name.toUpperCase()}</h2>
                  <p className="font-display text-5xl text-[#C0392B] leading-none mb-1">
                    {effect.price}
                    <span className="text-[#6B6560] text-lg font-sans font-normal"> / month</span>
                  </p>
                  <p className="text-[#6B6560] text-sm leading-relaxed mt-2">{effect.tagline}</p>
                </div>

                <div className="w-full h-px bg-[#DDD8D0] mb-6" />

                <ul className="space-y-4 mb-8 flex-1">
                  {effect.includes.map((item) => (
                    <li key={item.main} className="flex items-start gap-3">
                      <Check size={15} className="text-[#C0392B] mt-0.5 shrink-0" />
                      <span>
                        <span className="text-[#111111]/90 text-sm leading-snug block">{item.main}</span>
                        {item.sub && (
                          <span className="text-[#6B6560] text-xs leading-snug block mt-0.5">{item.sub}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="block w-full text-center bg-[#C0392B] text-white font-bold text-sm py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 min-h-[52px] flex items-center justify-center"
                >
                  Start with The Effect
                </Link>
              </div>
            </FadeIn>

            {/* The Group Effect */}
            <FadeIn delay={0.16}>
              <div className="bg-white border border-[#DDD8D0] rounded-sm p-8 flex flex-col h-full">
                <div className="mb-5">
                  <h2 className="font-display text-3xl text-[#111111] mb-2">{groupEffect.name.toUpperCase()}</h2>
                  <p className="font-display text-5xl text-[#111111] leading-none mb-1">
                    {groupEffect.price}
                    <span className="text-[#6B6560] text-lg font-sans font-normal"> / mo per person</span>
                  </p>
                  <p className="text-[#6B6560] text-xs mb-2">{groupEffect.groupNote}</p>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{groupEffect.tagline}</p>
                </div>

                <div className="w-full h-px bg-[#DDD8D0] mb-6" />

                <ul className="space-y-4 mb-8 flex-1">
                  {groupEffect.includes.map((item) => (
                    <li key={item.main} className="flex items-start gap-3">
                      <Check size={15} className="text-[#C0392B] mt-0.5 shrink-0" />
                      <span>
                        <span className="text-[#111111]/90 text-sm leading-snug block">{item.main}</span>
                        {item.sub && (
                          <span className="text-[#6B6560] text-xs leading-snug block mt-0.5">{item.sub}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="block w-full text-center border-2 border-[#C0392B] text-[#C0392B] font-bold text-sm py-4 tracking-wide hover:bg-[#C0392B] hover:text-white transition-all min-h-[52px] flex items-center justify-center"
                >
                  Join The Group Effect
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ─── TOPICS WE COVER ─── */}
      <section className="bg-[#FAF9F6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              What We Work On
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none">
              THE MENTAL TOPICS WE COVER.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.05}>
              <div className="bg-white border border-[#DDD8D0] rounded-sm p-7 h-full">
                <p className="font-display text-2xl text-[#111111] mb-1">The Foundation</p>
                <p className="text-[#6B6560] text-xs mb-5 leading-relaxed">{foundation.topicsNote}</p>
                <ul className="space-y-2">
                  {foundation.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] shrink-0" />
                      <span className="text-[#111111]/80">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white border border-[#C0392B]/50 rounded-sm p-7 h-full">
                <p className="font-display text-2xl text-[#111111] mb-1">The Effect</p>
                <p className="text-[#6B6560] text-xs mb-5 leading-relaxed">{effect.topicsNote}</p>
                <ul className="space-y-2">
                  {effect.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] shrink-0" />
                      <span className="text-[#111111]/80">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white border border-[#DDD8D0] rounded-sm p-7 h-full">
                <p className="font-display text-2xl text-[#111111] mb-1">The Group Effect</p>
                <p className="text-[#6B6560] text-xs mb-5 leading-relaxed">{groupEffect.topicsNote}</p>
                <ul className="space-y-2">
                  {groupEffect.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] shrink-0" />
                      <span className="text-[#111111]/80">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── BUILD YOUR PROGRAM ─── */}
      <section className="bg-[#F0EDE6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Build Your Program
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none mb-4">
              CHOOSE WHAT FITS YOUR GOALS.
            </h2>
            <p className="text-[#6B6560] text-base max-w-xl">
              Every package includes the core coaching experience. From there you choose what fits your goals.
            </p>
          </FadeIn>

          <div className="divide-y divide-[#DDD8D0]">
            {addOns.map((addon, i) => (
              <FadeIn key={addon.id} delay={i * 0.06}>
                <div className="py-7 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-[#111111] mb-1 leading-tight">{addon.title}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed max-w-lg">{addon.description}</p>
                    {addon.availability !== 'Both packages' && (
                      <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.12em] mt-2 font-semibold">
                        {addon.availability}
                      </p>
                    )}
                  </div>
                  <div className="sm:text-right sm:ml-10 shrink-0">
                    <p className="text-[#111111] font-bold text-base">{addon.price}</p>
                    <Link
                      href="/book"
                      className="text-[#C0392B] text-xs font-semibold hover:underline mt-1 block"
                    >
                      Add to your program
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOT SURE ─── */}
      <section className="bg-[#FAF9F6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                Not Sure Where to Start
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none mb-4">
                BOOK A FREE CALL FIRST.
              </h2>
              <p className="text-[#111111]/70 text-base leading-relaxed mb-2">
                In twenty minutes, I will help you figure out exactly which program makes sense for you and whether any add ons are worth it right now. There is no commitment required.
              </p>
              <p className="text-[#111111]/70 text-base leading-relaxed">
                Most people leave that call knowing exactly what to do next.
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="space-y-4">
                {[
                  { n: '01', text: 'Book a free 20 minute discovery call.' },
                  { n: '02', text: 'We talk about your goals, your sport, your struggles, and where you want to go.' },
                  { n: '03', text: 'I tell you exactly which program fits and we get started.' },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 bg-white border border-[#DDD8D0] p-5 rounded-sm">
                    <span className="font-display text-3xl text-[#C0392B] leading-none shrink-0">{item.n}</span>
                    <p className="text-[#111111]/75 text-sm leading-relaxed pt-1">{item.text}</p>
                  </div>
                ))}

                <Link
                  href="/book"
                  className="block w-full text-center bg-[#C0392B] text-white font-bold text-sm py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 min-h-[52px] flex items-center justify-center mt-2"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#F0EDE6] border-t border-[#DDD8D0] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-[#6B6560] text-base mb-10">
              Book a free discovery call. There is no commitment required. This is simply a conversation about your goals and what program makes the most sense.
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

import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Apple, BookOpen, GraduationCap, ChevronRight, Check } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import CredibilityBar from '@/components/CredibilityBar'
import FadeIn from '@/components/FadeIn'
import TestimonialCard from '@/components/TestimonialCard'
import { packages, addOns, testimonials, pillars } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The Sas Effect | Mental Performance Coaching for High School Athletes',
  description:
    "Mental performance and athlete development coaching for high school athletes. Built by a D1 athlete who has lived every part of the journey.",
}

const pillarIconMap: Record<string, React.ReactNode> = {
  Brain:         <Brain size={28} />,
  Apple:         <Apple size={28} />,
  BookOpen:      <BookOpen size={28} />,
  GraduationCap: <GraduationCap size={28} />,
}

export default function HomePage() {
  return (
    <>
      {/* ─── SECTION 1: HERO ─── */}
      <HeroSection />

      {/* ─── SECTION 2: CREDIBILITY BAR ─── */}
      <CredibilityBar />

      {/* ─── SECTION 3: ABOUT SASKIA (BRIEF) ─── */}
      <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo placeholder */}
            <FadeIn direction="left">
              {/* TODO: Replace with Saskia's action/competition photo */}
              <div className="aspect-[4/5] bg-[#111111] border border-[#2a2a2a] rounded-sm flex items-center justify-center max-w-md mx-auto lg:mx-0">
                <div className="text-center p-8">
                  <div className="text-6xl mb-3">📸</div>
                  <p className="text-[#666666] text-sm">Saskia action photo</p>
                  <p className="text-[#666666] text-xs mt-1 opacity-60">public/images/saskia-action.jpg</p>
                </div>
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.1}>
              <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                About Saskia
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
                COACHED BY SOMEONE WHO&apos;S BEEN EXACTLY WHERE YOU ARE.
              </h2>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed mb-6">
                I&apos;m Saskia. An active D1 beach volleyball athlete at Texas A&amp;M Corpus Christi.
                I&apos;m All Conference, carry a 4.0 GPA, and I&apos;ve been a student athlete my entire
                life. I know what it&apos;s like to have the skill but lose it under pressure. To balance
                classes, practice, recruiting, and the weight of expectations.
              </p>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed mb-8">
                I built The Sas Effect because I wanted to give high school athletes the mental tools
                I had to figure out on my own. The hard way.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C0392B] font-semibold text-sm hover:gap-3 transition-all"
              >
                My full story <ChevronRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE WORK ON (PILLARS) ─── */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              What We Work On
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              EVERYTHING AN ATHLETE NEEDS TO COMPETE<br className="hidden lg:block" /> AT THEIR HIGHEST LEVEL.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className={`border p-7 rounded-sm transition-colors group h-full ${
                  pillar.isCore
                    ? 'bg-[#111111] border-[#C0392B]/30 hover:border-[#C0392B]'
                    : 'bg-[#111111] border-[#2a2a2a] hover:border-[#2a2a2a]'
                }`}>
                  <div className={`mb-4 ${pillar.isCore ? 'text-[#C0392B]' : 'text-[#666666]'}`}>
                    {pillarIconMap[pillar.icon]}
                  </div>
                  <h3 className="font-display text-2xl text-[#F0ECE4] mb-2 group-hover:text-[#C0392B] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-3">{pillar.description}</p>
                  <span className={`text-[10px] uppercase tracking-[0.15em] font-semibold px-2 py-0.5 rounded-sm ${
                    pillar.isCore
                      ? 'bg-[#C0392B]/15 text-[#C0392B]'
                      : 'bg-[#2a2a2a] text-[#666666]'
                  }`}>
                    {pillar.tag}
                  </span>
                </div>
              </FadeIn>
            ))}

            {/* CTA card */}
            <FadeIn delay={pillars.length * 0.08}>
              <div className="bg-[#C0392B]/8 border border-[#C0392B]/30 p-7 rounded-sm flex flex-col justify-between h-full">
                <p className="font-display text-2xl text-[#F0ECE4] leading-tight mb-4">
                  READY TO BUILD YOUR MENTAL GAME?
                </p>
                <Link
                  href="/coaching"
                  className="inline-flex items-center gap-2 text-[#C0392B] font-bold text-sm hover:gap-3 transition-all"
                >
                  See pricing <ChevronRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PACKAGES PREVIEW ─── */}
      <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Coaching
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-4">
              TWO PACKAGES.<br />ONE FOCUS.
            </h2>
            <p className="text-[#666666] text-sm max-w-lg mx-auto">
              Pick the level that fits right now. Add on from there.
            </p>
          </FadeIn>

          {/* Two package cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.id} delay={i * 0.08}>
                <div className={`rounded-sm p-7 flex flex-col h-full ${
                  pkg.highlight
                    ? 'bg-[#0a0a0a] border-2 border-[#C0392B] shadow-[0_0_40px_rgba(192,57,43,0.10)]'
                    : 'bg-[#111111] border border-[#2a2a2a]'
                }`}>
                  <div className="mb-4">
                    <p className={`text-[10px] uppercase tracking-[0.22em] mb-1 font-semibold ${pkg.highlight ? 'text-[#C0392B]' : 'text-[#666666]'}`}>
                      {pkg.highlight ? 'Most Popular' : 'Get Started'}
                    </p>
                    <p className="font-display text-3xl text-[#F0ECE4] mb-1">{pkg.name}</p>
                    <p className={`font-display text-4xl ${pkg.highlight ? 'text-[#C0392B]' : 'text-[#F0ECE4]'}`}>
                      {pkg.price}
                      <span className="text-[#666666] text-base font-sans font-normal">{pkg.period}</span>
                    </p>
                  </div>
                  <p className="text-[#666666] text-sm leading-relaxed mb-5">{pkg.tagline}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item) => (
                      <li key={item.main} className="flex items-start gap-2.5 text-sm">
                        <Check size={14} className="text-[#C0392B] mt-0.5 shrink-0" />
                        <span>
                          <span className="text-[#F0ECE4]/80 leading-snug block">{item.main}</span>
                          {item.sub && (
                            <span className="text-[#666666] text-xs leading-snug block mt-0.5">{item.sub}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book"
                    className={`mt-auto block text-center font-bold text-sm py-3.5 tracking-wide transition-all min-h-[48px] flex items-center justify-center ${
                      pkg.highlight
                        ? 'bg-[#C0392B] text-white hover:bg-[#C0392B]/90 hover:scale-105'
                        : 'border border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B] hover:text-white'
                    }`}
                  >
                    Start with {pkg.name}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Add-ons teaser */}
          <FadeIn delay={0.15}>
            <p className="text-[#666666] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold text-center">
              Available Add Ons
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {addOns.map((addon) => (
                <div key={addon.id} className="bg-[#111111] border border-[#2a2a2a] p-3.5 rounded-sm hover:border-[#C0392B]/30 transition-colors">
                  <p className="text-[#F0ECE4]/80 text-xs font-medium leading-snug mb-1">{addon.title}</p>
                  <p className="text-[#C0392B] text-xs font-bold">{addon.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/coaching"
                className="inline-flex items-center gap-2 text-[#C0392B] font-semibold text-sm hover:gap-3 transition-all"
              >
                See full pricing details <ChevronRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 7: TESTIMONIALS ─── */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Results
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              WHAT ATHLETES AND PARENTS ARE SAYING.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="h-full">
                <TestimonialCard quote={t.quote} name={t.name} sport={t.sport} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: THE PROCESS ─── */}
      <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              HOW IT WORKS.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-14 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-1/3 right-1/3 h-px bg-[#C0392B]/25 z-0" />

            {[
              {
                num: '01',
                title: 'Book a Free Discovery Call',
                body: '20 minutes. We talk about your sport, your goals, and what\'s been holding you back. No pressure, no commitment.',
              },
              {
                num: '02',
                title: 'Build Your Plan',
                body: "We pick the right package and figure out if any add ons make sense for your athlete right now.",
              },
              {
                num: '03',
                title: 'Start Building Your Mental Game',
                body: 'Weekly calls, check in texts, and homework built specifically for your athlete. This is where the real work starts.',
              },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-[#C0392B] text-white font-display text-3xl flex items-center justify-center mb-6 shrink-0">
                    {step.num}
                  </div>
                  <h3 className="font-display text-2xl text-[#F0ECE4] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Link
              href="/book"
              className="bg-[#C0392B] text-white font-bold text-sm px-10 py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 inline-block min-h-[52px]"
            >
              Book Your Discovery Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 9: INSTAGRAM FEED TEASER ─── */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none mb-2">
              FOLLOW THE JOURNEY
            </h2>
            <a
              href="https://instagram.com/thesaseffect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0392B] text-sm font-semibold hover:underline"
            >
              @thesaseffect
            </a>
          </FadeIn>

          {/* TODO: Integrate Instagram feed API (or use Behold.so for easy embed) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#111111] border border-[#2a2a2a] rounded-sm flex items-center justify-center hover:border-[#C0392B]/40 transition-colors cursor-pointer"
              >
                <span className="text-[#666666] text-2xl">📷</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://instagram.com/thesaseffect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#F0ECE4]/70 text-sm px-6 py-3 hover:border-[#C0392B] hover:text-[#C0392B] transition-all"
            >
              Follow on Instagram <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FOOTER CTA ─── */}
      <section className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#F0ECE4] leading-none mb-6">
              READY TO TRAIN THE PART OF YOUR GAME NOBODY ELSE IS COACHING?
            </h2>
            <p className="text-[#666666] text-base mb-10 max-w-xl mx-auto">
              Book your free 20 minute discovery call. No commitment. Just a conversation about your athlete and what they need.
            </p>
            <Link
              href="/book"
              className="bg-[#C0392B] text-white font-bold text-base px-12 py-5 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-105 inline-block min-h-[56px]"
            >
              Book a Free Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

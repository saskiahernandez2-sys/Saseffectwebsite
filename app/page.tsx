import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Apple, BookOpen, GraduationCap, ChevronRight, Check } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import CredibilityBar from '@/components/CredibilityBar'
import FadeIn from '@/components/FadeIn'
import TestimonialCard from '@/components/TestimonialCard'
import { packages, addOns, testimonials, pillars } from '@/lib/constants'
import StatCounter from '@/components/StatCounter'

export const metadata: Metadata = {
  title: 'The Sas Effect | Mental Performance Coaching for Competitive Athletes',
  description:
    "Mental performance coaching for competitive athletes at any level. Whether you are a high school freshman, a club athlete pushing for the next level, or a college competitor, train your mental game with a D1 athlete who has lived it.",
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
      <section className="bg-[#F0EDE6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              About Saskia
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none mb-6">
              COACHED BY SOMEONE WHO&apos;S BEEN EXACTLY WHERE YOU ARE.
            </h2>
            <p className="text-[#111111]/70 text-base leading-relaxed mb-6">
              As a Division I beach volleyball athlete at Texas A&amp;M Corpus Christi, All Conference honoree, NIL athlete, and 4.0 GPA student, I founded The Sas Effect to address the most overlooked part of athletic development: the mental game.
            </p>
            <p className="text-[#111111]/70 text-base leading-relaxed mb-8">
              I have competed across four Division I programs and have navigated every mental challenge that comes with performing at the highest level of collegiate sport. I built this program because I know what it takes to perform under pressure and I know what happens when the mental side is left untrained. Whether you are a high school freshman finding your footing, a club athlete pushing for the next level, or a college competitor stepping into bigger moments, The Sas Effect gives you the tools and the mental framework to perform at your best when it matters most.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#C0392B] font-semibold text-sm hover:gap-3 transition-all"
            >
              Full story <ChevronRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── DARK MISSION STATEMENT ─── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="w-12 h-[3px] bg-[#C0392B] mx-auto mb-8" />
            <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
              BUILT BY AN ATHLETE WHO HAS BEEN THERE.
            </p>
            <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C0392B] leading-[1.05] mt-3">
              DESIGNED FOR ATHLETES READY TO GO FURTHER.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE WORK ON (PILLARS) ─── */}
      <section className="bg-[#FAF9F6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              What We Work On
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none">
              EVERYTHING AN ATHLETE NEEDS TO COMPETE<br className="hidden lg:block" /> AT THEIR HIGHEST LEVEL.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className={`border p-7 rounded-sm transition-colors group h-full ${
                  pillar.isCore
                    ? 'bg-white border-[#C0392B]/30 hover:border-[#C0392B]'
                    : 'bg-white border-[#DDD8D0] hover:border-[#DDD8D0]'
                }`}>
                  <div className={`mb-4 ${pillar.isCore ? 'text-[#C0392B]' : 'text-[#6B6560]'}`}>
                    {pillarIconMap[pillar.icon]}
                  </div>
                  <h3 className="font-display text-2xl text-[#111111] mb-2 group-hover:text-[#C0392B] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-3">{pillar.description}</p>
                  <span className={`text-[10px] uppercase tracking-[0.15em] font-semibold px-2 py-0.5 rounded-sm ${
                    pillar.isCore
                      ? 'bg-[#C0392B]/15 text-[#C0392B]'
                      : 'bg-[#DDD8D0] text-[#6B6560]'
                  }`}>
                    {pillar.tag}
                  </span>
                </div>
              </FadeIn>
            ))}

            {/* CTA card */}
            <FadeIn delay={pillars.length * 0.08}>
              <div className="bg-[#C0392B]/8 border border-[#C0392B]/30 p-7 rounded-sm flex flex-col justify-between h-full">
                <p className="font-display text-2xl text-[#111111] leading-tight mb-4">
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
      <section className="bg-[#F0EDE6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Coaching
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none mb-4">
              THREE PACKAGES.<br />ONE FOCUS.
            </h2>
            <p className="text-[#6B6560] text-sm max-w-lg mx-auto">
              Pick the program that fits right now. Build from there.
            </p>
          </FadeIn>

          {/* Three package cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.id} delay={i * 0.08}>
                <div className={`rounded-sm p-7 flex flex-col h-full ${
                  pkg.highlight
                    ? 'bg-white border-2 border-[#C0392B] shadow-[0_0_40px_rgba(192,57,43,0.10)]'
                    : 'bg-white border border-[#DDD8D0]'
                }`}>
                  <div className="mb-4">
                    <p className={`text-[10px] uppercase tracking-[0.22em] mb-1 font-semibold ${pkg.highlight ? 'text-[#C0392B]' : 'text-[#6B6560]'}`}>
                      {pkg.highlight ? 'Most Popular' : pkg.id === 'groupeffect' ? 'Group Option' : 'Get Started'}
                    </p>
                    <p className="font-display text-2xl text-[#111111] mb-1">{pkg.name}</p>
                    <p className={`font-display text-3xl ${pkg.highlight ? 'text-[#C0392B]' : 'text-[#111111]'}`}>
                      {pkg.price}
                      <span className="text-[#6B6560] text-sm font-sans font-normal"> {pkg.period}</span>
                    </p>
                    {pkg.groupNote && (
                      <p className="text-[#6B6560] text-xs mt-0.5">{pkg.groupNote}</p>
                    )}
                  </div>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-5">{pkg.tagline}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item.main} className="flex items-start gap-2.5 text-sm">
                        <Check size={14} className="text-[#C0392B] mt-0.5 shrink-0" />
                        <span>
                          <span className="text-[#111111]/80 leading-snug block">{item.main}</span>
                          {item.sub && (
                            <span className="text-[#6B6560] text-xs leading-snug block mt-0.5">{item.sub}</span>
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
                    {pkg.id === 'groupeffect' ? 'Join The Group Effect' : `Start with ${pkg.name}`}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Build Your Program teaser */}
          <FadeIn delay={0.15}>
            <p className="text-[#6B6560] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold text-center">
              Build Your Program
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {addOns.map((addon) => (
                <div key={addon.id} className="bg-white border border-[#DDD8D0] p-3.5 rounded-sm hover:border-[#C0392B]/30 transition-colors">
                  <p className="text-[#111111]/80 text-xs font-medium leading-snug mb-1">{addon.title}</p>
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
      <section className="bg-[#FAF9F6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Results
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none">
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
      <section className="bg-[#F0EDE6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none">
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
                body: 'In a free 15 minute call, we talk about your sport, your goals, and what has been holding you back. There is no pressure and no commitment required.',
              },
              {
                num: '02',
                title: 'Build Your Plan',
                body: "We pick the right package and figure out if any add ons make sense for your athlete right now.",
              },
              {
                num: '03',
                title: 'Start Building Your Mental Game',
                body: 'You receive weekly calls, check in texts, and mental homework built specifically for your situation. This is where the real work begins.',
              },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-[#C0392B] text-white font-display text-3xl flex items-center justify-center mb-6 shrink-0">
                    {step.num}
                  </div>
                  <h3 className="font-display text-2xl text-[#111111] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{step.body}</p>
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

      {/* ─── SECTION 9: BY THE NUMBERS ─── */}
      <section className="bg-[#FAF9F6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              By The Numbers
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] leading-none">
              THE RESULTS SPEAK.
            </h2>
          </FadeIn>

          <StatCounter
            stats={[
              { value: 4, label: 'Division I Programs' },
              { value: 1, label: 'All Conference Title' },
              { value: 100, suffix: '%', label: 'Committed to Your Mental Game' },
            ]}
          />

          <div className="text-center mt-16">
            <a
              href="https://instagram.com/thesaseffect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C0392B] text-sm font-semibold hover:underline"
            >
              Follow the journey @thesaseffect <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FOOTER CTA ─── */}
      <section className="bg-[#F0EDE6] border-t border-[#DDD8D0] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#111111] leading-none mb-6">
              READY TO TRAIN THE PART OF YOUR GAME NOBODY ELSE IS COACHING?
            </h2>
            <p className="text-[#6B6560] text-base mb-10 max-w-xl mx-auto">
              Book your free 15 minute discovery call. There is no commitment required. This is simply a conversation about your athlete and what they need most.
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

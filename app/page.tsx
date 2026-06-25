import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Apple, Dumbbell, BookOpen, GraduationCap, ChevronRight } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import CredibilityBar from '@/components/CredibilityBar'
import FadeIn from '@/components/FadeIn'
import PackageCard from '@/components/PackageCard'
import TestimonialCard from '@/components/TestimonialCard'
import { packages, testimonials, pillars } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The Sas Effect | Mental Performance Coaching for High School Athletes',
  description:
    "Mental performance & athlete development coaching for high school athletes — built by a D1 athlete who's lived every part of the journey.",
}

const pillarIconMap: Record<string, React.ReactNode> = {
  Brain:         <Brain size={28} className="text-[#C8F04A]" />,
  Apple:         <Apple size={28} className="text-[#C8F04A]" />,
  Dumbbell:      <Dumbbell size={28} className="text-[#C8F04A]" />,
  BookOpen:      <BookOpen size={28} className="text-[#C8F04A]" />,
  GraduationCap: <GraduationCap size={28} className="text-[#C8F04A]" />,
}

export default function HomePage() {
  return (
    <>
      {/* ─── SECTION 1: HERO ─── */}
      <HeroSection />

      {/* ─── SECTION 2: CREDIBILITY BAR ─── */}
      <CredibilityBar />

      {/* ─── SECTION 3: THE PROBLEM ─── */}
      <section className="bg-[#0D0D1A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
            {/* For the Athlete */}
            <FadeIn delay={0}>
              <div className="bg-[#12121F] border border-[#1E1E30] p-8 lg:p-10 rounded-sm">
                <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                  For the Athlete
                </p>
                <h3 className="font-display text-3xl lg:text-4xl text-[#F0ECE4] mb-5 leading-tight">
                  FOR THE ATHLETE
                </h3>
                <p className="text-[#F0ECE4]/70 text-base leading-relaxed">
                  You train your body every single day. But when the pressure hits — a big game, a
                  recruiting visit, a moment that matters — something shuts down. That&apos;s not a
                  physical problem. That&apos;s your mind. And it&apos;s trainable.
                </p>
              </div>
            </FadeIn>

            {/* For the Parent */}
            <FadeIn delay={0.1}>
              <div className="bg-[#12121F] border border-[#1E1E30] p-8 lg:p-10 rounded-sm">
                <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                  For the Parent
                </p>
                <h3 className="font-display text-3xl lg:text-4xl text-[#F0ECE4] mb-5 leading-tight">
                  FOR THE PARENT
                </h3>
                <p className="text-[#F0ECE4]/70 text-base leading-relaxed">
                  You watch your athlete work harder than anyone. But you&apos;ve seen them fall apart
                  under pressure, lose confidence after one mistake, or carry the weight of recruiting
                  on top of everything else. There&apos;s a missing piece — and it&apos;s not more practice reps.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Bold statement */}
          <FadeIn delay={0.15}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F0ECE4] leading-snug mb-8">
                That missing piece is{' '}
                <span className="text-[#C8F04A]">mental performance.</span>
                <br />And that&apos;s exactly what The Sas Effect builds.
              </p>
              <Link
                href="/coaching"
                className="inline-flex items-center gap-2 text-[#C8F04A] font-semibold text-sm hover:gap-3 transition-all"
              >
                See how it works <ChevronRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 4: ABOUT SASKIA (BRIEF) ─── */}
      <section className="bg-[#1A1A2E] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo placeholder */}
            <FadeIn direction="left">
              {/* TODO: Replace with Saskia's action/competition photo */}
              <div className="aspect-[4/5] bg-[#12121F] border border-[#1E1E30] rounded-sm flex items-center justify-center max-w-md mx-auto lg:mx-0">
                <div className="text-center p-8">
                  <div className="text-6xl mb-3">📸</div>
                  <p className="text-[#555566] text-sm">Saskia action photo</p>
                  <p className="text-[#555566] text-xs mt-1 opacity-60">public/images/saskia-action.jpg</p>
                </div>
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.1}>
              <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                About Saskia
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
                COACHED BY SOMEONE WHO&apos;S BEEN EXACTLY WHERE YOU ARE.
              </h2>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed mb-6">
                I&apos;m Saskia — an active D1 beach volleyball athlete at Texas A&amp;M–Corpus Christi.
                I&apos;m All-Conference, carry a 4.0 GPA, and I&apos;ve been a student-athlete my entire
                life. I know what it&apos;s like to have the skill but lose it under pressure. To balance
                classes, practice, recruiting, and the weight of expectations.
              </p>
              <p className="text-[#F0ECE4]/70 text-base leading-relaxed mb-8">
                I built The Sas Effect because I wanted to give high school athletes the mental tools
                I had to figure out on my own — the hard way.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C8F04A] font-semibold text-sm hover:gap-3 transition-all"
              >
                My full story <ChevronRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE WORK ON (PILLARS) ─── */}
      <section className="bg-[#0D0D1A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              What We Work On
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              EVERYTHING AN ATHLETE NEEDS TO COMPETE<br className="hidden lg:block" /> AT THEIR HIGHEST LEVEL.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className="bg-[#12121F] border border-[#1E1E30] p-7 rounded-sm hover:border-[#C8F04A]/40 transition-colors group h-full">
                  <div className="mb-4">{pillarIconMap[pillar.icon]}</div>
                  <h3 className="font-display text-2xl text-[#F0ECE4] mb-2 group-hover:text-[#C8F04A] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[#555566] text-sm leading-relaxed mb-3">{pillar.description}</p>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#C8F04A]/70 font-semibold">
                    {pillar.tag}
                  </span>
                </div>
              </FadeIn>
            ))}

            {/* CTA card */}
            <FadeIn delay={pillars.length * 0.08}>
              <div className="bg-[#C8F04A]/8 border border-[#C8F04A]/30 p-7 rounded-sm flex flex-col justify-between h-full">
                <p className="font-display text-2xl text-[#F0ECE4] leading-tight mb-4">
                  READY TO BUILD YOUR MENTAL GAME?
                </p>
                <Link
                  href="/coaching"
                  className="inline-flex items-center gap-2 text-[#C8F04A] font-bold text-sm hover:gap-3 transition-all"
                >
                  See all packages <ChevronRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PACKAGES PREVIEW ─── */}
      <section className="bg-[#1A1A2E] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Coaching Packages
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-4">
              CHOOSE THE LEVEL THAT FITS WHERE YOU ARE RIGHT NOW.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 0.1}>
                <PackageCard
                  name={pkg.name}
                  price={pkg.price}
                  badge={pkg.badge}
                  cardDescription={pkg.cardDescription}
                  features={pkg.features}
                  href={pkg.href}
                  highlighted={pkg.highlighted}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <p className="text-[#555566] text-sm mb-8">
              Pay monthly or save 10% when you pay 3 months in full.
            </p>
            <Link
              href="/book"
              className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-10 py-4 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 inline-block min-h-[52px]"
            >
              Book a Free Discovery Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 7: TESTIMONIALS ─── */}
      <section className="bg-[#0D0D1A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Results
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              WHAT ATHLETES AND PARENTS ARE SAYING.
            </h2>
          </FadeIn>

          {/* TODO: Replace with real client testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <TestimonialCard quote={t.quote} name={t.name} sport={t.sport} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: THE PROCESS ─── */}
      <section className="bg-[#1A1A2E] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              HOW IT WORKS — SIMPLE AND CLEAR.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-14 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-1/3 right-1/3 h-px bg-[#C8F04A]/25 z-0" />

            {[
              {
                num: '01',
                title: 'Book a Free Discovery Call',
                body: '20 minutes. We talk about your sport, your goals, and what\'s been holding you back. No pressure, no commitment.',
              },
              {
                num: '02',
                title: 'Choose Your Package',
                body: "Based on our conversation, I'll tell you exactly which package fits your situation and what we'll work on together.",
              },
              {
                num: '03',
                title: 'Start Building Your Mental Game',
                body: 'Weekly calls, daily text support, and a plan built specifically for you. This is where the work — and the results — begin.',
              },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-[#C8F04A] text-[#0D0D1A] font-display text-3xl flex items-center justify-center mb-6 shrink-0">
                    {step.num}
                  </div>
                  <h3 className="font-display text-2xl text-[#F0ECE4] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[#555566] text-sm leading-relaxed">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Link
              href="/book"
              className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-10 py-4 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 inline-block min-h-[52px]"
            >
              Book Your Discovery Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 9: INSTAGRAM FEED TEASER ─── */}
      <section className="bg-[#0D0D1A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none mb-2">
              FOLLOW THE JOURNEY
            </h2>
            <a
              href="https://instagram.com/thesaseffect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8F04A] text-sm font-semibold hover:underline"
            >
              @thesaseffect
            </a>
          </FadeIn>

          {/* TODO: Integrate Instagram feed API (or use Behold.so for easy embed) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#12121F] border border-[#1E1E30] rounded-sm flex items-center justify-center hover:border-[#C8F04A]/40 transition-colors cursor-pointer"
              >
                <span className="text-[#555566] text-2xl">📷</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://instagram.com/thesaseffect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1E1E30] text-[#F0ECE4]/70 text-sm px-6 py-3 hover:border-[#C8F04A] hover:text-[#C8F04A] transition-all"
            >
              Follow on Instagram <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FOOTER CTA ─── */}
      <section className="bg-[#1A1A2E] border-t border-[#1E1E30] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#F0ECE4] leading-none mb-6">
              READY TO TRAIN THE PART OF YOUR GAME NOBODY ELSE IS COACHING?
            </h2>
            <p className="text-[#555566] text-base mb-10 max-w-xl mx-auto">
              Book your free 20-minute discovery call. No commitment — just a conversation about your goals.
            </p>
            <Link
              href="/book"
              className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-base px-12 py-5 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 inline-block min-h-[56px]"
            >
              Book a Free Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

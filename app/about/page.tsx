import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'About Saskia | D1 Athlete & Mental Performance Coach',
  description:
    'Saskia is an active D1 beach volleyball athlete at Texas A&M Corpus Christi. All Conference. 4.0 GPA. NIL athlete. Founder of The Sas Effect.',
  openGraph: {
    title: 'About Saskia | D1 Athlete & Mental Performance Coach | The Sas Effect',
    description: 'The story behind The Sas Effect. Built by a D1 athlete who has lived every part of it.',
  },
}

const credentials = [
  { label: 'Sport',            value: 'D1 Beach Volleyball' },
  { label: 'School',           value: 'Texas A&M Corpus Christi' },
  { label: 'Achievement',      value: 'First Team All Conference' },
  { label: 'Academic',         value: '4.0 GPA' },
  { label: 'Status',           value: 'Active NIL Athlete' },
  { label: 'Previous schools', value: 'NC State · University of Virginia · Florida International University' },
  { label: 'Coaching focus',   value: 'Mental performance coaching for competitive athletes at any level' },
]

const philosophy = [
  {
    bold: '"The mind comes first."',
    body: 'Physical talent only gets you so far. The mental game is where athletes truly separate, and it can be trained like any other skill.',
  },
  {
    bold: '"Every athlete is different."',
    body: "Cookie cutter programs do not work. Everything I build is specific to you, your sport, your goals, your mental patterns, and your schedule.",
  },
  {
    bold: '"Results come from consistency, not intensity."',
    body: "One big session does not change anything. Small, consistent mental reps practiced over months are what build a championship mindset.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#FAF9F6] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C0392B]/4 to-transparent pointer-events-none" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C0392B]/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              The Story
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#111111] leading-none mb-6">
              BUILT BY AN ATHLETE WHO&apos;S LIVED EVERY PART OF IT.
            </h1>
            <p className="text-[#6B6560] text-base leading-relaxed">
              A Division I athlete, All Conference honoree, 4.0 GPA student, and NIL athlete who learned the hard way what it actually takes to compete at your highest level.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── HER STORY ─── */}
      <section className="bg-[#F0EDE6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-8 font-semibold">
              Her Story
            </p>
          </FadeIn>

          <div className="space-y-6 text-[#111111]/75 text-base lg:text-lg leading-relaxed">
            <FadeIn delay={0.05}>
              <p>
                I began my collegiate volleyball career at NC State before transferring to the University of Virginia, where I earned my bachelor&apos;s degree. From there I transferred to Florida International University and ultimately found my home at Texas A&amp;M Corpus Christi.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                That journey across four Division I programs, navigating the pressure, the mental battles, and the recruiting process all over again, taught me more about the mental game than any practice ever could.
              </p>
            </FadeIn>
            <FadeIn delay={0.13}>
              <div className="border-l-4 border-[#C0392B] pl-6 py-1">
                <p className="text-[#111111] font-semibold text-base lg:text-lg leading-relaxed">
                  I did not just study mental performance. I lived it.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="text-[#111111] font-medium">
                Every transfer, every new team, every moment of doubt and every breakthrough shaped the coach I am today and the program I built for athletes who are going through the same thing.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── BOLD QUOTE BAND ─── */}
      <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              THE MENTAL GAME IS THE LAST THING MOST ATHLETES TRAIN.
            </p>
            <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C0392B] mt-3 leading-tight">
              IT SHOULD BE THE FIRST.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CREDENTIALS ─── */}
      <section className="bg-[#FAF9F6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Credentials
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none">
              THE NUMBERS THAT MATTER.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#DDD8D0] border border-[#DDD8D0] rounded-sm overflow-hidden">
            {credentials.map((cred, i) => (
              <FadeIn key={cred.label} delay={i * 0.06}>
                <div className="bg-white p-6 lg:p-8">
                  <p className="text-[#6B6560] text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">
                    {cred.label}
                  </p>
                  <p className="text-[#111111] font-display text-xl lg:text-2xl tracking-wide">
                    {cred.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COACHING PHILOSOPHY ─── */}
      <section className="bg-[#F0EDE6] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Philosophy
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none">
              WHAT I BELIEVE ABOUT<br />ATHLETE DEVELOPMENT.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {philosophy.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#DDD8D0] p-8 rounded-sm h-full hover:border-[#C0392B]/40 transition-colors">
                  <div className="w-8 h-1 bg-[#C0392B] mb-6" />
                  <p className="text-[#111111] font-display text-xl lg:text-2xl mb-4 leading-tight">
                    {p.bold}
                  </p>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#FAF9F6] border-t border-[#DDD8D0] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-none mb-6">
              READY TO WORK TOGETHER?
            </h2>
            <p className="text-[#6B6560] text-base mb-10">
              Book a free 20 minute discovery call. There is no pressure and no commitment. This is simply a conversation about your goals and what we would work on together.
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
                className="border border-[#111111]/30 text-[#111111] font-bold text-sm px-10 py-4 tracking-wide hover:border-[#C0392B] hover:text-[#C0392B] transition-all inline-block min-h-[52px] flex items-center justify-center"
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

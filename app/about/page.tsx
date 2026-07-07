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
  { label: 'Coaching focus',   value: 'Mental performance and full athlete development for competitive athletes' },
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
      <section className="relative bg-[#0a0a0a] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C0392B]/4 to-transparent pointer-events-none" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C0392B]/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <FadeIn>
                <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                  The Story
                </p>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F0ECE4] leading-none mb-6">
                  BUILT BY AN ATHLETE WHO&apos;S LIVED EVERY PART OF IT.
                </h1>
                <p className="text-[#666666] text-base leading-relaxed">
                  A Division I athlete, All Conference honoree, 4.0 GPA student, and NIL athlete who learned the hard way what it actually takes to compete at your highest level.
                </p>
              </FadeIn>
            </div>

            {/* Photo */}
            <FadeIn delay={0.1}>
              {/* TODO: Replace with Saskia's professional photo */}
              <div className="aspect-[4/5] bg-[#111111] border border-[#2a2a2a] rounded-sm flex items-center justify-center max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="text-center p-8">
                  <div className="text-6xl mb-3">📸</div>
                  <p className="text-[#666666] text-sm">Saskia&apos;s professional photo</p>
                  <p className="text-[#666666] text-xs mt-1 opacity-60">public/images/saskia-hero.jpg</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── HER STORY ─── */}
      <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-8 font-semibold">
              Her Story
            </p>
          </FadeIn>

          <div className="space-y-6 text-[#F0ECE4]/75 text-base lg:text-lg leading-relaxed">
            <FadeIn delay={0.05}>
              <p>
                I have been a student athlete my entire life. I know what it is like to work harder than everyone around you and still feel like something is missing, as if you are leaving performance on the table that you cannot explain.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                I played volleyball at NC State, transferred to University of Virginia, then
                Florida International University, and finally found my home at Texas A&amp;M
                Corpus Christi. That journey, the transfers, the pressure, the mental battles,
                the recruiting process all over again, taught me more about the mental game
                than any practice ever could.
              </p>
            </FadeIn>
            <FadeIn delay={0.13}>
              <div className="border-l-4 border-[#C0392B] pl-6 py-1">
                <p className="text-[#F0ECE4] font-semibold text-base lg:text-lg leading-relaxed">
                  Named to the All Conference team while maintaining a 4.0 GPA and competing
                  as a Division I beach volleyball athlete across four programs. I have lived
                  every mental challenge that comes with performing at the highest level of
                  collegiate sport.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p>
                What I learned is that the difference between a good athlete and a great one is not talent. It is what happens between the ears. It is how you recover from a bad play, how you show up when the stakes are highest, and how you balance the weight of school, sport, recruiting, and being a human being all at once.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#F0ECE4] font-medium">
                I built The Sas Effect to give competitive athletes what I had to figure out the hard way: a mentor, a plan, and a mental framework that actually works when the pressure is on.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ─── */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Credentials
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              THE NUMBERS THAT MATTER.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#2a2a2a] border border-[#2a2a2a] rounded-sm overflow-hidden">
            {credentials.map((cred, i) => (
              <FadeIn key={cred.label} delay={i * 0.06}>
                <div className="bg-[#111111] p-6 lg:p-8">
                  <p className="text-[#666666] text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">
                    {cred.label}
                  </p>
                  <p className="text-[#F0ECE4] font-display text-xl lg:text-2xl tracking-wide">
                    {cred.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COACHING PHILOSOPHY ─── */}
      <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Philosophy
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none">
              WHAT I BELIEVE ABOUT<br />ATHLETE DEVELOPMENT.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {philosophy.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#111111] border border-[#2a2a2a] p-8 rounded-sm h-full hover:border-[#C0392B]/40 transition-colors">
                  <div className="w-8 h-1 bg-[#C0392B] mb-6" />
                  <p className="text-[#F0ECE4] font-display text-xl lg:text-2xl mb-4 leading-tight">
                    {p.bold}
                  </p>
                  <p className="text-[#666666] text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
              READY TO WORK TOGETHER?
            </h2>
            <p className="text-[#666666] text-base mb-10">
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
                className="border border-[#F0ECE4]/30 text-[#F0ECE4] font-bold text-sm px-10 py-4 tracking-wide hover:border-[#C0392B] hover:text-[#C0392B] transition-all inline-block min-h-[52px] flex items-center justify-center"
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

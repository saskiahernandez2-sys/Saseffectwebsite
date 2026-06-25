import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Minus } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { packages, comparisonTable } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Coaching Packages | 1-on-1 Athlete Development',
  description:
    'Three 1-on-1 coaching packages built for high school athletes — Starter ($400/mo), Core ($650/mo), and Elite/D1 Track ($1,000/mo). 3-month minimum.',
  openGraph: {
    title: 'Coaching Packages | 1-on-1 Athlete Development | The Sas Effect',
    description:
      'Every package includes a weekly 1-on-1 coaching call and is designed to develop the whole athlete — mentally, physically, and strategically.',
  },
}

function TableCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={18} className="text-[#C8F04A] mx-auto" />
  if (value === false) return <Minus size={16} className="text-[#555566] mx-auto opacity-50" />
  return <span className="text-[#C8F04A] text-sm font-semibold">{value}</span>
}

const packageAccents = ['border-[#1E1E30]', 'border-[#C8F04A]', 'border-[#555566]']

export default function CoachingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0D0D1A] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C8F04A]/4 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              1-on-1 Coaching
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F0ECE4] leading-none mb-6">
              COACHING BUILT<br />AROUND <span className="text-[#C8F04A]">YOU.</span>
            </h1>
            <p className="text-[#F0ECE4]/70 text-base sm:text-lg max-w-2xl mx-auto mb-4">
              Every package includes a weekly 1-on-1 coaching call and is designed to develop
              the whole athlete — mentally, physically, and strategically.
            </p>
            <p className="text-[#555566] text-sm">
              All packages require a 3-month minimum commitment. Pay monthly or save 10% paying in full.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── PACKAGE 1: STARTER ─── */}
      <PackageSection
        pkg={packages[0]}
        accentClass="border-l-4 border-[#C8F04A]/50"
        index={0}
      />

      {/* ─── PACKAGE 2: CORE ─── */}
      <section className="bg-[#0D0D1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-[#C8F04A] rounded-sm overflow-hidden relative">
            {/* Most Popular badge */}
            <div className="absolute top-0 right-0 bg-[#C8F04A] text-[#0D0D1A] font-bold text-[10px] uppercase tracking-[0.22em] px-5 py-2">
              Most Popular
            </div>
            <div className="p-8 lg:p-12 bg-[#C8F04A]/5">
              <PackageContent pkg={packages[1]} index={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACKAGE 3: ELITE ─── */}
      <PackageSection
        pkg={packages[2]}
        accentClass="border-l-4 border-[#555566]/50"
        index={2}
        darkBg
      />

      {/* ─── PAYMENT ─── */}
      <section className="bg-[#0D0D1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Payment Options
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none">
              FLEXIBLE BILLING. YOUR CHOICE.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <FadeIn delay={0.05}>
              <div className="bg-[#12121F] border border-[#1E1E30] p-8 rounded-sm">
                <p className="text-[#555566] text-xs uppercase tracking-[0.18em] mb-3">Monthly Billing</p>
                <p className="font-display text-3xl text-[#F0ECE4] mb-3">Pay as you go</p>
                <ul className="space-y-2 text-sm text-[#F0ECE4]/70">
                  <li>• Billed monthly, 3-month minimum</li>
                  <li>• Cancel after your initial 3 months</li>
                  <li>• Full price per month</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#C8F04A]/10 border border-[#C8F04A] p-8 rounded-sm">
                <p className="text-[#C8F04A] text-xs uppercase tracking-[0.18em] mb-3">Pay in Full — Best Value</p>
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
            <p className="text-[#555566] text-sm text-center">
              Not sure which package is right?{' '}
              <Link href="/book" className="text-[#C8F04A] hover:underline">
                Book a free discovery call
              </Link>{' '}
              and I&apos;ll tell you exactly which one fits your situation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="bg-[#1A1A2E] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
              Compare
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F0ECE4] leading-none">
              WHAT&apos;S INCLUDED IN EACH PACKAGE.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1E1E30]">
                    <th className="text-left py-4 px-4 text-[#555566] text-xs uppercase tracking-[0.18em] font-semibold w-1/2">
                      Feature
                    </th>
                    {['STARTER', 'CORE', 'ELITE'].map((name, i) => (
                      <th
                        key={name}
                        className={`py-4 px-3 text-xs uppercase tracking-[0.18em] font-bold text-center ${
                          i === 1 ? 'text-[#C8F04A]' : 'text-[#F0ECE4]'
                        }`}
                      >
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#1E1E30] hover:bg-[#12121F] transition-colors ${
                        i % 2 === 0 ? 'bg-transparent' : 'bg-[#12121F]/40'
                      }`}
                    >
                      <td className="py-3.5 px-4 text-sm text-[#F0ECE4]/80">{row.feature}</td>
                      <td className="py-3.5 px-3 text-center">
                        <TableCell value={row.starter} />
                      </td>
                      <td className="py-3.5 px-3 text-center bg-[#C8F04A]/5">
                        <TableCell value={row.core} />
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <TableCell value={row.elite} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#0D0D1A] border-t border-[#1E1E30] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F0ECE4] leading-none mb-6">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-[#555566] text-base mb-10">
              Book a free discovery call and we&apos;ll figure out the right fit together. No
              commitment — just a conversation.
            </p>
            <Link
              href="/book"
              className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-12 py-4 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 inline-block min-h-[52px]"
            >
              Book a Free Discovery Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

/* ─── Helper sub-components ─── */

function PackageSection({
  pkg,
  accentClass,
  index,
  darkBg = false,
}: {
  pkg: (typeof packages)[0]
  accentClass: string
  index: number
  darkBg?: boolean
}) {
  return (
    <section className={`${darkBg ? 'bg-[#1A1A2E]' : 'bg-[#1A1A2E]'} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className={`bg-[#12121F] border border-[#1E1E30] ${accentClass} rounded-sm p-8 lg:p-12`}>
          <PackageContent pkg={pkg} index={index} />
        </div>
      </div>
    </section>
  )
}

function PackageContent({
  pkg,
  index,
}: {
  pkg: (typeof packages)[0]
  index: number
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Left: header + description */}
      <FadeIn>
        <div>
          <p className="text-[#555566] text-[10px] uppercase tracking-[0.22em] mb-3 font-semibold">
            {pkg.name}
          </p>
          <p className="font-display text-5xl lg:text-6xl text-[#C8F04A] mb-2">{pkg.price}</p>
          <p className="text-[#555566] text-xs uppercase tracking-[0.18em] mb-6">per month · 3-month minimum</p>

          <p className="text-[#F0ECE4]/80 text-base leading-relaxed mb-8">{pkg.plainDescription}</p>

          {/* "This is for you if" */}
          <div className="border-l-2 border-[#C8F04A] pl-5">
            <p className="text-[#555566] text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
              This is for you if...
            </p>
            <p className="text-[#F0ECE4]/75 text-sm leading-relaxed">{pkg.forWho}</p>
          </div>
        </div>
      </FadeIn>

      {/* Right: features + CTA */}
      <FadeIn delay={0.1}>
        <div>
          <p className="text-[#555566] text-xs uppercase tracking-[0.18em] mb-4 font-semibold">
            What&apos;s Included
          </p>
          <ul className="space-y-3 mb-8">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check size={15} className="text-[#C8F04A] mt-0.5 shrink-0" />
                <span className="text-[#F0ECE4]/80 leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/book"
            className={`block w-full text-center font-bold text-sm py-4 tracking-wide transition-all hover:scale-105 min-h-[52px] flex items-center justify-center ${
              index === 1
                ? 'bg-[#C8F04A] text-[#0D0D1A] hover:bg-[#C8F04A]/90'
                : 'border border-[#C8F04A] text-[#C8F04A] hover:bg-[#C8F04A] hover:text-[#0D0D1A]'
            }`}
          >
            Book a Discovery Call — {pkg.name}
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}

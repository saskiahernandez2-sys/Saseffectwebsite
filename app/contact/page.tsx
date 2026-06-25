import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to Saskia at The Sas Effect. Questions about coaching, packages, or just want to say hi — I respond to every message personally.',
  openGraph: {
    title: 'Contact | The Sas Effect',
    description:
      'Whether you have questions about coaching, want to learn more before booking, or just want to say hi — reach out.',
  },
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#0D0D1A] pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C8F04A]/4 to-transparent pointer-events-none" />
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold ml-4 sm:ml-6 lg:ml-8">
              Get in Touch
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F0ECE4] leading-none mb-6 px-4 sm:px-6 lg:px-8">
              LET&apos;S CONNECT.
            </h1>
            <p className="text-[#F0ECE4]/70 text-base sm:text-lg px-4 sm:px-6 lg:px-8">
              Whether you have questions about coaching, want to learn more before booking,
              or just want to say hi — reach out. I respond to every message personally.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="bg-[#1A1A2E] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left: contact methods + quick links */}
            <div>
              <FadeIn>
                <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-8 font-semibold">
                  Contact Methods
                </p>

                <div className="space-y-5 mb-12">
                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#12121F] border border-[#1E1E30] rounded-sm flex items-center justify-center text-[#555566] group-hover:border-[#C8F04A] group-hover:text-[#C8F04A] transition-all shrink-0">
                      <MailIcon />
                    </div>
                    <div>
                      <p className="text-[#555566] text-xs uppercase tracking-[0.15em] mb-0.5">Email</p>
                      {/* TODO: Add Saskia's business email address */}
                      <a
                        href="mailto:hello@thesaseffect.com"
                        className="text-[#F0ECE4] text-sm hover:text-[#C8F04A] transition-colors"
                      >
                        hello@thesaseffect.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#12121F] border border-[#1E1E30] rounded-sm flex items-center justify-center text-[#555566] group-hover:border-[#C8F04A] group-hover:text-[#C8F04A] transition-all shrink-0">
                      <InstagramIcon />
                    </div>
                    <div>
                      <p className="text-[#555566] text-xs uppercase tracking-[0.15em] mb-0.5">Instagram</p>
                      <a
                        href="https://instagram.com/thesaseffect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F0ECE4] text-sm hover:text-[#C8F04A] transition-colors"
                      >
                        @thesaseffect
                      </a>
                    </div>
                  </div>

                  {/* TikTok */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#12121F] border border-[#1E1E30] rounded-sm flex items-center justify-center text-[#555566] group-hover:border-[#C8F04A] group-hover:text-[#C8F04A] transition-all shrink-0">
                      <TikTokIcon />
                    </div>
                    <div>
                      <p className="text-[#555566] text-xs uppercase tracking-[0.15em] mb-0.5">TikTok</p>
                      <a
                        href="https://tiktok.com/@thesaseffect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F0ECE4] text-sm hover:text-[#C8F04A] transition-colors"
                      >
                        @thesaseffect
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="bg-[#12121F] border border-[#1E1E30] p-6 rounded-sm">
                  <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-4 font-semibold">
                    Ready to book?
                  </p>
                  <p className="text-[#F0ECE4]/75 text-sm mb-5 leading-relaxed">
                    If you&apos;re ready to take the next step, skip the form and book your free
                    discovery call directly.
                  </p>
                  <Link
                    href="/book"
                    className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-6 py-3 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 inline-block min-h-[44px]"
                  >
                    Book a Free Discovery Call →
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: contact form */}
            <FadeIn delay={0.1}>
              <div>
                <p className="text-[#C8F04A] text-[10px] uppercase tracking-[0.22em] mb-8 font-semibold">
                  Send a Message
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── RESPONSE NOTE ─── */}
      <section className="bg-[#0D0D1A] border-t border-[#1E1E30] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="font-display text-3xl sm:text-4xl text-[#F0ECE4] mb-4">
              I RESPOND TO EVERY MESSAGE PERSONALLY.
            </p>
            <p className="text-[#555566] text-sm">
              Typical response time: within 24 hours on weekdays.
              For faster contact, DM on Instagram.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

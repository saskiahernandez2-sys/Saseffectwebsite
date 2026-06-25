import Link from 'next/link'
import { navLinks } from '@/lib/constants'

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] border-t border-[#1E1E30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="font-display text-2xl text-[#C8F04A] tracking-wider inline-block">
              THE SAS EFFECT
            </Link>
            <p className="mt-3 text-[#555566] text-sm italic leading-relaxed">
              Train the mind first.<br />Everything else follows.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[#555566] text-xs uppercase tracking-[0.18em] mb-4">Pages</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#555566] hover:text-[#F0ECE4] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social + contact */}
          <div>
            <p className="text-[#555566] text-xs uppercase tracking-[0.18em] mb-4">Follow Along</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/thesaseffect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555566] hover:text-[#C8F04A] transition-colors flex items-center gap-2.5"
              >
                <InstagramIcon />
                <span className="text-sm">@thesaseffect</span>
              </a>
              <a
                href="https://tiktok.com/@thesaseffect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555566] hover:text-[#C8F04A] transition-colors flex items-center gap-2.5"
              >
                <TikTokIcon />
                <span className="text-sm">@thesaseffect</span>
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/book"
                className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-5 py-2.5 tracking-wide hover:bg-[#C8F04A]/90 transition-all inline-block"
              >
                Book a Free Call →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E1E30] pt-6">
          <p className="text-[#555566] text-sm text-center">
            © 2025 The Sas Effect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

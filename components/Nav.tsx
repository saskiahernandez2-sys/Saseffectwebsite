'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/lib/constants'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-[#0D0D1A]/95 backdrop-blur-md border-b border-[#1E1E30]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-2xl lg:text-3xl text-[#C8F04A] tracking-wider hover:opacity-80 transition-opacity"
            >
              THE SAS EFFECT
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C8F04A] ${
                    pathname === link.href ? 'text-[#C8F04A]' : 'text-[#F0ECE4]/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/book"
                className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-5 py-2.5 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 inline-block"
              >
                Book a Free Call
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#F0ECE4] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0D0D1A] lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-5xl tracking-wider transition-colors hover:text-[#C8F04A] min-h-[44px] flex items-center ${
                    pathname === link.href ? 'text-[#C8F04A]' : 'text-[#F0ECE4]'
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4"
            >
              <Link
                href="/book"
                className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-lg px-10 py-4 tracking-wide inline-block min-h-[44px]"
              >
                Book a Free Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0D0D1A] overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D1A] via-[#0D0D1A] to-[#1A1A2E]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C8F04A]/4 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#C8F04A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#C8F04A]/3 blur-[100px] pointer-events-none" />

      {/* Photo placeholder — right panel, desktop only */}
      {/* TODO: Replace with Saskia's professional action photo */}
      <div className="absolute right-0 top-0 bottom-0 w-[46%] hidden lg:block overflow-hidden">
        <div className="h-full w-full bg-[#1A1A2E] relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A] via-[#0D0D1A]/60 to-transparent z-10" />
          <div className="text-[#1E1E30] text-center z-0 p-8">
            <div className="text-7xl mb-4">📸</div>
            <p className="text-[#555566] text-sm font-medium">Saskia's photo goes here</p>
            <p className="text-[#555566] text-xs mt-1 opacity-60">public/images/hero-photo.jpg</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4"
          >
            <span className="text-[#C8F04A] text-xs uppercase tracking-[0.22em] font-semibold">
              Mental Performance Coaching
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[80px] sm:text-[96px] lg:text-[108px] xl:text-[120px] text-[#F0ECE4] leading-none mb-6"
          >
            TRAIN THE<br />
            <span className="text-[#C8F04A]">MIND</span><br />
            FIRST.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="text-[#F0ECE4]/70 text-lg sm:text-xl mb-8 max-w-lg leading-relaxed"
          >
            Mental performance &amp; athlete development coaching for high school athletes — built by a D1 athlete who&apos;s lived every part of the journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10"
          >
            <Link
              href="/book"
              className="bg-[#C8F04A] text-[#0D0D1A] font-bold text-sm px-8 py-4 tracking-wide hover:bg-[#C8F04A]/90 transition-all hover:scale-105 text-center min-h-[52px] flex items-center justify-center"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/coaching"
              className="border-2 border-[#F0ECE4]/40 text-[#F0ECE4] font-bold text-sm px-8 py-4 tracking-wide hover:border-[#C8F04A] hover:text-[#C8F04A] transition-all text-center min-h-[52px] flex items-center justify-center"
            >
              See Packages
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-[#555566] text-[10px] sm:text-xs tracking-[0.18em] uppercase"
          >
            D1 Beach Volleyball · Texas A&amp;M–Corpus Christi · All-Conference · 4.0 GPA · NIL Athlete
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-[#555566]" size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}

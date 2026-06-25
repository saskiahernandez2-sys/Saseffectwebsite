'use client'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface PackageCardProps {
  name: string
  price: string
  badge?: string | null
  cardDescription: string
  features: string[]
  href: string
  highlighted?: boolean
}

export default function PackageCard({
  name,
  price,
  badge,
  cardDescription,
  features,
  href,
  highlighted = false,
}: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={`relative flex flex-col rounded-sm h-full ${
        highlighted
          ? 'bg-[#C8F04A]/10 border-2 border-[#C8F04A] shadow-[0_0_40px_rgba(200,240,74,0.12)]'
          : 'bg-[#12121F] border border-[#1E1E30]'
      }`}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#C8F04A] text-[#0D0D1A] text-[10px] font-bold px-4 py-1 uppercase tracking-[0.2em]">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={`p-6 pb-4 border-b border-[#1E1E30] ${highlighted ? 'bg-[#C8F04A]/5' : ''}`}>
        <p className="text-[#555566] text-[10px] uppercase tracking-[0.22em] mb-1.5">{name}</p>
        <p className="font-display text-4xl text-[#F0ECE4] mb-1">{price}</p>
        <p className="text-[#555566] text-sm">{cardDescription}</p>
      </div>

      {/* Feature list */}
      <div className="p-6 flex flex-col flex-1">
        <ul className="space-y-3 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Check size={15} className="text-[#C8F04A] mt-0.5 shrink-0" />
              <span className="text-[#F0ECE4]/80 leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-[#1E1E30]">
          <Link
            href={href}
            className={`block w-full text-center font-bold text-sm py-3.5 tracking-wide transition-all hover:scale-105 min-h-[44px] flex items-center justify-center ${
              highlighted
                ? 'bg-[#C8F04A] text-[#0D0D1A] hover:bg-[#C8F04A]/90'
                : 'border border-[#C8F04A] text-[#C8F04A] hover:bg-[#C8F04A] hover:text-[#0D0D1A]'
            }`}
          >
            Book a Discovery Call →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

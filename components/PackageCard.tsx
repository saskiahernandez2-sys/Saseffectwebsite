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
          ? 'bg-[#C0392B]/10 border-2 border-[#C0392B] shadow-[0_0_40px_rgba(192,57,43,0.12)]'
          : 'bg-[#111111] border border-[#2a2a2a]'
      }`}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#C0392B] text-white text-[10px] font-bold px-4 py-1 uppercase tracking-[0.2em]">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={`p-6 pb-4 border-b border-[#2a2a2a] ${highlighted ? 'bg-[#C0392B]/5' : ''}`}>
        <p className="text-[#666666] text-[10px] uppercase tracking-[0.22em] mb-1.5">{name}</p>
        <p className="font-display text-4xl text-[#F0ECE4] mb-1">{price}</p>
        <p className="text-[#666666] text-sm">{cardDescription}</p>
      </div>

      {/* Feature list */}
      <div className="p-6 flex flex-col flex-1">
        <ul className="space-y-3 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Check size={15} className="text-[#C0392B] mt-0.5 shrink-0" />
              <span className="text-[#F0ECE4]/80 leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-[#2a2a2a]">
          <Link
            href={href}
            className={`block w-full text-center font-bold text-sm py-3.5 tracking-wide transition-all hover:scale-105 min-h-[44px] flex items-center justify-center ${
              highlighted
                ? 'bg-[#C0392B] text-white hover:bg-[#C0392B]/90'
                : 'border border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B] hover:text-[#0a0a0a]'
            }`}
          >
            Book a Discovery Call →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

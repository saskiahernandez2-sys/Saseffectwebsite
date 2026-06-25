'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface AddOnCardProps {
  title: string
  price: string
  description: string
}

export default function AddOnCard({ title, price, description }: AddOnCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, borderColor: '#C8F04A' }}
      transition={{ duration: 0.2 }}
      className="bg-[#12121F] border border-[#1E1E30] rounded-sm p-7 flex flex-col group"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-display text-2xl text-[#F0ECE4] tracking-wide leading-tight group-hover:text-[#C8F04A] transition-colors">
          {title}
        </h3>
        <span className="text-[#C8F04A] font-bold text-sm whitespace-nowrap bg-[#C8F04A]/10 px-3 py-1 rounded-sm shrink-0">
          {price}
        </span>
      </div>
      <p className="text-[#555566] text-sm leading-relaxed flex-1">{description}</p>
      <div className="mt-6">
        <Link
          href="/book"
          className="text-[#C8F04A] text-sm font-semibold hover:underline"
        >
          Add to your package →
        </Link>
      </div>
    </motion.div>
  )
}

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
      whileHover={{ scale: 1.015, borderColor: '#C0392B' }}
      transition={{ duration: 0.2 }}
      className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-7 flex flex-col group"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-display text-2xl text-[#F0ECE4] tracking-wide leading-tight group-hover:text-[#C0392B] transition-colors">
          {title}
        </h3>
        <span className="text-[#C0392B] font-bold text-sm whitespace-nowrap bg-[#C0392B]/10 px-3 py-1 rounded-sm shrink-0">
          {price}
        </span>
      </div>
      <p className="text-[#666666] text-sm leading-relaxed flex-1">{description}</p>
      <div className="mt-6">
        <Link
          href="/book"
          className="text-[#C0392B] text-sm font-semibold hover:underline"
        >
          Add to your package →
        </Link>
      </div>
    </motion.div>
  )
}

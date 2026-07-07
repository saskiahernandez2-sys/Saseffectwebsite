'use client'
import { motion } from 'framer-motion'

const credentials = [
  'D1 Athlete',
  'All Conference',
  '4.0 GPA',
  'NIL Athlete',
  'Texas A&M CC',
  'Competitive Athlete Specialist',
]

export default function CredibilityBar() {
  return (
    <section className="bg-[#F0EDE6] border-y border-[#DDD8D0] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 lg:divide-x lg:divide-[#DDD8D0]">
          {credentials.map((cred, i) => (
            <motion.span
              key={cred}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#6B6560] font-medium lg:px-6 px-4"
            >
              {cred}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

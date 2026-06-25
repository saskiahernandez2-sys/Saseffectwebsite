'use client'
import { motion } from 'framer-motion'

const credentials = [
  'D1 Athlete',
  'All-Conference',
  '4.0 GPA',
  'NIL Athlete',
  'Texas A&M–CC',
  'High School Athlete Specialist',
]

export default function CredibilityBar() {
  return (
    <section className="bg-[#1A1A2E] border-y border-[#1E1E30] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 lg:divide-x lg:divide-[#1E1E30]">
          {credentials.map((cred, i) => (
            <motion.span
              key={cred}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#555566] font-medium lg:px-6 px-4"
            >
              {cred}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

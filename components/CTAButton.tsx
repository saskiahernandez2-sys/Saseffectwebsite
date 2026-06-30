'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline-green'
  className?: string
  fullWidth?: boolean
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
}: CTAButtonProps) {
  const base = `inline-block font-bold tracking-wide text-sm py-4 px-8 transition-all min-h-[44px] flex items-center justify-center ${fullWidth ? 'w-full text-center' : ''} ${className}`

  const styles = {
    primary:       'bg-[#C0392B] text-white hover:bg-[#C0392B]/90',
    secondary:     'border-2 border-[#F0ECE4]/50 text-[#F0ECE4] hover:border-[#C0392B] hover:text-[#C0392B]',
    'outline-green': 'border border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B] hover:text-[#0a0a0a]',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={fullWidth ? 'w-full' : 'inline-block'}
    >
      <Link href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </Link>
    </motion.div>
  )
}

'use client'
import { useEffect, useRef, useState } from 'react'

type Stat = { value: number; suffix?: string; label: string }

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [active, target])
  return count
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, active)
  return (
    <div className="text-center">
      <p className="font-display text-[80px] sm:text-[96px] text-[#C0392B] leading-none tabular-nums">
        {count}{stat.suffix ?? ''}
      </p>
      <div className="w-8 h-[2px] bg-[#DDD8D0] mx-auto my-4" />
      <p className="text-[#6B6560] text-xs uppercase tracking-[0.18em] font-medium leading-relaxed max-w-[160px] mx-auto">
        {stat.label}
      </p>
    </div>
  )
}

export default function StatCounter({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-8">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  )
}

'use client'
import { useEffect } from 'react'

const CALENDLY_URL = 'https://calendly.com/saskiamariehernandez/30min'

export default function CalendlyEmbed() {
  useEffect(() => {
    const existing = document.getElementById('calendly-script')
    if (existing) return

    const script = document.createElement('script')
    script.id = 'calendly-script'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      const el = document.getElementById('calendly-script')
      if (el) document.body.removeChild(el)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full rounded-sm overflow-hidden bg-[#111111] border border-[#2a2a2a]"
      data-url={CALENDLY_URL}
      style={{ minHeight: '750px' }}
    />
  )
}

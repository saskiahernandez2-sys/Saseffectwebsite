'use client'
import { useEffect } from 'react'

// TODO: Replace CALENDLY_URL with Saskia's actual Calendly link
// When react-calendly is installed you can swap to:
//   import { InlineWidget } from 'react-calendly'
//   return <InlineWidget url="YOUR_CALENDLY_URL" styles={{ height: '700px' }} />

const CALENDLY_URL = 'https://calendly.com/thesaseffect/discovery-call'

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
      className="calendly-inline-widget w-full rounded-sm overflow-hidden bg-[#12121F] border border-[#1E1E30]"
      data-url={CALENDLY_URL}
      style={{ minHeight: '700px' }}
    />
  )
}

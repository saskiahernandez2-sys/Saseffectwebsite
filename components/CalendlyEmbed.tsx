'use client'
import { useEffect } from 'react'

const CALENDLY_URL =
  'https://calendly.com/saskiamariehernandez/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff2d00'

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
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}

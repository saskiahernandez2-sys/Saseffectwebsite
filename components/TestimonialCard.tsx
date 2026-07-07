interface TestimonialCardProps {
  quote: string
  name: string
  sport: string
}

export default function TestimonialCard({ quote, name, sport }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-[#DDD8D0] p-7 rounded-sm flex flex-col h-full">
      <span
        className="font-display text-5xl text-[#C0392B] leading-none mb-3 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="text-[#111111]/85 text-sm leading-relaxed mb-auto italic">{quote}</p>
      <div className="mt-6 pt-5 border-t border-[#DDD8D0]">
        <p className="text-[#111111] font-semibold text-sm">{name}</p>
        {sport && <p className="text-[#6B6560] text-xs mt-1">{sport}</p>}
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  sport: string
}

export default function TestimonialCard({ quote, name, sport }: TestimonialCardProps) {
  return (
    <div className="bg-[#111111] border border-[#2a2a2a] p-7 rounded-sm flex flex-col h-full">
      <span
        className="font-display text-6xl text-[#C0392B] leading-none mb-4 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="text-[#F0ECE4]/85 text-sm leading-relaxed flex-1 italic">{quote}</p>
      <div className="mt-8 pt-6 border-t border-[#2a2a2a]">
        <p className="text-[#F0ECE4] font-semibold text-sm">{name}</p>
        {sport && <p className="text-[#666666] text-xs mt-1">{sport}</p>}
      </div>
    </div>
  )
}

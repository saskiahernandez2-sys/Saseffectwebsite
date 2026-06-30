'use client'
import { useState } from 'react'

// TODO: Connect form to email service (Resend, Formspree, or EmailJS recommended)

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const sports = [
  'Volleyball', 'Beach Volleyball', 'Basketball', 'Soccer', 'Softball', 'Baseball',
  'Swimming', 'Track & Field', 'Tennis', 'Lacrosse', 'Football', 'Other',
]

const grades = ['Freshman (9th)', 'Sophomore (10th)', 'Junior (11th)', 'Senior (12th)']

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', sport: '', grade: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    // TODO: Replace with actual form submission (Resend / Formspree / EmailJS)
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  if (state === 'success') {
    return (
      <div className="bg-[#C0392B]/10 border border-[#C0392B] rounded-sm p-8 text-center">
        <p className="font-display text-3xl text-[#C0392B] mb-2">MESSAGE SENT!</p>
        <p className="text-[#F0ECE4]/80 text-sm">
          Thanks for reaching out. I respond to every message personally — usually within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-[#666666] mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-[#111111] border border-[#2a2a2a] text-[#F0ECE4] placeholder-[#666666] px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors min-h-[44px] rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-[#666666] mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-[#111111] border border-[#2a2a2a] text-[#F0ECE4] placeholder-[#666666] px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors min-h-[44px] rounded-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sport" className="block text-xs uppercase tracking-[0.15em] text-[#666666] mb-2">
            Sport
          </label>
          <select
            id="sport"
            name="sport"
            value={form.sport}
            onChange={handleChange}
            className="w-full bg-[#111111] border border-[#2a2a2a] text-[#F0ECE4] px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors min-h-[44px] rounded-sm appearance-none"
          >
            <option value="">Select your sport</option>
            {sports.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="grade" className="block text-xs uppercase tracking-[0.15em] text-[#666666] mb-2">
            Grade
          </label>
          <select
            id="grade"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className="w-full bg-[#111111] border border-[#2a2a2a] text-[#F0ECE4] px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors min-h-[44px] rounded-sm appearance-none"
          >
            <option value="">Select grade</option>
            {grades.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-[#666666] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your athlete, their sport, and what you're looking for..."
          className="w-full bg-[#111111] border border-[#2a2a2a] text-[#F0ECE4] placeholder-[#666666] px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors resize-none rounded-sm"
        />
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full bg-[#C0392B] text-white font-bold text-sm py-4 tracking-wide hover:bg-[#C0392B]/90 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed min-h-[52px] rounded-sm"
      >
        {state === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

# The Sas Effect — Setup Guide

## Quick Start

```bash
cd thesaseffect-website
npm install
npm run dev
```

Open http://localhost:3000

## Before You Launch — TODO Checklist

### Photos (drop into public/images/)
- [ ] `saskia-hero.jpg` — Professional headshot for About page hero
- [ ] `saskia-action.jpg` — Competition/action shot for Home about section

### Booking
- [ ] Go to calendly.com, create a free event type called "Discovery Call" (20 min)
- [ ] Copy your Calendly URL (e.g. `https://calendly.com/yourname/discovery-call`)
- [ ] Open `components/CalendlyEmbed.tsx` and replace the `CALENDLY_URL` constant

### Email
- [ ] Decide on your business email (e.g. hello@thesaseffect.com or saskia@thesaseffect.com)
- [ ] Find and replace `hello@thesaseffect.com` in:
  - `app/book/page.tsx`
  - `app/contact/page.tsx`
- [ ] Set up email forwarding so the contact form can reach you. Options:
  - **Formspree** (easiest — no backend needed): formspree.io
  - **Resend** (best for custom domains): resend.com
  - **EmailJS** (client-side only): emailjs.com
  - Update `components/ContactForm.tsx` with your chosen service

### Testimonials
- [ ] Collect real testimonials from athletes/parents you've worked with
- [ ] Update `lib/constants.ts` → `testimonials` array with real names and quotes
- [ ] Update `components/TestimonialCard.tsx` to add actual photos once collected

### Instagram Feed
- [ ] Sign up at behold.so (free tier available) for easy Instagram feed embed
- [ ] Or set up Instagram Basic Display API
- [ ] Update Section 9 in `app/page.tsx` with the embed code

### Analytics
- [ ] Add Vercel Analytics: `npm install @vercel/analytics` then add `<Analytics />` to `app/layout.tsx`
- [ ] Or add Google Analytics via `next/script`

### Favicon
- [ ] Create a favicon from The Sas Effect branding (use favicon.io or similar)
- [ ] Drop `favicon.ico` and/or `icon.png` into the `app/` directory

## Deployment to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your GitHub repo
3. Vercel auto-detects Next.js — just click Deploy
4. Set your custom domain in Vercel dashboard (Settings → Domains)

## Color Reference

| Variable       | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| `sas-dark`     | #0D0D1A   | Primary background           |
| `sas-secondary`| #1A1A2E   | Section backgrounds          |
| `sas-green`    | #C8F04A   | CTAs, accent, highlights     |
| `sas-white`    | #F0ECE4   | Primary text                 |
| `sas-muted`    | #555566   | Secondary text               |
| `sas-card`     | #12121F   | Card backgrounds             |
| `sas-border`   | #1E1E30   | Borders                      |

## File Structure

```
app/
  layout.tsx          Global layout (Nav + Footer)
  page.tsx            Home (10 sections)
  about/page.tsx      Saskia's full story
  coaching/page.tsx   Three detailed packages + comparison table
  addons/page.tsx     5 add-on service cards
  book/page.tsx       Calendly embed + what to expect
  contact/page.tsx    Contact form + methods

components/
  Nav.tsx             Sticky nav with mobile hamburger overlay
  Footer.tsx          Logo, links, social icons
  HeroSection.tsx     Home hero (client — load animations)
  FadeIn.tsx          Scroll-triggered fade wrapper (client)
  CTAButton.tsx       Reusable animated CTA button
  CredibilityBar.tsx  Stats strip below hero
  PackageCard.tsx     Package card with feature list
  TestimonialCard.tsx Testimonial card with quote
  AddOnCard.tsx       Add-on service card
  CalendlyEmbed.tsx   Calendly inline widget
  ContactForm.tsx     Contact form with state management

lib/
  constants.ts        All data (packages, testimonials, pillars, add-ons, nav)

public/images/        Drop Saskia's photos here
```

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/addons', label: 'Add-Ons' },
  { href: '/book', label: 'Book a Call' },
]

export const coreOffer = {
  name: 'Mental Performance Coaching',
  price: '$250/month',
  priceNote: 'Launch price · 3-month minimum · Pay monthly or save 10% paying in full',
  plainDescription:
    "Every week your athlete gets on a 1-on-1 call with me. We work on their mindset, their focus, and how to handle pressure — plus how to balance school and sport so neither one suffers. Between calls I'm available by text Monday through Friday, so if something comes up before a big game or a hard week, I'm there. At the end of each month I send you a progress report so you always know exactly how your athlete is developing.",
  features: [
    'Weekly 1-on-1 coaching call — the main coaching time together',
    'Mental performance coaching — confidence, focus, pressure management, mistake recovery, pregame routines',
    'Academic balance + time management coaching',
    'Text support Monday through Friday between calls',
    'Custom journal prompts tailored to their challenges',
    'Monthly progress report sent to parents',
  ],
  forWho:
    "Your athlete has the talent but loses it under pressure, gets stuck in their own head, or struggles to bounce back from mistakes. This is the foundation — the mental game that separates good athletes from elite ones.",
  href: '/book',
}

export const monthlyAddOns = [
  {
    title: 'Nutrition Plan',
    price: '+$100/month',
    description:
      'Custom sport-specific fueling plan, built for performance and recovery. Created once and adjusted as your athlete progresses.',
  },
  {
    title: 'Conditioning Program',
    price: '+$100/month',
    description:
      "A training program built around your athlete's sport, schedule, and goals — not a generic plan.",
  },
  {
    title: 'Recruiting Support',
    price: '+$150/month',
    description:
      'Recruiting timeline, school list strategy, coach outreach guidance, and a clear understanding of what college coaches actually look for.',
  },
]

export const sessionAddOns = [
  {
    title: 'Mock Recruiting Call',
    price: '$125/session',
    description:
      'A full simulation of a college coach recruiting call. I play the coach, ask the real questions, and record it so you can review after. Includes a written debrief and a cheat sheet of the top 20 questions coaches ask.',
  },
  {
    title: 'Game Film Review',
    price: '$75/session',
    description:
      "A mental and tactical breakdown of one game or match, delivered with written notes you can reference in practice. Focus on decision-making under pressure, body language, and mental momentum.",
  },
  {
    title: 'Pre-Season Intensive',
    price: '$250/package',
    description:
      'A focused 2-week program to get your athlete mentally and physically locked in before their season — mental reset, game-week routine, and goal setting.',
  },
]

export const addOns = [...monthlyAddOns, ...sessionAddOns]

export const pricingExamples = [
  { label: 'Mindset only',                         price: '$250/mo' },
  { label: 'Mindset + Nutrition',                  price: '$350/mo' },
  { label: 'Mindset + Nutrition + Conditioning',   price: '$450/mo' },
  { label: 'Full package + Recruiting',            price: '$600/mo' },
]

export const testimonials = [
  {
    quote:
      'Working with Sas changed how I show up to every game. I used to crumble under pressure. Now I have a routine and I trust it.',
    name: 'HS Volleyball Player',
    sport: 'Junior',
  },
  {
    quote:
      "As a parent I didn't know what my daughter needed until Sas explained it. The monthly reports alone were worth it.",
    name: 'Parent',
    sport: 'HS Soccer Player',
  },
  {
    quote:
      "I went into my first official recruiting call feeling completely prepared. She roleplay'd the whole thing with me first.",
    name: 'HS Basketball Player',
    sport: 'Senior',
  },
]

export const pillars = [
  {
    icon: 'Brain',
    title: 'Mental Performance',
    description:
      'Confidence, focus, pressure management, mistake recovery, pregame routines. The mental game that separates good athletes from elite ones.',
    tag: 'Included',
    isCore: true,
  },
  {
    icon: 'Apple',
    title: 'Nutrition',
    description:
      'Fueling your body the right way for performance and recovery. Sport-specific, simple, and built into your routine.',
    tag: 'Add-on',
    isCore: false,
  },
  {
    icon: 'Dumbbell',
    title: 'Conditioning',
    description:
      'A training program built around your sport, your schedule, and your goals — not a generic plan.',
    tag: 'Add-on',
    isCore: false,
  },
  {
    icon: 'BookOpen',
    title: 'Academic Balance',
    description:
      'GPA matters for recruiting. Learn how to manage your time, stay focused in class, and perform in both worlds.',
    tag: 'Included',
    isCore: true,
  },
  {
    icon: 'GraduationCap',
    title: 'Recruiting Prep',
    description:
      'Understand what coaches actually look for, how to reach out the right way, and how to show up ready when it matters.',
    tag: 'Add-on',
    isCore: false,
  },
]

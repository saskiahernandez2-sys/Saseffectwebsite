export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/addons', label: 'Add-Ons' },
  { href: '/book', label: 'Book a Call' },
]

export const packages = [
  {
    name: 'STARTER',
    price: '$400/month',
    badge: null,
    highlighted: false,
    plainDescription:
      'Every week your athlete gets on a call with me one on one. We work on their mindset, their focus, and how to handle pressure. I also help them figure out how to manage their time between school and sport so neither one suffers. In between calls I\'m available by text Monday through Friday — so if something comes up before a big game or a hard week, I\'m there. At the end of each month I send you a summary of what we worked on and how your athlete is progressing.',
    cardDescription: 'Mental clarity, structure, and accountability.',
    features: [
      'Weekly 1-on-1 coaching call',
      'Mental performance coaching — confidence, focus, pressure management',
      'Academic balance + time management coaching',
      'Weekly mindset check-in via text',
      'Custom journal prompts tailored to their challenges',
      'Text access Monday through Friday',
      'Monthly progress summary sent to parents',
      '3-month minimum commitment',
    ],
    forWho:
      'Your athlete needs mental clarity, structure, and accountability. Perfect for athletes who want to start training their mental game without committing to the full program yet.',
    href: '/book',
  },
  {
    name: 'CORE',
    price: '$650/month',
    badge: 'Most Popular',
    highlighted: true,
    plainDescription:
      'Everything in the Starter, plus I build your athlete a nutrition plan specific to their sport so they\'re fueling their body the right way, and a conditioning program so their training has a purpose and a plan. You also get a monthly progress report from me directly — so you always know exactly where your athlete stands, what we\'re working on, and what the next steps are.',
    cardDescription: 'Full-spectrum athlete development.',
    features: [
      'Everything in Starter',
      'Custom sport-specific nutrition plan',
      'Sport-specific conditioning program',
      'Monthly parent progress report (written, detailed)',
      'Bi-weekly goal review and progress tracking',
      'Text access Monday through Friday',
      '3-month minimum commitment',
    ],
    forWho:
      'A serious athlete who wants full-spectrum development — mental, physical, and nutritional. This is the most complete package for athletes who want to perform at their highest level every week.',
    href: '/book',
  },
  {
    name: 'ELITE / D1 TRACK',
    price: '$1,000/month',
    badge: null,
    highlighted: false,
    plainDescription:
      'Everything in the Core, plus we focus heavily on recruiting. I help your athlete understand what college coaches are actually looking for, how to reach out to schools the right way, and how to prepare for recruiting calls so they show up confident and ready. I\'m available by text seven days a week — including game days — and I review their game film so we can work on both the mental and the strategic side of their performance.',
    cardDescription: 'Every edge — mental, physical, and strategic.',
    features: [
      'Everything in the Core',
      'Recruiting guidance — timeline, school list strategy, what coaches look for',
      'Game film review — mental and tactical breakdown with written notes',
      'College visit prep — what to look for, what to ask, how to evaluate fit',
      'Unlimited text access 7 days a week',
      'Parent communication updates',
      '3-month minimum commitment',
    ],
    forWho:
      'A junior or senior actively pursuing college recruitment who needs every edge — mental, physical, nutritional, and strategic. This is the package for athletes serious about earning a scholarship.',
    href: '/book',
  },
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
    tag: 'All packages',
  },
  {
    icon: 'Apple',
    title: 'Nutrition',
    description:
      'Fueling your body the right way for performance and recovery. Sport-specific, simple, and built into your routine.',
    tag: 'Core + Elite',
  },
  {
    icon: 'Dumbbell',
    title: 'Conditioning',
    description:
      'A training program built around your sport, your schedule, and your goals — not a generic plan.',
    tag: 'Core + Elite',
  },
  {
    icon: 'BookOpen',
    title: 'Academic Balance',
    description:
      'GPA matters for recruiting. Learn how to manage your time, stay focused in class, and perform in both worlds.',
    tag: 'All packages',
  },
  {
    icon: 'GraduationCap',
    title: 'Recruiting Prep',
    description:
      'Understand what coaches actually look for, how to reach out the right way, and how to show up ready when it matters.',
    tag: 'Elite + Add-On',
  },
]

export const addOns = [
  {
    title: 'Mock Recruiting Call',
    price: '$125/session',
    description:
      'A full simulation of a college coach recruiting call. I play the role of the coach, ask the real questions coaches ask, and record the call so you can review it after. Includes a full written debrief, feedback on your tone and confidence, and a cheat sheet of the top 20 questions coaches ask — with guidance on how to answer each one.',
  },
  {
    title: 'Recruiting Readiness Bundle',
    price: '$300 one-time',
    description:
      'The complete recruiting prep package: 2 mock recruiting calls, coach outreach email templates, highlight reel review with written feedback, and a recruiting tracker template. Built for athletes who are actively communicating with college coaches and need to show up prepared, confident, and professional.',
  },
  {
    title: 'Pre-Season Intensive',
    price: '$250/package',
    description:
      'A focused 2-week program to get your athlete mentally, physically, and nutritionally locked in before their season starts. Includes a mental reset, game-week routine, nutrition plan for the season, and a performance goal-setting session. Available before fall and spring seasons.',
  },
  {
    title: 'Parent Strategy Call',
    price: '$100/call',
    description:
      "A dedicated 30-minute call with the parent to align on the athlete's development plan, discuss progress, and answer questions. For parents who want to stay informed and know exactly how to support their athlete at home.",
  },
  {
    title: 'Game Film Review',
    price: '$75/session',
    description:
      "A mental and tactical breakdown of one game or match. Share your footage and I'll review it with a focus on decision-making under pressure, body language, and mental momentum — delivered with written notes you can reference in practice.",
  },
]

export const comparisonTable = [
  { feature: 'Weekly 1-on-1 call',       starter: true,      core: true,      elite: true },
  { feature: 'Mental performance coaching', starter: true,   core: true,      elite: true },
  { feature: 'Academic balance coaching', starter: true,     core: true,      elite: true },
  { feature: 'Weekly mindset check-in',  starter: true,      core: true,      elite: true },
  { feature: 'Journal prompts',          starter: true,      core: true,      elite: true },
  { feature: 'Text access Mon–Fri',      starter: true,      core: true,      elite: false },
  { feature: 'Unlimited text (7 days)',  starter: false,     core: false,     elite: true },
  { feature: 'Custom nutrition plan',    starter: false,     core: true,      elite: true },
  { feature: 'Conditioning program',     starter: false,     core: true,      elite: true },
  { feature: 'Parent progress report',   starter: 'Monthly', core: 'Monthly', elite: 'Ongoing' },
  { feature: 'Bi-weekly goal review',    starter: false,     core: true,      elite: true },
  { feature: 'Recruiting guidance',      starter: false,     core: false,     elite: true },
  { feature: 'Game film review',         starter: false,     core: false,     elite: true },
  { feature: 'College visit prep',       starter: false,     core: false,     elite: true },
]

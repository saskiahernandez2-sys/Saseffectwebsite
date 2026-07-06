export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/addons', label: 'Add Ons' },
  { href: '/book', label: 'Book a Call' },
]

export const packages = [
  {
    id: 'foundation',
    name: 'The Foundation',
    price: '$197',
    period: '/month',
    tagline: 'Core mental performance coaching with one focused topic per week.',
    includes: [
      { main: '2 one on one calls per month' },
      { main: 'Weekly check in text from me', sub: 'One focused topic or challenge per week' },
      { main: 'Weekly mental homework' },
    ],
    topics: [
      'Confidence',
      'Self talk',
      'Handling pressure',
      'Dealing with mistakes',
      'Focus and concentration',
      'Pregame mindset',
      'Bouncing back from a loss',
    ],
    topicsNote:
      'We rotate through these week to week based on what your athlete is working through right now.',
    highlight: false,
    href: '/book',
  },
  {
    id: 'effect',
    name: 'The Effect',
    price: '$397',
    period: '/month',
    tagline: 'More touchpoints, deeper work, and full accountability every week.',
    includes: [
      { main: '4 one on one calls per month' },
      { main: 'Weekly mental homework and accountability check ins' },
      { main: 'Priority scheduling with first access to my calendar' },
      { main: 'Postgame check in text after every game' },
    ],
    topics: [
      'Everything in The Foundation',
      'Identity as an athlete',
      'Performing in big moments',
      'Managing expectations from coaches and parents',
      'Leadership on and off the field',
      'Visualization and mental reps',
      'A competitive mindset that carries into life',
    ],
    topicsNote:
      'We go deeper. Everything from The Foundation plus the advanced work that separates good athletes from great ones.',
    highlight: true,
    href: '/book',
  },
]

export const addOns = [
  {
    id: 'recruiting',
    title: 'Recruiting strategy + mock calls',
    price: '$197 per month',
    type: 'monthly',
    availability: 'Both packages',
    bullets: [
      'Recruiting profile buildout',
      'How to reach out to college coaches',
      'Mock recruiting calls so you are ready when it counts',
    ],
  },
  {
    id: 'nutrition',
    title: 'Nutrition guidance',
    price: '$97 per month',
    type: 'monthly',
    availability: 'Both packages',
    bullets: [
      'Performance nutrition for your sport and schedule',
      'What to eat and when',
      'How to fuel for competition day and recovery',
    ],
  },
  {
    id: 'academic',
    title: 'Academic + schedule mapping session',
    price: '$97 one time',
    type: 'one time',
    availability: 'Both packages',
    bullets: [
      'One dedicated session together',
      'Full Google Calendar buildout',
      'School, games, practices, and life all organized in one place',
    ],
  },
  {
    id: 'textsupport',
    title: 'Unlimited text support',
    price: '$47 per month',
    type: 'monthly',
    availability: 'Foundation only',
    bullets: [
      'Foundation clients only',
      'Text anytime you need a reset or help with a mental challenge',
      'Response within 24 hours',
    ],
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
      'Confidence. Self talk. Handling pressure. Bouncing back from mistakes. The mental game that separates good athletes from great ones.',
    tag: 'Included',
    isCore: true,
  },
  {
    icon: 'Apple',
    title: 'Nutrition',
    description:
      'Performance fueling built around your sport and your schedule. What to eat, when to eat it, and how to show up ready on game day.',
    tag: 'Add on',
    isCore: false,
  },
  {
    icon: 'BookOpen',
    title: 'Schedule Mapping',
    description:
      'One session where we build your full calendar together. School, games, practices, and life organized so nothing gets dropped.',
    tag: 'Add on',
    isCore: false,
  },
  {
    icon: 'GraduationCap',
    title: 'Recruiting Prep',
    description:
      'Build your profile, learn how to reach out to coaches, and run mock calls so you are completely ready when it matters.',
    tag: 'Add on',
    isCore: false,
  },
]

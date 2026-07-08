export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/addons', label: 'Add Ons' },
  { href: '/book', label: 'Book a Call' },
]

type PackageInclude = { main: string; sub?: string }

export const packages: Array<{
  id: string
  name: string
  price: string
  period: string
  groupNote?: string
  tagline: string
  includes: PackageInclude[]
  topics: string[]
  topicsNote: string
  highlight: boolean
  href: string
}> = [
  {
    id: 'foundation',
    name: 'The Foundation',
    price: '$197',
    period: '/month',
    tagline: 'Core mental performance coaching with one focused topic per week.',
    includes: [
      { main: '2 one on one calls per month' },
      { main: 'Weekly check in text', sub: 'One focused topic or challenge per week' },
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
      { main: 'Weekly text check in support with ongoing guidance between sessions.' },
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
  {
    id: 'groupeffect',
    name: 'The Group Effect',
    price: '$97',
    period: '/mo per person',
    groupNote: 'Minimum 4 · Maximum 8',
    tagline: 'One focused mental performance topic every week in a small group setting. Learn together, grow together.',
    includes: [
      { main: '1 group call per week' },
      { main: 'Weekly rotating mental performance topic' },
      { main: 'Private group chat for support between sessions' },
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
      'One mental performance topic per week, rotating based on what the group is working through together.',
    highlight: false,
    href: '/book',
  },
]

export const addOns = [
  {
    id: 'recruiting',
    title: 'Recruiting strategy and mock calls',
    description:
      'A personalized recruiting profile, college coach outreach strategy, and mock recruiting calls so you are ready when it counts.',
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
    description:
      'Performance nutrition tailored to your sport and schedule including what to eat, when to eat it, and how to fuel for competition day and recovery.',
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
    title: 'Academic and schedule mapping session',
    description:
      'One dedicated session where we build out your full Google Calendar covering school, sport, and life all organized in one place.',
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
    title: 'Extra text support',
    description:
      'Available to Foundation and Group Effect clients only. Text me anytime you need help with a mental challenge or just need a reset.',
    price: '$47 per month',
    type: 'monthly',
    availability: 'Foundation and Group Effect',
    bullets: [
      'Foundation and Group Effect clients only',
      'Text anytime you need a reset or help with a mental challenge',
      'Response within 24 hours',
    ],
  },
]

export const testimonials = [
  {
    quote:
      'The mental skills I developed through The Sas Effect changed the way I compete entirely. I stopped letting mistakes affect the next play and started showing up with real confidence in the moments that matter.',
    name: 'Jordan Mitchell',
    sport: 'Competitive Athlete',
  },
  {
    quote:
      'I always assumed the mental side would take care of itself if I just put in enough physical work. This program showed me how wrong I was and gave me tools I use in competition every single week.',
    name: 'Camille Rivera',
    sport: 'Competitive Athlete',
  },
  {
    quote:
      'The progress my daughter has made since working with Saskia has been remarkable. Her confidence, composure, and focus have improved in ways that go well beyond her sport.',
    name: 'Parent of Sofia Thomas',
    sport: '',
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

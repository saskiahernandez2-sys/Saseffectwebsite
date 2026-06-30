export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/addons', label: 'Add-Ons' },
  { href: '/book', label: 'Book a Call' },
]

export const packages = [
  {
    id: 'foundation',
    name: 'The Foundation',
    price: '$197',
    period: '/month',
    tagline: 'Build the base. Stay consistent.',
    description:
      'Two calls a month. Every week I send a check-in text with one focused topic to work on. Plus weekly mental homework to keep the work going between sessions. Simple and it works.',
    includes: [
      '2 one-on-one calls per month',
      'Weekly check-in text with one focused topic',
      'Weekly mental homework',
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
    tagline: 'Full access. Every week. All in.',
    description:
      'We meet every week. Four calls a month plus unlimited text support so they can reach out whenever something comes up. Weekly mental homework with full accountability check-ins so nothing slips.',
    includes: [
      '4 one-on-one calls per month',
      'Unlimited text support',
      'Weekly mental homework with full accountability check-ins',
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
    title: 'Recruiting Strategy + Mock Calls',
    price: '$197/month',
    type: 'monthly',
    availability: 'Both packages',
    description:
      'We build your recruiting profile together. You learn how to reach out to college coaches the right way. Then we run mock recruiting calls so when a real coach calls you are ready.',
  },
  {
    id: 'nutrition',
    title: 'Nutrition Guidance',
    price: '$97/month',
    type: 'monthly',
    availability: 'Both packages',
    description:
      'Performance nutrition built around your sport and your schedule. What to eat. When to eat it. How to fuel for competition day and recover after.',
  },
  {
    id: 'academic',
    title: 'Academic and Schedule Mapping',
    price: '$97 one time',
    type: 'one-time',
    availability: 'Both packages',
    description:
      'One call where we build out your full Google Calendar together. School. Games. Practices. Life. All organized in one place so nothing falls through the cracks.',
  },
  {
    id: 'textsupport',
    title: 'Unlimited Text Support',
    price: '$47/month',
    type: 'monthly',
    availability: 'Foundation only',
    description:
      'Reach out anytime between sessions when a mental challenge comes up. For Foundation clients only. The Effect already includes unlimited text support.',
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
    tag: 'Add-on',
    isCore: false,
  },
  {
    icon: 'BookOpen',
    title: 'Schedule Mapping',
    description:
      'One session where we build your full calendar together. School, games, practices, and life organized so nothing gets dropped.',
    tag: 'Add-on',
    isCore: false,
  },
  {
    icon: 'GraduationCap',
    title: 'Recruiting Prep',
    description:
      'Build your profile, learn how to reach out to coaches, and run mock calls so you are completely ready when it matters.',
    tag: 'Add-on',
    isCore: false,
  },
]

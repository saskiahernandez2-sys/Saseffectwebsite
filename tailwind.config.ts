import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sas-dark':      '#0a0a0a',
        'sas-secondary': '#1a1a1a',
        'sas-green':     '#C0392B',
        'sas-white':     '#F0ECE4',
        'sas-muted':     '#666666',
        'sas-card':      '#111111',
        'sas-border':    '#2a2a2a',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Oswald', 'Impact', 'sans-serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest2': '0.2em',
      },
    },
  },
  plugins: [],
}
export default config

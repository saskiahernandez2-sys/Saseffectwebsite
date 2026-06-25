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
        'sas-dark':      '#0D0D1A',
        'sas-secondary': '#1A1A2E',
        'sas-green':     '#C8F04A',
        'sas-white':     '#F0ECE4',
        'sas-muted':     '#555566',
        'sas-card':      '#12121F',
        'sas-border':    '#1E1E30',
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

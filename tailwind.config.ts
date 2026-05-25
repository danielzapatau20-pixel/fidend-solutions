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
        'fidend-navy':      '#16243A',
        'champagne-gold':   '#B89968',
        'old-gold':         '#A88A4B',
        'parchment-cream':  '#F4ECDC',
        'dark-cream':       '#EDE3CF',
        'mid-cream':        '#E8DCC6',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        inter:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'eyebrow': ['10px', { lineHeight: '1.4', letterSpacing: '0.35em' }],
        'caption': ['12px', { lineHeight: '1.4' }],
        'body':    ['15px', { lineHeight: '1.55' }],
      },
      letterSpacing: {
        'eyebrow': '0.35em',
        'wide':    '0.15em',
      },
      lineHeight: {
        'body': '1.55',
      },
      spacing: {
        '18':  '72px',
        '22':  '88px',
        '26':  '104px',
        '30':  '120px',
      },
      maxWidth: {
        'prose-wide': '68ch',
        'site':       '1320px',
      },
      transitionDuration: {
        '240': '240ms',
      },
      transitionTimingFunction: {
        'brand': 'ease-out',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #16243A 0%, #1e3050 100%)',
      },
    },
  },
  plugins: [],
}

export default config

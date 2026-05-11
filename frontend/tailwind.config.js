/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#ececef',
          200: '#d4d4dc',
          300: '#a9a9b6',
          400: '#7e7e91',
          500: '#5a5a6c',
          600: '#3f3f4d',
          700: '#2a2a36',
          800: '#1a1a23',
          900: '#0e0e15',
          950: '#06060a',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Geist"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, var(--grid-color, rgba(0,0,0,0.06)) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color, rgba(0,0,0,0.06)) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(59,130,246,0.18), transparent 60%)',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        'glow': '0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px -20px rgba(59,130,246,0.4)',
        'card': '0 1px 0 rgba(255,255,255,0.05) inset, 0 8px 30px rgba(0,0,0,0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

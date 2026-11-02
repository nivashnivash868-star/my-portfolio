/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
          electric: '#3B82F6',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          accent: '#38BDF8',
        },
        navy: {
          950: '#070B14',
          900: '#0B1120',
          800: '#111827',
          700: '#1E293B',
        },
        slate: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          text: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(37, 99, 235, 0.15)',
        'glow-md': '0 0 25px rgba(37, 99, 235, 0.25)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.25)',
        'card': '0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 4px 6px -2px rgba(15, 23, 42, 0.025)',
        'card-hover': '0 20px 40px -10px rgba(37, 99, 235, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skybrand: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          950: '#082f49',
        },
        brand: {
          50: '#fbf8f3',
          100: '#f5eee3',
          200: '#ebdcbf',
          300: '#dec397',
          400: '#d1a871',
          500: '#c58d51', // warm gold / bronze luxury accent
          600: '#b17441',
          700: '#935835',
          800: '#79472f',
          900: '#643b2a',
          950: '#381e15',
        },
        dark: {
          900: '#0c0f14',
          850: '#111620',
          800: '#161d2a',
          700: '#212a3b',
          600: '#323e53',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

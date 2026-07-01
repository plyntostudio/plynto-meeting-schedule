/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        surface: '#131313',
        'surface-alt': '#191919',
        line: '#262626',
        muted: '#9a9a9a',
        plynto: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'plynto-gradient': 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)',
        'plynto-radial': 'radial-gradient(circle at 50% 0%, rgba(34,197,94,0.16), transparent 60%)',
      },
      clipPath: {
        cut: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
      },
    },
  },
  plugins: [],
}

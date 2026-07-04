/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C81E3A',      // now the red accent (kept key name so all gold-* classes still work)
        black: '#0B1F3A',     // now deep navy (kept key name so all bg-black/text-black classes still work)
        cream: '#F8F5F0',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 10px 30px rgba(11,31,58,0.15)',
        glass: '0 8px 32px rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        goldGradient: 'linear-gradient(135deg, #C81E3A, #E85D6A)',
      },
    },
  },
  plugins: [],
}
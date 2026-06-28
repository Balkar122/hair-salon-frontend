/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A227',
        black: '#111111',
        cream: '#F8F5F0',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 10px 30px rgba(0,0,0,0.15)',
        glass: '0 8px 32px rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        goldGradient: 'linear-gradient(135deg, #C9A227, #E5C76B)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f8f5f0',
        sand: '#e8e1d6',
        taupe: '#c2b8a3',
        mocha: '#a19483',
        moss: '#7d8c75',
        slate: '#5c6670',
        charcoal: '#3a3a3a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        handwriting: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'texture': "url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }
    },
  },
  plugins: [],
}

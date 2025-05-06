/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#39080C',
        'back-theme':'#F4F4EC',
        'highlight-from-theme':'#EFEFCD',
        'highlight-to-theme':'#F4F4EC',
        'selected-from-theme': '#e3e3a8',
        'selected-to-theme': '#EFEFCD',
        'hover-border-theme': '#A3A31A'
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}


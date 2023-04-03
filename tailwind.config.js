/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    screens: {
      header: '320px'
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
      screens:{
        '-xs':  {'max': '410px'},
      },
      colors: {
        primary: '#f97316',
        secondary: '#fed7aa'
      }
    },
  },
}
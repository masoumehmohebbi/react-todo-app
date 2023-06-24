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
    },
  },
}
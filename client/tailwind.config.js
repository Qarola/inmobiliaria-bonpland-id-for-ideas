/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
=======
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue1': '#1A3670',
        'blue2': '#003DA2',
        'blue3': '#4054B0',
        'blue4': '#E8EDFF',
        'white': '#F6F6F6',
        'red': '#CA2D2D',
        'black': '#212529',
        'greyDark': '#697077',
        'greyLigth': '#D5DAE1',
      }
    },
>>>>>>> Develop
  },
  plugins: [],
}
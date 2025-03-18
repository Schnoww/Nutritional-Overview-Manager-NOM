/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deuteranopiaBackground: '#f5f5dc',
        deuteranopiaText: '#161616',
        protanopiaBackground: '#e6f7ff',
        protanopiaText: '#00274d',
        tritanopiaBackground: '#d9d9d9',
        tritanopiaText: '#000000',
      },
    },
  },
  plugins: [],
}

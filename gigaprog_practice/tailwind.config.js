/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.tsx", "./node_modules/flowbite/dist/flowbite.min.js"],
  theme: {
    extend: {
      fontFamily: {
        'golos': ["Golos Text", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};


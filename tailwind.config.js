/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'Saira': ['Saira Condensed', 'sans-serif']
    },
    extend: {
      colors: {
        'background': '#000614',
        'secondary': '#030029',
        'blueText': '#0036AC',
        'primary': '#2E4BFF',
        'dark': '#080E1B',
        'blueText2': '#0E41F3',
        'customize': '#17284C',
        'checkout': '#1E3B79',
      },
    },
  },
  plugins: [],
}


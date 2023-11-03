/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/script.js"],
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

      animation: {
        "scaleup": "scaleup 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "scaleup-mini": "scaleup-mini 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
      },

      keyframes: {
        "scaleup": {
          from: {
            transform: "scale(1)"
          },
          to: {
            transform: "scale(1.1)"
          }
        },

        "scaleup-mini": {
          from: {
            transform: "scale(1)"
          },
          to: {
            transform: "scale(1.03)"
          }
        }
      }
    },
  },
  plugins: [],
}
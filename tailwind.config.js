// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./*.html"],
//   theme: {
//     fontFamily: {
//       'Saira': ['Saira Condensed', 'sans-serif']
//     },
//     extend: {
//       colors: {
//         'background': '#000614',
//         'secondary': '#030029',
//         'blueText': '#0036AC',
//         'primary': '#2E4BFF',
//         'dark': '#080E1B',
//         'blueText2': '#0E41F3',
//       },
//     },
//   },
//   plugins: [],
// }
// index.mjs
import { Config } from 'tailwindcss';

const config = {
  content: ["./*.html"],
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
        'blutext3':'#1E3B79',
        
     
        
      },
      boxShadow: {
        'custom': '5px 5px 5px 5px #0036AC ',
      },
    },
  },
  plugins: [],
};

export default config;

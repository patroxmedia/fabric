// module.exports = {
//   content: [
//     'layout/**/*.liquid',
//     './assets/**/*.liquid'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       height:{
//         '94': '22rem'
//       }
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

//  @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.css"
  ],
  theme: {
    extend: {
      height:{
        '94': '22rem'
      }
    },
  },
  plugins: [],
}

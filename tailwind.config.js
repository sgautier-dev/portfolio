/*init project with <npx tailwindcss init>
  build and watch with <npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch>
  init package.json with <npm init -y>
  install prettier for tailwind with <npm i -D prettier-plugin-tailwindcss>
  <npm run tailwind> for building css
  <npm run prettier> to organize tailwind elements 
*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
        'bounce-image': {
          '0%': {transform: 'scale(1)'},
          '80%': {transform: 'scale(1.2)'},
          '100%': {transform: 'scale(1)'},
        },

      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'bounce-image': 'bounce-image 0.8s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

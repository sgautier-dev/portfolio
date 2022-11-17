/*init project with <npx tailwindcss init>
  build and watch with <npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch>
  init package.json with <npm init -y>
  install prettier for tailwind with <npm i -D prettier-plugin-tailwindcss>
  <npm run tailwind> for building css
  <npm run prettier> to organize tailwind elements
  fix "Cannot find module 'tailwindcss' error" with <npm install -D tailwindcss@latest postcss@latest autoprefixer@latest>

*/
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.cust-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.cust-perspective': {
      perspective: '1000px',
    },
    '.cust-preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.cust-backface-hidden': {
      backfaceVisibility: 'hidden',
    },

  })
})

module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0369a1',
          DEFAULT: '#075985',
          lighter: '#0284c7',
        }
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'bounce-image': {
          '0%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'tilt-in-top': {
          '0%': {
            transform: 'rotateY(-35deg) rotateX(20deg) translate(250px, -250px) skew(-12deg, -15deg)',
            opacity: 0
          },
          '100%': {
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
          },
        },

      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'bounce-image': 'bounce-image 0.8s ease-in-out forwards',
        'tilt-in-top': 'tilt-in-top 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      }
    },
  },
  plugins: [Myclass,
            require('tailwindcss'),
            require('autoprefixer'),],
}

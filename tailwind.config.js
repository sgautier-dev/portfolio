/*init project with <npx tailwindcss init>
  build and watch with <npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch>
  init package.json with <npm init -y>
  install prettier for tailwind with <npm i -D prettier-plugin-tailwindcss>
*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

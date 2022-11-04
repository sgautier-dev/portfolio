/*init project with <npx tailwindcss init>
  build and watch with <npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch>
*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100vw': '100vw', // 100% vieport width
      },
      height: {
        '100vh': '100vh', // 100% vieport height
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-bg': '#080A0E',
        'brand-accent': '#FFD700', // El dorado para botones
        'brand-text': '#E2E8F0',
      }
    }
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'xl'],
    },
  },
  plugins: [],
}
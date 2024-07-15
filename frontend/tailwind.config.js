/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': 'hsl(38.97, 100%, 38.04%)',
        'gradient-end': 'hsl(30.86, 98.13%, 20.98%)',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT:  '#5e17eb',
          100: '#5515d4',
          200: '#4b12bc',
          300: '#4210a5',
          400: '#380e8d',
          500: '#2f0c76',
          600: '#26095e',
          700: '#1c0747',
          800: '#13052f',
          900: '#090217',
        }
      },
    },
  },
  plugins: [],
}

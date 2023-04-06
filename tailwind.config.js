/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        'baloo': ['Baloo Bhai 2', 'cursive'],
        'noto': ['Noto Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-black":"#181818",
        "primary-gray":"#212529",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'spotifyGreen': '#1DB954',
        'spotifyBlack': '#010100',
        'spotifyGrey': '#121212',
        'spotifyLightGrey': '#232322',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}


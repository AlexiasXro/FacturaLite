/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./**/*.html", 
    "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "haken": ['"Hanken Grotesk"', 'serif']
      },
      colors:{
        transparent: "transparent",
            current: "currentColor",
            light: colors.zinc,
            dark: colors.zinc,
            primary: colors.pink,
            complem: colors.Sky,
      },
    },
  },
  plugins: [],
}


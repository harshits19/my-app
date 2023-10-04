/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ltPrimary: "#6474E5",
        primaryHover: "#4f5fcf",
        dkPrimary: "#1d1d1d",
        ltSecondary: "#BBE1FA",
        dkSecondary: "#25212d",
        myBlack: "#343434",
        myGray: "#BDCDD6",
      },
      dropShadow: {},
      fontFamily: {
        sansReg: ["Google Sans Regular", "sans-serif"],
        sansMed: ["Google Sans Medium", "sans-serif"],
        sansBold: ["Google Sans Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}

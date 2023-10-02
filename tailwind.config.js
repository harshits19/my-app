/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ltPrimary: "#6474E5",
        dkPrimary: "#1d1d1d",
        ltSecondary: "#C3F8FF",
        dkSecondary: "#46C2CB",
        myBlack: "#343434",
        myGray: "#BDCDD6",
        myBeige: "#EEE9DA",
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

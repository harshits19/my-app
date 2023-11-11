/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ltPrimary: "#6474E5",
        dkPrimary: "#0d1321",
        primaryHover: "#4f5fcf",
        ltSecondary: "#cae9ff",
        dkSecondary: "#22223b",
        myBlack: "#343434",
        myGray: "#BDCDD6",
      },
    },
  },
  plugins: [],
}

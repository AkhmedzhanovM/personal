/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#28293E",
        secondary: "#FDF0E9",
        third: "#F9E5DA",
        suptitle: "#F07561",
        title: "#391400",
        text: "#806354",
        line: "#F3D1BF",
        icon: "#EF6D58",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
    screens: {
      ms: "0px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};
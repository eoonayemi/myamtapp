/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_primary: "#043873",
        light_primary: "#4F9CF9",
        secondary001: "#FFE492",
        secondary002: "#A7CEFC",
        my_black: "#212529",
        my_white: "#FFFFFF",
        "white-shade001": "#F5F7FA",
        "tx-color": "#a7bbd2",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        "custom-shadow":
          "3px 5px 10px 5px rgba(0, 0, 0, 0.03), -3px -5px 5px 0 rgba(0, 0, 0, 0.01)",
      },
    },
  },
  plugins: [],
};

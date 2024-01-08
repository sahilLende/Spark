/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 128, 0, 91)",
        secondary: "rgb(0, 0, 0)",
        ternary: "#FBF6EE",
        primaryAscent: "#FFB534",
        secondaryAscent: "#279EFF",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};

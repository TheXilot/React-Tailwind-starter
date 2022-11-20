/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#192a32",
        "primary-light": "#1F3640",
        secondary: "#31c3bd",
        secondary_light: "#65e9e4",
        orange: "#f2b238",
        orange_light: "#ffc860",
        "gray-bg": "#A8BFC9",
      },
    },
  },
  plugins: [],
};

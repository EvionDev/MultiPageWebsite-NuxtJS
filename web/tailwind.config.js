/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      background: "#ecf2f8",
      primary: "#1b262f",
      secondary: "#ba4270",
      header: "#566876",
      heading: "#36536b",
      neutral: "#ffffff",
    },
    extend: {
      fontFamily: {
        primary: ["Public Sans", "sans-serif"],
        secondary: ["DM Serif Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};

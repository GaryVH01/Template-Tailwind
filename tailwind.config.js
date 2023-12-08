/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./public/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2324",
        secondary: "#DF23F5",
      },
      fontSize: {
        giant: "8rem",
      },
    },
  },
  plugins: [],
};

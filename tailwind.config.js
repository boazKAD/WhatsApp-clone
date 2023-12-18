/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ['dark'],
      colors: {
        primary: "#202020",
        secondary:"#2c2c2c"
      },
    },
  },
  plugins: [],
};
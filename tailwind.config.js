/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"]
      },
      colors: {
        "vista-blue": "#7F95D1",
        "money-blue": "#455ED7",
        "oxford-green": "#314158",
        "heading-back": "#1a1625",
        "greenback": "#eef8ff  "
      },
    },
  },
  plugins: [],
}
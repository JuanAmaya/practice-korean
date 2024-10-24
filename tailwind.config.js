/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenKRN: "#A9C325",
        redKRN: "#C32525",
        brownKRN: "#4f453b",
        whiteKRN: "#eceae5"
      }
    },
  },
  plugins: [],
}


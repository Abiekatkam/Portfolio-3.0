/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bricolage-Grotesque": ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
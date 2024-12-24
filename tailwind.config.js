/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
 
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '::selection': {
          backgroundColor: '#4e7d10', // Custom selection background color
          color: '#ffffff', // Custom text color when selected
        },
      });
    },
  ],
}

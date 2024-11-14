/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:['poppins', 'sans-serif']
      },
      colors: {
        background: 'var(--bgColor)',  // CSS variable for background
        primary: 'var(--textColor)',        // CSS variable for primary color
        accent: 'var(--bgColor2)',          // CSS variable for accent color
      },
    },
  },
  plugins: [],
}

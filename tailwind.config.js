/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      'dark-blue': '#007BFF',
      'space-blue': '#2D92FF',
      'orange': '#FF5816',
      'text-orange': '#FF672B',
      'text-spaceblue': '#64AEFF',
      'offwhite': '#E5E4E2',
      'dark-bluu': '#215A97'

      /* as cores dos textos */

    },

    fontFamily: {
      'kulim': '"Kulim Park"',
      
    }

  },
  plugins: [],
}
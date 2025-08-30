/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a5b4fc', // indigo-300
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4338ca', // indigo-700
        },
        accent: {
          light: '#f472b6', // pink-400
          DEFAULT: '#ec4899', // pink-600
          dark: '#be185d', // pink-800
        },
        background: '#18181b', // zinc-900
        surface: '#27272a', // zinc-800
      },
    },
  },
  plugins: [],
};

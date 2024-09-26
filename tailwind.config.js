/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'h-laptop': { 'raw': '(min-width: 640px),(min-height: 640px)' },
        'h-phone': { 'raw': '(min-height: 640px)' },
        'h-biggest': { 'raw': '(min-height: 850px)' },
      },
    },
  },
  plugins: [],
}


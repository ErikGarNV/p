/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        cyan: '#00FFFF',
        violet: '#8A2BE2',
        graphite: '#2F2F2F',
        organicBlack: '#0A0A0A',
      },
      fontFamily: {
        'monument': ['Monument Extended', 'sans-serif'],
        'neue-montreal': ['Neue Montreal', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
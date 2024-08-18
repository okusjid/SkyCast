/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rain-bg': "url('/Rain.jpg')", // Adding the Rain background
        'fallback-bg': "url('/Cloud.png')", // Adding the Cloud background
      },
    },
  },
  plugins: [],
}

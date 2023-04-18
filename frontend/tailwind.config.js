/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'register': "url('assets/register.jpg')",
        'login' : "url('assets/login.jpg')"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        register: "url('assets/register.jpg')",
        login: "url('assets/login.jpg')",
        amount: "url('assets/plate.png')",
        user: "url('assets/bowl.png')"
      },
      screens: {
        xl: { min: "1280px", max: "1919px" },
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};

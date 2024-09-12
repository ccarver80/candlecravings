/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        candle:
          "url('/src/Components/Pages/static/imgs/candleBackgroundSM.jpg')",
      },
    },
  },
  plugins: [],
};

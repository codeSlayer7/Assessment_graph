/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

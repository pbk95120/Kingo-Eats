/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        withe: "#ffffff",
        black: "#111111",
        darkgray: "#3e3e3e",
        lightgray: "#b8b8b8",
        textdark: "#2f2e36",
        textgray: "#b8b8b8",
        backgroundgray: "#f6f6f6",
        green: "#4caf50",
        lightgreen: "#eaf5e7",
        gold: "#e48700",
      },
      height: {
        148: "37rem",
        812: "50.75rem",
      },
    },
  },
  plugins: [],
};

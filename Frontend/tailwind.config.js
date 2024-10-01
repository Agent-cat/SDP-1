/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "900px",
        sxl: "1100px",
        mlg: "1225px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

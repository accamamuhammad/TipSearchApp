/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBG: "#F5F5F9",
        filterBg: "#F7F7F7",
        formStroke: "#BAB6B6",
        python: "#F8D6E2",
        javascript: "#D1E9F6",
        java: "#E1D5FC",
        c: "#D0F0C0",
        ruby: "#C5D1FA",
        go: "#FDFD95",
      },
      fontFamily: {
        sgLight: ["SP-light", "mono"],
        sgRegular: ["SP-Regular", "mono"],
        sgMedium: ["SP-medium", "mono"],
        sgBold: ["SP-bold", "mono"],
      },
    },
  },
  plugins: [],
};

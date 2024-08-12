/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBG: "#F5F5F9",
        filterBg: "#F7F7F7",
        formStroke: "#BAB6B6",
        pythonBG: "#F8D6E2",
        javaScriptBG: "#D1E9F6",
        javaBG: "#E1D5FC",
        cPlusPlus: "#D0F0C0",
        rubyBG: "#C5D1FA",
        GoBG: "#FDFD95",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBG: "#F5F5F9",
        filterBg: "#F7F7F7",
        formStroke: "#BAB6B6",
        Python: "#F8D6E2",
        JavaScript: "#D1E9F6",
        Java: "#E1D5FC",
        "C++": "#D0F0C0",
        Ruby: "#C5D1FA",
        Go: "#FDFD95",
      },
      fontFamily: {
        sgLight: ["SP-light", "mono"],
        sgRegular: ["SP-Regular", "mono"],
        sgMedium: ["SP-medium", "mono"],
        sgBold: ["SP-bold", "mono"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

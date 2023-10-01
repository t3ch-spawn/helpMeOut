/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        sora: "Sora",
        workSans: "Work Sans",
      },

      colors: {
        greyTxt: "#616163",
        DarkblueTxt: "#1B233D",
        mainBlue: "#120B48",
        heroPara: "rgba(0, 0, 0, 0.75)",
        overlay: 'rgb(0, 0, 0, 0.8)',
      },

      screens: {
        "-1250": { max: "1250px" },
        "-1000": { max: "1000px" },
        "-900": { max: "900px" },
        "-850": { max: "850px" },
        "-700": { max: "700px" },
        "-500": { max: "500px" },
        "-350": { max: "350px" },
      },
    },
  },
  plugins: [],
};

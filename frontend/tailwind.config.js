/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "768px" },
      lg: { max: "1024px" },
      xl: { min: "769px" },
      tl: { min: "1025px" },
    },
    extend: {
      backgroundImage: {
        heroPattern: "url(assets/images/Hero.jpg)",
        ourCafePattern:
          "linear-gradient(90deg, rgba(64,60,59,1) 0%, rgba(0,0,0,0.005) 100%), url('assets/images/aboutUs.jpg')",
      },
    },
    colors: {
      primary: "#403c3b",
      secondary: "#628b68",
      text: "#FFFFFF",
      textSecondary: "#CFCFCF",
      searchColor: "#504B4A",
    },
    fontFamily: {
      GilroyRegular: ["GilroyRegular", "sans-serif"],
      GilroyMedium: ["GilroyMedium", "sans-serif"],
      GilroySemibold: ["GilroySemibold", "sans-serif"],
      ProximaBold: ["ProximaBold", "sans-serif"],
    },
    backgroundImage: {
      heroPattern: "",
    },
  },
  plugins: [],
};

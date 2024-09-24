import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        firstSectionBg: "#fdf7f1",
        navBtnBg: "#b9e1d7",
        btnHover: "#ee6451",
      },
      fontFamily: {
        formularBlack: "var(--formular-black)",
        formularItalic: "var(--formular-italic)",
        formularLight: "var(--formular-light)",
        formularLightItalic: "var(--formular-light-italic)",
        formularMedium: "var(--formular-medium)",
        mdi: "var(--mdi)",
        formularThin: "var(--formular-thin)",
        formular: "var(--formular)",
      },
    },
  },
  plugins: [],
};
export default config;

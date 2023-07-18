/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class", "data-theme='dark'"],
  content: [
    "./src/client/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    screens: {
      xs: "360px",
      // => @media (min-width: 360px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-gradient": `linear-gradient(180deg, rgba(138, 66, 255, 0.24) 34.88%, rgba(19, 18, 21, 0) 100%),
            linear-gradient(180deg, rgba(151, 71, 255, 0) 50%, rgba(19, 18, 21, 0) 50%, #131215 100%, #131215 100%)
          `,
        "linear-01": "linear-gradient(340deg, rgba(169, 83, 255, 0.08) 0%, rgba(96, 72, 255, 0.08) 100%)"
      },
      animation: {
        "expand-wide": "wide 2s linear infinite",
      },
      keyframes: {
        wide: {
          "0%": {
            opacity: "0.85",
          },
          "100%": { opacity: "0.12", transform: "scale(1000)" },
        },
      },
    },
    colors: {
      ...colors,
      "main-bg": "rgba(19, 18, 21, 1)",
      "trans-004": "rgba(19, 18, 21, 0.04)",
      "default-black": "rgba(19, 18, 21, 1)",
      "active-01": "#618DFF",
      "button-text": "rgba(19, 18, 21, 1)",
      "hyphen": "#6048FF",
      "graphic-001": "#A953FF"
    },
  },
  plugins: [],
};

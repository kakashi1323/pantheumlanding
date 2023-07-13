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
      },
      animation: {
        "expand-wide": "wide 2s linear infinite",
        zoom: "zoom 500ms linear infinite",
        star: "star 1200ms linear infinite",
        star2: "star2 1100ms linear infinite",
        star3: "star3 1300ms linear infinite",
        "indicator-change": "indicator_change 250ms ease-in-out"
      },
      keyframes: {
        wide: {
          "0%": {
            opacity: "0.85",
          },
          "100%": { opacity: "0.12", transform: "scale(1000)" },
        },
        zoom: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        star: {
          "50%": {
            transform: "scale(1.08)",
          },
          "70%": {
            transform: "translate(1px, 1px)",
          },
        },

        star2: {
          "30%": {
            transform: "scale(1.08)",
          },
          "80%": {
            transform: "translate(1px, 1px)",
          },
        },

        star3: {
          "25%": {
            transform: "scale(1.08)",
          },
          "65%": {
            transform: "translate(1px, 1px)",
          },
        },
        indicator_change: {
          "0%": {
            opacity: 0.12,
            transform: "translateX(-50%)",
          },
          "100%": {
            height: "100%",
          },
        },
        expand: {
          "0%": {
            height: 0,
          },
          "100%": {
            height: "100%",
          },
        },
      },
    },
    colors: {
      ...colors,
      "black-03": "rgba(0,0,0, 0.3)",
      "black-05": "rgba(0,0,0, 0.5)",
      "black-07": "rgba(0,0,0, 0.7)",
      "black-09": "rgba(0,0,0, 0.9)",
      "white-03": "rgba(255,255,255, 0.3)",
      "white-05": "rgba(255,255,255, 0.5)",
      "white-07": "rgba(255,255,255, 0.7)",
      "white-09": "rgba(255,255,255, 0.9)",
      "main-01": "#040D27",
    },
  },
  plugins: [],
};

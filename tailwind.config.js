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
      },
      animation: {
        "expand-wide": "wide 2s linear infinite",
        zoom: "zoom 500ms linear infinite",
        star: "star 1200ms linear infinite",
        star2: "star2 1100ms linear infinite",
        star3: "star3 1300ms linear infinite",
        menu: "menu_appear 350ms ease-in-out",
        down: "down 350ms ease-in-out",
        appear: "appear 350ms ease-in-out",
        "icon-appear": "icon_appear 400ms ease-in-out",
        "indicator-change": "indicator_change 250ms ease-in-out"
      },
      keyframes: {
        down: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0.225
          },
          "100%": {},
        },
        appear: {
          "0%": {
            opacity: 0.225,
            transform: "rotateX(90deg) translateY(50%)"
          },
          "100%": {},
        },
        icon_appear: {
          "0%": {
            transform: "translateX(25%) translateY(100%) scale(0.2)",
            opacity: 0.125
          },
          "100%": {},
        },
        menu_appear: {
          "0%": {
            transform: "translateX(100%)"
          },
          "100%": {},
        },
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
      "active": "#618DFF",
      "sub": "#8593C5",
      "card-01": "#111932",
      "card-02": "#07112F",
      "card-03": "rgba(44, 57, 97, 0.10)",
      "fill-01": "rgba(17, 29, 69, 0.40)",
      "fill-02": "#111D45",
      "b-01": "#25335C",
      "blurry": "rgba(0,0,0, 0.6)"
    },
  },
  plugins: [],
};

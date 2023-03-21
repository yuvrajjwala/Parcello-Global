/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      dm: ["DM Sans"],
    },
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      maxWidth: {
        "custom-xs": "94px",
        "custom-s": "250px",
      },
      maxHeight: {
        "custom-xs": "94px",
        "custom-s": "48px",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      skew: {
        180: "180deg",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      minlg: { min: "1023px" },

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};

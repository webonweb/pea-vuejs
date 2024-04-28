/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    screens: {
      sm: "40rem",
      smm: "56.25",
      md: "71rem",
      lg: "80rem",
      xl: "96rem",
      "2xl": "120rem",
    },
    letterSpacing: {
      none: "0",
      medium: "0.03em",
      moderate: "0.04em",
      prewidest: "0.08em",
    },
    colors: {
      transparent: "transparent",
      surface: {
        white: "#FFFFFF",
        600: "#111827",
        black: "#000000",
      },
      primary: {},
      secondary: {},
    },
    lineHeight: {
      initial: "initial",
      none: "1rem",
      tighter: "1.2rem",
      tight: "1.25rem",
      snug: "1.375rem",
      normal: "1.5rem",
      relaxed: "1.75rem",
      loose: "2rem",
      wide: "2.4rem",
    },
    extend: {
      fontFamily: {
        poppins: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        surface: {},
      },
    },
  },
  corePlugins: {
    container: false,
  },
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "nuxt.config.{js,ts}",
  ],
  plugins: [],
};

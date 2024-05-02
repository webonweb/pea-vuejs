/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    screens: {
      sm: "40rem",
      smm: "56.25rem",
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
      primary: {
        100: "#d5e47c",
        200: "#6c7c36",
      },
      surface: {
        white: "#FFFFFF",
        300: "#d9e6eb",
        400: "#d9e6eb",
        500: "#161f32",
        600: "#111827",
        black: "#000000",
      },
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
    "src/components/**/*.{vue,js,ts}",
    "src/layouts/**/*.vue",
    "src/pages/**/*.vue",
    "nuxt.config.{js,ts}",
  ],
  plugins: [],
};

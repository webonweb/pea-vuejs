module.exports = {
  theme: {
    screens: {
      sm: "40rem",
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
        100: "rgb(var(--primary-100) / <alpha-value>)",
        200: "rgb(var(--primary-200) / <alpha-value>)",
      },
      surface: {
        white: "rgb(var(--surface-white) / <alpha-value>)",
        100: "rgb(var(--surface-100) / <alpha-value>)",
        200: "rgb(var(--surface-200) / <alpha-value>)",
        300: "rgb(var(--surface-300) / <alpha-value>)",
        400: "rgb(var(--surface-400) / <alpha-value>)",
        500: "rgb(var(--surface-500) / <alpha-value>)",
        black: "rgb(var(--surface-black) / <alpha-value>)",
      },
      secondary: {
        100: "rgb(var(--secondary-100) / <alpha-value>)",
      },
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
    extend: {},
  },
  content: ["./.vitepress/**/*.{js,ts,vue}", "./**/*.md"],
};

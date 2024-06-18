/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{vue,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pea-surface-white": "#FFFFFF",
        "pea-surface-black": "#000000",

        "pea-primary-100": "#d5e47c",
        "pea-primary-200": "#6c7c36",

        "pea-default-100": "#909399",
        "pea-success-100": "#67c23a",
        "pea-error-100": "#f56c6c",
        "pea-info-100": "#3ca1e6",
        "pea-warning-100": "#e6a23c",
      },
    },
  },
  plugins: [],
};

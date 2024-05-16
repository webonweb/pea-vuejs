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
      },
    },
  },
  plugins: [],
};

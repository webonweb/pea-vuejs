/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{vue,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pea: {
          surface: {
            white: "#FFFFFF",
            black: "#000000",
          },
          primary: {
            100: "#8e44ad",
          },
          secondary: {
            100: "#10ac84",
          },
          default: {
            100: "#909399",
          },
          success: {
            100: "#67c23a",
          },
          error: {
            100: "#f56c6c",
          },
          info: {
            100: "#3ca1e6",
          },
          warning: {
            100: "#e6a23c",
          },
        },
      },
    },
  },
  plugins: [],
};

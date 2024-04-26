/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    ".vitepress/**/*.{js,ts,vue}",
    "./docs/**/*.md",
    "./components/**/*.{vue,js}",
  ],
  theme: {
    extend: {},
  },
};

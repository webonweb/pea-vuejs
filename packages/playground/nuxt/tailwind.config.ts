/** @type {import('tailwindcss').Config} */

import { PeaTheme } from "pea-vuejs";
module.exports = {
  content: [
    "app.vue",
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        ...PeaTheme,
        'pea-primary-100': '#565656'
      }
    },
  },
  plugins: [],
};

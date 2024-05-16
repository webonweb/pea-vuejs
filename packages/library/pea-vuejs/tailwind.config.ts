/** @type {import('tailwindcss').Config} */
import { PeaTheme } from "./src/index";

export default {
  content: ['./src/**/*.{vue,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...PeaTheme
      }
    },
  },
  plugins: [],
}


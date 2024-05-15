/** @type {import('tailwindcss').Config} */
import { PeaTheme } from "pea-vuejs";


export default {
  content: ['./src/**/*.{vue,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...PeaTheme
      }
    }
  }
}

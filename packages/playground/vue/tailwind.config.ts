/** @type {import('tailwindcss').Config} */
import { PeaTheme } from "pea-vuejs";

export default {
  content: ['./src/**/*.{vue,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          white: '#FFFFFF',
          100: '#d4d4d4',
          200: '#d9e6eb',
          300: '#161f32',
          400: '#111827',
          500: '#0d121b',
          black: '#000000'
        },
        primary: {
          100: '#d5e47c',
          200: '#6c7c36',
        },
        secondary: {
          100: '# #2b354b'
        },
        ...PeaTheme
      }
    }
  }
}

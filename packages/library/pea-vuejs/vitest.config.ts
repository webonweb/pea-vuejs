import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  plugins: [Vue(), svgLoader({
    defaultImport: "url",
  }),],
  resolve: {
    alias: {
      '@': r('./src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['**/node_modules/**'],
    include: ['./**/*.spec.{ts,js}'],
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
})
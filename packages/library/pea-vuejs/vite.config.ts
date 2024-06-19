import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const projectRootDir = resolve(__dirname)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**', 'src/**/story/**', 'src/**/*.story.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
      '@/headless': resolve(projectRootDir, 'src/headless'),
      '@/assets': resolve(projectRootDir, 'src/assets/*')
    },
  },
  build: {
    lib: {
      name: 'pea-vuejs',
      fileName: (format, name) => {
        return `${name}.${format === 'es' ? 'js' : 'umd.cjs'}`
      },
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        headless: resolve(__dirname, 'src/headless.ts'),
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          'vue': 'Vue',
        },
      },
    },
  },
})
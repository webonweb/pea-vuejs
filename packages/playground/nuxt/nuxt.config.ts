// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  appDir: '/src',
  modules: [
    'nuxt-primevue'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css']
})

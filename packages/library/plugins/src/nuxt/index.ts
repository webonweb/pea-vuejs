import { defineNuxtModule } from '@nuxt/kit'


export interface ModulePrivateRuntimeConfig { }

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@pea-vuejs/nuxt',
    configKey: 'pea-vuejs',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  async setup() { }
})

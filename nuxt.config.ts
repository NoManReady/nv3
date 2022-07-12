import { defineNuxtConfig } from 'nuxt'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
const lifecycle = process.env.npm_lifecycle_event
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  tailwindcss: {
    // cssPath: '~/assets/css/tailwind.css',
    // configPath: 'tailwind.config.js',
    // exposeConfig: false,
    // config: {},
    // injectPosition: 0,
    // viewer: true,
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // build
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : [],
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.ts')],
      }),
    ],
  },
  alias: {
    'vue-i18n':
      process.env.NODE_ENV === 'production'
        ? 'vue-i18n/dist/vue-i18n.cjs.prod.js'
        : 'vue-i18n/dist/vue-i18n.cjs.js',
  },
})

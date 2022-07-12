import { defineNuxtPlugin } from '#app'
import mitt from 'mitt'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.eventBus = mitt()
})

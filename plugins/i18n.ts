import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'
import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'

import useConfig from '~/store/useConfig'

export default defineNuxtPlugin((nuxtApp) => {
  const langFile = import.meta.globEager('../locales/*.ts')
  const messages = Object.keys(langFile).reduce((msg, path) => {
    const langKey = path.replace(/\.\.\/locales\/|\.ts/g, '')
    msg[langKey] = langFile[path].default
    return msg
  }, {})
  const config = useConfig()
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: config.lang.defaultLang,
    messages,
  })
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })
  nuxtApp.vueApp.use(i18n)
  nuxtApp.vueApp.use(ElementPlus, { i18n: i18n.global.t })
  watch(i18n.global.locale, (locale) => {
    config.setLang(locale)
  })
})

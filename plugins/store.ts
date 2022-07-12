// import { createPinia } from 'pinia'
import useAuth from '~/store/useAuth'
import useConfig from '~/store/useConfig'

const storeMap = {
  auth: useAuth,
  config: useConfig,
}

type TKeyForMap<T extends Record<string, any>, K = keyof T> = K

type TStoreType = typeof storeMap

export default defineNuxtPlugin((nuxtApp) => {
  // const pinia = createPinia()
  // nuxtApp.vueApp.use(pinia)
  return {
    provide: {
      useStore: (key: TKeyForMap<TStoreType>) => {
        return storeMap[key]()
      },
    },
  }
})

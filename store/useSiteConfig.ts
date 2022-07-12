import { defineStore } from 'pinia'
import { ISiteConfig } from './types/siteConfig'
const store = defineStore('siteConfig', {
  state: (): ISiteConfig => {
    return {
      siteName: 'BSX 10',
      version: 'v0.0.0.1001',
    }
  },
})

export default store

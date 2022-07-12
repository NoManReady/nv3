import { defineNuxtPlugin } from '#app'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })
  nuxtApp.$router.afterEach(() => {
    NProgress.done()
  })
})

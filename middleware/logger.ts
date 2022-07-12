export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Local logger middleware:', from.fullPath, '---->', to.fullPath)
  return from.query.flag !== '1'
})

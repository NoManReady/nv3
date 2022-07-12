import useAuth from '~~/store/useAuth'
export default defineNuxtRouteMiddleware(() => {
  const user = useAuth()
  if (!user.userInfo) {
    navigateTo('/')
  }
})

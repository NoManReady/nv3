export default defineNuxtPlugin(() => {
  return {
    provide: {
      logger: (...a) => {
        console.log(a)
      },
    },
  }
})

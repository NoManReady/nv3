let count = 0

export const getCount = () => {
  return JSON.stringify(count)
}

export default defineEventHandler((event) => {
  return JSON.stringify(count)
})

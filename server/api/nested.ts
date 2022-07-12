import { createRouter } from 'h3'

const router = createRouter()

router.use('/test',(a) => a.query())

export default router

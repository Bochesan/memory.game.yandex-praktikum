import { Router } from 'express'
import { getTopics, createTopic } from '../controllers/topicController'

const router = Router()

router.get('/topics', getTopics)
router.post('/topics', createTopic)

export default router

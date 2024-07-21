import { Router } from 'express'
import TopicController from '../controllers/topicController'

const router = Router()

router.get('/topics', TopicController.getTopics)
router.get('/topics/:id', TopicController.getTopic)
router.post('/topics', TopicController.createTopic)

export default router

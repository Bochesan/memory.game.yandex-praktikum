import { Router } from 'express'
import { getReplies, createReply } from '../controllers/replyController'

const router = Router()

router.get('/topics', getReplies)
router.post('/topics', createReply)

export default router

import { Router } from 'express'
import ReplyController from '../controllers/replyController'

const router = Router()

router.get('/reply', ReplyController.getReplies)
router.post('/reply', ReplyController.createReply)

export default router

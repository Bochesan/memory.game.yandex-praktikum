import { Router } from 'express'
import CommentController from '../controllers/commentController'

const router = Router()

router.get('/comments', CommentController.getComments)
router.post('/comments', CommentController.createComment)

export default router

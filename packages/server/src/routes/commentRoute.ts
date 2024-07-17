import { Router } from 'express'
import { getComments, createComments } from '../controllers/CommentController'

const router = Router()

router.get('/comments', getComments)
router.post('/comments', createComments)

export default router

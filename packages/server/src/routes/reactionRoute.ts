import { Router } from 'express'
import ReactionController from '../controllers/reactionController'

const router = Router()

router.get('/reactions', ReactionController.getReactions)
router.post('/reaction', ReactionController.createReaction)

export default router

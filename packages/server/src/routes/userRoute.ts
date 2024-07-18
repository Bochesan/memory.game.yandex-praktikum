import { Router } from 'express'
import UserController from '../controllers/userController'

const router = Router()

router.get('/users', UserController.getUser)
router.post('/users', UserController.createUser)

export default router

import { Router } from 'express'
import ThemeController from '../controllers/themeController'

const router = Router()

router.get('/theme', ThemeController.getTheme)
router.post('/theme', ThemeController.createTheme)
router.put('/theme', ThemeController.updateTheme)

export default router

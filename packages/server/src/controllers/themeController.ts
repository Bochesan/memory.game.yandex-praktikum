import { Request, Response } from 'express'
import { Authorize } from '../decorators/auth'
import { createTheme, getTheme, updateTheme } from '../services/themeService'

class ThemeController {
  @Authorize
  public async getTheme(req: Request, res: Response): Promise<void> {
    try {
      const { user_id } = req.body as unknown as { user_id: number }
      const themeType = await getTheme({ user_id })

      res.status(200).json(themeType)
    } catch (error) {
      res.status(500).json({ error: 'При получении тем произошла ошибка.' })
    }
  }

  @Authorize
  public async createTheme(req: Request, res: Response): Promise<void> {
    try {
      const newTheme = await createTheme({
        user_id: +req.body.user_id,
        theme: req.body.theme,
      })

      res.status(201).json(newTheme)
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При создании темы произошла ошибка:' + error })
    }
  }

  @Authorize
  public async updateTheme(req: Request, res: Response): Promise<void> {
    try {
      const user_id = parseInt(req.body.user_id)

      await updateTheme({ theme: req.body.theme, user_id })

      res.status(204).json({ status: 'success' })
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При обновлении темы произошла ошибка:' + error })
    }
  }
}

export default new ThemeController()

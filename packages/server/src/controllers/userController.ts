import { Request, Response } from 'express'
import {
  getUser as getUserService,
  createUser as createUserService,
} from '../services/userService'
import { generateToken } from '../../utils/jwt'

class UserController {
  public async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { login } = req.query as { login: string }
      const user = await getUserService({ login })
      if (user) {
        // Сохранение токена пользователя в куке
        const token = generateToken(user.id)
        res.cookie('token', token, { httpOnly: true, secure: false }) // secure: true, если HTTPS

        res.status(200).json(user)
      } else {
        res.status(200).json({ error: 'Пользователь не найден' })
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При получении пользователя произошла ошибка:' + error })
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { login, first_name, second_name, display_name } = req.body
      const user = await createUserService({
        login,
        first_name,
        second_name,
        display_name,
      })
      res.status(201).json(user)
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При создании пользователя произошла ошибка:' + error })
    }
  }
}

export default new UserController()

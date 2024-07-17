import { Request, Response } from 'express'
import {
  getUser as getUserService,
  createUser as createUserService,
} from '../services/userService'

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { login } = req.query as { login: string }
    const user = await getUserService({ login })
    if (user) {
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

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
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

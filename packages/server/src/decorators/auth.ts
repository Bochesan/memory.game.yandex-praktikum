import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../../utils/jwt'

export function Authorize(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизован!' })
    }

    try {
      verifyToken(token)
    } catch (err) {
      return res.status(401).json({ message: 'Пользователь не авторизован!' })
    }

    return originalMethod.apply(this, [req, res, next])
  }

  return descriptor
}

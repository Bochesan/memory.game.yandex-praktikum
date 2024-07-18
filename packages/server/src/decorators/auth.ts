import { Request, Response, NextFunction } from 'express'

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
    // TODO - здесь будет реализация PSS-68, middleware, которая проверяет, авторизован ли пользователь
    console.log('Middleware auth')
    const authHeader = true
    if (!authHeader) {
      return res.status(401).json({ message: 'Пользователь не авторизован!' })
    }

    return originalMethod.apply(this, [req, res, next])
  }

  return descriptor
}

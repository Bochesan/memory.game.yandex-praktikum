import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'memory_game_jwt_key'

export const generateToken = (userId: string | number) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '12h' })
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY)
}

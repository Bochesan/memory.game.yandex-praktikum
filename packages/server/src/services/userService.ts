import { User } from '../../models/user'

interface GetUserDTO {
  login: string
}

interface CreateUserDTO {
  login: string
  first_name: string
  second_name: string
  display_name: string
}

export const getUser = async (data: GetUserDTO): Promise<User> => {
  const { login } = data
  const user = await User.findOne({
    where: {
      login: login,
    },
  })
  return user as User
}

export const createUser = async (data: CreateUserDTO): Promise<User> => {
  const { login, first_name, second_name, display_name } = data
  const user = await User.create({
    login,
    first_name,
    second_name,
    display_name,
  })
  return user
}

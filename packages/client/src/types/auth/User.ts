export type TUser = {
  id: number
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
  avatar: string
  display_name: string
}

export type TGetUserInternal = {
  login: string
}

export type TAddUserInternal = {
  first_name: string
  second_name: string
  login: string
  display_name: string
}

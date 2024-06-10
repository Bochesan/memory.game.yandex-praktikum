import { useGetUserQuery } from '@/shared'
import { RESOURCES } from '@/utils'

export function useAuth() {
  const { data, error } = useGetUserQuery('')
  if (error || !data) {
    return {
      isAuth: false,
      id: null,
      first_name: null,
      second_name: null,
      display_name: null,
      login: null,
      avatar: null,
      email: null,
      phone: null,
    }
  } else {
    return {
      isAuth: true,
      id: data.id,
      first_name: data.first_name,
      second_name: data.second_name,
      display_name: data.display_name || `user#${data.id}`,
      login: data.login,
      avatar: data.avatar ? `${RESOURCES.Images}${data.avatar}` : null,
      email: data.email,
      phone: data.phone,
    }
  }
}

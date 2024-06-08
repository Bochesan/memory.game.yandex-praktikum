import { useGetUserQuery } from '@/shared'

export function useAuth() {
  const { data, error } = useGetUserQuery('')

  if (error) {
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
      id: data?.id,
      first_name: data?.first_name,
      second_name: data?.second_name,
      display_name: data?.display_name,
      login: data?.login,
      avatar: data?.avatar || `user#${data?.id}`,
      email: data?.email,
      phone: data?.phone,
    }
  }
}

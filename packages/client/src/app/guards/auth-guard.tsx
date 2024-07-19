import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useOAuth } from '@/shared/hooks/useOAuth'
import {
  useGetUserQuery,
  useGetUserInternalQuery,
  useAddUserInternalMutation,
} from '@/shared/slices/api-slices'
import { Spinner } from '@/shared/components/spinner/spinner'
import { TAddUserInternal } from '@/types'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, isSuccess } = useGetUserQuery()
  const [addUserInternal] = useAddUserInternalMutation()
  const location = useLocation()
  const navigate = useNavigate()
  const login = data?.login || ''
  const AUTH_ROUTES = ['/sign-in', '/sign-up']
  const UNAUTH_ROUTES = ['/', '/sign-in', '/sign-up']

  useOAuth()

  const { data: internalData } = useGetUserInternalQuery(
    { login },
    { skip: !isSuccess }
  )

  useEffect(() => {
    if (isSuccess) {
      if (AUTH_ROUTES.includes(location.pathname)) {
        navigate('/')
      }

      const internalLogin = internalData?.login
      if (typeof internalData !== 'undefined' && login !== internalLogin) {
        const userInternal: TAddUserInternal = {
          first_name: data.first_name,
          second_name: data.second_name,
          login: data.login,
          display_name: data.display_name,
        }
        addUserInternal(userInternal)
      }
    }

    if (isError) {
      if (!UNAUTH_ROUTES.includes(location.pathname)) {
        navigate('/sign-in')
      }
    }
  }, [data, internalData, location.pathname])

  if (isLoading) {
    return <Spinner />
  }
  return <>{children}</>
}

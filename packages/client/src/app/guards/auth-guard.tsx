import { useLocation, useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import { useOAuth } from '@/shared/hooks/useOAuth'
import { useGetUserQuery } from '@/shared/slices/api-slices'
import { Spinner } from '@/shared/components/spinner/spinner'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, isSuccess } = useGetUserQuery()
  const location = useLocation()
  const navigate = useNavigate()
  const AUTH_ROUTES = ['/sign-in', '/sign-up']
  const UNAUTH_ROUTES = ['/', '/sign-in', '/sign-up']

  useOAuth()

  useEffect(() => {
    if (isSuccess) {
      if (AUTH_ROUTES.includes(location.pathname)) {
        navigate('/')
      }
    }

    if (isError) {
      if (!UNAUTH_ROUTES.includes(location.pathname)) {
        navigate('/sign-in')
      }
    }
  }, [data, location.pathname])

  if (isLoading) {
    return <Spinner />
  }
  return <>{children}</>
}

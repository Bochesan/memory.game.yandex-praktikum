import { useLocation, useNavigate } from 'react-router-dom'
import { Spinner, useGetUserQuery } from '@/shared'
import { useEffect } from 'react'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, isSuccess } = useGetUserQuery()
  const location = useLocation()
  const navigate = useNavigate()
  const AUTH_ROUTES = ['/sign-in', '/sign-up']
  const UNAUTH_ROUTES = ['/', '/sign-in', '/sign-up']

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

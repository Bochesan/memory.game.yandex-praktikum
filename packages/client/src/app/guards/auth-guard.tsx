import React, { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/shared/hooks'

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      if (
        location.pathname === '/sign-in' ||
        location.pathname === '/sign-up'
      ) {
        navigate('/')
      }
    } else {
      if (
        !(
          location.pathname === '/' ||
          location.pathname === '/sign-in' ||
          location.pathname === '/sign-up'
        )
      ) {
        navigate('/sign-in')
      }
    }
  }, [isAuth, location.pathname, navigate])

  return <>{children}</>
}

import { useEffect } from 'react'

import { OAUTH } from '@/utils'
import { useGetUserQuery, useSignInOAuthMutation } from '@/shared'

export const useOAuth = (): void => {
  const [signInOAuth] = useSignInOAuthMutation()
  const { currentData } = useGetUserQuery()

  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  useEffect(() => {
    if (!currentData && code) {
      signInOAuth({ code, redirect_uri: OAUTH.Redirect })
    }
  }, [])
}

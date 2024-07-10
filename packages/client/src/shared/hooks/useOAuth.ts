import { useEffect } from 'react'

import { OAUTH } from '@/utils'
import { useGetUserQuery, useSignInOAuthMutation } from '@/shared'
import { isBrowser } from '@/shared/utils/entry-server'

export const useOAuth = (): void => {
  const [signInOAuth] = useSignInOAuthMutation()
  const { currentData } = useGetUserQuery()

  if (isBrowser) {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    useEffect(() => {
      if (!currentData && code) {
        signInOAuth({ code, redirect_uri: OAUTH.Redirect }).then(() => {
          // Очистка query параметров после успешной аутентификации
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          )
        })
      }
    }, [])
  }
}

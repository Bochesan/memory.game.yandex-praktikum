import React from 'react'
import { LinkText, useGetServiceIdQuery } from '@/shared'
import { OAUTH } from '@/utils'

export const Oauth = () => {
  const { data } = useGetServiceIdQuery()

  const handleSignInOAuth = async () => {
    document.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${data?.service_id}&redirect_uri=${OAUTH.Redirect}`
  }
  return <LinkText onClick={handleSignInOAuth}>Войти с помощью Yandex</LinkText>
}

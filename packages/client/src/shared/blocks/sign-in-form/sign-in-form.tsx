import React from 'react'
import { Form, useSignInMutation } from '@/shared'

import { ICONS } from '@/shared/constants/icons'

export const SignInForm = () => {
  const fields = [
    {
      label: 'Логин',
      icon: ICONS.Magic,
      type: 'text',
      error: null,
      value: '',
      name: 'login',
      validation: ['required'],
    },
    {
      label: 'Пароль',
      icon: ICONS.Strength,
      type: 'password',
      error: null,
      value: '',
      name: 'password',
      validation: ['required'],
    },
  ]

  const [signIn] = useSignInMutation()
  return <Form fields={fields} submitText={'Войти'} callback={signIn} />
}

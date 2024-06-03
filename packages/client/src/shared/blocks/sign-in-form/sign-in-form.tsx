import React from 'react'
import { Form } from '@/shared'

import { ICONS } from '@/shared/constants/icons'

export const SignInForm = () => {
  const fields = [
    {
      label: 'Email',
      icon: ICONS.Magic,
      type: 'email',
      error: null,
      value: '',
      name: 'email',
    },
    {
      label: 'Пароль',
      icon: ICONS.Strength,
      type: 'password',
      error: null,
      value: '',
      name: 'password',
    },
  ]
  return <Form fields={fields} submitText={'Войти'} />
}

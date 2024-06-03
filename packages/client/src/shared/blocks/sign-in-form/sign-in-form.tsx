import React from 'react'
import { Form } from '@/shared'

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
  return <Form fields={fields} submitText={'Войти'} />
}

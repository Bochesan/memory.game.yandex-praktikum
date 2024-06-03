import React from 'react'
import { Form } from '@/shared'

import IconMagic from '@/assets/images/icons/magic.svg'
import IconStrength from '@/assets/images/icons/strength.svg'

export const SignInForm = () => {
  const fields = [
    {
      label: 'Логин',
      icon: IconMagic,
      type: 'text',
      error: null,
      value: '',
      name: 'login',
      validation: ['required'],
    },
    {
      label: 'Пароль',
      icon: IconStrength,
      type: 'password',
      error: null,
      value: '',
      name: 'password',
      validation: ['required'],
    },
  ]
  return <Form fields={fields} submitText={'Войти'} />
}

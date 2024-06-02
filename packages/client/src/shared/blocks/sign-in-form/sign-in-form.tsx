import React from 'react'
import { Form } from '@/shared'

import IconMagic from '@/assets/images/icons/magic.svg'
import IconStrength from '@/assets/images/icons/strength.svg'

export const SignInForm = () => {
  const fields = [
    {
      label: 'Email',
      icon: IconMagic,
      type: 'email',
      error: null,
      value: '',
      name: 'EMAIL',
    },
    {
      label: 'Пароль',
      icon: IconStrength,
      type: 'password',
      error: null,
      value: '',
      name: 'PASSWORD',
    },
  ]
  return <Form fields={fields} submitText={'Войти'} />
}

import React from 'react'
import { Form } from '@/shared'

import { ICONS } from '@/shared/constants/icons'

export const SignUpForm = () => {
  const fields = [
    {
      label: 'Имя',
      icon: ICONS.Necklace,
      type: 'text',
      error: null,
      value: '',
      name: 'first_name',
    },
    {
      label: 'Фамилия',
      icon: ICONS.Vitality,
      type: 'text',
      error: null,
      value: '',
      name: 'second_name',
    },
    {
      label: 'Никнейм',
      icon: ICONS.MagicDefense,
      type: 'text',
      error: null,
      value: '',
      name: 'login',
    },
    {
      label: 'Email',
      icon: ICONS.Magic,
      type: 'email',
      error: null,
      value: '',
      name: 'email',
    },
    {
      label: 'Телефон',
      icon: ICONS.Spirit,
      type: 'phone',
      error: null,
      value: '',
      name: 'phone',
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
  return <Form fields={fields} submitText={'Создать аккаунт'} />
}

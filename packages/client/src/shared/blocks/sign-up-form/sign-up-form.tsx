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
      validation: ['required', 'name'],
    },
    {
      label: 'Фамилия',
      icon: ICONS.Vitality,
      type: 'text',
      error: null,
      value: '',
      name: 'second_name',
      validation: ['required', 'name'],
    },
    {
      label: 'Никнейм',
      icon: ICONS.MagicDefense,
      type: 'text',
      error: null,
      value: '',
      name: 'login',
      validation: ['required', 'login'],
    },
    {
      label: 'Email',
      icon: ICONS.Magic,
      type: 'email',
      error: null,
      value: '',
      name: 'email',
      validation: ['required', 'email'],
    },
    {
      label: 'Телефон',
      icon: ICONS.Spirit,
      type: 'phone',
      error: null,
      value: '',
      name: 'phone',
      validation: ['required', 'phone'],
    },
    {
      label: 'Пароль',
      icon: ICONS.Strength,
      type: 'password',
      error: null,
      value: '',
      name: 'password',
      validation: ['required', 'password'],
    },
  ]
  return <Form fields={fields} submitText={'Создать аккаунт'} />
}

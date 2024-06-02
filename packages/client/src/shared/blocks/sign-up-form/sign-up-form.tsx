import React from 'react'
import { Form } from '@/shared'

import IconNecklace from '@/assets/images/icons/necklace.svg'
import IconVitality from '@/assets/images/icons/vitality.svg'
import IconMagicDefence from '@/assets/images/icons/magicDefense.svg'
import IconMagic from '@/assets/images/icons/magic.svg'
import IconSpirit from '@/assets/images/icons/spirit.svg'
import IconStrength from '@/assets/images/icons/strength.svg'

export const SignUpForm = () => {
  const fields = [
    {
      label: 'Имя',
      icon: IconNecklace,
      type: 'text',
      error: null,
      value: '',
      name: 'first_name',
    },
    {
      label: 'Фамилия',
      icon: IconVitality,
      type: 'text',
      error: null,
      value: '',
      name: 'second_name',
    },
    {
      label: 'Никнейм',
      icon: IconMagicDefence,
      type: 'text',
      error: null,
      value: '',
      name: 'login',
    },
    {
      label: 'Email',
      icon: IconMagic,
      type: 'email',
      error: null,
      value: '',
      name: 'email',
    },
    {
      label: 'Телефон',
      icon: IconSpirit,
      type: 'phone',
      error: null,
      value: '',
      name: 'phone',
    },
    {
      label: 'Пароль',
      icon: IconStrength,
      type: 'password',
      error: null,
      value: '',
      name: 'password',
    },
  ]
  return <Form fields={fields} submitText={'Создать аккаунт'} />
}

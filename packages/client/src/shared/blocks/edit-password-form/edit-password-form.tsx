import React from 'react'
import { Form, useEditPasswordMutation } from '@/shared'

import { ICONS } from '@/shared/constants/icons'

export const EditPasswordForm = () => {
  const fields = [
    {
      label: 'Старый пароль',
      icon: ICONS.Strength,
      type: 'password',
      error: null,
      value: '',
      name: 'oldPassword',
      validation: ['required'],
    },
    {
      label: 'Новый пароль',
      icon: ICONS.Strength,
      type: 'password',
      error: null,
      value: '',
      name: 'newPassword',
      validation: ['required', 'password'],
    },
  ]
  const [editPassword] = useEditPasswordMutation()
  return (
    <Form fields={fields} submitText={'Сохранить'} callback={editPassword} />
  )
}

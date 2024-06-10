import React, { useEffect, useState } from 'react'
import { Form, useEditProfileMutation } from '@/shared'

import { ICONS } from '@/shared/constants/icons'
import { useAuth } from '@/shared/hooks'

export const EditProfileForm = () => {
  const {
    first_name,
    second_name,
    display_name,
    isAuth,
    email,
    avatar,
    phone,
    login,
  } = useAuth()

  useEffect(() => {
    const fields = [
      {
        label: 'Имя',
        icon: ICONS.Necklace,
        type: 'text',
        error: null,
        value: first_name,
        name: 'first_name',
        validation: ['required', 'name'],
      },
      {
        label: 'Фамилия',
        icon: ICONS.Vitality,
        type: 'text',
        error: null,
        value: second_name,
        name: 'second_name',
        validation: ['required', 'name'],
      },
      {
        label: 'Никнейм',
        icon: ICONS.MagicDefense,
        type: 'text',
        error: null,
        value: display_name,
        name: 'display_name',
        validation: ['login'],
      },
      {
        label: 'Логин',
        icon: ICONS.MagicDefense,
        type: 'text',
        error: null,
        value: login,
        name: 'login',
        validation: ['required', 'login'],
      },
      {
        label: 'Email',
        icon: ICONS.Magic,
        type: 'email',
        error: null,
        value: email,
        name: 'email',
        validation: ['required', 'email'],
      },
      {
        label: 'Телефон',
        icon: ICONS.Spirit,
        type: 'phone',
        error: null,
        value: phone,
        name: 'phone',
        validation: ['required', 'phone'],
      },
    ]

    setFormFields(fields)
  }, [isAuth])
  const [formFields, setFormFields] = useState<any>(null)
  const [editProfile] = useEditProfileMutation()
  return (
    <>
      {phone && (
        <Form
          fields={formFields}
          submitText={'Сохранить'}
          callback={editProfile}
        />
      )}
    </>
  )
}

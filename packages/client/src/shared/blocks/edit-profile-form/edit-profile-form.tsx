import React from 'react'
import { Form, useEditProfileMutation, useGetUserQuery } from '@/shared'

import { ICONS } from '@/shared/constants/icons'

export const EditProfileForm = () => {
  const { currentData } = useGetUserQuery()
  if (!currentData) return null

  const { first_name, second_name, display_name, email, phone, login } =
    currentData

  const [editProfile] = useEditProfileMutation()

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

  return (
    <>
      <Form fields={fields} submitText={'Сохранить'} callback={editProfile} />
    </>
  )
}

import styles from './styles.module.css'
import React, { useEffect, useMemo, useState } from 'react'
import { InputField } from '@/shared/components/input-field'
import { LinkText } from '@/shared'
import { useValidate } from '@/shared/hooks'
import { TLogin, TRegister, TUser } from '@/types'

type Field = {
  label: string
  icon?: string
  type: string
  error: string | null
  value: string
  name: string
  validation?: Array<string>
}

type Props = {
  fields: Field[]
  submitText: string
  callback: (credentials: TRegister | TLogin | TUser | object) => void
}

export const Form = ({ fields, submitText, callback }: Props) => {
  // Стейт формы, данные, которые будут отправлять на сервер
  const [formData, setFormData] = useState<Field[]>(fields)
  // Флаги для проверки обязательных полей
  const [validFields, setValidFields] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData =>
      prevData.map(field => (field.name === name ? { ...field, value } : field))
    )
  }

  // Метод принимает данные поля и валидирует его
  const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValidate(name, value)
  }

  // Метод для валидации, установки флага валидации и вывода сообщения об ошибке
  const setValidate = (name: string, value: string) => {
    const validationRules = formData.find(
      field => field.name === name
    )?.validation

    if (validationRules !== undefined && validationRules.length > 0) {
      const { valid, message } = useValidate(validationRules, value)

      setValidFields(prevData => ({ ...prevData, [name]: valid }))
      setFormData(prevData =>
        prevData.map(field =>
          field.name === name
            ? { ...field, error: valid ? null : message }
            : field
        )
      )
    }
  }

  // Список валидируемых полей и их флаги валидации
  useEffect(() => {
    const validFields = formData.reduce(
      (acc: Record<string, boolean>, field) => {
        if (field.validation !== undefined && field.validation.length > 0) {
          acc[field.name] = false
        }
        return acc
      },
      {}
    )
    setValidFields(validFields)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Сперва проверяем валидацию
    Object.keys(validFields).forEach(name => {
      const field = formData.find(field => field.name === name)
      if (field && field.validation && field.validation.length > 0) {
        setValidate(name, field.value)
      }
    })

    try {
      const valid = Object.keys(validFields).every(field => validFields[field])
      if (!valid) {
        return false
      }

      const payload = formData.reduce(
        (acc, field) => ({
          ...acc,
          [field.name]: field.value,
        }),
        {}
      )

      await callback(payload)
    } catch (e) {
      console.log('Form not submitted')
      return
    }
  }

  // Мемоизация компонента чтобы он не перерендеривался при изменении других полей
  const MemoizedInputField = formData.map(field =>
    useMemo(
      () => (
        <InputField
          key={field.name}
          label={field.label}
          icon={field.icon}
          type={field.type}
          error={field.error}
          value={field.value}
          name={field.name}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      ),
      [field.error, field.value, handleChange, handleValidation]
    )
  )

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      {MemoizedInputField}
      <button type="submit" className={styles.submit}>
        <LinkText>{submitText}</LinkText>
      </button>
    </form>
  )
}

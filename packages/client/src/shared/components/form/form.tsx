import styles from './styles.module.css'
import React, { useEffect, useState } from 'react'
import { InputField } from '@/shared/components/input-field'
import { LinkText } from '@/shared'

type Field = {
  label: string
  icon?: string
  type: string
  error: string | null
  value: string
  name: string
}

type Props = {
  fields: Field[]
  submitText: string
}

export const Form = ({ fields, submitText }: Props) => {
  const [formData, setFormData] = useState<Field[]>(fields)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData =>
      prevData.map(field => (field.name === name ? { ...field, value } : field))
    )
  }

  return (
    <form className={styles.root}>
      {formData.map(field => (
        <InputField
          key={field.name}
          label={field.label}
          icon={field.icon}
          type={field.type}
          error={field.error}
          value={field.value}
          name={field.name}
          onChange={handleChange}
        />
      ))}
      <button type="submit" className={styles.submit}>
        <LinkText>{submitText}</LinkText>
      </button>
    </form>
  )
}

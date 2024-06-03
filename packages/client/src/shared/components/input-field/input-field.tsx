import styles from './styles.module.css'
import React from 'react'

type Props = {
  label: string
  icon?: string
  type: string
  error: string | null
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}

import IconPlaceWebp from '@/assets/images/form/form-field-icon.webp'
import IconPlacePng from '@/assets/images/form/form-field-icon-min.png'

export const InputField = ({
  label,
  icon,
  type,
  error,
  value,
  name,
  onChange,
  onBlur,
}: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles['icon-field']}>
        <div className={styles['icon-wrapper']}>
          <picture>
            <source src={IconPlaceWebp} type="image/webp" />
            <img
              className={styles['icon-background']}
              src={IconPlacePng}
              alt="Icon"
            />
          </picture>
          {icon && <img className={styles['icon']} src={icon} alt="Icon" />}
        </div>
      </div>
      <div className={styles.container}>
        <input
          className={styles.input}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className={styles.info}>
          <div className={styles.label}>{label}</div>
          <span className={styles.error}>{error}</span>
        </div>
      </div>
    </div>
  )
}

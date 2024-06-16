import { ReactNode } from 'react'
import styles from './form-block-action.module.css'

interface IProps {
  children?: ReactNode
  onClick?: () => void
}

const FormBlockActions = ({ children = 'Создать тему', onClick }: IProps) => {
  return (
    <div className={styles.action}>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default FormBlockActions

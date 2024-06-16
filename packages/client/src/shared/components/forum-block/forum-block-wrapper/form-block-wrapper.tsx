import { ReactNode } from 'react'
import styles from './form-block-wrapper.module.css'

interface IProps {
  children: ReactNode
  className?: string
}

const FormBlockWrapper = ({ children, className }: IProps) => {
  return (
    <div className={styles.root}>
      <div className={`${styles.rootInner} ${className ? className : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default FormBlockWrapper

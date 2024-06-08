import { ReactNode } from 'react'
import styles from './forum-block-body.module.css'

const FormBlockBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.body}>{children}</div>
}

export default FormBlockBody

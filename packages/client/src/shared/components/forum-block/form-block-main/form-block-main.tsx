import FormBlockAuthor from '../form-block-author/form-block-author'
import styles from './form-block-main.module.css'

interface IProps {
  title: string
  author: string
  className?: string
}

const FormBlockMain = ({ title, author, className }: IProps) => {
  return (
    <div className={`${styles.main} ${className ? className : ''}`}>
      <h3 className={styles.title}>{title}</h3>
      <FormBlockAuthor author={author} />
    </div>
  )
}

export default FormBlockMain

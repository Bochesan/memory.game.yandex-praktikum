import styles from './form-block-author.module.css'

const FormBlockAuthor = ({
  author,
  className,
}: {
  author: string
  className?: string
}) => {
  return (
    <div className={`${styles.author} ${className ? className : ''}`}>
      {author}
    </div>
  )
}

export default FormBlockAuthor

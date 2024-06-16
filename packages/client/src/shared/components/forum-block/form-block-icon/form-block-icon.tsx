import styles from './form-block-icon.module.css'

interface IProps {
  path: string
  alt?: string
  className?: string
}

const FormBlockIcon = ({ path, alt = 'Изображение', className }: IProps) => {
  return (
    <div className={`${styles.icon} ${className ? className : ''}`}>
      <div className={styles.iconWrapper}>
        <img src={path} alt={alt} />
      </div>
    </div>
  )
}

export default FormBlockIcon

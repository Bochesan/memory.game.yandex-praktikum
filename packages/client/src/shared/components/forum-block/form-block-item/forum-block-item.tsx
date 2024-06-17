import { useNavigate } from 'react-router-dom'
import { ICONS } from '@/shared/constants'
import FormBlockWrapper from '../forum-block-wrapper/form-block-wrapper'
import styles from './forum-block-item.module.css'
import FormBlockMain from '../form-block-main/form-block-main'
import FormBlockIcon from '../form-block-icon/form-block-icon'

interface IForumBlockItemProps {
  title?: string
  author?: string
  count?: number
  date?: Date
}

const ForumBlockItem = (props: IForumBlockItemProps) => {
  const navigate = useNavigate()
  const onRoute = () => {
    navigate('/forum/1')
  }
  const {
    author = 'Автор',
    count = 2,
    title = 'Заголовок',
    date = new Date(),
  } = props
  return (
    <FormBlockWrapper className={styles.wrapper}>
      <div className={styles.left}>
        <FormBlockIcon
          className={styles.iconRight}
          path={ICONS.Emblem}
          alt="Эмблема"
        />
        <FormBlockMain title={title} author={author} />
        <div className={styles.about}>
          <div className={styles.count}>{count} ответа</div>
          <div className={styles.date}>{date.toLocaleDateString()}</div>
        </div>
      </div>
      <div>
        <button className={styles.action} onClick={onRoute}>
          <img src={ICONS.Plus} alt="Развернуть" />
        </button>
      </div>
    </FormBlockWrapper>
  )
}

export default ForumBlockItem

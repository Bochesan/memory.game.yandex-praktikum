import styles from './form-item-discus-comment.module.css'
import { ICONS } from '@/shared/constants'
import FormBlockWrapper from '../forum-block-wrapper/form-block-wrapper'
import FormBlockIcon from '../form-block-icon/form-block-icon'
import FormBlockAuthor from '../form-block-author/form-block-author'
import FormBlockBody from '../form-block-body/form-block-body'

interface IForumBlockDiscusCommentProps {
  author?: string
  message?: string
  date?: Date
}

const ForumItemDiscusComment = (props: IForumBlockDiscusCommentProps) => {
  const { author = '', message = '', date = new Date() } = props

  return (
    <FormBlockWrapper>
      <div className={styles.top}>
        <FormBlockIcon path={ICONS.Comment} alt="Комментарий" />
        <div className={styles.info}>
          <FormBlockAuthor author={author} />
        </div>
        <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
      </div>
      <FormBlockBody>
        <p>{message}</p>
      </FormBlockBody>
    </FormBlockWrapper>
  )
}
export default ForumItemDiscusComment

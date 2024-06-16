import ForumItemDiscus from '@/shared/components/forum-block/form-block-discuc/forum-item-discus'
import styles from './styles.module.css'
import ForumItemDiscusComment from '@/shared/components/forum-block/form-block-discuc-comment/forum-item-discus-comment'

export const TopicPage = () => {
  return (
    <div className={styles.root}>
      <ForumItemDiscus />
      <ForumItemDiscusComment />
      <ForumItemDiscusComment />
      <ForumItemDiscusComment />
    </div>
  )
}

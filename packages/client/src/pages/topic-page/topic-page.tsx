import { Layout, Navigate } from '@/shared/components'
import ForumItemDiscus from '@/shared/components/forum-block/form-block-discuc/forum-item-discus'
import ForumItemDiscusComment from '@/shared/components/forum-block/form-block-discuc-comment/forum-item-discus-comment'
import styles from './styles.module.css'

const routes = [
  {
    path: '/forum',
    name: 'Назад',
    sort: 20,
  },
  {
    path: '/forum/1',
    name: 'Тема',
    sort: 10,
  },
]

export const TopicPage = () => {
  return (
    <main>
      <Layout title="Форум">
        <div className={styles.container}>
          <div className={styles.navigation}>
            <Navigate routes={routes} />
          </div>
          <div className={styles.root}>
            <ForumItemDiscus />
            <ForumItemDiscusComment />
            <ForumItemDiscusComment />
            <ForumItemDiscusComment />
          </div>
        </div>
      </Layout>
    </main>
  )
}

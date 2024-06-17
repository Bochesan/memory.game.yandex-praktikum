import ForumNewItem from '@/shared/components/forum-block/form-block-new-item/forum-new-item'
import { Layout, Navigate } from '@/shared/components'
import styles from './styles.module.css'

const routes = [
  {
    path: '/forum',
    name: 'Назад',
    sort: 20,
  },
  {
    path: '/forum-create',
    name: 'Создать тему',
    sort: 10,
  },
]

export const ForumCreatePage = () => {
  return (
    <main>
      <Layout title="Форум">
        <div className={styles.container}>
          <div className={styles.navigation}>
            <Navigate routes={routes} />
          </div>
          <div className={styles.root}>
            <ForumNewItem />
          </div>
        </div>
      </Layout>
    </main>
  )
}

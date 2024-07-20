import { useParams } from 'react-router-dom'
import { useGetTopicQuery, renderError } from '@/shared'
import { Layout, Navigate } from '@/shared/components'
import { Spinner } from '@/shared/components/spinner/spinner'
import ForumItemDiscus from '@/shared/components/forum-block/form-block-discuc/forum-item-discus'
import ForumItemDiscusComment from '@/shared/components/forum-block/form-block-discuc-comment/forum-item-discus-comment'
import styles from './styles.module.css'
import { TComment } from '@/types'

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
  const { topicId } = useParams()
  const { data, error, isLoading } = useGetTopicQuery({
    topic_id: String(topicId),
  })
  const comments = data?.comments

  if (error) return <div>Ошибка: {renderError(error)}</div>

  if (!data) return null

  return (
    <main>
      <Layout title="Форум">
        <div className={styles.container}>
          <div className={styles.navigation}>
            <Navigate routes={routes} />
          </div>
          <div className={styles.root}>
            {isLoading && <Spinner />}

            {!isLoading && !data && <div>Данной темы нет!</div>}

            {!isLoading && data && (
              <ForumItemDiscus
                id={data?.id}
                title={data?.title}
                message={data?.message_text}
                author={data?.user?.display_name}
                date={data?.created_at}
              />
            )}

            {!isLoading &&
              comments &&
              comments.map((props: TComment, index: number) => (
                <ForumItemDiscusComment
                  key={index}
                  author={props.user.display_name}
                  message={props.message_text}
                  date={props.created_at}
                />
              ))}
          </div>
        </div>
      </Layout>
    </main>
  )
}

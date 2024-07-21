import { useGetTopicsQuery, renderError } from '@/shared'
import { Spinner } from '@/shared/components/spinner/spinner'
import ForumBlockItem from '@/shared/components/forum-block/form-block-item/forum-block-item'
import { TTopic } from '@/types'

const ForumMainPage = () => {
  const { data, error, isLoading } = useGetTopicsQuery({})

  if (error) return <div>Ошибка: {renderError(error)}</div>

  if (!data) return null

  return (
    <div>
      {isLoading && <Spinner />}

      {!isLoading && !data && <div>Топиков нет!</div>}

      {!isLoading &&
        data &&
        data.map((props: TTopic, index: number) => (
          <ForumBlockItem
            key={index}
            id={props.id}
            title={props.title}
            author={props.user.display_name}
            date={props.created_at}
          />
        ))}
    </div>
  )
}

export default ForumMainPage

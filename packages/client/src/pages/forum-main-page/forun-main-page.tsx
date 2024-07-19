import { useGetTopicsQuery } from '@/shared'
import { Spinner } from '@/shared/components/spinner/spinner'
import ForumBlockItem from '@/shared/components/forum-block/form-block-item/forum-block-item'

const ForumMainPage = () => {
  const { data, error, isLoading } = useGetTopicsQuery({})

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error.toString()}</div>
  }

  return (
    <div>
      {data ? JSON.stringify(data) : 'Топиков нет'}
      <ForumBlockItem />
      <ForumBlockItem />
      <ForumBlockItem />
      <ForumBlockItem />
    </div>
  )
}

export default ForumMainPage

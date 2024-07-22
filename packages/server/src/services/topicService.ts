import { Topic } from '../../models/topic'
import { Comment } from '../../models/comment'
import { Reply } from '../../models/reply'
import { User } from '../../models/user'

interface TopicsDTO {
  title: string
  message_text: string
  created_at: Date
}

interface GetTopicDTO {
  id: number
}

interface CreateTopicDTO {
  title: string
  message_text: string
  user_id: number
}

export const getTopics = async (): Promise<TopicsDTO[]> => {
  const topics = await Topic.findAll({
    include: [
      {
        model: User,
        attributes: ['first_name', 'second_name', 'display_name'],
      },
    ],
  })
  return topics
}

export const getTopic = async (data: GetTopicDTO): Promise<Topic[]> => {
  const { id } = data
  const topic = await Topic.findAll({
    where: {
      id: id,
    },
    include: [
      {
        model: User,
        attributes: ['first_name', 'second_name', 'display_name'],
      },
      {
        model: Comment,
        include: [
          {
            model: User,
            attributes: ['first_name', 'second_name', 'display_name'],
          },
          {
            model: Reply,
          },
        ],
        order: [['id', 'DESC']],
      },
    ],
  })
  return topic
}

export const createTopic = async (data: CreateTopicDTO): Promise<Topic> => {
  const { title, message_text, user_id } = data
  const topic = await Topic.create({ title, message_text, user_id })
  return topic
}

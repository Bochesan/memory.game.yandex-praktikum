import { Topic } from '../../models/topic'

interface TopicsDTO {
  title: string
  message_text: string
  created_at: Date
}

interface CreateTopicDTO {
  title: string
  message_text: string
  user_id: number
}

export const getTopics = async (): Promise<TopicsDTO[]> => {
  const topics = await Topic.findAll()
  return topics
}

export const createTopic = async (data: CreateTopicDTO): Promise<Topic> => {
  const { title, message_text, user_id } = data
  const topic = await Topic.create({ title, message_text, user_id })
  return topic
}

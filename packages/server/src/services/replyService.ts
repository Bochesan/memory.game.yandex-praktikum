import { Reply } from '../../models/reply'
import { User } from '../../models/user'

interface RepliesDTO {
  message_text: string
  created_at: Date
}

interface GetRepliesDTO {
  topic_id: number
}

interface CreateReplyDTO {
  user_id: number
  comment_id: number
  message_text: string
}

export const getReplies = async (
  data: GetRepliesDTO
): Promise<RepliesDTO[]> => {
  const { topic_id } = data
  const replies = await Reply.findAll({
    where: {
      topic_id: topic_id,
    },
    include: [
      {
        model: User,
        attributes: ['first_name', 'second_name', 'display_name'],
      },
    ],
  })
  return replies
}

export const createReply = async (data: CreateReplyDTO): Promise<Reply> => {
  const { message_text, comment_id, user_id } = data
  const reply = await Reply.create({ message_text, comment_id, user_id })
  return reply
}

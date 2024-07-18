import { Comment } from '../../models/comment'
import { Reply } from '../../models/reply'
import { User } from '../../models/user'

interface CommentsDTO {
  message_text: string
  created_at: Date
}

interface GetCommentsDTO {
  topic_id: number
}

interface CreateCommentDTO {
  user_id: number
  topic_id: number
  message_text: string
}

export const getComments = async (
  data: GetCommentsDTO
): Promise<CommentsDTO[]> => {
  const { topic_id } = data
  const comments = await Comment.findAll({
    where: {
      topic_id: topic_id,
    },
    include: [
      {
        model: User,
        attributes: ['first_name', 'second_name', 'display_name'],
      },
      {
        model: Reply,
      },
    ],
  })
  return comments
}

export const createComment = async (
  data: CreateCommentDTO
): Promise<Comment> => {
  const { message_text, topic_id, user_id } = data
  const comment = await Comment.create({ message_text, topic_id, user_id })
  return comment
}

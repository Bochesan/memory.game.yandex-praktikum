import { Comment } from '../../models/comment'

interface CommentsDTO {
  message_text: string
  created_at: Date
}

interface CreateCommentDTO {
  user_id: number
  topic_id: number
  message_text: string
}

export const getComments = async (): Promise<CommentsDTO[]> => {
  const comments = await Comment.findAll()
  return comments
}

export const createComment = async (
  data: CreateCommentDTO
): Promise<Comment> => {
  const { message_text, topic_id, user_id } = data
  const comment = await Comment.create({ message_text, topic_id, user_id })
  return comment
}

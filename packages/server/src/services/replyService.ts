import { Reply } from '../../models/reply'

interface RepliesDTO {
  message_text: string
  created_at: Date
}

interface CreateReplyDTO {
  user_id: number
  comment_id: number
  message_text: string
}

export const getReplies = async (): Promise<RepliesDTO[]> => {
  const replies = await Reply.findAll()
  return replies
}

export const createReply = async (data: CreateReplyDTO): Promise<Reply> => {
  const { message_text, comment_id, user_id } = data
  const reply = await Reply.create({ message_text, comment_id, user_id })
  return reply
}

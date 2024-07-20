export type TAddComment = {
  user_id: number
  topic_id: number
  message_text: string
}

export type TComment = {
  id: number
  message_text: string
  created_at: Date
  topic_id: number
  user_id: number
  user: {
    first_name: string
    second_name: string
    display_name: string
  }
  replies: []
}

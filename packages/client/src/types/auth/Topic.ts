export type TAddTopic = {
  user_id: number
  title: string
  message_text: string
}

export type TGetTopic = {
  topic_id: string
}

export type TTopic = {
  id: number
  user_id: number
  title: string
  message_text: string
  created_at: Date
  createdAt: Date
  updatedAt: Date
  user: {
    first_name: string
    second_name: string
    display_name: string
  }
}

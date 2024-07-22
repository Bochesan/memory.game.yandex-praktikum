export type TGetReactions = {
  user_id?: number
  topic_id: number
}

export type TSetReaction = {
  user_id: number
  topic_id: number
  reaction_type: string
}

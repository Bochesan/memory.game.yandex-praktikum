import { Request, Response } from 'express'
import {
  getComments as getCommentsService,
  createComment as createCommentService,
} from '../services/commentService'

export const getComments = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const comments = await getCommentsService()
    res.status(200).json(comments)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'При получении комментариев произошла ошибка.' })
  }
}

export const createComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { message_text, topic_id, user_id } = req.body
    const comment = await createCommentService({
      message_text,
      topic_id,
      user_id,
    })
    res.status(201).json(comment)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'При создании коментария произошла ошибка:' + error })
  }
}

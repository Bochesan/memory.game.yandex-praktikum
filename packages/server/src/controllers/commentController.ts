import { Request, Response } from 'express'
import {
  getComments as getCommentsService,
  createComment as createCommentService,
} from '../services/commentService'
import { Authorize } from '../decorators/auth'

class CommentController {
  @Authorize
  public async getComments(req: Request, res: Response): Promise<void> {
    try {
      const { topic_id } = req.query as unknown as { topic_id: number }
      const comments = await getCommentsService({ topic_id })
      res.status(200).json(comments)
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При получении комментариев произошла ошибка.' })
    }
  }

  @Authorize
  public async createComment(req: Request, res: Response): Promise<void> {
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
}

export default new CommentController()

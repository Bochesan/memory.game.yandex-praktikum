import { Request, Response } from 'express'
import {
  getReplies as getRepliesService,
  createReply as createReplyService,
} from '../services/replyService'
import { Authorize } from '../decorators/auth'

class ReplyController {
  @Authorize
  public async getReplies(req: Request, res: Response): Promise<void> {
    try {
      const { topic_id } = req.query as unknown as { topic_id: number }
      const replies = await getRepliesService({ topic_id })
      res.status(200).json(replies)
    } catch (error) {
      res.status(500).json({
        error: 'При получении ответов на комментарий произошла ошибка.',
      })
    }
  }

  @Authorize
  public async createReply(req: Request, res: Response): Promise<void> {
    try {
      const { message_text, comment_id, user_id } = req.body
      const reply = await createReplyService({
        message_text,
        comment_id,
        user_id,
      })
      res.status(201).json(reply)
    } catch (error) {
      res.status(500).json({
        error: 'При создании ответов на комментарий произошла ошибка:' + error,
      })
    }
  }
}

export default new ReplyController()

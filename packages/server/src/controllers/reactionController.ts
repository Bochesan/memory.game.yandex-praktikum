import { Request, Response } from 'express'
import {
  getReactions as getReactionsService,
  createReaction as createReactionService,
} from '../services/reactionService'
import { Authorize } from '../decorators/auth'

class ReactionController {
  @Authorize
  public async getReactions(req: Request, res: Response): Promise<void> {
    try {
      const { topic_id, user_id } = req.query as unknown as {
        topic_id: number
        user_id: number
      }
      const reactions = await getReactionsService({ topic_id, user_id })
      res.status(200).json(reactions)
    } catch (error) {
      res.status(500).json({ error: 'При получении реакций произошла ошибка.' })
    }
  }

  @Authorize
  public async createReaction(req: Request, res: Response): Promise<void> {
    try {
      const { topic_id, user_id, reaction_type } = req.body
      const reaction = await createReactionService({
        topic_id,
        user_id,
        reaction_type,
      })
      res.status(201).json(reaction)
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При создании реакции произошла ошибка:' + error })
    }
  }
}

export default new ReactionController()

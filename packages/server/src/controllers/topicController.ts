import { Request, Response } from 'express'
import {
  getTopic as getTopicService,
  getTopics as getTopicsService,
  createTopic as createTopicService,
} from '../services/topicService'
import { Authorize } from '../decorators/auth'

class TopicController {
  @Authorize
  public async getTopics(_req: Request, res: Response): Promise<void> {
    try {
      const topics = await getTopicsService()
      res.status(200).json(topics)
    } catch (error) {
      res.status(500).json({ error: 'При получении тем произошла ошибка.' })
    }
  }

  @Authorize
  public async getTopic(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params as unknown as { id: number }
      const topic = await getTopicService({ id })
      if (topic.length) {
        res.status(200).json(topic[0])
      } else {
        res.status(404).json({ error: 'Тема не найден' })
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При получении темы произошла ошибка:' + error })
    }
  }

  @Authorize
  public async createTopic(req: Request, res: Response): Promise<void> {
    try {
      const { title, message_text, user_id } = req.body
      const topic = await createTopicService({ title, message_text, user_id })
      res.status(201).json(topic)
    } catch (error) {
      res
        .status(500)
        .json({ error: 'При создании темы произошла ошибка:' + error })
    }
  }
}

export default new TopicController()

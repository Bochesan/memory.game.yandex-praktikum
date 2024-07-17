import { Request, Response } from 'express'
import {
  getTopics as getTopicsService,
  createTopic as createTopicService,
} from '../services/topicService'

export const getTopics = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const topics = await getTopicsService()
    res.status(200).json(topics)
  } catch (error) {
    res.status(500).json({ error: 'При получении тем произошла ошибка.' })
  }
}

export const createTopic = async (
  req: Request,
  res: Response
): Promise<void> => {
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

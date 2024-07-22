import { Reactions } from '../../models/reactions'
import sequelize from 'sequelize'
interface IGetReactions {
  topic_id: number
  user_id: number
}
interface IReactions {
  emoji: string
  count: unknown
  picked: boolean
}
interface ISetReaction {
  user_id: number
  topic_id: number
  reaction_type: string
}
export const getReactions = async (
  payload: IGetReactions
): Promise<IReactions[]> => {
  const { user_id, topic_id } = payload
  const reactions = await Reactions.findAll({
    attributes: [
      'reaction_type',
      [sequelize.fn('COUNT', sequelize.col('user_id')), 'count'],
    ],
    where: {
      topic_id: topic_id,
    },
    group: ['reaction_type'],
  })
  return reactions.map(reaction => {
    const picked = reaction.user_id === user_id
    return {
      emoji: reaction.reaction_type,
      count: reaction.get('count'),
      picked: picked,
    }
  })
}
export const createReaction = async (payload: ISetReaction) => {
  const { user_id, topic_id, reaction_type } = payload

  // Поиск всех реакций пользователя user_id на указанный topic_id
  const userReactions = await Reactions.findAll({
    where: {
      user_id: user_id,
      topic_id: topic_id,
    },
  })

  if (userReactions.length > 0) {
    // Если у пользователя уже есть реакции на данный topic_id
    for (const userReaction of userReactions) {
      if (userReaction.reaction_type !== reaction_type) {
        // Если найденная реакция не совпадает с передаваемой, удаляем ее
        await userReaction.destroy()
      } else {
        // Если найденная реакция совпадает с передаваемой, удаляем ее
        return await userReaction.destroy()
      }
    }
  }

  // Добавление новой реакции
  await Reactions.create({
    user_id: user_id,
    topic_id: topic_id,
    reaction_type: reaction_type,
  })
}

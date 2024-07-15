import { Sequelize } from 'sequelize-typescript'
import { User } from '../models/user'
import { Topic } from '../models/topic'
import { Comment } from '../models/comment'
import { Reply } from '../models/reply'

const sequelize = new Sequelize({
  database: 'postgres',
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  storage: ':memory:',
  models: [User, Topic, Comment, Reply],
})

export default sequelize

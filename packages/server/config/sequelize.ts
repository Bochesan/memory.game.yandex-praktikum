import { Sequelize } from 'sequelize-typescript'
import { User } from '../models/user'
import { Topic } from '../models/topic'
import { Comment } from '../models/comment'
import { Reply } from '../models/reply'
import { Theme } from '../models/theme'
import { Reactions } from '../models/reactions'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env

const sequelize = new Sequelize({
  database: POSTGRES_DB,
  dialect: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  storage: ':memory:',
  models: [User, Topic, Comment, Reply, Theme, Reactions],
})

export default sequelize

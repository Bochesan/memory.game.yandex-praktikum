import { Sequelize } from 'sequelize-typescript'
import { User } from '../models/user'
import { Topic } from '../models/topic'
import { Comment } from '../models/comment'
import { Reply } from '../models/reply'

const sequelize = new Sequelize({
  database: 'your_db_name',
  dialect: 'postgres',
  username: 'your_db_username',
  password: 'your_db_password',
  storage: ':memory:',
  models: [User, Topic, Comment, Reply],
})

export default sequelize

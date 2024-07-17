import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript'
import { User } from './user'
import { Topic } from './topic'
import { Reply } from './reply'

@Table({
  timestamps: true,
  tableName: 'Comments',
})
export class Comment extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  message_text!: string

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date

  @ForeignKey(() => Topic)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  topic_id!: number

  @BelongsTo(() => Topic)
  topic!: Topic

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number

  @BelongsTo(() => User)
  user!: User

  @HasMany(() => Reply)
  replies!: Reply[]
}

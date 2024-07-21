import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  Length,
} from 'sequelize-typescript'
import { User } from './user'
import { Comment } from './comment'

@Table({
  timestamps: true,
  tableName: 'Replies',
})
export class Reply extends Model {
  @Length({ max: 999, min: 1 })
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

  @ForeignKey(() => Comment)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  comment_id!: number

  @BelongsTo(() => Comment)
  comment!: Comment

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number

  @BelongsTo(() => User)
  user!: User
}

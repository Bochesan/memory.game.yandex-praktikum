import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  Length,
} from 'sequelize-typescript'
import { User } from './user'
import { Comment } from './comment'

@Table({
  timestamps: true,
  tableName: 'Topics',
})
export class Topic extends Model {
  @Length({ max: 100, min: 1 })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  title!: string

  @Length({ max: 999, min: 1 })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
  })
  message_text!: string

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number

  @BelongsTo(() => User)
  user!: User

  @HasMany(() => Comment)
  comments!: Comment[]
}

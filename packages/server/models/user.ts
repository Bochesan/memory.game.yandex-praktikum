import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript'
import { Topic } from './topic'
import { Comment } from './comment'
import { Reply } from './reply'

@Table({
  timestamps: true,
  tableName: 'Users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  login!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  second_name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  display_name!: string

  @HasMany(() => Topic)
  topics!: Topic[]

  @HasMany(() => Comment)
  comments!: Comment[]

  @HasMany(() => Reply)
  replies!: Reply[]
}

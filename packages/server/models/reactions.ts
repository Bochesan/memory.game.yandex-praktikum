import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript'
import { Topic } from './topic'

@Table({
  timestamps: true,
  tableName: 'Reactions',
})
export class Reactions extends Model {
  @ForeignKey(() => Topic)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  topic_id!: number

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  reaction_type!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number
}

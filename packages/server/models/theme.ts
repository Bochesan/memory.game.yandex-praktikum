import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  Length,
} from 'sequelize-typescript'
import { User } from './user'

@Table({
  tableName: 'Theme',
})
export class Theme extends Model {
  @Length({ max: 25, min: 1 })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  theme!: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number
}

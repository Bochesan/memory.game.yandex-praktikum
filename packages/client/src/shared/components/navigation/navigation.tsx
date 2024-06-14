import { useNavigate } from 'react-router-dom'
import { useProgress } from '@/shared/hooks'
import styles from './styles.module.css'
import classNames from 'classnames'

const Item = ({
  to,
  title,
  isActive = false,
}: {
  to: string
  title: string
  isActive?: boolean
}) => {
  const navigate = useNavigate()
  return (
    <li
      className={classNames('', { [styles.active]: isActive })}
      onClick={() => navigate(to)}>
      {title}
    </li>
  )
}

export const Navigation = () => {
  const { userLevel } = useProgress()
  const isNewGame = userLevel <= 1

  return (
    <ul className={styles.root} data-testid="navigation-main">
      <Item to="/levels" title={isNewGame ? 'Новая игра' : 'Продолжить'} />
      <Item to="/leader-board" title="Лидеры" />
      <Item to="/forum" title="Форум" />
    </ul>
  )
}

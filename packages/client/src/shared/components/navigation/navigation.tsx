import { useNavigate } from 'react-router-dom'
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

export const Navigation = () => (
  <ul className={styles.root}>
    <Item to="/game" title="Новая игра" />
    <Item to="/game" title="Продолжить" />
    <Item to="/leader-board" title="Лидеры" />
    <Item to="/forum" title="Форум" />
  </ul>
)

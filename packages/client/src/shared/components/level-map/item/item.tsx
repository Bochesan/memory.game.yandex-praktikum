import { Filter } from './filter'
import classNames from 'classnames'
import styles from './styles.module.css'

type Props = {
  id: number
  isPassed: boolean
  isCurrent: boolean
  x: number
  y: number
  onClick: (level: number) => void
}

export const Item = ({ id, x, y, isCurrent, isPassed, onClick }: Props) => (
  <svg
    width={200}
    height={200}
    viewBox="0 0 200 200"
    className={styles.root}
    x={x}
    y={y}
    onClick={() => onClick(id)}>
    <g className={styles.wrapper}>
      <clipPath id="cut-off" className={styles.clipPath}>
        <rect x="110" y="110" width="95" height="95" />
        <rect x="110" y="110" width="95" height="95" />
      </clipPath>
      <rect
        x="115"
        y="115"
        width="85"
        height="85"
        stroke="#01cbfd"
        clipPath="url(#cut-off)"
      />
      <rect x="120" y="120" stroke="#01cbfd" width="75" height="75" />
      <rect
        x="130"
        y="130"
        width="55"
        height="55"
        fill="#010302"
        className={classNames('', {
          [styles.current]: isCurrent,
          [styles.passed]: isPassed,
        })}
        filter="url(#shadow)"
      />
    </g>
    <Filter />
    <text className={styles.text} x="66%" y="73%">
      <tspan>{id}</tspan>
    </text>
  </svg>
)

import classNames from 'classnames'

import styles from './styles.module.css'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkText = ({ className, children, ...props }: Props) => (
  <a className={classNames(styles.root, className)} {...props}>
    <svg
      width="65"
      height="62"
      viewBox="0 0 65 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect
          width={40}
          height={40}
          transform="matrix(0.722696 0.691166 -0.722696 0.691166 32.5195 2)"
          stroke="#01CBFD"
        />
      </g>
    </svg>
    {children}
  </a>
)

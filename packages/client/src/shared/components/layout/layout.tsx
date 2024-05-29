import React from 'react'
import styles from './styles.module.css'

interface ILayoutProps {
  children: React.ReactNode
  title?: string
}

// TODO Нужно получать из стора
const userData = {
  userName: 'username',
  userNickname: 'nickname',
}

import LayoutPng from '@/assets/images/layout/layout-backgound-min.png'
import OutlinePng from '@/assets/images/layout/outer-frame-border-min.png'
import UserBackgroundPng from '@/assets/images/layout/user-background-min.png'
import BadgeWebp from '@/assets/images/layout/user-badge.webp'
import BadgePng from '@/assets/images/layout/user-badge-min.png'

export const Layout = ({ children, title }: ILayoutProps) => (
  <div className={styles.root}>
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(${OutlinePng})` }}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${LayoutPng})` }}>
        <div className={styles.titleLayout}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {children}
        <div className={styles.userLayout}>
          <div
            className={styles.user}
            style={{ backgroundImage: `url(${UserBackgroundPng})` }}>
            <div className={styles.userName}>{userData.userName}</div>
            <div className={styles.userNickname}>{userData.userNickname}</div>
          </div>
          <picture>
            <source src={BadgeWebp} type="image/webp" />
            <img className={styles.badge} src={BadgePng} alt="Badge" />
          </picture>
        </div>
      </div>
    </div>
  </div>
)

import React from 'react'
import styles from './styles.module.css'
import LayoutPng from '@/assets/images/layout/layout-backgound-min.png'
import OutlinePng from '@/assets/images/layout/outer-frame-border-min.png'
import UserBackgroundPng from '@/assets/images/layout/user-background-min.png'
import BadgeWebp from '@/assets/images/layout/user-badge.webp'
import BadgePng from '@/assets/images/layout/user-badge-min.png'
import { Clock, Score, useGetUserQuery } from '@/shared'
import { TUser } from '@/types'

interface ILayoutProps {
  children: React.ReactNode
  title?: string
}

const Fullname = (currentData: TUser) => {
  return (
    <>
      <div className={styles.userName}>{currentData.first_name}</div>
      <div className={styles.userNickname}>{currentData.second_name}</div>
    </>
  )
}

export const Layout = ({ children, title }: ILayoutProps) => {
  const { currentData } = useGetUserQuery()

  return (
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
              {currentData !== undefined ? Fullname(currentData) : null}
            </div>
            <picture>
              <source src={BadgeWebp} type="image/webp" />
              <img className={styles.badge} src={BadgePng} alt="Badge" />
            </picture>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Clock />
        <Score />
      </div>
    </div>
  )
}

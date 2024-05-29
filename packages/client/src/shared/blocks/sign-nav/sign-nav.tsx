import React from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import branchPic from '@/assets/images/pics/branch-pic.svg'

export const SignNav = () => {
  const routes = [
    {
      path: '/',
      name: 'Назад',
      sort: 30,
    },
    {
      path: '/sign-in',
      name: 'Вход',
      sort: 20,
    },
    {
      path: '/sign-up',
      name: 'Регистрация',
      sort: 10,
    },
  ]

  const links = routes
    .sort((a, b) => a.sort - b.sort)
    .map(route => (
      <NavLink
        to={route.path}
        key={route.path}
        className={({ isActive }) =>
          isActive
            ? classNames(styles.link, styles.active)
            : classNames(styles.link)
        }>
        {route.name}
      </NavLink>
    ))
  return (
    <div className={styles.root}>
      <img src={branchPic} className={styles.pic} />
      <nav className={styles.nav}>{links}</nav>
    </div>
  )
}

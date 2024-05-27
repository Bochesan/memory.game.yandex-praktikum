import { PropsWithChildren } from 'react'
import cls from './modal.module.css'
import topbar from '@/assets/modal-topbar.svg'
import Portal from './portal'
import { TModal } from './types'

export const Modal = ({
  isOpened,
  type,
  children,
}: PropsWithChildren<TModal>) => {
  if (!isOpened) return null

  return (
    <Portal>
      <div className={cls['root']}>
        <div className={cls['overlay']}></div>
        <div className={cls['wrapper']}>
          <div className={`${cls['content']} ${cls[`content--${type}`]}`}>
            <div className={cls['topbar']}>
              <img src={topbar} alt="Topbar" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

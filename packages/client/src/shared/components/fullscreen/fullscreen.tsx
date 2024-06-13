import styles from './styles.module.css'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { ICONS } from '@/shared/constants/icons'
import classNames from 'classnames'

export const Fullscreen: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const documentElement = useRef(document.documentElement)
  const handleFullscreenToggle = useCallback(() => {
    setIsFullscreen(prevIsFullscreen => !prevIsFullscreen)
  }, [])

  useEffect(() => {
    if (isFullscreen) {
      documentElement.current.requestFullscreen()
    } else if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }, [isFullscreen])

  return (
    <div className={styles.fullscreen} onClick={handleFullscreenToggle}>
      <img
        className={classNames(styles.fullscreen__icon, {
          [styles.fullscreen__icon_active]: isFullscreen,
        })}
        src={isFullscreen ? ICONS.FullscreenIn : ICONS.FullscreenOut}
        alt="Fullscreen"
      />
    </div>
  )
}

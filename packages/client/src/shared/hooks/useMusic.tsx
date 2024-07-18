import { useCallback, useEffect, useRef, useState } from 'react'
import { ICONS } from '../constants'

interface IMusicProps {
  src: string
  loop?: boolean
  conditional?: boolean
  ui?: boolean
}

export const useMusic = (props: IMusicProps) => {
  const { loop = false, src = '', conditional = true, ui = false } = props

  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const onClickBtn = useCallback(() => {
    setIsPlaying(prevState => !prevState)
  }, [])

  useEffect(() => {
    const audio = new Audio()

    audio.src = src
    audio.loop = loop

    audioRef.current = audio

    document.body.appendChild(audio)

    return () => {
      // Убираем со страницы, убираем звук
      audioRef.current?.pause()
      document.body.removeChild(audio)
    }
  }, [])

  useEffect(() => {
    if (ui || !conditional) return

    if (!audioRef.current?.HAVE_ENOUGH_DATA) return

    audioRef.current?.play()
  }, [conditional, ui])

  useEffect(() => {
    if (!ui || !conditional) return

    const onPlayUiHandler = () => {
      if (!audioRef.current?.HAVE_ENOUGH_DATA) return

      if (isPlaying) {
        audioRef.current?.pause()

        return
      }

      audioRef.current?.play()
    }

    buttonRef.current?.addEventListener('click', onPlayUiHandler)

    return () => {
      buttonRef.current?.removeEventListener('click', onPlayUiHandler)
    }
  }, [isPlaying, conditional, ui])

  if (!ui) return null

  return (
    <button style={buttonStyle} onClick={onClickBtn} ref={buttonRef}>
      {!isPlaying && <img src={ICONS.Play} alt={'Начать мелодию'} />}
      {isPlaying && <img src={ICONS.Pause} alt={'Остановить мелодию'} />}
    </button>
  )
}

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
}

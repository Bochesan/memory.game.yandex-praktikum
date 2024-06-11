import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { Box, Typography } from '@mui/material'
import { mergeObjects, Button, LinkText, LEVELS, LEVELS_INFO } from '@/shared'
import { Item } from './item'
import svgUrl from '@/assets/maps.svg'
import styles from './styles.module.css'

export const LevelMap = () => {
  const navigate = useNavigate()
  const [levels, setLevels] = useState(mergeObjects(LEVELS, LEVELS_INFO))
  const [level, setLevel] = useState(levels[0])

  const handleClickLevel = (levelId: number) => {
    levels.forEach(level => {
      level.isCurrent = false
      if (level.id === levelId) {
        level.isCurrent = true
        setLevel(level)
      }
    })
    setLevels(levels)
  }

  const handleStartGame = () =>
    navigate('/game', { state: { levelId: level.id } })

  const handleAfterInjection = (svg: SVGSVGElement) => {
    const container = createRoot(svg.getElementById('items'))

    container.render(
      levels.map(level => {
        const currentLevel = level as {
          id: number
          x: number
          y: number
          isCurrent: boolean
          isPassed: boolean
        }
        return (
          <Item
            key={currentLevel.id}
            id={currentLevel.id}
            x={currentLevel.x}
            y={currentLevel.y}
            isCurrent={currentLevel.isCurrent}
            isPassed={currentLevel.isPassed}
            onClick={(id: number) => handleClickLevel(id)}
          />
        )
      })
    )
  }

  const selectLevel = level as {
    id: number
    title: string
    description: string
    isPassed: boolean
  }

  return (
    <div className="level-map">
      <Box
        position="fixed"
        zIndex={100}
        top={20}
        left={40}
        display="inline-flex"
        flexDirection="column"
        height="100%">
        <Box mb={6}>
          <Typography color="orange" variant="h4">
            Уровень {selectLevel.id}
          </Typography>
          <Typography color="#B0F2FF" variant="h5">
            {selectLevel.title}
          </Typography>
        </Box>
        <Box
          flexGrow={0.8}
          gap={6}
          display="flex"
          flexDirection="column"
          alignItems="flex-start">
          <Typography
            color="white"
            maxWidth={320}
            fontFamily="Roboto"
            fontSize={18}
            variant="body1">
            {selectLevel.description}
          </Typography>
          {selectLevel.isPassed && (
            <Button onClick={handleStartGame}>Играть</Button>
          )}
        </Box>
        <LinkText href="/">Назад в меню</LinkText>
      </Box>
      <ReactSVG
        src={svgUrl}
        className={styles.root}
        afterInjection={handleAfterInjection}
        fallback={() => <Navigate to="/error" />}
      />
    </div>
  )
}

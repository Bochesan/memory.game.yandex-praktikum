import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { Box, Typography } from '@mui/material'
import { mergeObjects, Button, LinkText, LEVELS, LEVELS_INFO } from '@/shared'
import { useProgress } from '@/shared/hooks'
import { Item } from './item'
import svgUrl from '@/assets/maps.svg'
import styles from './styles.module.css'

export const LevelMap = () => {
  const navigate = useNavigate()
  const [levels, setLevels] = useState(mergeObjects(LEVELS, LEVELS_INFO))
  const [level, setLevel] = useState(levels[0])
  const { completedLevels, selectLevel } = useProgress()

  useEffect(() => {
    levels.forEach(level => {
      if (completedLevels.includes(level.id)) {
        level.isPassed = true
      }
      level.isCurrent = false
      if (level.id === completedLevels[completedLevels.length - 1]) {
        level.isCurrent = true
        setLevel(level)
      }
    })
  }, [completedLevels])

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

  const handleStartGame = () => {
    selectLevel(level.id)
    navigate('/game', {})
  }

  const handleMainPage = () => navigate('/', {})

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

  const selectedLevel = level as {
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
            Уровень {selectedLevel.id}
          </Typography>
          <Typography color="#B0F2FF" variant="h5">
            {selectedLevel.title}
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
            {selectedLevel.description}
          </Typography>
          {selectedLevel.isPassed && (
            <Button onClick={handleStartGame}>Играть</Button>
          )}
        </Box>
        <LinkText onClick={handleMainPage}>Назад в меню</LinkText>
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

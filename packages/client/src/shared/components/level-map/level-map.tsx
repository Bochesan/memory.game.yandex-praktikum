import { ReactSVG } from 'react-svg'
import svgUrl from '@/assets/maps.svg'

import styles from './styles.module.css'
import { Item } from './item'
import { createRoot } from 'react-dom/client'
import { Navigate, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Button, LinkText, LEVELS } from '@/shared'

export const LevelMap = () => {
  const navigate = useNavigate()

  const handleAfterInjection = (svg: SVGSVGElement) => {
    const container = createRoot(svg.getElementById('items'))

    container.render(
      LEVELS.map((level, index) => <Item level={index + 1} {...level} />)
    )
  }

  const handleStartGame = () => navigate('/game', { state: { level: 1 } })

  return (
    <div>
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
            Уровень 3
          </Typography>
          <Typography color="#B0F2FF" variant="h5">
            Перевал дракона
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
            Самый главный враг: это некая расса питающая душами живых существ. И
            уничтожает целые планеты. Обнаруживая жизнь неким сканером, который
            ее видит если она присутствует на поверхности планеты. И гиганты как
            раз и не дают засветить жизнь на этом сканере.
          </Typography>
          <Button onClick={handleStartGame}>Играть</Button>
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

import {
  computCardRow,
  computCardWidth,
  computCardHeight,
  computCanvasWidth,
  computCanvasHeight,
  createCardValues,
} from './utils'
import { GameLevelParamsType, GameLevelType } from './types'

export const PATH_SPRITE = '/game'
export const PATH_SPRITE_CARD = '/game/card.png'
export const PATH_SPRITE_CARD_HOVER = '/game/card-hover.png'

export const FRAME_TIMOUT = 500
export const CARD_MARGIN = 10
export const CARD_SCORE = 2

const LEVELS_PARAMS: GameLevelParamsType[] = [
  {
    id: 1,
    title: 'Начало пути',
    description:
      'Приветствуем, путник! Вам предстоит пройти игру Memory. Перед вами будет набор карт, с парами одинаковых изображений на одной стороне. Все карты перемешиваются и выкладываются лицевой стороной вниз. Цель игры - найти все пары одинаковых карт, используя как можно меньше ходов. Удачи!',
    gameTimer: 30,
    cardCount: 6,
    cardCol: 3,
  },
  {
    id: 2,
    title: 'Лес Заклинаний',
    description:
      'Таинственный лес, наполненный магией и скрытыми опасностями. Здесь вам предстоит сразиться с лесным мастером карт и найти путь через зачарованные деревья.',
    gameTimer: 25,
    cardCount: 8,
    cardCol: 4,
  },
  {
    id: 3,
    title: 'Мост Стуков',
    description:
      'Старый, покосившийся мост через бурную реку. Легенды говорят, что под мостом живет карточный тролль. Пройдите через это место, чтобы продолжить свой путь.',
    gameTimer: 30,
    cardCount: 10,
    cardCol: 5,
  },
  {
    id: 4,
    title: 'Забытые Руины',
    description:
      'Древние руины, где можно найти ценные артефакты и знания. Однако, они охраняются злобными карточными духами и ловушками.',
    gameTimer: 20,
    cardCount: 10,
    cardCol: 5,
  },
  {
    id: 5,
    title: 'Туманный Холм',
    description:
      'Вечно окутанный густым туманом холм, где легко потеряться. Лишь самые смелые путешественники осмеливаются пройти через это место.',
    gameTimer: 30,
    cardCount: 12,
    cardCol: 4,
  },
  {
    id: 6,
    title: 'Каменные Пещеры',
    description:
      'Лабиринт из темных пещер, наполненных опасными существами и ловушками. Вам нужно найти путь через этот каменный лабиринт.',
    gameTimer: 20,
    cardCount: 12,
    cardCol: 4,
  },
  {
    id: 7,
    title: 'Горная Тропа',
    description:
      'Узкая тропинка, ведущая через высокие горы. Здесь вам предстоит сражаться с горными зверями и преодолевать крутые склоны.',
    gameTimer: 30,
    cardCount: 16,
    cardCol: 4,
  },
  {
    id: 8,
    title: 'Затерянный Город',
    description:
      'Древний город, давно заброшенный его жителями. Исследуйте его разрушенные улицы и здания, чтобы найти скрытые сокровища и информацию о карточном драконе.',
    gameTimer: 25,
    cardCount: 16,
    cardCol: 4,
  },
  {
    id: 9,
    title: 'Проклятое Болото',
    description:
      'Мрачное болото, полное ядовитых растений и опасных тварей. Легенды гласят, что здесь обитает призрак карточного колдуна.',
    gameTimer: 20,
    cardCount: 16,
    cardCol: 4,
  },
  {
    id: 10,
    title: 'Огненные Поля',
    description:
      'Опасная территория, где земля извергает огонь и лаву. Вам предстоит справиться с жаром и найти безопасный путь через эти земли.',
    gameTimer: 35,
    cardCount: 20,
    cardCol: 5,
  },
  {
    id: 11,
    title: 'Логово Дракона',
    description:
      'Последняя остановка на вашем пути. Логово карточного дракона, где вам предстоит сразиться с главным противником и завершить свое великое приключение.',
    gameTimer: 25,
    cardCount: 20,
    cardCol: 5,
  },
]

export const LEVELS_INFO: GameLevelType[] = LEVELS_PARAMS.map(
  (level: GameLevelParamsType) => {
    const cardRow = computCardRow(level.cardCount, level.cardCol)
    const cardValues = createCardValues(level.cardCount)
    const cardWidth = computCardWidth(level.cardCol, cardRow, CARD_MARGIN)
    const cardHeight = computCardHeight(cardWidth)
    const canvasWidth = computCanvasWidth(cardWidth, level.cardCol, CARD_MARGIN)
    const canvasHeight = computCanvasHeight(cardHeight, cardRow, CARD_MARGIN)
    return {
      ...level,
      cardRow,
      cardValues,
      cardWidth,
      cardHeight,
      canvasWidth,
      canvasHeight,
    }
  }
)

export enum TypeModal {
  Lose = 'lose',
  Win = 'win',
  Exit = 'exit',
}

export type TModal = {
  isOpened: boolean
  type: TypeModal
}

export type TModalAction = TModal & {
  lvlName: string
}

export type TModalNonType = Omit<TModalAction, 'type'>

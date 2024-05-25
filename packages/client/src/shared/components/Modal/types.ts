export enum TypeModal {
  Lose,
  Win,
  Exit,
}

export type TModal = {
  isOpened: boolean
  type: TypeModal
}

export type TModalAction = TModal & {
  lvlName: string
}

export type TModalNonType = Omit<TModalAction, 'type'>

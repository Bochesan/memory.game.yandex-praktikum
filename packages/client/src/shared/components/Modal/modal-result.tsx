import { Modal } from '.'
import cls from './modal-content.module.css'
import { Button, Typography } from '@mui/material'
import { MouseEvent } from 'react'
import { TModalNonType, TypeModal } from './types'

// Компонент модалки победы или поражения

interface IProps extends TModalNonType {
  type: TypeModal.Win | TypeModal.Lose
  onContinue: (e?: MouseEvent<HTMLButtonElement>) => void
}

export const ModalResult = ({
  onContinue,
  lvlName,
  isOpened,
  type,
}: IProps) => {
  return (
    <Modal isOpened={isOpened} type={type}>
      <div className={cls['result']}>
        <Typography
          marginBottom="10px"
          fontSize="60px"
          variant="h3"
          color="white">
          {type === TypeModal.Win ? 'Победа!' : 'Поражение!'}
        </Typography>
        <Typography fontSize="24px" marginBottom="60px" color="#BAB8BB">
          {lvlName}
        </Typography>
      </div>

      <div className={cls['actions']}>
        <div className={cls['approve-wrapper']}>
          <Button
            className={cls['approve']}
            size="large"
            color="inherit"
            onClick={onContinue}>
            <span>Продолжить</span>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

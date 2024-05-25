import { Modal } from '.'
import cls from './modal-content.module.css'
import { Button, Typography } from '@mui/material'
import { MouseEvent } from 'react'
import { TModalNonType, TypeModal } from './types'

// Компонент модалки для выхода k
interface IProps extends TModalNonType {
  onExit: (e?: MouseEvent<HTMLButtonElement>) => void
  onContinue: (e?: MouseEvent<HTMLButtonElement>) => void
  lvlNumber: number
}

export const ModalExit = ({
  onExit,
  onContinue,
  lvlName,
  isOpened,
  lvlNumber,
}: IProps) => {
  return (
    <Modal isOpened={isOpened} type={TypeModal.Exit}>
      <div className={cls['exit']}>
        <Typography marginBottom="8px" fontSize="22px" color="white">
          Уровень {lvlNumber}
        </Typography>
        <Typography marginBottom="40px" fontSize="22px" color="#BAB8BB">
          {lvlName}
        </Typography>
        <Typography marginBottom="50px" fontSize="22px" color="white">
          Вы желаете выйти из игры?
        </Typography>
      </div>
      <div className={cls['actions']}>
        <div className={cls['approve-wrapper']}>
          <Button
            size="large"
            color="inherit"
            className={cls['approve']}
            onClick={onContinue}>
            <span>Да</span>
          </Button>
        </div>
        <div className={cls['approve-dark-wrapper']}>
          <Button
            size="large"
            color="inherit"
            className={cls['approve-dark']}
            onClick={onExit}>
            <span>Нет</span>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

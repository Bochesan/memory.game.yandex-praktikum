import { useState } from 'react'
import styles from './form-item-discus.module.css'
import { ICONS } from '@/shared/constants'
import answer from '@/assets/images/icons/answer.svg'
import FormBlockActions from '../form-block-actions/form-block-actions'
import FormBlockWrapper from '../forum-block-wrapper/form-block-wrapper'
import FormBlockMain from '../form-block-main/form-block-main'
import FormBlockIcon from '../form-block-icon/form-block-icon'
import FormBlockBody from '../form-block-body/form-block-body'

const ForumItemDiscus = () => {
  const [btnClicked, setBtnClicked] = useState(false)

  return (
    <FormBlockWrapper>
      <div className={styles.top}>
        <FormBlockIcon path={ICONS.Emblem} alt="Эмблема" />
        <FormBlockMain title="Новая тема" author="Игорь Николаев" />
        <div className={styles.about}>
          <div className={styles.count}>{34} ответа</div>
          <div className={styles.date}>27.07.2022</div>
        </div>
      </div>
      <FormBlockBody>
        <p>
          Инсайдер Dusk Golem раскрыл ещё немного подробностей о закулисье
          франшизы Resident Evil. В частности, он поведал, какие ремейки
          «Обители зла» добрались до производства, а какие — нет.
        </p>
        {btnClicked && (
          <div className={styles.form}>
            <div className={styles.box}>
              <textarea placeholder="Введите текст темы"></textarea>
              <img src={answer} alt="Иконка Темы" />
            </div>
          </div>
        )}
      </FormBlockBody>

      <FormBlockActions
        onClick={
          btnClicked ? () => console.log(true) : () => setBtnClicked(true)
        }>
        {btnClicked ? 'Ответить' : 'Отправить ответ'}
      </FormBlockActions>
    </FormBlockWrapper>
  )
}
export default ForumItemDiscus

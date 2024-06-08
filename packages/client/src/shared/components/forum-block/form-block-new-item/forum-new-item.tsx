import styles from './forum-new-item.module.css'
import question from '@/assets/images/icons/question.svg'
import answer from '@/assets/images/icons/answer.svg'
import { ICONS } from '@/shared/constants'
import FormBlockActions from '../form-block-actions/form-block-actions'
import FormBlockWrapper from '../forum-block-wrapper/form-block-wrapper'
import FormBlockMain from '../form-block-main/form-block-main'
import FormBlockIcon from '../form-block-icon/form-block-icon'
import FormBlockBody from '../form-block-body/form-block-body'

const ForumNewItem = () => {
  return (
    <FormBlockWrapper>
      <div className={styles.top}>
        <FormBlockIcon path={ICONS.Emblem} alt="Эмблема" />
        <FormBlockMain
          title="Новая тема"
          author="Игорь Николаев"
          className={styles.left}
        />
        <div className={styles.date}>27.05.24</div>
      </div>
      <FormBlockBody>
        <div className={styles.box}>
          <input placeholder="Введите тему" />
          <img src={question} alt="Иконка Вопроса" />
        </div>
        <div className={styles.box}>
          <textarea placeholder="Введите текст темы"></textarea>
          <img src={answer} alt="Иконка Темы" />
        </div>
      </FormBlockBody>
      <FormBlockActions />
    </FormBlockWrapper>
  )
}

export default ForumNewItem

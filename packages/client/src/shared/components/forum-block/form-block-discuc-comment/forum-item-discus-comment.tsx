import styles from './form-item-discus-comment.module.css'
import { ICONS } from '@/shared/constants'
import FormBlockWrapper from '../forum-block-wrapper/form-block-wrapper'
import FormBlockIcon from '../form-block-icon/form-block-icon'
import FormBlockAuthor from '../form-block-author/form-block-author'
import FormBlockBody from '../form-block-body/form-block-body'

const ForumItemDiscusComment = () => {
  return (
    <FormBlockWrapper>
      <div className={styles.top}>
        <FormBlockIcon path={ICONS.Comment} alt="Комментарий" />
        <div className={styles.info}>
          <FormBlockAuthor author={'Игорь Николаев'} />
        </div>
        <div className={styles.date}>27.07.2022</div>
      </div>
      <FormBlockBody>
        <p>
          {' '}
          Инсайдер Dusk Golem раскрыл ещё немного подробностей о закулисье
          франшизы Resident Evil. В частности, он поведал, какие ремейки
          «Обители зла» добрались до производства, а какие — нет.
        </p>
      </FormBlockBody>
    </FormBlockWrapper>
  )
}
export default ForumItemDiscusComment

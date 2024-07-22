import { SetStateAction, useState } from 'react'
import styles from './form-item-discus.module.css'
import { ICONS } from '@/shared/constants'
import answer from '@/assets/images/icons/answer.svg'
import {
  useGetUserQuery,
  useGetUserInternalQuery,
  useAddCommentMutation,
} from '@/shared'
import FormBlockActions from '../form-block-actions/form-block-actions'
import FormBlockWrapper from '../forum-block-wrapper/form-block-wrapper'
import FormBlockMain from '../form-block-main/form-block-main'
import FormBlockIcon from '../form-block-icon/form-block-icon'
import FormBlockBody from '../form-block-body/form-block-body'

interface IForumBlockDiscusProps {
  id?: number
  title?: string
  message?: string
  author?: string
  count?: number
  date?: Date
}

const ForumItemDiscus = (props: IForumBlockDiscusProps) => {
  const [btnClicked, setBtnClicked] = useState(false)
  const [comment, setComment] = useState('')
  const [errors, setErrors] = useState({ comment: '' })
  const [addComment] = useAddCommentMutation()
  const {
    id = 1,
    title = '',
    message = '',
    author = '',
    // count = 0,
    date = new Date(),
  } = props

  // Получаем логин юзера от api яндекса
  const { data, isSuccess } = useGetUserQuery()
  const login = data?.login || ''

  // Получаемя данные пользоватеья из внутреннего api
  const { data: internalData } = useGetUserInternalQuery(
    { login },
    { skip: !isSuccess }
  )

  const handleCommentChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setComment(event.target.value)
    setErrors({ ...errors, comment: '' })
  }

  const handleAddComment = async () => {
    setBtnClicked(!btnClicked)

    if (btnClicked) {
      let hasError = false
      const newErrors = { comment: '' }

      if (comment.trim() === '') {
        newErrors.comment = 'Описание не может быть пустым'
        hasError = true
      }

      if (hasError) {
        setErrors(newErrors)
      } else {
        try {
          const commentItem = {
            user_id: internalData.id,
            topic_id: id,
            message_text: comment,
          }
          await addComment(commentItem)
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.log(`Не удалось добавить комментарий: ${error.message}`)
          }
        }
        setComment('')
        setErrors({ comment: '' })
      }
    }
  }

  return (
    <FormBlockWrapper>
      <div className={styles.top}>
        <FormBlockIcon path={ICONS.Emblem} alt="Эмблема" />
        <FormBlockMain title={title} author={author} />
        <div className={styles.about}>
          {/* <div className={styles.count}>{34} ответа</div> */}
          <div className={styles.date}>
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
      </div>
      <FormBlockBody>
        <p>{message}</p>
        {btnClicked && (
          <div className={styles.form}>
            <div className={styles.box}>
              <textarea
                placeholder="Введите текст комментария"
                value={comment}
                onChange={handleCommentChange}></textarea>
              <img src={answer} alt="Иконка Темы" />
            </div>
          </div>
        )}
      </FormBlockBody>

      <FormBlockActions onClick={handleAddComment}>
        {btnClicked ? 'Отправить' : 'Ответить'}
      </FormBlockActions>
    </FormBlockWrapper>
  )
}
export default ForumItemDiscus

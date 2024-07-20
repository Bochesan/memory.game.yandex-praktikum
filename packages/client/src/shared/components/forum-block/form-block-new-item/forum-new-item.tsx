import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './forum-new-item.module.css'
import question from '@/assets/images/icons/question.svg'
import answer from '@/assets/images/icons/answer.svg'
import { ICONS } from '@/shared/constants'
import {
  useGetUserQuery,
  useGetUserInternalQuery,
  useAddTopicMutation,
} from '@/shared'
import FormBlockActions from '../form-block-actions/form-block-actions'
import FormBlockWrapper from '../forum-block-wrapper/form-block-wrapper'
import FormBlockMain from '../form-block-main/form-block-main'
import FormBlockIcon from '../form-block-icon/form-block-icon'
import FormBlockBody from '../form-block-body/form-block-body'

const ForumNewItem = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({ title: '', description: '' })
  const [addTopic] = useAddTopicMutation()
  const navigate = useNavigate()

  // Получаем логин юзера от api яндекса
  const { data, isSuccess } = useGetUserQuery()
  const login = data?.login || ''

  // Получаемя данные пользоватеья из внутреннего api
  const { data: internalData } = useGetUserInternalQuery(
    { login },
    { skip: !isSuccess }
  )

  const handleTitleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setTitle(event.target.value)
    setErrors({ ...errors, title: '' })
  }

  const handleDescriptionChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setDescription(event.target.value)
    setErrors({ ...errors, description: '' })
  }

  const handleAddTopic = async () => {
    let hasError = false
    const newErrors = { title: '', description: '' }

    if (title.trim() === '') {
      newErrors.title = 'Тема не может быть пустой'
      hasError = true
    }

    if (description.trim() === '') {
      newErrors.description = 'Описание не может быть пустым'
      hasError = true
    }

    if (hasError) {
      setErrors(newErrors)
    } else {
      try {
        const topic = {
          user_id: internalData.id,
          title: title,
          message_text: description,
        }
        await addTopic(topic)
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(`Не удалось добавить топик: ${error.message}`)
        }
      }
      setTitle('')
      setDescription('')
      setErrors({ title: '', description: '' })
      navigate(`/forum`)
    }
  }

  return (
    <FormBlockWrapper>
      <div className={styles.top}>
        <FormBlockIcon path={ICONS.Emblem} alt="Эмблема" />
        <FormBlockMain
          title="Новая тема"
          author={`${data?.display_name}`}
          className={styles.left}
        />
        <div className={styles.date}>
          {new Date().toISOString().slice(0, 10)}
        </div>
      </div>
      <FormBlockBody>
        <div className={styles.box}>
          <input
            placeholder="Введите тему"
            value={title}
            onChange={handleTitleChange}
          />
          <img src={question} alt="Иконка Вопроса" />
          {errors.title && <div className={styles.error}>{errors.title}</div>}
        </div>
        <div className={styles.box}>
          <textarea
            placeholder="Введите текст темы"
            value={description}
            onChange={handleDescriptionChange}></textarea>
          <img src={answer} alt="Иконка Темы" />
          {errors.description && (
            <div className={styles.error}>{errors.description}</div>
          )}
        </div>
      </FormBlockBody>
      <FormBlockActions onClick={handleAddTopic} />
    </FormBlockWrapper>
  )
}

export default ForumNewItem

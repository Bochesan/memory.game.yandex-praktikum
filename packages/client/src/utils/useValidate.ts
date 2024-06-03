const errorMessages = {
  required: 'Обязательное поле для заполнения',
  name: 'В поле может быть использована латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  login:
    'Поле должно содержать от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  email: 'Введите корректный адрес электронной почты',
  password:
    'Поле должно содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  phone: 'от 10 до 15 символов, состоит из цифр, может начинаться с плюса',
}
export const useValidate = (rules: Array<string>, value: string) => {
  let valid = true
  let message = ''

  rules.forEach(rule => {
    if (valid) {
      if (rule === 'required') {
        if (value === '') {
          valid = false
          message = errorMessages.required
        }
      }

      if (rule === 'name') {
        const pattern = /^[A-ZА-ЯЁ][a-zA-ZА-ЯЁ-]*$/
        if (!pattern.test(value)) {
          valid = false
          message = errorMessages.name
        }
      }

      if (rule === 'login') {
        const pattern = /^[a-zA-Z0-9_-]{3,20}$/
        const patternNumbers = /^\d+$/
        if (!pattern.test(value) || patternNumbers.test(value)) {
          valid = false
          message = errorMessages.login
        }
      }

      if (rule === 'email') {
        const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        if (!pattern.test(value)) {
          valid = false
          message = errorMessages.email
        }
      }

      if (rule === 'password') {
        const pattern = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/
        if (!pattern.test(value)) {
          valid = false
          message = errorMessages.password
        }
      }

      if (rule === 'phone') {
        const pattern = /^\+?\d{10,15}$/
        if (!pattern.test(value)) {
          valid = false
          message = errorMessages.phone
        }
      }
    }
  })

  return { valid, message }
}

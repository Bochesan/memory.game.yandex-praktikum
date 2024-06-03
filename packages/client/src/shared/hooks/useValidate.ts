import { PATTERNS, VALIDATION_ERRORS } from '@/shared'
export const useValidate = (rules: Array<string>, value: string) => {
  let valid = true
  let message = ''

  const setError = (errorMessage: string) => {
    valid = false
    message = errorMessage
  }

  rules.forEach(rule => {
    if (valid) {
      switch (rule) {
        case 'required':
          if (value === '') {
            setError(VALIDATION_ERRORS.Required)
          }
          break

        case 'name':
          if (!PATTERNS.Name.test(value)) {
            setError(VALIDATION_ERRORS.Name)
          }
          break

        case 'login':
          if (!PATTERNS.Login.test(value) || PATTERNS.Numbers.test(value)) {
            setError(VALIDATION_ERRORS.Login)
          }
          break

        case 'email':
          if (!PATTERNS.Email.test(value)) {
            setError(VALIDATION_ERRORS.Email)
          }
          break

        case 'password':
          if (!PATTERNS.Password.test(value)) {
            setError(VALIDATION_ERRORS.Password)
          }
          break

        case 'phone':
          if (!PATTERNS.Phone.test(value)) {
            setError(VALIDATION_ERRORS.Phone)
          }
          break
      }
    }
  })

  return { valid, message }
}

export const VALIDATION_ERRORS = {
  Required: 'Обязательное поле для заполнения',
  Name: 'В поле может быть использована латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  Login:
    'Поле должно содержать от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  Email: 'Введите корректный адрес электронной почты',
  Password:
    'Поле должно содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  Phone:
    'Поле должно содержать от 10 до 15 символов, состоит из цифр, может начинаться с плюса',
}
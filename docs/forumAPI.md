# API: Форум

## Окружение

- host: http://localhost:3001

## Ручки

### Пользователь

- get: /api/users?login={login} - получение пользователя по логину API яндекса
- post: /api/users - добавить пользователя

### Темы

- get: /api/topics - получение всех тем
- get: /api/topics/{id} - получение темы, со всеми комментарими и ответами на комментарии, по id темы
- post: /api/topics - добавить тему

### Коментарии

- get: /api/comments?topic_id={topic_id} - получение всех комментариев по id темы
- post: /api/comments - добавить комментарий к теме

### Ответы

- get: /api/reply?topic_id={topic_id} - получение всех ответов, на все комментарии, по id темы
- post: /api/reply - добавить ответ к комментарию

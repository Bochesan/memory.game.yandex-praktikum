# Структура базы данных: Форум

## Таблицы

### Users

- `id` (PK): Идентификатор пользователя
- `login`: Логин
- `first_name`: Имя
- `second_name`: Фамилия
- `display_name`: Никнейм

### Topics

- `id` (PK): Идентификатор топика
- `title`: Заголовок
- `message_text`: Текст сообщения
- `created_at`: Дата создания
- `user_id` (FK): Идентификатор пользователя, создавшего топик

### Comments

- `id` (PK): Идентификатор комментария
- `message_text`: Текст сообщения
- `created_at`: Дата создания
- `topic_id` (FK): Идентификатор топика, к которому относится комментарий
- `user_id` (FK): Идентификатор пользователя, оставившего комментарий

### Replies

- `id` (PK): Идентификатор ответа
- `message_text`: Текст сообщения
- `created_at`: Дата создания
- `comment_id` (FK): Идентификатор комментария, к которому относится ответ
- `user_id` (FK): Идентификатор пользователя, оставившего ответ

## Связи

- Один пользователь может создать много топиков (1:M между `Users` и `Topics`)
- Один пользователь может оставить много комментариев (1:M между `Users` и `Comments`)
- Один пользователь может оставить много ответов (1:M между `Users` и `Replies`)
- Один топик может содержать много комментариев (1:M между `Topics` и `Comments`)
- Один комментарий может содержать много ответов (1:M между `Comments` и `Replies`)

## Окружение

### ./.env

NODE_VERSION=18
CLIENT_PORT=80
SERVER_PORT=3001
POSTGRES_PASSWORD=password
POSTGRES_USER=user
POSTGRES_DB=db
POSTGRES_HOST=memory_game_postgres
POSTGRES_PORT=5432
PGDATA=/data/postgres
PGADMIN_EMAIL=admin@admin.com
PGADMIN_PASSWORD=secret
PGADMIN_PORT=8080

### ./packages/server/.env

POSTGRES_PASSWORD=password
POSTGRES_USER=user
POSTGRES_DB=db
POSTGRES_HOST=memory_game_postgres
POSTGRES_PORT=5432

## Запуск проекта

### Dev режим

docker-compose up postgres
docker-compose up pgadmin
yarn dev

### Сборка

docker-compose up

## Выполнение миграций

cd packages/server
npx sequelize-cli db:migrate

## SQL-запросоы для создания таблиц

```sql
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    login VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    second_name VARCHAR(100) NOT NULL,
    display_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Topics (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    topic_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (topic_id) REFERENCES Topics(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Replies (
    id SERIAL PRIMARY KEY,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comment_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (comment_id) REFERENCES Comments(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
```

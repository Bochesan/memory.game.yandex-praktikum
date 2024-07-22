# Структура базы данных: Реакции

### Reactions

- `id` (PK): Уникальный идентификатор реакции
- `topic_id`: Идентификатор топика
- `reaction_type`: Тип реакции (в формате Unicode)
- `user_id`: Идентификатор пользователя, который оставил эту реакцию

## SQL-запросы для создания таблиц

```sql
CREATE TABLE Reactions (
    id SERIAL PRIMARY KEY,
    topic_id INTEGER,
    reaction_type TEXT,
    user_id INTEGER,
    FOREIGN KEY (topic_id) REFERENCES Topics(topic_id)
);
```
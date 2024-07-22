build: ## Создание образа
	docker-compose build --no-cache

up: ## Создание контейнера
	docker-compose up -d

down: ## Останавливает и удаляет контейнеры
	docker-compose down --remove-orphans

serve: ## Запуск только клиента
	yarn dev --scope=client

server: ## Запуск только сервер
	yarn dev --scope=server

dev:
	docker-compose up postgres -d
	docker-compose up pgadmin -d
	yarn dev
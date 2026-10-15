# SIGNUM site

Сайт [signum-nn.ru](https://signum-nn.ru): каталог, карточки оборудования и форма обращения. Next.js 16, React 19.

## Требования

Node.js 22 или новее, pnpm 11.25.0. API каталога — отдельный проект `safety-api`.

## Запуск

Откройте корень проекта в IDE. Скопируйте `.env.example` в `.env.local` и укажите адрес запущенного API.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Локальный адрес: http://localhost:3000.

```sh
pnpm build
pnpm start
```

## Настройки

`API_URL` — адрес API для сервера Next.js, `NEXT_PUBLIC_API_URL` — адрес для браузера. `ROOT_ID` и `NEXT_PUBLIC_ROOT_ID` для этого сайта равны `1`. `NEXT_PUBLIC_SITE_URL` задаёт адрес сайта.

В рабочей конфигурации API доступен по https://safety-api.ru. Параметры `NEXT_PUBLIC_*` включаются в браузерную сборку; после изменения нужна повторная сборка.

# Максим & Александра — свадебное приглашение

Премиальный одностраничный сайт-приглашение. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

## Сборка

```bash
npm run build
npm run start
```

## Что можно настроить

- **Фото пары** — в `components/Hero.tsx` замените `COUPLE_PHOTO_SRC` на путь к изображению
  в `public/` (например `/couple.jpg`). Пока значение `null`, вместо фото аккуратно
  показывается монограмма «М · А» — макет остаётся премиальным без фотографий.
- **Дата и время свадьбы** — `WEDDING_DATE` в `components/Countdown.tsx`.
- **Программа дня** — массив `SCHEDULE` в `components/Timeline.tsx`.
- **Локации и координаты** — массив `LOCATIONS` в `components/LocationMap.tsx`.
  Кнопка «Построить маршрут» ведёт на Яндекс Карты с готовым маршрутом до точки.
- **Палитра и типографика** — токены цвета в `tailwind.config.ts`
  (`cream`, `parchment`, `espresso`, `cocoa`, `taupe`, `bronze`, `hairline`)
  и шрифты Cormorant Garamond / EB Garamond, подключённые в `app/layout.tsx`.

## Структура

```
app/
  layout.tsx      — шрифты, метаданные
  page.tsx         — сборка секций, одна длинная страница без меню
  globals.css       — бумажная текстура, орнаментальная рамка, токены
components/
  Hero.tsx           — имена, дата, приглашение
  Invitation.tsx     — короткий текст приглашения
  Countdown.tsx       — таймер до свадьбы
  Timeline.tsx        — программа дня
  LocationMap.tsx      — локации + маршрут в Яндекс Картах
  Finale.tsx            — финальный экран
  Reveal.tsx             — обёртка плавного появления (Framer Motion,
                            учитывает prefers-reduced-motion)
  Divider.tsx             — орнаментальный разделитель секций
```

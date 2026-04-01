# Меблерія

Командний JavaScript-проєкт з адаптивною версткою, роботою з бекендом,
інтерактивними секціями, модальними вікнами та відображенням даних з API.

---

## Зміст

- [Про проєкт](#про-проєкт)
- [Що має бути реалізовано](#що-має-бути-реалізовано)
- [Технології](#технології)
- [API](#api)
- [Запуск проєкту локально](#запуск-проєкту-локально)
- [Структура проєкту](#структура-проєкту)
- [HTML-структура](#html-структура)
- [JS-структура](#js-структура)
- [Правила роботи з файлами](#правила-роботи-з-файлами)
- [Правила іменування](#правила-іменування)
- [Робота з гілками](#робота-з-гілками)
- [Правила комітів](#правила-комітів)
- [Правила Pull Request](#правила-pull-request)
- [Робочий процес по задачі](#робочий-процес-по-задачі)
- [Рекомендовані data-_ hooks для JS](#рекомендовані-data_-hooks-для-js)
- [Робота із зображеннями](#робота-із-зображеннями)
- [Основні вимоги до якості](#основні-вимоги-до-якості)
- [Definition of Done для кожної задачі](#definition-of-done-для-кожної-задачі)
- [Корисні команди](#корисні-команди)
- [Деплой](#деплой)
- [Командні ролі](#командні-ролі)
- [Примітка](#примітка)
- [Статус проєкту](#статус-проєкту)

---

## Про проєкт

**Меблерія** — це вебзастосунок для перегляду меблів, фільтрації товарів за
категоріями, перегляду детальної інформації про товар, читання відгуків і
оформлення замовлення.

Проєкт реалізується як командна робота у межах навчального командного проєкту
JavaScript.

Основна ціль — зібрати повноцінний адаптивний інтерфейс, підключити API,
реалізувати UI-логіку та відпрацювати командний процес: Git, Trello, code
review, pull requests, ролі team lead / scrum master.

---

## Що має бути реалізовано

Згідно з документацією проєкту, у застосунку мають бути такі конструктивні
блоки:

- Header
- Hero section
- Furniture List section
- About Us section
- FAQ section
- Feedback section
- Furniture Details Modal
- Order Modal
- Footer :contentReference[oaicite:2]{index=2}

Також у проєкті обов’язкові:

- адаптивність під mobile / tablet / desktop;
- робота з бекендом;
- loader під час кожного запиту;
- повідомлення про помилки та успіх;
- README;
- семантична верстка;
- modern-normalize;
- підключення шрифтів через `@font-face`;
- favicon;
- структура файлів, узгоджена team lead’ом.

---

## Технології

### Основні

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite

### Бібліотеки

- `accordion-js` — FAQ accordion
- `swiper` — слайдер відгуків
- `izitoast` — повідомлення про помилки / успіх
- `raty-js` — рейтинг зірочками
- `axios` або `fetch` — запити до API

---

## API

Бекенд документація:

- `https://furniture-store-v2.b.goit.study/api-docs/`

Основні сутності:

- `categories`
- `furniture`
- `feedbacks`
- `orders`

---

## Запуск проєкту локально

### 1. Клонувати репозиторій

```bash
git clone https://github.com/vitaliifedunyk/bug-hunters.git
cd bug-hunters
```

### 2. Встановити залежності

```bash
npm install
```

### 3. Запустити локальний сервер

```bash
npm run dev
```

### 4. Зібрати production build

```bash
npm run build
```

### 5. Перевірити preview build

```bash
npm run preview
```

---

## Структура проєкту

### Корінь проєкту

```text
bug-hunters/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ css/
│  ├─ html/
│  ├─ images/
│  └─ js/
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

### CSS-структура

```text
src/css/
├─ base/
│  ├─ fonts.css
│  ├─ variables.css
│  ├─ reset.css
│  └─ common.css
├─ components/
│  ├─ container.css
│  ├─ button.css
│  ├─ form.css
│  ├─ card.css
│  └─ modal.css
├─ layout/
│  ├─ header.css
│  └─ footer.css
├─ sections/
│  ├─ hero.css
│  ├─ categories.css
│  ├─ products.css
│  ├─ about.css
│  ├─ faq.css
│  └─ reviews.css
└─ main.css
```

### Як використовувати CSS

#### `base/`

Базові глобальні стилі. Тут не пишеться стилізація конкретної секції.

- `fonts.css` — усі `@font-face`
- `variables.css` — кольори, шрифти, відступи, radius, shadows, z-index
- `reset.css` — normalize + reset
- `common.css` — базові стилі `body`, `section`, headings, utility classes

#### `components/`

Перевикористовувані стилі, які можна застосовувати у різних секціях.

- `container.css` — `.container`
- `button.css` — `.btn`, `.btn--primary`, `.btn--secondary`
- `form.css` — `.form`, `.form-field`, `.form-input`, `.form-textarea`
- `card.css` — базові card styles
- `modal.css` — `.backdrop`, `.modal`, `.modal__close`

#### `layout/`

Стилі великих повторюваних layout-блоків:

- `header.css`
- `footer.css`

#### `sections/`

Стилі конкретних секцій:

- `hero.css`
- `categories.css`
- `products.css`
- `about.css`
- `faq.css`
- `reviews.css`

### Основні CSS-правила для команди

> Важливо: секційні файли описують тільки конкретний блок, а все повторюване
> має жити в `components/`.

- Не писати хардкод кольорів у секційних файлах.
- Використовувати тільки змінні з `variables.css`.
- Не створювати власні container-стилі.
- Використовувати тільки `.container`.
- Не дублювати стилі кнопок, форм, модалок у секціях.
- Брати готові стилі з `components/`.
- Якщо з’являється новий повторюваний UI-елемент, його потрібно винести в
  `components/`, а не копіювати в кожну секцію.
- У секційних файлах дозволено писати тільки стилі конкретного блоку.

### Приклад

- `hero.css` — тільки hero
- `faq.css` — тільки faq
- `header.css` — тільки header і mobile menu

---

## HTML-структура

```text
src/html/partials/
├─ header/
│  ├─ header.html
│  └─ mobile-menu.html
├─ hero/
│  └─ hero.html
├─ categories/
│  └─ categories.html
├─ products/
│  ├─ products.html
│  ├─ product-card.html
│  └─ load-more.html
├─ about/
│  └─ about.html
├─ faq/
│  └─ faq.html
├─ reviews/
│  └─ reviews.html
├─ footer/
│  └─ footer.html
└─ modals/
   ├─ product-modal.html
   └─ order-modal.html
```

### Який файл за який блок відповідає

- `header/header.html` — desktop/tablet header
- `header/mobile-menu.html` — mobile menu
- `hero/hero.html` — hero section
- `categories/categories.html` — фільтри категорій у блоці меблів
- `products/products.html` — список товарів
- `products/product-card.html` — шаблон картки товару
- `products/load-more.html` — кнопка “Показати ще”
- `about/about.html` — блок “Про нас”
- `faq/faq.html` — FAQ
- `reviews/reviews.html` — відгуки / slider
- `footer/footer.html` — footer
- `modals/product-modal.html` — модалка деталей товару
- `modals/order-modal.html` — модалка замовлення

### Важлива домовленість по HTML

> Блок `Furniture List section` у логіці сторінки складається не з окремих
> секцій, а з частин одного блоку.

```text
categories.html
products.html
load-more.html
```

Тобто це не три різні повноцінні секції сайту, а частини одного блоку зі списком
меблів.

---

## JS-структура

```text
src/js/
├─ api/
│  ├─ categories-api.js
│  ├─ furniture-api.js
│  ├─ feedbacks-api.js
│  └─ orders-api.js
├─ components/
│  ├─ accordion/
│  │  └─ accordion.js
│  ├─ form/
│  │  ├─ form-validation.js
│  │  └─ form-submit.js
│  └─ modal/
│     ├─ open-modal.js
│     ├─ close-modal.js
│     └─ modal-state.js
├─ sections/
│  ├─ header/
│  │  ├─ header.js
│  │  └─ mobile-menu.js
│  ├─ faq/
│  │  └─ faq.js
│  ├─ products/
│  │  ├─ products.js
│  │  ├─ render-products.js
│  │  ├─ filter-products.js
│  │  └─ load-more.js
│  ├─ reviews/
│  │  └─ reviews.js
│  └─ modals/
│     ├─ product-modal.js
│     └─ order-modal.js
├─ services/
│  ├─ loader.js
│  └─ notifications.js
├─ utils/
│  ├─ constants.js
│  ├─ refs.js
│  └─ smooth-scroll.js
└─ main.js
```

### Як використовувати JS-структуру

#### `api/`

Тільки запити до бекенду. Тут не повинно бути DOM-логіки.

- `categories-api.js` — категорії
- `furniture-api.js` — список меблів і деталі меблів
- `feedbacks-api.js` — відгуки
- `orders-api.js` — створення замовлення

#### `components/`

Перевикористовувана логіка.

- `accordion.js` — accordion-js
- `form-validation.js` — перевірка полів
- `form-submit.js` — submit форми
- `open-modal.js` / `close-modal.js` — відкрити / закрити модалку
- `modal-state.js` — стан активного товару / вибраного кольору

#### `sections/`

Логіка конкретного блоку сторінки.

- `header.js` — header navigation / smooth scroll
- `mobile-menu.js` — mobile menu
- `faq.js` — FAQ
- `products.js` — orchestrator блоку меблів
- `render-products.js` — рендер карток
- `filter-products.js` — фільтри категорій
- `load-more.js` — кнопка “Показати ще”
- `reviews.js` — reviews + swiper + rating
- `product-modal.js` — furniture details modal
- `order-modal.js` — submit order form

#### `services/`

Сервісні речі для всього проєкту.

- `loader.js` — show/hide loader
- `notifications.js` — toast messages

#### `utils/`

Допоміжні утиліти.

- `constants.js` — константи
- `refs.js` — централізовані селектори
- `smooth-scroll.js` — плавний скрол

---

## Правила роботи з файлами

### Загальне правило

> Один файл = одна відповідальність.

### Приклад

- `hero.html` — тільки розмітка hero
- `hero.css` — тільки стилі hero
- `header.js` — тільки логіка header

### Не можна

- писати логіку products у `reviews.js`
- стилізувати faq у `hero.css`
- дублювати кнопки у секційних стилях
- робити fetch-запити прямо в `main.js`

### Можна

- використовувати shared styles з `components/`
- використовувати helper-функції з `utils/`
- використовувати `services/` у будь-якій секції

---

## Правила іменування

Це вже внутрішні правила команди, щоб не було хаосу.

### Папки та файли

- тільки англійська
- тільки lowercase
- тільки kebab-case

#### Приклади

```text
product-modal.js
load-more.html
furniture-api.js
```

### CSS-класи

`kebab-case`

#### Приклади

```text
.site-header
.product-card
.review-card__author
```

### JS змінні та функції

- camelCase
- константи — UPPER_SNAKE_CASE

#### Приклади

```text
fetchFurnitureById
showLoader
PRODUCTS_PER_PAGE
```

Це також узгоджується з технічними критеріями щодо іменування.

---

## Робота з гілками

У документації прямо є вимога щодо роботи в команді через Git, розгалуження,
злиття та pull requests. Нижче — наші внутрішні правила, щоб усі робили
однаково.

### Основні гілки

- `main` — стабільна гілка
- `gh-pages` — деплой

### Робочі гілки

Створюються від `main`.

#### Формат

```text
feature/<block-name>
fix/<bug-name>
refactor/<part-name>
docs/<doc-name>
```

#### Приклади

```text
feature/header-html-css
feature/products-fetch-render
feature/reviews-slider
feature/order-modal-form
fix/mobile-menu-close
docs/readme
```

#### Заборонено

- працювати напряму в `main`
- пушити незавершену роботу в `main`
- створювати гілки з пробілами, кирилицею або великими літерами

---

## Правила комітів

### Формат

```text
type(scope): short description
```

### Типи

- `feat` — нова функціональність
- `fix` — виправлення
- `refactor` — рефакторинг без зміни функціоналу
- `style` — стилі / форматування
- `docs` — README / документація
- `chore` — технічні дрібниці

### Приклади

```text
feat(header): add mobile menu markup
feat(products): add category filters
feat(reviews): initialize swiper slider
fix(order-modal): fix close button logic
style(faq): add accordion styles
docs(readme): add project setup instructions
```

### Як не треба

```text
fix
upd
new
123
final
```

Коміт має бути зрозумілим з першого погляду.

---

## Правила Pull Request

Кожна задача зливається в `main` тільки через Pull Request.

### У PR має бути

- коротка назва
- що зроблено
- які файли змінено
- скріншоти або коротке відео, якщо є UI-зміни
- позначка, якщо є незавершена частина

### Перед PR обов’язково

- підтягнути актуальний `main`
- перевірити, що немає конфліктів
- перевірити локально, що нічого не зламалось
- прибрати `console.log`
- перевірити, що назви файлів і змінних чисті

---

## Робочий процес по задачі

Коли розробник бере задачу в Trello, він має пройти такий порядок:

1. Створити свою гілку від `main`
2. Зрозуміти, які саме файли його
3. Зробити HTML
4. Зробити CSS
5. Підключити hooks для JS (`data-_` атрибути)
6. Реалізувати JS-логіку
7. Перевірити адаптивність
8. Перевірити hover / focus / active states
9. Перевірити консоль
10. Зробити commit
11. Створити Pull Request

---

## Рекомендовані data-_ hooks для JS

Щоб HTML і JS були пов’язані зрозуміло, використовуємо `data-*` атрибути.

```text
data-nav-link
data-menu-open
data-menu-close
data-mobile-menu
data-categories-list
data-products-list
data-load-more
data-faq-accordion
data-reviews-list
data-product-modal
data-product-title
data-product-colors
data-open-order-modal
data-product-modal-close
data-order-modal
data-order-form
data-order-modal-close
data-loader
```

---

## Робота із зображеннями

Згідно з технічними критеріями, усі статичні зображення мають бути в `src/images`,
оптимізовані і підготовлені під retina.

### Поточна логіка папок

```text
src/images/hero/
src/images/about/
src/images/categories/
src/images/icons/
src/images/logo/
```

### Правила

- контентні картинки: `.webp`
- 2x версії: `@2x`
- іконки: `.svg`
- логотип: `.svg`

### Назви тільки англійською і lowercase

```text
hero.webp
hero@2x.webp
about.webp
about@2x.webp
soft-furniture.webp
soft-furniture@2x.webp
```

---

## Основні вимоги до якості

Перед фінальним злиттям блок має відповідати таким правилам:

- адаптивність на mobile / tablet / desktop;
- семантична верстка;
- коректні hover / focus states;
- відсутність помилок у консолі;
- loader при бекенд-запитах;
- toast-повідомлення при помилках;
- чисті назви файлів;
- відсутність сміття у комітах.

---

## Definition of Done для кожної задачі

Задача вважається завершеною, якщо:

- реалізовано потрібний блок по макету;
- верстка адаптивна;
- блок підключений у правильні файли;
- JS-логіка працює;
- немає помилок у консолі;
- немає зайвих `console.log`;
- зроблено commit;
- створено Pull Request;
- задача оновлена в Trello.

---

## Корисні команди

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## Деплой

Фінальна версія проєкту має бути задеплоєна на GitHub Pages. Це також входить у
критерії прийняття.

---

## Командні ролі

### Team Lead

- слідкує за архітектурою і структурою
- перевіряє PR
- контролює якість коду
- комунікує з ментором

### Scrum Master

- слідкує за дедлайнами
- веде stand-up
- контролює актуальність задач у Trello

Ці ролі описані в документації командного проєкту.

---

## Примітка

Частина правил у цьому README є:

- обов’язковими критеріями курсу;
- внутрішніми правилами нашої команди, введеними для того, щоб усі працювали
  однаково, швидко і без хаосу.

---

## Статус проєкту

На поточному етапі в репозиторії підготовлено:

- структура папок;
- базова CSS-система;
- HTML partials;
- JS-архітектура;
- assets structure.

Наступний етап:

- верстка секцій;
- реалізація логіки;
- інтеграція з API;
- тестування;
- фінальний деплой.

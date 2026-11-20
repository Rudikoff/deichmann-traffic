export const slides = [
  {
    id: 'hero',
    type: 'hero',
    icon: 'user',
    title: 'ДАЙХМАНН АНДРЕЙ',
    subtitle: 'Трафик-инженер',
    description: 'Трафик-менеджер с фронтенд-бэкграундом. Работаю с Директом, Авито, аналитикой и кодом — вижу воронку целиком.',
    stats: [
      { value: '4-5х', label: 'рост сделок в B2B' },
      { value: '600+', label: 'отзывов на Авито' },
      { value: '5 лет', label: 'ведения проектов' }
    ],
    photo: 'photo-1.jpg',
    cta: { text: 'Обсудить проект', action: 'contacts' }
  },
  {
    id: 'how-i-work',
    type: 'content',
    needsTopPadding: true,
    icon: 'tools',
    title: 'Как я работаю',
    subtitle: 'Не просто настраиваю рекламу — смотрю на бизнес целиком: сайт, код, воронку, аналитику',
    quote: 'Мой принцип — продавать не товар, а решение',
    tools: [
      { icon: 'competitors', text: 'Анализ конкурентов — прямые, сверху, снизу' },
      { icon: 'similarweb', text: 'Similarweb — структура трафика конкурентов' },
      { icon: 'wordstat', text: 'Вордстат — база семантики' },
      { icon: 'ai', text: 'Предиктивная семантика с ИИ — прогноз запросов' },
      { icon: 'be1', text: 'Be1.ru — упущенные ключевые фразы' },
      { icon: 'popsters', text: 'Popsters — анализ контента в соцсетях' },
      { icon: 'analytics', text: 'Сквозная аналитика, коллтрекинг, email-трекинг' }
    ],
    photo: 'photo-2.jpg',
    cta: { text: 'Хочу так же', action: 'contacts' }
  },
  {
    id: 'cases',
    type: 'cases',
    needsTopPadding: true,
    icon: 'chart',
    title: 'Кейсы',
    cases: [
      {
        id: 'stroiekonom',
        logo: 'logo-stroiekonom.png',
        title: 'СтройЭконом',
        niche: 'Продажа стройматериалов',
        stats: [
          { value: '3-4х', label: 'рост прибыли' },
          { value: '600+', label: 'отзывов на Авито' },
          { value: '4', label: 'профиля' },
          { value: '5 лет', label: 'ведения проекта' }
        ],
        cta: { text: 'Хочу результат как здесь', action: 'contacts' }
      },
      {
        id: 'cordismed',
        logo: 'logo-cordismed.png',
        title: 'КордисМед',
        niche: 'Медицинское оборудование (B2B)',
        stats: [
          { value: '4-5х', label: 'рост сделок' },
          { value: '11', label: 'кампаний' },
          { value: '3 мес.', label: 'до результата' }
        ],
        cta: { text: 'Хочу результат как здесь', action: 'contacts' }
      },
      {
        id: 'prokolposkopy',
        logo: 'logo-prokolposkopy.png',
        title: 'PROКольпоскопы',
        niche: 'Обучение врачей (B2B)',
        stats: [
          { value: '3х', label: 'рост аудитории' },
          { value: '3 недели', label: 'до набора группы' }
        ],
        cta: { text: 'Хочу результат как здесь', action: 'contacts' }
      },
      {
        id: 'hrrost',
        logo: 'logo-hrrost.png',
        title: 'HRRost',
        niche: 'Профориентация (B2C)',
        stats: [
          { value: '226', label: 'целевых действий' },
          { value: '2 мес.', label: 'срок работы' },
          { value: '63 ₽', label: 'цена целевого действия' }
        ],
        cta: { text: 'Хочу результат как здесь', action: 'contacts' }
      }
    ]
  },
  {
    id: 'tech-background',
    type: 'content',
    needsTopPadding: true,
    icon: 'code',
    title: 'Технический бэкграунд',
    subtitle: 'Что я умею, помимо рекламы',
    photo: 'screen-ai-quiz-code.png',
    tools: [
      { icon: 'code', text: 'Вёрстка и правка фронтенда — Peugeot: 80% фронта за неделю' },
      { icon: 'quiz', text: 'Конверсионные элементы — квиз с ИИ, PopUp, окно сегментации' },
      { icon: 'analytics', text: 'Аналитика — коллтрекинг и email-трекинг' },
      { icon: 'crm', text: 'CRM + Директ — дообучение на данных из Битрикс' },
      { icon: 'ai', text: 'ИИ-семантика — предиктивная семантика' }
    ],
    cta: { text: 'Проверить мой сайт', action: 'contacts' }
  },
  {
    id: 'avito',
    type: 'cases',
    needsTopPadding: true,
    icon: 'store',
    title: 'Продвижение на Авито',
    cases: [
      {
        id: 'stroiekonom-avito',
        title: 'СтройЭконом',
        niche: 'Продажа стройматериалов',
        photo: 'screen-avito-stroiekonom.png',
        stats: [
          { value: '4', label: 'профиля' },
          { value: '600+', label: 'отзывов' },
          { value: '5 лет', label: 'работы' }
        ],
        cta: { text: 'Хочу такой же поток', action: 'contacts' }
      },
      {
        id: 'cordismed-avito',
        title: 'КордисМед',
        niche: 'Медицинское оборудование (B2B)',
        photo: 'screen-avito-cordis.png',
        stats: [
          { value: '300', label: 'объявлений' },
          { value: '4-7', label: 'обращений в день' },
          { value: '6 мес.', label: 'работы' }
        ],
        cta: { text: 'Хочу такой же поток', action: 'contacts' }
      }
    ]
  },
  {
    id: 'how-i-think',
    type: 'content',
    needsTopPadding: true,
    icon: 'lightbulb',
    title: 'Как я думаю о проектах',
    subtitle: 'Когда я работаю с клиентом, я смотрю не на «настройку рекламы», а на бизнес целиком',
    quote: 'Логика — продавать не товар, а решение — остаётся моим подходом к работе',
    description: 'В проекте КордисМед я выявил боль покупателей медицинского оборудования — они умеют пользоваться техникой, но не умеют привлекать на неё пациентов. Я предложил концепцию «Маркетинговый навигатор»: при покупке оборудования мы бесплатно делаем анализ направления и даём советы, как привлечь пациентов',
    photo: 'screen-mkt-navigator.png',
    cta: { text: 'Хочу маршрут к решению', action: 'contacts' }
  },
  {
    id: 'services',
    type: 'services',
    needsTopPadding: true,
    icon: 'list',
    title: 'Услуги',
    services: [
      {
        num: '01',
        title: 'Яндекс.Директ',
        subtitle: 'Настройка и ведение',
        modal: {
          description: 'Настрою кампании, проверю код и Метрику. Починю то, что мешает заявкам. Добавлю страницы. Ведение — контроль ставок, чистка запросов, отчёты и мелкие правки на сайте.',
          price: 'от 15 000 ₽',
          priceNote: 'Настройка «под ключ» — от 15 000 ₽. Ведение — от 10 000 ₽/мес. Зависит от сложности проекта и количества кампаний.',
          hasCases: true,
          casesLink: 'cases'
        }
      },
      {
        num: '02',
        title: 'Авито',
        subtitle: 'Продвижение и масштабирование',
        modal: {
          description: 'Настрою профиль, соберу семантику, создам и оптимизирую объявления, настрою продвижение. Ведение — обновление объявлений, мониторинг конкурентов, управление ставками, работа с отзывами, еженедельный отчёт.',
          price: 'от 10 000 ₽',
          priceNote: 'Настройка «под ключ» — от 10 000 ₽. Ведение — от 10 000 ₽/мес. Зависит от объёма объявлений и количества регионов.',
          hasCases: true,
          casesLink: 'avito'
        }
      },
      {
        num: '03',
        title: 'Технический аудит',
        subtitle: 'Сайт, код, конверсия',
        modal: {
          description: 'Анализ сайта (код, скорость, вёрстка, конверсионные элементы), рекламных кампаний, объявлений и профиля на Авито. Бесплатно для тех, кто оплатил любую услугу.',
          price: 'от 5 000 ₽',
          priceNote: 'Бесплатно для клиентов, оплативших любую услугу. Отдельно — от 5 000 ₽.',
          hasCases: false,
          casesLink: null
        }
      },
      {
        num: '04',
        title: 'Сквозная аналитика',
        subtitle: 'Звонки, email, CRM',
        modal: {
          description: 'Подключу и настрою коллтрекинг, email-трекинг. Настрою отчёты. Интегрирую сервисы в CRM-системы при наличии технических возможностей.',
          price: 'от 15 000 ₽',
          priceNote: 'Зависит от количества источников трафика и сложности CRM.',
          hasCases: false,
          casesLink: null
        }
      },
      {
        num: '05',
        title: 'ИИ-семантика',
        subtitle: 'Прогноз и тест гипотез',
        modal: {
          description: 'Сбор ключевых слов и фраз, кластеризация запросов, расширение семантического ядра, прогноз возможных запросов с помощью инструментов ИИ.',
          price: 'от 5 000 ₽',
          priceNote: 'Зависит от количества направлений и глубины проработки.',
          hasCases: false,
          casesLink: null
        }
      },
      {
        num: '06',
        title: 'Разработка',
        subtitle: 'Сайты и доработки',
        modal: {
          description: 'Вёрстка лендинга или доработка существующего сайта (HTML/CSS/JS, Vue). Адаптив под мобильные. Подключение форм, кнопок, целей в Метрике. Техническая оптимизация (скорость, Core Web Vitals). Доработка сайта — правка кода, вёрстки, багов, добавление страниц и блоков.',
          price: 'от 20 000 ₽',
          priceNote: 'Разработка «под ключ» — от 20 000 ₽. Доработка сайта — от 2 000 ₽ за задачу.',
          hasCases: true,
          casesLink: 'tech-background'
        }
      },
      {
        num: '07',
        title: 'SEO и SMM',
        subtitle: 'Органический спрос',
        modal: {
          description: 'Оптимизация текстов на сайте и в объявлениях. Гибридный анализ релевантности страниц. Контент-план для социальных сетей, реклама в соцсетях, подготовка контента.',
          price: 'от 50 000 ₽',
          priceNote: 'Зависит от объёма работ и количества площадок.',
          hasCases: false,
          casesLink: null
        }
      }
    ],
    cta: { text: 'Обсудить задачу', action: 'contacts' }
  },
  {
    id: 'contacts',
    type: 'contacts',
    icon: 'phone',
    title: 'Контакты',
    name: 'ДАЙХМАНН АНДРЕЙ',
    tagline: 'Если нужен партнёр, который отвечает за цифры — давайте поговорим',
    phone: '+7 (986) 186-20-00',
    email: 'start@deichmann-traffic.ru',
    vk: 'https://vk.ru/deichmann_traffic',
    photo: 'photo-3.jpg',
    form: {
      fields: [
        { name: 'name', label: 'Имя', type: 'text', required: false },
        { name: 'phone', label: 'Телефон', type: 'tel', required: true, mask: '+7 (___) ___-__-__', validation: '^\\+7 \\(9\\d{2}\\) \\d{3}-\\d{2}-\\d{2}$' }
      ],
      submitText: 'Обсудить проект'
    }
  }
]
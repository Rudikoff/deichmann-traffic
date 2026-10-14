export const slides = [
  {
    id: 'hero',
    type: 'hero',
    title: 'ДАЙХМАНН АНДРЕЙ',
    subtitle: 'Трафик-инженер',
    description: 'Гибрид трафик-менеджера и фронтенд-инженера. Работаю с Директом, Авито, аналитикой и кодом',
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
          { value: '17', label: 'конверсий за 5 дней' },
          { value: '150', label: 'кликов' },
          { value: '7,42 ₽', label: 'цена клика' }
        ],
        cta: { text: 'Хочу результат как здесь', action: 'contacts' }
      }
    ]
  },
  {
    id: 'tech-background',
    type: 'content',
    title: 'Технический бэкграунд',
    subtitle: 'Что я умею, помимо рекламы',
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
    title: 'Продвижение на Авито',
    cases: [
      {
        id: 'stroiekonom-avito',
        title: 'СтройЭконом',
        niche: 'Продажа стройматериалов',
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
    title: 'Как я думаю о проектах',
    subtitle: 'Когда я работаю с клиентом, я смотрю не на «настройку рекламы», а на бизнес целиком',
    quote: 'Логика — продавать не товар, а решение — остаётся моим подходом к работе',
    description: 'В проекте КордисМед я выявил боль покупателей медицинского оборудования — они умеют пользоваться техникой, но не умеют привлекать на неё пациентов. Я предложил концепцию «Маркетинговый навигатор»: при покупке оборудования мы бесплатно делаем анализ направления и даём советы, как привлечь пациентов',
    cta: { text: 'Хочу маршрут к решению', action: 'contacts' }
  },
  {
    id: 'services',
    type: 'services',
    title: 'Услуги',
    services: [
      { num: '01', title: 'Яндекс.Директ', subtitle: 'Настройка и ведение' },
      { num: '02', title: 'Авито', subtitle: 'Продвижение и масштабирование' },
      { num: '03', title: 'Технический аудит', subtitle: 'Сайт, код, конверсия' },
      { num: '04', title: 'Сквозная аналитика', subtitle: 'Звонки, email, CRM' },
      { num: '05', title: 'ИИ-семантика', subtitle: 'Прогноз и тест гипотез' },
      { num: '06', title: 'Разработка', subtitle: 'Сайты и доработки' },
      { num: '07', title: 'SEO и SMM', subtitle: 'Органический спрос' }
    ],
    cta: { text: 'Обсудить задачу', action: 'contacts' }
  },
  {
    id: 'contacts',
    type: 'contacts',
    title: 'Контакты',
    name: 'ДАЙХМАНН АНДРЕЙ',
    tagline: 'Если нужен партнёр, который отвечает за цифры — давайте поговорим',
    phone: '+7 (986) 186-20-00',
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
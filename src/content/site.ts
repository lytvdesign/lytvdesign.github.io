export const locales = ['uk', 'en'] as const;

export type Locale = (typeof locales)[number];
export type CaseSlug = 'enismaro' | 'trexim' | 'complexity' | 'soulmatcher' | 'gunlib';

export const caseSlugs: CaseSlug[] = [
  'enismaro',
  'trexim',
  'complexity',
  'soulmatcher',
  'gunlib',
];

const portfolioBadges = {
  gunlib: ['B2B', 'Personal Project', 'Knowledge Base', 'Defense', 'Responsive Web'],
  trexim: ['B2B', 'Enterprise SaaS', 'Logistics', 'Responsive Web'],
  complexity: ['B2C', 'Social', 'Lifestyle', 'Mobile App'],
  enismaro: ['B2B', 'B2C', 'Food Traceability', 'IoT', 'PWA'],
  soulmatcher: ['B2C', 'AI', 'Dating', 'Mobile App'],
} as const;

export const ui = {
  uk: {
    home: 'Головна',
    about: 'Про мене',
    portfolio: 'Портфоліо',
    contact: 'Контакти',
    language: 'English',
    hero: 'Деталі створюють цілісність',
    collage: {
      projector: {
        eyebrow: 'UI/UX Курси',
        title: 'Projector Institute',
        description: 'Пройшла два інтенсивні UI/UX курси, які посилили моє продуктове мислення та дизайн-процес.',
      },
      gunlib: {
        eyebrow: 'Власний проєкт',
        title: 'GunLib',
        description: 'Фокус на структуруванні складної технічної інформації у зрозумілий, доступний та інтуїтивний досвід.',
      },
    },
    aboutContent: {
      title: 'Про мене',
      imageAlt: 'Аліна у шоломі для картингу',
      imageLabel: 'Фотографії',
      paragraphs: [
        [{ text: 'Привіт! Я Аліна — Product Designer з Харкова👋\nУже ' }, { text: 'понад 6 років', strong: true }, { text: ' я проєктую цифрові продукти, допомагаючи перетворювати складні бізнес-процеси на зрозумілі та зручні інтерфейси.' }],
        [{ text: 'Мій шлях у дизайні почався з бажання створювати інтерфейси, якими зручно і приємно користуватися. З часом я зрозуміла, що найбільше мене захоплює саме проєктування цілісних продуктів — їхньої логіки, структури та взаємодії між людьми, бізнесом і технологіями.\nЗа цей час я працювала над ' }, { text: 'B2B та B2C', strong: true }, { text: ' продуктами у сферах ' }, { text: 'логістики, Healthcare, AI, IoT і соціальних сервісів.', strong: true }],
        [{ text: 'Незалежно від індустрії, мій підхід залишається однаковим: спочатку ' }, { text: 'зрозуміти проблему', strong: true }, { text: ', ' }, { text: 'дослідити контекст', strong: true }, { text: ' і лише потім ' }, { text: 'шукати рішення', strong: true }, { text: '.' }],
        [{ text: 'Зараз я також розвиваю власний проєкт ' }, { text: 'GunLib', strong: true }, { text: ' — інтерактивну базу знань про стрілецьку зброю. Окрім суспільно-корисної складової, він дає можливість глибше працювати з Product Discovery, AI-інструментами та продуктовою аналітикою, перевіряючи дизайн-рішення на основі реальної поведінки користувачів.' }],
      ],
    },
    portfolioContent: {
      title: 'Приклади робіт',
      categoriesLabel: 'Категорії проєкту',
      badges: portfolioBadges,
    },
    learningContent: {
      title: 'Навчання',
      text: 'Вважаю розвиток невід’ємною частиною професії. Навчання в Projector Institute допомогло систематизувати досвід, поглибити продуктове мислення та структурувати підхід до роботи, а зараз я продовжую навчання в магістратурі Каразінського університету за спеціальністю «Цифровий соціум».',
      certificateAlt: 'Сертифікат Projector Institute',
      portraitAlt: 'Аліна Литвиненко',
      crestAlt: 'Герб Каразінського університету',
    },
    contactContent: {
      title: 'Контакти',
      paragraphs: ['Дякую, що знайшли час переглянути мої роботи.', 'Якщо мій підхід до продуктового дизайну вам близький — буду рада поспілкуватися.'],
      cv: 'Переглянути CV',
      copyToast: 'Посилання скопійоване',
    },
  },
  en: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
    language: 'Українська',
    hero: 'Everything has its place',
    collage: {
      projector: {
        eyebrow: 'UI/UX Courses',
        title: 'Projector Institute',
        description: 'I completed two intensive UI/UX courses that strengthened my product thinking and design process.',
      },
      gunlib: {
        eyebrow: 'Personal project',
        title: 'GunLib',
        description: 'A focus on structuring complex technical information into a clear, accessible, and intuitive experience.',
      },
    },
    aboutContent: {
      title: 'About me',
      imageAlt: 'Alina wearing a karting helmet',
      imageLabel: 'Photos',
      paragraphs: [
        [{ text: 'Hi! I’m Alina — a Product Designer from Kharkiv👋\nFor ' }, { text: 'over 6 years', strong: true }, { text: ', I’ve been designing digital products, helping turn complex business processes into clear, intuitive interfaces.' }],
        [{ text: 'My path in design started with a desire to create interfaces that are convenient and enjoyable to use. Over time, I realised that what fascinates me most is designing cohesive products — their logic, structure, and the interaction between people, business, and technology.\nDuring this time, I have worked on ' }, { text: 'B2B and B2C', strong: true }, { text: ' products in ' }, { text: 'logistics, healthcare, AI, IoT, and social services.', strong: true }],
        [{ text: 'Regardless of the industry, my approach remains the same: first ' }, { text: 'understand the problem', strong: true }, { text: ', ' }, { text: 'explore the context', strong: true }, { text: ', and only then ' }, { text: 'look for a solution', strong: true }, { text: '.' }],
        [{ text: 'I am also developing my own project, ' }, { text: 'GunLib', strong: true }, { text: ' — an interactive knowledge base about small arms. Beyond its social value, it lets me work more deeply with Product Discovery, AI tools, and product analytics, validating design decisions through real user behaviour.' }],
      ],
    },
    portfolioContent: {
      title: 'Selected work',
      categoriesLabel: 'Project categories',
      badges: portfolioBadges,
    },
    learningContent: {
      title: 'Learning',
      text: 'I consider growth an integral part of my profession. Studying at Projector Institute helped me structure my experience, deepen my product thinking, and bring more structure to my approach to work. I am currently continuing my studies at Karazin University, specialising in Digital Society.',
      certificateAlt: 'Projector Institute certificate',
      portraitAlt: 'Alina Lytvynenko',
      crestAlt: 'Karazin University crest',
    },
    contactContent: {
      title: 'Contact',
      paragraphs: ['Thank you for taking the time to look through my work.', 'If my approach to product design resonates with you, I would be happy to connect.'],
      cv: 'View CV',
      copyToast: 'Link copied',
    },
  },
} as const;

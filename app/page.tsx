/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';

const translations = {
  ru: {
    lang: 'RU',
    nav: [
      { href: '#mission', label: 'Главная' },
      { href: '#pain', label: 'Проблема' },
      { href: '#solution', label: 'Решение π' },
      { href: '#architecture', label: 'Архитектура' },
      { href: '#kpi', label: 'KPI & Масштаб' },
      { href: '#evidence', label: 'Доказательства' },
      { href: '#ecosystem', label: 'Экосистема' },
      { href: '#impact', label: 'Влияние' },
      { href: '#about', label: 'О проекте' },
      { href: '#contact', label: 'Контакты' },
    ],
    logo_sub: 'Метавселенная: Поколение Инноваторов (π-ПИ)',
    welcome: {
      h1: 'Проект PI — образовательная метавселенная для школьников 10–18 лет',
      p: 'Здесь дети получают доступ к современным технологиям (ИИ, VR/AR), развивают навыки будущего и включаются в систему образования нового поколения.',
      button: 'Смотреть подробнее',
    },
    mission: {
      title: 'Миссия проекта π',
      text:
        'Создать фундаментальную цифровую платформу для развития высококачественного человеческого капитала в интересах Казахстана — раскрытие интеллектуального потенциала и инновационного творчества нового поколения, обеспечение национальной конкурентоспособности и технологического лидерства.\n\n' +
        'Для детей — технологии и возможности.\n' +
        'Для родителей — прозрачность и поддержка.\n' +
        'Для государства — данные и стратегия.\n\n' +
        'Обеспечить непрерывное образование через цифровые решения и мощные дата-центры, гарантирующие безопасность и доступность данных.',
    },
    painTitle: 'Ключевые вызовы',
    pains: [
      {
        title: 'Неравный доступ к персонализированному обучению',
        text: 'Многие дети лишены современных индивидуальных траекторий и доступа к инновационным решениям.',
      },
      {
        title: 'Фрагментарность EdTech, отсутствие национальных big data',
        text: 'Рынок EdTech не интегрирован в политику и кадровое управление.',
      },
      {
        title: 'Социальное и региональное неравенство',
        text: 'Дети из регионов и уязвимых групп исключены из цифровой экономики.',
      },
      {
        title: 'Нет инфраструктуры управления человеческим капиталом',
        text: 'Отсутствует сквозная big data-аналитика для образования, бизнеса и HR.',
      },
    ],
    solutionTitle: 'Решение π',
    features: [
      {
        title: 'Архитектурная экосистема, а не продукт',
        desc: 'π — цифровая инфраструктура, интегрированная с госпрограммами и рынком труда.',
      },
      {
        title: '100% бесплатный доступ для всех детей',
        desc: 'Технический охват 90%+, включая регионы и уязвимые группы.',
      },
      {
        title: 'AI/VR/Big Data в основе',
        desc: 'Индивидуальные треки, диагностика, big data для государства и бизнеса.',
      },
      {
        title: 'Открытый API и масштабируемость',
        desc: 'Школы, регионы и стартапы могут интегрировать модули.',
      },
      {
        title: 'Финансовая модель',
        desc: 'Разработана юнит-экономика и проведён stress-test.',
      },
      {
        title: 'Интеграция с госстратегиями',
        desc: 'Архитектура соответствует нормативной и стратегической базе Казахстана.',
      },
    ],
    archTitle: 'Архитектура и преимущества',
    archs: [
      {
        title: 'Инфраструктура',
        desc: 'Масштабируемая IT-система, дата-центры, кибербезопасность, интеграция с e-gov.',
      },
      {
        title: 'Взаимодействие',
        desc: 'Иммерсивная среда, индивидуальные треки, мультидисциплинарность.',
      },
      {
        title: 'Экосистема',
        desc: 'Открытый API, полный цикл развития талантов.',
      },
    ],
    techs: [
      'VR',
      'AR',
      'XR',
      'AI',
      'Big Data',
      'Облачные вычисления',
      'Кибербезопасность',
    ],
    kpiTitle: 'KPI & Масштаб',
    kpis: [
      {
        title: 'Целевой охват',
        value: '30% школьников — к 2029, 70% — к 2035 (2,7 млн)',
      },
      {
        title: 'Доступность',
        value: '90% технический охват, бесплатность для всех детей',
      },
      {
        title: 'Финансовая модель',
        value: '$28/ученик/год, окупаемость 4 года (расчёт)',
      },
      {
        title: 'Экспертная поддержка',
        value: '20+ сессий и интервью с директорами, экспертами и педагогами',
      },
      {
        title: 'Исследования',
        value: '2500+ анкет и интервью с учениками, родителями, учителями',
      },
    ],
    evidenceTitle: 'Доказательства и подтверждения',
    evidence: [
      'Комплексный анализ стратегических документов и госпрограмм',
      '20+ сессий и интервью с экспертами, профессорами и бизнес-треккерами',
      '2500+ анкет и интервью с учениками, родителями и педагогами',
      'Разработаны архитектура платформы и финансовая модель',
      'Проведены расчёты юнит-экономики и стресс-тесты',
      'Создана масштабируемая система с открытым API',
      'Поддержка и экспертные отзывы от профильных специалистов',
    ],
    demoBtn: 'Запросить документы / демо',
    ecosystemTitle: 'Экосистема и масштабирование',
    partnersTitle: 'Партнёры:',
    partners: [
      'Профессора ведущих ВУЗов и исследовательских центров',
      'Бизнес-треккеры и IT-компании',
      'EdTech и IT-эксперты',
      'Учителя, родители, ученики',
    ],
    exportTitle: 'Экспорт и масштабирование:',
    exportText:
      'Архитектура платформы легко адаптируется для интеграции в другие страны Центральной Азии.',
    impactTitle: 'Влияние и лидерство',
    impact1:
      'Проект создает устойчивую цифровую платформу с серьезными финансовыми и технологическими разработками.',
    impact2:
      'Все решения основаны на глубоких исследованиях, экспертизе и обратной связи профессионалов.',
    impact3: 'Документация и аналитика полностью открыты для проверки.',
    aboutAuthorTitle: 'Об авторе',
    aboutAuthorText:
      'Акмарал Онглассын — инноватор, преподаватель и разработчик проектов по внедрению цифровых технологий в образовании Казахстана. ' +
      'Имеет многолетний опыт работы в EdTech и на стыке образования и технологий, вдохновляя новое поколение лидеров.',
    finalCTAText: 'Каждый ребёнок обладает искрой, способной осветить мир.',
    finalCTAButton: 'Присоединиться к проекту',
    contactsTitle: 'Контакты / Получить материалы',
    form: {
      name: 'Имя',
      email: 'Email',
      affiliation: 'Организация / роль',
      comment: 'Комментарий / что хотите получить?',
      send: 'Отправить заявку',
    },
    contact: {
      email: 'akmaral.onlasyn@gmail.com',
      telegram: '@onglassynka',
      linkedin: 'https://www.linkedin.com/in/akmaral-onglassyn-2142b9ba/',
    },
    copyright: `π — Национальная образовательная метавселенная Казахстана`,
  },

  // Переводы для английского и казахского можно аналогично адаптировать
  en: {
    lang: 'EN',
    nav: [
      { href: '#mission', label: 'Home' },
      { href: '#pain', label: 'Pain Points' },
      { href: '#solution', label: 'π Solution' },
      { href: '#architecture', label: 'Architecture' },
      { href: '#kpi', label: 'KPI & Scale' },
      { href: '#evidence', label: 'Proof' },
      { href: '#ecosystem', label: 'Ecosystem' },
      { href: '#impact', label: 'Impact' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contacts' },
    ],
    logo_sub: 'Metaverse: Generation of Innovators π',
    welcome: {
      h1: 'PI project — educational metaverse for students 10–18 years old',
      p: 'Here children access modern technologies (AI, VR/AR), develop future skills and join the education system of the new generation.',
      button: 'Learn more',
    },
    mission: {
      title: 'π Project Mission',
      text:
        'Create a fundamental digital platform for developing high-quality human capital in Kazakhstan’s interests — unlocking intellectual potential and innovative creativity of the new generation, ensuring national competitiveness and technological leadership.\n\n' +
        'For children — technologies and opportunities.\n' +
        'For parents — transparency and support.\n' +
        'For the state — data and strategy.\n\n' +
        'Provide continuous education through digital solutions and robust data centers that ensure data security and accessibility.',
    },
    painTitle: 'Key Challenges',
    pains: [
      {
        title: 'Unequal access to personalized education',
        text: 'Many children lack modern individualized trajectories and access to innovation.',
      },
      {
        title: 'Fragmented EdTech, lack of national big data',
        text: 'EdTech market is not integrated with state policy and HR management.',
      },
      {
        title: 'Social and regional inequality',
        text: 'Children from regions and vulnerable groups are excluded from the digital economy.',
      },
      {
        title: 'No human capital management infrastructure',
        text: 'No end-to-end big data analytics for education, business, and HR.',
      },
    ],
    solutionTitle: 'π Solution',
    features: [
      {
        title: 'Architectural ecosystem, not just a product',
        desc: 'π is a digital infrastructure integrated with government programs and labor market.',
      },
      {
        title: '100% free access for all children',
        desc: 'Technical coverage 90%+, including regions and vulnerable groups.',
      },
      {
        title: 'AI/VR/Big Data at the core',
        desc: 'Individual tracks, diagnostics, big data for the state and business.',
      },
      {
        title: 'Open API and scalability',
        desc: 'Schools, regions, and startups can integrate modules.',
      },
      {
        title: 'Financial model',
        desc: 'Unit economics calculated and stress-tested.',
      },
      {
        title: 'Integration with state strategies',
        desc: 'Architecture fits Kazakhstan’s regulatory and strategic framework.',
      },
    ],
    archTitle: 'Architecture & Advantages',
    archs: [
      {
        title: 'Infrastructure',
        desc: 'Scalable IT system, data centers, cybersecurity, integration with e-gov.',
      },
      {
        title: 'Interaction',
        desc: 'Immersive environment, individual tracks, multidisciplinary.',
      },
      {
        title: 'Ecosystem',
        desc: 'Open API, full talent development cycle.',
      },
    ],
    techs: [
      'VR',
      'AR',
      'XR',
      'AI',
      'Big Data',
      'Cloud Computing',
      'Cybersecurity',
    ],
    kpiTitle: 'KPI & Scale',
    kpis: [
      {
        title: 'Target coverage',
        value: '30% of students by 2029, 70% by 2035 (2.7M)',
      },
      {
        title: 'Accessibility',
        value: '90% technical coverage, free for all children',
      },
      {
        title: 'Financial model',
        value: '$28/student/year, payback in 4 years (est.)',
      },
      {
        title: 'Expert engagement',
        value: '20+ sessions and interviews with directors, experts, teachers',
      },
      {
        title: 'Research',
        value: '2500+ surveys and interviews with students, parents, teachers',
      },
    ],
    evidenceTitle: 'Proof & Documentation',
    evidence: [
      'Comprehensive analysis of strategic documents and government programs',
      '20+ sessions and interviews with experts, professors, and business trackers',
      '2500+ surveys and interviews with students, parents, and teachers',
      'Developed platform architecture and financial model',
      'Conducted unit economics calculations and stress tests',
      'Created scalable system with open API',
      'Supported and reviewed by industry experts',
    ],
    demoBtn: 'Request documents / demo',
    ecosystemTitle: 'Ecosystem & Scaling',
    partnersTitle: 'Partners:',
    partners: [
      'Professors from leading universities and research centers',
      'Business trackers and IT companies',
      'EdTech and IT experts',
      'Teachers, parents, students',
    ],
    exportTitle: 'Export & Scaling:',
    exportText:
      'Platform architecture is easily adaptable for integration into other Central Asian countries.',
    impactTitle: 'Impact & Leadership',
    impact1:
      'The project creates a sustainable digital platform with strong financial and technological developments.',
    impact2:
      'All decisions are based on deep research, expertise, and professional feedback.',
    impact3: 'Documentation and analytics are fully open for review.',
    aboutAuthorTitle: 'About the Author',
    aboutAuthorText:
      'Akmaral Onglassyn — innovator, educator, and developer of digital education projects in Kazakhstan. ' +
      'She has extensive experience in EdTech and at the intersection of education and technology, inspiring a new generation of leaders.',
    finalCTAText: 'Every child has a spark capable of lighting up the world.',
    finalCTAButton: 'Join the project',
    contactsTitle: 'Contacts / Request materials',
    form: {
      name: 'Name',
      email: 'Email',
      affiliation: 'Organization / role',
      comment: 'Comment / what do you want to get?',
      send: 'Send request',
    },
    contact: {
      email: 'akmaral.onlasyn@gmail.com',
      telegram: '@onglassynka',
      linkedin: 'https://www.linkedin.com/in/akmaral-onglassyn-2142b9ba/',
    },
    copyright: `π — National Education Metaverse of Kazakhstan`,
  },
  kz: {
    lang: 'KZ',
    nav: [
      { href: '#mission', label: 'Басты бет' },
      { href: '#pain', label: 'Мәселелер' },
      { href: '#solution', label: 'π шешімі' },
      { href: '#architecture', label: 'Архитектура' },
      { href: '#kpi', label: 'KPI & Ауқым' },
      { href: '#evidence', label: 'Дәлелдер' },
      { href: '#ecosystem', label: 'Экожүйе' },
      { href: '#impact', label: 'Тиімділік' },
      { href: '#about', label: 'Жоба туралы' },
      { href: '#contact', label: 'Байланыс' },
    ],
    logo_sub: 'π инноваторлар ұрпағы π - Метаәлемi',
    welcome: {
      h1: 'PI жобасы — 10–18 жас аралығындағы оқушыларға арналған білім беру метаәлемі',
      p: 'Мұнда балалар заманауи технологияларға (ЖИ, VR/AR) қол жеткізіп, болашақ дағдыларын дамытып, жаңа буын білім жүйесіне қосылады.',
      button: 'Толығырақ',
    },
    mission: {
      title: 'π жобасының миссиясы',
      text:
        'Қазақстан мүддесі үшін жоғары сапалы адами капиталды дамытуға арналған іргелі цифрлық платформаны құру — жаңа буынның интеллектуалдық әлеуеті мен инновациялық шығармашылығын ашу, ұлттық бәсекеге қабілеттілік пен технологиялық көшбасшылықты қамтамасыз ету.\n\n' +
        'Балаларға — технологиялар мен мүмкіндіктер.\n' +
        'Ата-аналарға — айқындылық пен қолдау.\n' +
        'Мемлекетке — деректер мен стратегия.\n\n' +
        'Цифрлық шешімдер мен сенімді деректер орталықтары арқылы үздіксіз білім беруді қамтамасыз ету.',
    },
    painTitle: 'Негізгі мәселелер',
    pains: [
      {
        title: 'Жекелендірілген білімге тең қолжетімділіктің болмауы',
        text: 'Көптеген бала заманауи жеке траекторияларға және инновацияларға қол жеткізе алмайды.',
      },
      {
        title: 'EdTech жүйесінің бытыраңқылығы, ұлттық big data жоқтығы',
        text: 'EdTech нарығы мемлекеттік саясат пен кадрлық басқарумен интеграцияланбаған.',
      },
      {
        title: 'Әлеуметтік және өңірлік теңсіздік',
        text: 'Аймақтар мен осал топтардағы балалар цифрлық экономикадан тыс қалған.',
      },
      {
        title: 'Адами капиталды басқару инфрақұрылымының болмауы',
        text: 'Білім, бизнес және кадрлар үшін кешенді big data-аналитика жоқ.',
      },
    ],
    solutionTitle: 'π шешімі',
    features: [
      {
        title: 'Архитектуралық экожүйе — өнім емес',
        desc: 'π — мемлекеттік бағдарламалар мен еңбек нарығымен интеграцияланған цифрлық инфрақұрылым.',
      },
      {
        title: 'Барлық балаларға 100% тегін қолжетімділік',
        desc: '90% техникалық қамтуды, оның ішінде өңірлер мен осал топтарды қамтиды.',
      },
      {
        title: 'AI/VR/Big Data — экожүйенің негізі',
        desc: 'Жеке тректер, диагностика, мемлекет пен бизнес үшін big data.',
      },
      {
        title: 'Open API және масштабталу',
        desc: 'Мектептер, өңірлер және стартаптар модульдерді біріктіре алады.',
      },
      {
        title: 'Қаржылық модель',
        desc: 'Юнит-экономика жасалды, стресс-тестілеу өткізілді.',
      },
      {
        title: 'Мемлекеттік стратегиялармен үйлесім',
        desc: 'Архитектура ұлттық нормативтік және стратегиялық базаға сәйкес келеді.',
      },
    ],
    archTitle: 'Архитектура және артықшылықтар',
    archs: [
      {
        title: 'Инфрақұрылым',
        desc: 'Масштабталатын IT жүйе, деректер орталықтары, киберқауіпсіздік, e-gov интеграциясы.',
      },
      {
        title: 'Өзара әрекеттестік',
        desc: 'Иммерсивті орта, жеке тректер, көпсалалы бағыт.',
      },
      {
        title: 'Экожүйе',
        desc: 'Open API, таланттарды дамыту циклі толық.',
      },
    ],
    techs: [
      'VR',
      'AR',
      'XR',
      'AI',
      'Big Data',
      'Бұлттық есептеу',
      'Киберқауіпсіздік',
    ],
    kpiTitle: 'KPI & Ауқым',
    kpis: [
      {
        title: 'Мақсатты қамту',
        value: '2029 ж. – 30%, 2035 ж. – 70% оқушы (2,7 млн)',
      },
      {
        title: 'Қолжетімділік',
        value: '90% техникалық қамту, барлық балаларға тегін',
      },
      {
        title: 'Қаржылық модель',
        value: '$28/оқушы/жыл, өтелу мерзімі 4 жыл (есеп)',
      },
      {
        title: 'Сарапшы тарту',
        value: '20+ сессия және сұхбат (директорлар, сарапшылар, педагогтар)',
      },
      {
        title: 'Зерттеу',
        value: '2500+ сауалнама мен сұхбат (оқушылар, ата-аналар, мұғалімдер)',
      },
    ],
    evidenceTitle: 'Дәлелдер және құжаттама',
    evidence: [
      'Стратегиялық құжаттар мен мемлекеттік бағдарламалардың кешенді талдауы',
      '20+ сараптамалық сессиялар мен профессорлар, бизнес-треккерлермен сұхбаттар',
      '2500+ сауалнама және сұхбаттар оқушылар, ата-аналар мен педагогтар арасында',
      'Платформа архитектурасы мен қаржылық модель әзірленді',
      'Юнит-экономика есептелді және стресс-тестілеу жүргізілді',
      'Ашық API-мен масштабталатын жүйе құрылды',
      'Сала сарапшыларының қолдауымен',
    ],
    demoBtn: 'Құжаттар / демо сұрау',
    ecosystemTitle: 'Экожүйе және ауқымдау',
    partnersTitle: 'Серіктестер:',
    partners: [
      'Профессорлар мен зерттеу орталықтарының мамандары',
      'Бизнес-треккерлер мен IT-компаниялар',
      'EdTech және IT сарапшылары',
      'Мұғалімдер, ата-аналар, оқушылар',
    ],
    exportTitle: 'Экспорт және ауқымдау:',
    exportText:
      'Платформа архитектурасы Орталық Азия елдеріне оңай бейімделеді.',
    impactTitle: 'Тиімділік және көшбасшылық',
    impact1:
      'Жоба берік қаржылық және технологиялық шешімдері бар тұрақты цифрлық платформаны құруда.',
    impact2:
      'Барлық шешімдер терең зерттеулер, сараптамалық пікірлер мен кері байланысқа негізделген.',
    impact3: 'Құжаттама және аналитика толық ашық.',
    aboutAuthorTitle: 'Жоба авторы туралы',
    aboutAuthorText:
      'Акмарал Онглассын — инновациялық идеялар авторы, оқытушы және Қазақстандағы білім беру цифрлық жобаларын әзірлеуші. ' +
      'EdTech саласында және білім мен технологияның қиылысында кең тәжірибесі бар, жаңа көшбасшылар ұрпағын шабыттандырушы.',
    finalCTAText: 'Әр балада әлемді жарқырата алатын ұшқын бар.',
    finalCTAButton: 'Жобамен бірге болыңыз',
    contactsTitle: 'Байланыс / Материалдарды алу',
    form: {
      name: 'Аты-жөні',
      email: 'Email',
      affiliation: 'Ұйым / лауазымы',
      comment: 'Пікір / не алғыңыз келеді?',
      send: 'Сұранысты жіберу',
    },
    contact: {
      email: 'akmaral.onlasyn@gmail.com',
      telegram: '@onglassynka',
      linkedin: 'https://www.linkedin.com/in/akmaral-onglassyn-2142b9ba/',
    },
    copyright: `π — Қазақстанның ұлттық білім беру метавселениесі`,
  },
};

const langs = ['ru', 'en', 'kz'];

function LogoBlock({ lang, logoSub }: { lang: string; logoSub: string }) {
  return (
    <div className="flex flex-col items-center mb-2 select-none">
      <div className="rounded-full bg-gradient-to-br from-blue-200 to-blue-500 shadow-lg w-32 h-32 flex items-center justify-center">
        <span className="text-[4rem] font-black text-white drop-shadow-lg">π</span>
      </div>
      <div className="mt-2 text-lg md:text-xl font-bold tracking-wide text-blue-700 drop-shadow-sm">{logoSub}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-blue-50 rounded-2xl p-6 shadow-sm flex flex-col gap-2">
      <div className="font-bold text-lg text-blue-800">{title}</div>
      <div className="text-gray-700">{desc}</div>
    </div>
  );
}
function ArchCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-blue-100 p-5 flex flex-col gap-2 bg-white shadow-sm">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-700">{desc}</div>
    </div>
  );
}
function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-blue-100 text-blue-700 rounded-xl px-4 py-1 text-xs font-semibold mr-2 mb-2 inline-block">{children}</span>
  );
}

export default function Home() {
  const [lang, setLang] = useState<string>('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  function switchLang() {
    const idx = langs.indexOf(lang);
    setLang(langs[(idx + 1) % langs.length]);
  }

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      {/* Header & Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-4 md:px-16 h-16">
          <div className="font-bold text-xl text-blue-600 tracking-tight flex items-center gap-2">
            <span className="text-2xl">π</span>
            <span className="hidden sm:inline">
              {lang === 'ru' ? 'Метавселенная' : lang === 'kz' ? 'Метаәлем' : 'Metaverse'}
            </span>
          </div>
          <nav className="hidden md:flex gap-2 text-base items-center">
            {t.nav.map((link) => (
              <a key={link.href} href={link.href} className="px-2 py-1 rounded-xl hover:bg-blue-50 transition">
                {link.label}
              </a>
            ))}
            <button
              onClick={switchLang}
              className="ml-4 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
              title="Сменить язык"
            >
              {t.lang}
            </button>
          </nav>
          {/* Mobile burger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-2 space-y-2">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-2 py-1 rounded-xl hover:bg-blue-50 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                switchLang();
                setMenuOpen(false);
              }}
              className="w-full mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
              title="Сменить язык"
            >
              {t.lang}
            </button>
          </div>
        )}
      </header>

      {/* Welcome Screen */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white">
        <LogoBlock
          lang={lang}
          logoSub={t.logo_sub || (lang === 'ru' ? 'Метавселенная' : lang === 'kz' ? 'Метаәлем' : 'Metaverse')}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 max-w-xl">{t.welcome.h1}</h1>
        <p className="text-center max-w-xl text-lg text-gray-600 mb-8 whitespace-pre-line">{t.welcome.p}</p>
        <a href="#mission" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-xl transition text-lg">
          {t.welcome.button}
        </a>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-4 md:px-0 flex flex-col gap-28">
        {/* Mission */}
        <section id="mission" className="pt-10 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">{t.mission.title}</h2>
          <p className="text-lg mb-2 whitespace-pre-line">{t.mission.text}</p>
        </section>

        {/* Pain Points */}
        <section id="pain" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.painTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 text-base">
            {t.pains.map((p, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-6 shadow-sm">
                <strong>{p.title}</strong>
                <p className="text-gray-600 mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution π */}
        <section id="solution" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.solutionTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.features.map((f, i) => (
              <FeatureCard key={i} title={f.title} desc={f.desc} />
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.archTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.archs.map((a, i) => (
              <ArchCard key={i} title={a.title} desc={a.desc} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            {t.techs.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </section>

        {/* KPI & Scale */}
        <section id="kpi" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.kpiTitle}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {t.kpis.map((item, i) => (
              <div key={i} className="rounded-2xl bg-blue-50 p-6 shadow-sm">
                <div className="text-xl font-bold mb-2">{item.title}</div>
                <div className="text-gray-700">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence & Proof */}
        <section id="evidence" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.evidenceTitle}</h2>
          <ul className="space-y-3">
            {t.evidence.map((ev, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-blue-600 rounded-full" />
                <span className="text-gray-800">{ev}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            {t.demoBtn}
          </a>
        </section>

        {/* Ecosystem & Scale */}
        <section id="ecosystem" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.ecosystemTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-lg mb-2 font-semibold">{t.partnersTitle}</div>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {t.partners.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-lg mb-2 font-semibold">{t.exportTitle}</div>
              <p className="text-gray-700">{t.exportText}</p>
            </div>
          </div>
        </section>

        {/* About Author */}
        <section id="about" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.aboutAuthorTitle}</h2>
          <p className="text-lg mb-2">{t.aboutAuthorText}</p>
        </section>

        {/* Final Call To Action */}
        <section className="scroll-mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.finalCTAText}</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl font-semibold shadow-xl transition text-lg mb-20">
            {t.finalCTAButton}
          </button>
        </section>

        {/* Contact / Call to Action */}
        <section id="contact" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.contactsTitle}</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <form
              action="mailto:akmaral.onlasyn@gmail.com"
              method="post"
              className="w-full md:w-2/3 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder={t.form.name}
                className="w-full border rounded-xl p-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.form.email}
                className="w-full border rounded-xl p-3"
                required
              />
              <input
                type="text"
                name="affiliation"
                placeholder={t.form.affiliation}
                className="w-full border rounded-xl p-3"
              />
              <textarea
                name="comment"
                placeholder={t.form.comment}
                className="w-full border rounded-xl p-3 h-28"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                {t.form.send}
              </button>
            </form>
            <div className="flex flex-col gap-2 text-gray-700">
              <div>
                Email:{' '}
                <a
                  href="mailto:akmaral.onlasyn@gmail.com"
                  className="underline text-blue-600"
                >
                  akmaral.onlasyn@gmail.com
                </a>
              </div>
              <div>
                Telegram:{' '}
                <a
                  href="https://t.me/onglassynka"
                  className="underline text-blue-600"
                >
                  @onglassynka
                </a>
              </div>
              <div>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/akmaral-onglassyn-2142b9ba/"
                  className="underline text-blue-600"
                >
                  linkedin.com/in/akmaral-onglassyn-2142b9ba
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 pb-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {t.copyright}
      </footer>
    </div>
  );
}


/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';

type Lang = 'ru' | 'en' | 'kz';

const langs: Lang[] = ['ru', 'en', 'kz'];

const translations: Record<
  Lang,
  {
    lang: string;
    nav: { href: string; label: string }[];
    logo_sub: string;
    welcome: { h1: string; p: string; button: string };
    mission: { title: string; text: string };
    painTitle: string;
    pains: { title: string; text: string }[];
    solutionTitle: string;
    features: { title: string; desc: string }[];
    archTitle: string;
    archs: { title: string; desc: string }[];
    techs: string[];
    kpiTitle: string;
    kpis: { title: string; value: string }[];
    evidenceTitle: string;
    evidence: string[];
    demoBtn: string;
    ecosystemTitle: string;
    partnersTitle: string;
    partners: string[];
    exportTitle: string;
    exportText: string;
    impactTitle: string;
    impact1: string;
    impact2: string;
    impact3: string;
    contactsTitle: string;
    form: {
      name: string;
      email: string;
      affiliation: string;
      comment: string;
      send: string;
    };
    contact: { email: string; telegram: string; linkedin: string };
    copyright: string;
    heroSlogan?: string;
    heroCTA?: string;
    finalCTAHeader?: string;
    finalCTAText?: string;
    finalCTAButton?: string;
    aboutAuthorTitle?: string;
    aboutAuthorText?: string;
  }
> = {
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
      h1: 'Проект PI — образовательная метавселенная для школьников 10–18 лет.',
      p: 'Здесь дети получают доступ к современным технологиям (ИИ, VR/AR), развивают навыки будущего и включаются в систему образования нового поколения.',
      button: 'Смотреть подробнее',
    },
    mission: {
      title: 'Миссия проекта π',
      text: 'Создать фундаментальную цифровую платформу для развития высококачественного человеческого капитала в интересах Казахстана — раскрытие интеллектуального потенциала и инновационного творчества нового поколения, обеспечение национальной конкурентоспособности и технологического лидерства. Для детей — технологии и возможности. Для родителей — прозрачность и поддержка. Для государства — данные и стратегия.',
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
        desc: 'Масштабируемая IT-система, кибербезопасность, интеграция с e-gov.',
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
      'Подробные исследования и аналитика образовательных потребностей по Казахстану',
      'Разработка архитектуры платформы с многоуровневой системой и open API',
      'Финансовая модель с расчетом unit-экономики и стресс-тестами',
      '20+ стратегических сессий и консультаций с профессорами и бизнес-треккерами',
      '2500+ интервью и анкетирования с учениками, родителями и педагогами',
      'Реализация прототипа и подготовка пилотного этапа проекта',
      'Детальная дорожная карта развития до 2035 года',
    ],
    demoBtn: 'Запросить документы / демо',
    ecosystemTitle: 'Экосистема и масштабирование',
    partnersTitle: 'Партнёры:',
    partners: [
      'Профессора и ведущие эксперты в EdTech',
      'Бизнес-треккеры и технологические компании',
      'Образовательные учреждения Республики Казахстан',
      'IT-сообщество и инновационные стартапы',
      'Учителя, родители и ученики',
    ],
    exportTitle: 'Экспорт и масштабирование:',
    exportText:
      'Архитектура платформы легко адаптируется для интеграции в другие страны Центральной Азии.',
    impactTitle: 'Влияние и лидерство',
    impact1:
      'Создание фундаментальной цифровой платформы для развития человеческого капитала в интересах Казахстана.',
    impact2:
      'Обеспечение прозрачности и поддержки для родителей и доступности технологий для детей.',
    impact3:
      'Государство получает аналитику и данные для формирования стратегий развития.',
    aboutAuthorTitle: 'Об авторе',
    aboutAuthorText:
      'Акмарал Оңласын — инноватор, преподаватель, разработчик проектов по внедрению цифровых технологий в образовании РК. Миссия: развивать новое поколение инноваторов с креативным мышлением, которые будут двигать наше общество вперёд.',
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
  en: {
    lang: 'EN',
    nav: [
      { href: '#mission', label: 'Home' },
      { href: '#pain', label: 'Challenges' },
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
      h1: 'Project PI — an educational metaverse for students aged 10–18.',
      p: 'Here children get access to modern technologies (AI, VR/AR), develop future skills, and engage with a next-generation education system.',
      button: 'Learn more',
    },
    mission: {
      title: 'Mission of the π Project',
      text: 'Create a foundational digital platform for the development of high-quality human capital in Kazakhstan’s interests — unlocking intellectual potential and innovative creativity of the new generation, ensuring national competitiveness and technological leadership. For children — technology and opportunities. For parents — transparency and support. For the state — data and strategy.',
    },
    painTitle: 'Key Challenges',
    pains: [
      {
        title: 'Unequal access to personalized education',
        text: 'Many children lack modern individualized pathways and access to innovative solutions.',
      },
      {
        title: 'Fragmented EdTech and lack of national big data',
        text: 'EdTech market is not integrated with government policy and workforce management.',
      },
      {
        title: 'Social and regional inequality',
        text: 'Children from regions and vulnerable groups are excluded from the digital economy.',
      },
      {
        title: 'Lack of human capital management infrastructure',
        text: 'No end-to-end big data analytics for education, business, and HR.',
      },
    ],
    solutionTitle: 'π Solution',
    features: [
      {
        title: 'Architectural ecosystem, not just a product',
        desc: 'π is a digital infrastructure integrated with government programs and the labor market.',
      },
      {
        title: '100% free access for all children',
        desc: 'Technical coverage 90%+, including regions and vulnerable groups.',
      },
      {
        title: 'AI/VR/Big Data at the core',
        desc: 'Individual pathways, diagnostics, and big data for the state and business.',
      },
      {
        title: 'Open API and scalability',
        desc: 'Schools, regions, and startups can integrate modules.',
      },
      {
        title: 'Financial model',
        desc: 'Unit economics developed and stress-tested.',
      },
      {
        title: 'Integration with state strategies',
        desc: 'Architecture aligns with Kazakhstan’s regulatory and strategic framework.',
      },
    ],
    archTitle: 'Architecture & Advantages',
    archs: [
      {
        title: 'Infrastructure',
        desc: 'Scalable IT system, cybersecurity, integration with e-gov.',
      },
      {
        title: 'Interaction',
        desc: 'Immersive environment, individual pathways, multidisciplinary approach.',
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
        value: '20+ sessions and interviews with directors, experts, and teachers',
      },
      {
        title: 'Research',
        value: '2500+ surveys and interviews with students, parents, and teachers',
      },
    ],
    evidenceTitle: 'Proof & Documentation',
    evidence: [
      'In-depth research and analysis of educational needs in Kazakhstan',
      'Platform architecture developed with multi-layer system and open API',
      'Financial model with unit economics and stress tests',
      '20+ strategic sessions and consultations with professors and business trackers',
      '2500+ interviews and surveys with students, parents, and educators',
      'Prototype implementation and preparation for pilot phase',
      'Detailed roadmap for development through 2035',
    ],
    demoBtn: 'Request documents / demo',
    ecosystemTitle: 'Ecosystem & Scaling',
    partnersTitle: 'Partners:',
    partners: [
      'Professors and leading EdTech experts',
      'Business trackers and tech companies',
      'Educational institutions of Kazakhstan',
      'IT community and innovative startups',
      'Teachers, parents, and students',
    ],
    exportTitle: 'Export & Scaling:',
    exportText:
      'Platform architecture is easily adaptable for integration into other Central Asian countries.',
    impactTitle: 'Impact & Leadership',
    impact1:
      'Creating a foundational digital platform for developing human capital in Kazakhstan’s interests.',
    impact2:
      'Ensuring transparency and support for parents and accessibility of technology for children.',
    impact3:
      'The state receives analytics and data to inform development strategies.',
    aboutAuthorTitle: 'About the Author',
    aboutAuthorText:
      'Akmaral Onglasyn — innovator, educator, developer of digital technology implementation projects in Kazakhstan’s education system. Mission: develop a new generation of innovators with creative thinking to drive society forward.',
    contactsTitle: 'Contacts / Request Materials',
    form: {
      name: 'Name',
      email: 'Email',
      affiliation: 'Organization / Role',
      comment: 'Comment / What do you want to get?',
      send: 'Send Request',
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
      h1: 'PI жобасы — 10–18 жастағы оқушыларға арналған білім беру метаәлемі.',
      p: 'Мұнда балалар заманауи технологияларға (ЖИ, VR/AR) қол жеткізіп, болашақ дағдыларын дамытып, жаңа буындағы білім жүйесіне қосылады.',
      button: 'Толығырақ',
    },
    mission: {
      title: 'π жобасының миссиясы',
      text: 'Қазақстан мүддесіне арналған жоғары сапалы адами капиталды дамытуға арналған іргелі сандық платформаны құру — жаңа буынның интеллектуалдық әлеуеті мен инновациялық шығармашылығын ашу, ұлттық бәсекеге қабілеттілік пен технологиялық көшбасшылықты қамтамасыз ету. Балаларға — технологиялар мен мүмкіндіктер. Ата-аналарға — ашықтық пен қолдау. Мемлекетке — деректер мен стратегия.',
    },
    painTitle: 'Негізгі мәселелер',
    pains: [
      {
        title: 'Жекелендірілген білімге тең қолжетімділіктің болмауы',
        text: 'Көптеген балалар заманауи жеке білім жолдары мен инновациялық шешімдерге қол жеткізе алмайды.',
      },
      {
        title: 'EdTech жүйесінің бөлшектілігі және ұлттық big data жоқтығы',
        text: 'EdTech нарығы мемлекеттік саясат пен кадрлық басқарумен интеграцияланбаған.',
      },
      {
        title: 'Әлеуметтік және өңірлік теңсіздік',
        text: 'Аймақтар мен осал топтардың балалары цифрлық экономикадан тыс қалады.',
      },
      {
        title: 'Адами капиталды басқару инфрақұрылымының жоқтығы',
        text: 'Білім, бизнес және HR үшін толыққанды big data аналитикасы жоқ.',
      },
    ],
    solutionTitle: 'π шешімі',
    features: [
      {
        title: 'Архитектуралық экожүйе, өнім емес',
        desc: 'π — мемлекеттік бағдарламалар мен еңбек нарығымен интеграцияланған цифрлық инфрақұрылым.',
      },
      {
        title: 'Барлық балаларға 100% тегін қолжетімділік',
        desc: '90% техникалық қамту, соның ішінде өңірлер мен осал топтар.',
      },
      {
        title: 'AI/VR/Big Data экожүйесінің өзегі',
        desc: 'Жеке жолдар, диагностика және мемлекет пен бизнес үшін big data.',
      },
      {
        title: 'Open API және масштабтау',
        desc: 'Мектептер, өңірлер және стартаптар модульдерді біріктіреді.',
      },
      {
        title: 'Қаржылық модель',
        desc: 'Юнит-экономика жасалған және стресс-тестілеуден өткен.',
      },
      {
        title: 'Мемлекеттік стратегиялармен интеграция',
        desc: 'Архитектура Қазақстанның нормативтік және стратегиялық базасына сәйкес келеді.',
      },
    ],
    archTitle: 'Архитектура және артықшылықтар',
    archs: [
      {
        title: 'Инфрақұрылым',
        desc: 'Масштабталатын IT жүйе, киберқауіпсіздік, e-gov интеграциясы.',
      },
      {
        title: 'Өзара әрекеттестік',
        desc: 'Иммерсивті орта, жеке жолдар, көпсалалы тәсіл.',
      },
      {
        title: 'Экожүйе',
        desc: 'Open API, толық таланттарды дамыту циклі.',
      },
    ],
    techs: [
      'VR',
      'AR',
      'XR',
      'AI',
      'Big Data',
      'Бұлтты есептеу',
      'Киберқауіпсіздік',
    ],
    kpiTitle: 'KPI & Ауқым',
    kpis: [
      {
        title: 'Мақсатты қамту',
        value: '2029 жылға 30%, 2035 жылға 70% оқушы (2,7 млн)',
      },
      {
        title: 'Қолжетімділік',
        value: '90% техникалық қамту, барлық балаларға тегін',
      },
      {
        title: 'Қаржылық модель',
        value: '$28/оқушы/жыл, 4 жылда өтеледі (есептелген)',
      },
      {
        title: 'Сарапшы қатысу',
        value: '20+ сессия және директорлар, сарапшылар, педагогтармен сұхбаттар',
      },
      {
        title: 'Зерттеу',
        value: '2500+ сауалнама және оқушылар, ата-аналар, педагогтармен сұхбат',
      },
    ],
    evidenceTitle: 'Дәлелдер және растамалар',
    evidence: [
      'Қазақстандағы білім беру қажеттіліктері бойынша жан-жақты зерттеулер мен аналитика',
      'Көпдеңгейлі жүйе және open API бар платформа архитектурасын әзірлеу',
      'Юнит-экономика және стресс-тесттермен қаржылық модель',
      'Профессорлар мен бизнес-трекерлермен 20+ стратегиялық сессия және консультация',
      '2500+ оқушылар, ата-аналар және педагогтармен сұхбаттар мен сауалнамалар',
      'Прототипті іске асыру және пилоттық кезеңге дайындық',
      '2035 жылға дейінгі даму жол картасы',
    ],
    demoBtn: 'Құжаттар / демо сұрау',
    ecosystemTitle: 'Экожүйе және масштабтау',
    partnersTitle: 'Серіктестер:',
    partners: [
      'Профессорлар мен жетекші EdTech сарапшылары',
      'Бизнес-трекерлер мен технологиялық компаниялар',
      'Қазақстанның білім беру мекемелері',
      'IT қауымдастығы және инновациялық стартаптар',
      'Мұғалімдер, ата-аналар және оқушылар',
    ],
    exportTitle: 'Экспорт және масштабтау:',
    exportText:
      'Платформа архитектурасы Орталық Азияның басқа елдеріне оңай бейімделеді.',
    impactTitle: 'Тиімділік пен көшбасшылық',
    impact1:
      'Қазақстан мүддесіне адами капиталды дамытуға арналған іргелі сандық платформа құру.',
    impact2:
      'Ата-аналарға ашықтық пен қолдауды қамтамасыз ету және балаларға технологиялардың қолжетімділігі.',
    impact3:
      'Мемлекетке даму стратегияларын қалыптастыру үшін аналитика мен деректер беріледі.',
    aboutAuthorTitle: 'Жоба авторы туралы',
    aboutAuthorText:
      'Ақмарал Оңласын — Қазақстанның білім беру жүйесінде цифрлық технологияларды енгізу жобаларын жасаушы, инноватор және оқытушы. Миссиясы — креативті ойлауы бар жаңа инноваторлар ұрпағын дамыту.',
    contactsTitle: 'Байланыс / Материалдар сұрау',
    form: {
      name: 'Аты-жөні',
      email: 'Email',
      affiliation: 'Ұйым / рөлі',
      comment: 'Пікір / не алғыңыз келеді?',
      send: 'Сұраныс жіберу',
    },
    contact: {
      email: 'akmaral.onlasyn@gmail.com',
      telegram: '@onglassynka',
      linkedin: 'https://www.linkedin.com/in/akmaral-onglassyn-2142b9ba/',
    },
    copyright: `π — Қазақстанның ұлттық білім беру метаәлемі`,
  },
};

function LogoBlock({ lang, logoSub }: { lang: Lang; logoSub: string }) {
  return (
    <div className="flex flex-col items-center mb-2 select-none">
      <div className="rounded-full bg-gradient-to-br from-blue-200 to-blue-500 shadow-lg w-32 h-32 flex items-center justify-center">
        <span className="text-[4rem] font-black text-white drop-shadow-lg">π</span>
      </div>
      <div className="mt-2 text-lg md:text-xl font-bold tracking-wide text-blue-700 drop-shadow-sm">
        {logoSub}
      </div>
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
    <span className="bg-blue-100 text-blue-700 rounded-xl px-4 py-1 text-xs font-semibold mr-2 mb-2 inline-block">
      {children}
    </span>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  function switchLang() {
    const idx = langs.indexOf(lang);
    setLang(langs[(idx + 1) % langs.length]);
    setMenuOpen(false);
  }

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      {/* Header & Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-4 md:px-16 h-16">
          <div className="font-bold text-xl text-blue-600 tracking-tight flex items-center gap-2">
            <span className="text-2xl">π</span>
            <span className="hidden sm:inline">
              {lang === 'ru' ? 'Метавселенная' : lang === 'kz' ? 'Метаәлем' : 'Metaverse'}
            </span>
          </div>
          <nav className="hidden md:flex gap-4 text-base items-center">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 py-1 rounded-xl hover:bg-blue-50 transition"
              >
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
            className="md:hidden p-2 rounded-lg border border-blue-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 p-4 flex flex-col gap-4">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-2 py-2 rounded-lg hover:bg-blue-50 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={switchLang}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              {t.lang}
            </button>
          </nav>
        )}
      </header>

      {/* Welcome Screen */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white px-4 text-center">
        <LogoBlock
          lang={lang}
          logoSub={
            t.logo_sub ||
            (lang === 'ru' ? 'Метавселенная' : lang === 'kz' ? 'Метаәлем' : 'Metaverse')
          }
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-2 max-w-xl">{t.welcome.h1}</h1>
        <p className="max-w-xl text-lg text-gray-600 mb-8">{t.welcome.p}</p>
        <a
          href="#mission"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-xl transition text-lg"
        >
          {t.welcome.button}
        </a>
        <p className="mt-6 italic font-medium max-w-md">{t.heroSlogan || 'Каждый ребёнок обладает искрой, способной осветить мир.'}</p>
        <a
          href="#contact"
          className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-cyan-600 transition"
        >
          {t.heroCTA || 'Присоединиться к проекту'}
        </a>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-4 md:px-0 flex flex-col gap-28 pb-20">
        {/* Mission */}
        <section id="mission" className="pt-10 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">{t.mission.title}</h2>
          <p className="text-lg mb-2">{t.mission.text}</p>
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

        {/* Impact & Leadership */}
        <section id="impact" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.impactTitle}</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-blue-600">π</div>
            <div className="flex-1 text-gray-800 text-lg">
              <div>
                <strong>{t.impact1}</strong>
              </div>
              <div>{t.impact2}</div>
              <div className="text-blue-600 mt-2 font-medium">{t.impact3}</div>
            </div>
          </div>
        </section>

        {/* About Author */}
        <section id="about" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.aboutAuthorTitle}</h2>
          <p className="text-lg">{t.aboutAuthorText}</p>
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
                <a href="mailto:akmaral.onlasyn@gmail.com" className="underline text-blue-600">
                  akmaral.onlasyn@gmail.com
                </a>
              </div>
              <div>
                Telegram:{' '}
                <a href="https://t.me/onglassynka" className="underline text-blue-600">
                  @onglassynka
                </a>
              </div>
              <div>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/akmaral-onglassyn-2142b9ba/" className="underline text-blue-600">
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

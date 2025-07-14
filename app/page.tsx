'use client';
import React, { useState } from 'react';

const langs = ['ru', 'en', 'kz'] as const;
type Lang = typeof langs[number];

// === ДОБАВЛЕНО: структурированный текст для блока "О проекте/Полная стратегия" ===
const aboutProjectBlock: Record<Lang, { title: string; sections: { title: string; content: React.ReactNode }[] }> = {
  ru: {
    title: 'О проекте / Полная стратегия',
    sections: [
      {
        title: 'Концепция, миссия и уникальность проекта',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Проект:</b> создание образовательной метавселенной Казахстана “Поколение инноваторов (π)” для детей 10–18 лет.
            </li>
            <li>
              <b>Миссия:</b> создать фундаментальную базу для развития человеческого капитала, вывести Казахстан в топ-30 IT-стран к 2030 году и обеспечить рост инновационного потенциала через цифровое, инклюзивное образование.
            </li>
            <li>
              <b>Целевая аудитория:</b> школьники (инноваторы), родители, школы, государство, технологические и бизнес-компании, высшая школа (в т.ч. международные эксперты).
            </li>
            <li>
              <b>Стратегическая уникальность:</b> национальный стандарт (не пилот); синергия VR/AR/XR, ИИ (GenAI), BigData, IoT, облако, блокчейн; поддержка от демографии до KPI и нормативной базы; мировые бенчмарки: кейсы ОАЭ, Кореи, Китая, Японии, ЕС, Сингапура, США и др.
            </li>
          </ul>
        ),
      },
      {
        title: 'Архитектура и бизнес-логика',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              3 ключевых возрастных модуля: <b>10–12</b>, <b>13–15</b>, <b>16–18</b> лет. Для каждой группы — 3 варианта виртуальной среды (основано на анкетировании детей).
            </li>
            <li>
              Корпоративный тип с ограниченным доступом через портал Минобразования/Минцифры.
            </li>
            <li>
              Единая экосистема знаний для инноваторов: интеграция со школой, ВУЗами и экономикой.
            </li>
            <li>
              <b>AI-ассистенты</b> для каждого школьника, BigData-аналитика, датчики инклюзии и ментального здоровья, многоуровневая система контроля, встроенные модели мотивации и удержания.
            </li>
          </ul>
        ),
      },
      {
        title: 'Цели, KPI, дорожная карта',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>KPI:</b> ≥3–4 места на международных олимпиадах (с 2030), рост успеваемости +5% в год, инклюзия ≥90% (к 2029), доступ к мировым знаниям ≥75%, прирост патентов +15%/год, исследователей +25%/год, масштаб до 2,7 млн учеников (2030).
            </li>
            <li>
              <b>Дорожная карта:</b>
              <ul className="list-disc ml-6">
                <li>
                  2025–2026: пилот для 16–18 лет (2–10 тыс. участников), разработка, тестирование.
                </li>
                <li>
                  2027: масштабирование, внедрение для 10–15 лет, рост до 200 000+.
                </li>
                <li>
                  2028–2029: национальный охват — 1–1,75 млн, интеграция с ВУЗами.
                </li>
                <li>
                  2030+: полная версия, охват 2,7 млн, экспорт в ЦА/СНГ.
                </li>
              </ul>
            </li>
          </ul>
        ),
      },
      {
        title: 'Финансовая модель и стресс-тестирование',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>NPV-анализ:</b> индекс рентабельности (PI) — 1,12; срок окупаемости — 4 года (дисконтированный — 6 лет); начальные инвестиции — $4,35 млн.
            </li>
            <li>
              <b>Доходы:</b> реклама, проекты для компаний, взносы родителей, аксессуары, комиссии.
            </li>
            <li>
              <b>Расходы:</b> оплата труда, техника, маркетинг, стипендии, обслуживание, коммуналка.
            </li>
            <li>
              <b>Мультифандинг:</b> господдержка, частные инвестиции, внутренняя монетизация. Стресс-тест (3 сценария); даже при негативе — дофинансирование &lt;0,0004% ВВП.
            </li>
          </ul>
        ),
      },
      {
        title: 'Регуляторика и госстратегии',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Соответствие:</b> «Казахстан-2050», Нац.план-2029, Концепции цифровизации, развития AI и высшего образования, цифровой кодекс, законы о данных и ИТ, кибербезопасность, требования по защите персональных данных.
            </li>
          </ul>
        ),
      },
      {
        title: 'Технологии, интеграции, источники данных',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Гибридная AI-модель:</b> LLM, олимпиады, платформы, школы-лидеры, научные и психологические институты и др.
            </li>
            <li>
              <b>Модульная структура, интеграция с системой образования, масштабируемость на ЦА и СНГ.</b>
            </li>
          </ul>
        ),
      },
      {
        title: 'Социальная значимость, поддержка и вовлечённость',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Опросы:</b> эксперты, госорганы, бизнес, родители, дети. Родители — 74% «за», дети: 85%+ знакомы с технологиями, 84–95% готовы участвовать.
            </li>
            <li>
              <b>Бонусная система мотивации:</b> баллы к экзаменам, стипендии, кейсы с денежными вознаграждениями, социальный лифт.
            </li>
          </ul>
        ),
      },
      {
        title: 'Оценка рисков и готовые решения',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Ключевые риски:</b> стоимость, кадры, доступ, сбои, киберугрозы, неравенство, сопротивление, здоровье и др.
            </li>
            <li>
              <b>Модель управления:</b> поэтапный запуск, льготы, обучение кадров, быстрая корректировка, резервные фонды, стресс-тесты на всех этапах.
            </li>
          </ul>
        ),
      },
      {
        title: 'Масштабирование и международная экспансия',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Подключение ВУЗов, бизнес-инкубаторов, интеграция в экономику. Экспорт — ЦА и СНГ.</b>
            </li>
          </ul>
        ),
      },
      {
        title: 'Стратегический вывод и позиционирование',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Не имеющий аналогов проект, полностью соответствует KPI и госцелям, self-sustainability, готовность к внедрению, защита от рисков, гибкая архитектура.</b>
            </li>
            <li>
              Если не реализовать проект сейчас — риск упустить окно глобального лидерства в цифровом образовании.
            </li>
            <li>
              <b>Модели:</b> демографическое прогнозирование, KPI-дорожная карта 2025–2035, NPV/PI/WACC, stress-тесты, модель инвестиций, рисков и вовлечённости.
            </li>
          </ul>
        ),
      },
    ],
  },
  en: {
    title: 'About the Project / Full Strategy',
    sections: [
      {
        title: 'Concept, Mission & Uniqueness',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Project:</b> Creating Kazakhstan’s educational metaverse “Generation of Innovators (π)” for children aged 10–18.
            </li>
            <li>
              <b>Mission:</b> Build the foundation for human capital, make Kazakhstan a Top-30 IT nation by 2030, boost innovation through digital & inclusive education.
            </li>
            <li>
              <b>For:</b> Schoolchildren (innovators), parents, schools, state, tech & business companies, universities (including global experts).
            </li>
            <li>
              <b>Strategic uniqueness:</b> national standard (not pilot); synergy of VR/AR/XR, GenAI, BigData, IoT, cloud, blockchain; full support (from demography to KPIs and regulations); global benchmarks: UAE, Korea, China, Japan, EU, Singapore, US etc.
            </li>
          </ul>
        ),
      },
      {
        title: 'Architecture & Business Logic',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              3 core age modules: <b>10–12</b>, <b>13–15</b>, <b>16–18</b>. For each — 3 virtual environments (per child survey).
            </li>
            <li>
              Corporate type with restricted access via Education/IT Ministry portal.
            </li>
            <li>
              Unified innovator knowledge ecosystem: full integration with schools, universities, economy.
            </li>
            <li>
              <b>AI assistants</b> for every pupil, BigData, inclusivity & wellbeing sensors, layered control, inbuilt motivation & retention models.
            </li>
          </ul>
        ),
      },
      {
        title: 'Goals, KPI, Roadmap',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>KPI:</b> ≥3–4 international olympiad prizes (2030+), +5% annual progress, ≥90% inclusion (by 2029), ≥75% global knowledge access, +15%/yr patents, +25%/yr researchers, 2.7M pupils covered (by 2030).
            </li>
            <li>
              <b>Roadmap:</b>
              <ul className="list-disc ml-6">
                <li>
                  2025–2026: pilot for 16–18 y/o (2–10k), module dev, testing.
                </li>
                <li>
                  2027: scale-up, module for 10–15, growth to 200k+.
                </li>
                <li>
                  2028–2029: national rollout — 1–1.75M, integration with HEIs.
                </li>
                <li>
                  2030+: full version, 2.7M coverage, export to CA/CIS.
                </li>
              </ul>
            </li>
          </ul>
        ),
      },
      {
        title: 'Financial Model & Stress Testing',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>NPV analysis:</b> PI index — 1.12; payback — 4y (discounted — 6y); initial investment — $4.35M.
            </li>
            <li>
              <b>Revenues:</b> ads, projects for companies, parent fees, accessories, commissions.
            </li>
            <li>
              <b>Expenses:</b> payroll, tech, marketing, scholarships, ops, utilities.
            </li>
            <li>
              <b>Multifunding:</b> state support, private investment, internal monetization. Stress tests (3 scenarios); worst-case needs &lt;0.0004% GDP.
            </li>
          </ul>
        ),
      },
      {
        title: 'Regulation & State Strategy',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Compliance:</b> “Kazakhstan-2050”, National Plan-2029, Digitalization/AI/HEI concepts, digital code, science/data/IT law, cybersecurity, data protection.
            </li>
          </ul>
        ),
      },
      {
        title: 'Technologies, Integrations, Data Sources',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Hybrid AI model:</b> LLMs, olympiads, platforms, leader schools, science/psych institutes.
            </li>
            <li>
              <b>Modular structure, education system integration, scaling to CA & CIS.</b>
            </li>
          </ul>
        ),
      },
      {
        title: 'Social Value, Support & Involvement',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Surveys:</b> experts, state, business, parents, kids. Parents: 74% support, kids: 85%+ tech-savvy, 84–95% willing to join.
            </li>
            <li>
              <b>Bonus system:</b> exam points, scholarships, cash-case rewards, social lift.
            </li>
          </ul>
        ),
      },
      {
        title: 'Risk Assessment & Solutions',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Key risks:</b> costs, staff, access, tech, cyber, inequality, resistance, health, etc.
            </li>
            <li>
              <b>Risk management:</b> phased launch, benefits, HR training, rapid adjustment, reserves, stress-tests.
            </li>
          </ul>
        ),
      },
      {
        title: 'Scaling & International Expansion',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Integrating HEIs, incubators, into economy. Export — CA & CIS.</b>
            </li>
          </ul>
        ),
      },
      {
        title: 'Strategic Conclusion & Positioning',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Unmatched in region, full KPI & gov goals, self-sustainability, risk-proof, flexible, ready for phased roll-out.</b>
            </li>
            <li>
              Not doing it now — risk losing the digital education leadership window.
            </li>
            <li>
              <b>Models:</b> demography, KPI/roadmap 2025–2035, NPV/PI/WACC, stress-tests, investment/risk/support model.
            </li>
          </ul>
        ),
      },
    ],
  },
  kz: {
    title: 'Жоба туралы / Толық стратегия',
    sections: [
      {
        title: 'Тұжырымдама, миссия және бірегейлік',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Жоба:</b> 10–18 жастағы балаларға арналған Қазақстанның “Инноваторлар ұрпағы (π)” білім беру метаәлемін құру.
            </li>
            <li>
              <b>Миссия:</b> адами капиталды дамыту негізін құру, Қазақстанды 2030 жылға қарай ТОП-30 IT-елге айналдыру, цифрлық және инклюзивті білім арқылы инновациялық әлеуетті арттыру.
            </li>
            <li>
              <b>Кім үшін:</b> мектеп оқушылары (инноваторлар), ата-аналар, мектептер, мемлекет, технологиялық және бизнес компаниялар, жоғары оқу орындары (соның ішінде халықаралық сарапшылар).
            </li>
            <li>
              <b>Стратегиялық бірегейлік:</b> ұлттық стандарт (пилот емес); VR/AR/XR, GenAI, BigData, IoT, бұлт, блокчейн синергиясы; демографиядан KPI-ге дейін толық қолдау; жаһандық бенчмарктер: БАӘ, Корея, Қытай, Жапония, ЕО, Сингапур, АҚШ және т.б.
            </li>
          </ul>
        ),
      },
      {
        title: 'Архитектура және бизнес-логика',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              3 негізгі жас модулі: <b>10–12</b>, <b>13–15</b>, <b>16–18</b>. Әр топ үшін — 3 виртуалды орта (балалар анкетасына сәйкес).
            </li>
            <li>
              Министрлік порталдары арқылы шектелген қолжетімділігі бар корпоративті түр.
            </li>
            <li>
              Инноваторлар үшін бірыңғай білім экожүйесі: мектеппен, ЖОО-мен, экономикамен толық интеграция.
            </li>
            <li>
              <b>AI-ассистенттер</b>, BigData, инклюзивтілік пен менталдық денсаулық датчиктері, көпдеңгейлі бақылау, мотивация мен ұстап қалу модельдері.
            </li>
          </ul>
        ),
      },
      {
        title: 'Мақсаттар, KPI, жол картасы',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>KPI:</b> ≥3–4 халықаралық олимпиада жүлдесі (2030+), жылына +5% өсім, ≥90% инклюзия (2029), ≥75% жаһандық білімге қолжетімділік, жылына +15% патенттер, +25% зерттеушілер, 2,7 млн оқушы (2030).
            </li>
            <li>
              <b>Жол картасы:</b>
              <ul className="list-disc ml-6">
                <li>
                  2025–2026: пилот (16–18 жас, 2–10 мың), модуль әзірлеу, тестілеу.
                </li>
                <li>
                  2027: ауқымдау, 10–15 жас модулі, 200 мың+.
                </li>
                <li>
                  2028–2029: ұлттық қамту — 1–1,75 млн, ЖОО-мен интеграция.
                </li>
                <li>
                  2030+: толық нұсқа, 2,7 млн қамту, экспорт (ОА/ТМД).
                </li>
              </ul>
            </li>
          </ul>
        ),
      },
      {
        title: 'Қаржылық модель және стресс-тест',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>NPV-талдау:</b> PI = 1,12; өтелу мерзімі — 4 жыл (дисконтталған — 6 жыл); бастапқы инвестиция — $4,35 млн.
            </li>
            <li>
              <b>Түсімдер:</b> жарнама, компания жобалары, ата-ана төлемі, аксессуарлар, комиссиялар.
            </li>
            <li>
              <b>Шығындар:</b> еңбек ақы, техника, маркетинг, шәкіртақы, қызмет, коммуналдық.
            </li>
            <li>
              <b>Мультифандинг:</b> мемлекеттік, жеке инвестициялар, ішкі монетизация. Стресс-тест (3 сценарий); ең нашар сценарийде қажет қаржыландыру — &lt;0,0004% ЖІӨ.
            </li>
          </ul>
        ),
      },
      {
        title: 'Норматив және мемлекеттік стратегиялар',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Сәйкестік:</b> «Қазақстан-2050», Ұлттық жоспар-2029, цифрландыру/AI/ЖОО тұжырымдамалары, цифрлық кодекс, ғылым/дерек/IT заңдары, киберқауіпсіздік, деректерді қорғау.
            </li>
          </ul>
        ),
      },
      {
        title: 'Технологиялар, интеграциялар, дереккөздер',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Гибридті AI-модель:</b> LLM, олимпиадалар, платформалар, көшбасшы мектептер, ғылым/психология институттары.
            </li>
            <li>
              <b>Модульдік құрылым, білім жүйесімен интеграция, ОА/ТМД-ға ауқымдау.</b>
            </li>
          </ul>
        ),
      },
      {
        title: 'Әлеуметтік маңыздылық, қолдау және қатысу',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Сауалнамалар:</b> сарапшылар
              — 74% қолдау, балалар: 85%+ технологиямен таныс, 84–95% қатысуға дайын.
            </li>
            <li>
              <b>Бонус жүйесі:</b> емтихан балдары, шәкіртақылар, ақшалай кейстер, әлеуметтік лифт.
            </li>
          </ul>
        ),
      },
      {
        title: 'Тәуекелдерді бағалау және дайын шешімдер',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Негізгі тәуекелдер:</b> құн, кадрлар, қолжетімділік, техникалық іркілістер, киберқауіп, теңсіздік, қарсылық, денсаулық және т.б.
            </li>
            <li>
              <b>Тәуекелдерді басқару:</b> кезең-кезеңімен іске қосу, жеңілдіктер, кадрларды оқыту, жедел түзету, резервтік қорлар, барлық кезеңде стресс-тест.
            </li>
          </ul>
        ),
      },
      {
        title: 'Ауқымдау және халықаралық экспансия',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>ЖОО, бизнес-инкубаторлар, экономикаға интеграция, экспорт — ОА және ТМД.</b>
            </li>
          </ul>
        ),
      },
      {
        title: 'Стратегиялық қорытынды және позициялау',
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>Аймақта баламасы жоқ, толық KPI және мемлекеттік мақсаттарға сай, self-sustainability, енгізуге толық дайын, тәуекелден қорғалған, икемді архитектура.</b>
            </li>
            <li>
              Қазір жүзеге асырылмаса — Қазақстан цифрлық білімде жаһандық көшбасшылықты жоғалту қаупі бар.
            </li>
            <li>
              <b>Модельдер:</b> демографиялық болжау, KPI-жол картасы 2025–2035, NPV/PI/WACC, stress-тест, инвестиция/тәуекел/қолдау модельдері.
            </li>
          </ul>
        ),
      },
    ],
  },
};
// ==== КОНЕЦ блока о проекте ====

// --- остальные функции как и были ---

const translations: Record<Lang, { /* ...твой translations без изменений... */ }> = {
  // ... твой translations (не сокращаю в этом примере) ...
};

// ... LogoBlock, FeatureCard, ArchCard, TechTag как были ...

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];
  const about = aboutProjectBlock[lang];

  function switchLang() {
    const idx = langs.indexOf(lang);
    setLang(langs[(idx + 1) % langs.length]);
    setMenuOpen(false);
  }

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      {/* Header & Sticky Navigation */}
      {/* ... (как было) ... */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
        {/* ... */}
      </header>

      {/* Welcome Screen */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white px-4">
        <LogoBlock lang={lang} logoSub={t.logo_sub} />
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 max-w-xl">
          {t.welcome.h1}
        </h1>
        <p className="text-center max-w-xl text-lg text-gray-600 mb-8 whitespace-pre-line">
          {t.welcome.p}
        </p>
        <a
          href="#mission"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-xl transition text-lg"
        >
          {t.welcome.button}
        </a>
      </section>

      {/* === ВСТАВЛЕН НОВЫЙ БЛОК ПРОЕКТА === */}
      <section id="about-project" className="scroll-mt-16 mb-16 w-full max-w-5xl mx-auto px-4">
        <div className="bg-blue-100/40 border border-blue-200 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">{about.title}</h2>
          <div className="flex flex-col gap-8">
            {about.sections.map((sec, i) => (
              <div key={i}>
                <div className="text-xl font-semibold mb-2 text-blue-900">{sec.title}</div>
                <div className="text-gray-800 text-base">{sec.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* === КОНЕЦ БЛОКА === */}

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-4 md:px-0 flex flex-col gap-28">
        {/* Mission */}
        <section id="mission" className="pt-10 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-4">{t.mission.title}</h2>
          <p className="text-lg mb-2 whitespace-pre-line">{t.mission.text}</p>
        </section>
        {/* ... остальной твой код (Pain, Solution, Architecture, KPI, Evidence, Ecosystem, Impact, About Author, CTA, Contacts, Footer) ... */}
      </main>

      <footer className="mt-20 pb-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {t.copyright}
      </footer>
    </div>
  );
}

'use client';
import React, { useState } from 'react';
const langs = ['ru', 'en', 'kz'] as const;
type Lang = typeof langs[number];

const translations: Record<Lang, {
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
  aboutAuthorTitle: string;
  aboutAuthorText: string;
  finalCTAText: string;
  finalCTAButton: string;
  contactsTitle: string;
  form: { name: string; email: string; affiliation: string; comment: string; send: string };
  contact: { email: string; telegram: string; linkedin: string };
  copyright: string;
}> = {
  // ...Твои translations (оставь их как есть, не помещаю сюда ради длины)...
  // Они идут БЕЗ изменений!
};

function LogoBlock({ lang, logoSub }: { lang: Lang; logoSub: string }) {
  return (
    <div className="flex flex-col items-center mb-2 select-none">
      <div className="rounded-full bg-gradient-to-br from-blue-200 to-blue-500 shadow-lg w-32 h-32 flex items-center justify-center">
        <span className="text-[4rem] font-black text-white drop-shadow-lg">
          π
        </span>
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-4 md:px-16 h-16">
          <div className="font-bold text-xl text-blue-600 tracking-tight flex items-center gap-2">
            <span className="text-2xl">π</span>
            <span className="hidden sm:inline">
              {lang === 'ru'
                ? 'Метавселенная'
                : lang === 'kz'
                ? 'Метаәлем'
                : 'Metaverse'}
            </span>
          </div>
          <nav className="hidden md:flex gap-2 text-base items-center">
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
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-4 p-2 rounded-md text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-4">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 px-2 rounded-md hover:bg-blue-50 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={switchLang}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              title="Сменить язык"
            >
              {t.lang}
            </button>
          </nav>
        )}
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

      <main className="w-full max-w-5xl mx-auto px-4 md:px-0 flex flex-col gap-28">

        {/* --- ВСТАВЛЕННЫЙ БЛОК --- */}
        <section id="project-concept" className="scroll-mt-16 py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Концепция, Миссия и Уникальность Проекта
          </h2>
          <div className="mb-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Проект</h3>
              <p>
                <b>Создание образовательной метавселенной Казахстана «Поколение инноваторов (π)» для детей 10–18 лет.</b>
              </p>
              <h3 className="mt-6 text-lg font-semibold text-blue-800">Миссия</h3>
              <p>
                Создать фундаментальную базу для развития человеческого капитала, вывести Казахстан в топ-30 IT-стран к 2030&nbsp;году и обеспечить рост инновационного потенциала через цифровое, инклюзивное образование.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-blue-800">Для кого?</h3>
              <ul className="list-disc ml-6">
                <li>Школьники (инноваторы)</li>
                <li>Родители</li>
                <li>Школы</li>
                <li>Государство</li>
                <li>Технологические и бизнес-компании</li>
                <li>Высшая школа и международные эксперты</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Стратегическая уникальность</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Национальный стандарт, а не пилотный фрагмент</li>
                <li>Синергия VR/AR/XR, GenAI, BigData, IoT, облако, блокчейн</li>
                <li>Поддержка от демографии до KPI, нормативной базы и финансовых моделей</li>
                <li>Прямая опора на мировой бенчмарк: кейсы ОАЭ, Кореи, Китая, Японии, ЕС, Сингапура, США и др.</li>
              </ul>
            </div>
          </div>
        </section>
        {/* --- КОНЕЦ ВСТАВКИ --- */}

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
        <section id="about-author" className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.aboutAuthorTitle}</h2>
          <p className="text-lg">{t.aboutAuthorText}</p>
        </section>

        {/* Final Call to Action */}
        <section className="scroll-mt-16 flex flex-col items-center mt-12 mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">{t.finalCTAText}</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 transition">
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

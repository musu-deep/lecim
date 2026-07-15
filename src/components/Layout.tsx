import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Globe2, Mail, Menu, Phone, X } from 'lucide-react';
import { contact, navItems } from '../data';
import { languageMeta, t } from '../i18n';
import type { Language } from '../types';

function LecimMark() {
  return (
    <svg className="lecim-mark" viewBox="0 0 100 100" role="img" aria-label="LECIM">
      <defs>
        <linearGradient id="lecim-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eefcff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="lecim-feather" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#082955" />
          <stop offset="0.52" stopColor="#2a8ee8" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="48" fill="url(#lecim-bg)" stroke="#1676df" strokeWidth="2.6" />
      <circle cx="50" cy="50" r="44.5" fill="none" stroke="#75bbef" strokeWidth="0.8" />

      <path d="M20 23c5-5 10-6 15-5v54c-5 2-10 1-15-2z" fill="#ff8500" />
      <path d="M35 18c5-2 10-1 15 1v52c-5-2-10-2-15 1z" fill="#ffffff" />
      <path d="M50 19c5-2 10-1 15 4v47c-5 2-10 2-15 1z" fill="#079447" />

      <path d="M31 67c5-17 12-31 23-43-3 16-9 31-19 45z" fill="url(#lecim-feather)" stroke="#061d49" strokeWidth="1.4" />
      <path d="M33 66c5-8 10-16 17-24" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.9" />
      <path d="M29 72c13 4 29 5 45 2 6-1 10-4 14-7" fill="none" stroke="#187be2" strokeWidth="1.3" strokeLinecap="round" />

      <g transform="translate(70 19)">
        <circle cx="0" cy="0" r="3.4" fill="#f2a800" />
        {Array.from({ length: 8 }).map((_, index) => {
          const angle = (index * Math.PI) / 4;
          const x1 = Math.cos(angle) * 5;
          const y1 = Math.sin(angle) * 5;
          const x2 = Math.cos(angle) * 8;
          const y2 = Math.sin(angle) * 8;
          return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f2a800" strokeWidth="1.2" />;
        })}
      </g>

      <text x="54" y="52" fill="#1377db" fontSize="17" fontWeight="900" fontFamily="Arial, sans-serif">LECIM</text>
      <text x="50" y="84" textAnchor="middle" fill="#0b2b55" fontSize="4.2" fontWeight="700" fontFamily="Arial, sans-serif">LIGUE DES ÉCOLES ISLAMIQUES</text>
    </svg>
  );
}

const FAVICON_SVG = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="47" fill="#f7fdff" stroke="#1676df" stroke-width="5"/>
    <path d="M18 25c7-5 13-6 19-4v54c-7 3-13 1-19-2z" fill="#ff8500"/>
    <path d="M37 21c6-2 12-1 18 1v52c-6-2-12-2-18 1z" fill="#fff"/>
    <path d="M55 22c6-2 12 0 18 5v45c-6 3-12 3-18 1z" fill="#079447"/>
    <text x="40" y="59" fill="#1377db" font-size="20" font-weight="900" font-family="Arial">LECIM</text>
  </svg>
`);

export function Layout({ children, lang }: { children: ReactNode; lang: Language }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const meta = languageMeta[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.body.dataset.lang = lang;
    document
      .querySelectorAll<HTMLLinkElement>("link[rel~='icon'], link[rel='apple-touch-icon']")
      .forEach((link) => {
        link.href = `data:image/svg+xml,${FAVICON_SVG}`;
      });
    setOpen(false);
  }, [lang, meta.dir, location.pathname]);

  const otherLanguage = lang === 'ar' ? 'fr' : 'ar';
  const translatedPath = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    const rest = parts.slice(1).join('/');
    return `/${otherLanguage}${rest ? `/${rest}` : ''}`;
  }, [location.pathname, otherLanguage]);

  const switchLanguage = () => navigate(translatedPath);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {lang === 'ar' ? 'انتقل إلى المحتوى' : 'Aller au contenu'}
      </a>

      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href={`mailto:${contact.email}`}><Mail size={15} /> {contact.email}</a>
            <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`}><Phone size={15} /> {contact.phones[0]}</a>
          </div>
          <button className="language-inline" onClick={switchLanguage} type="button">
            <Globe2 size={16} /> {languageMeta[otherLanguage].label}
          </button>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Link className="brand" to={`/${lang}`} aria-label="LECIM">
            <span className="brand__logo"><LecimMark /></span>
            <span className="brand__text">
              <strong>{lang === 'ar' ? 'رابطة المدارس الإسلامية' : 'Ligue des Établissements'}</strong>
              <small>{lang === 'ar' ? 'والنموذجية في كوت ديفوار' : 'Confessionnels Islamiques'}</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label={lang === 'ar' ? 'القائمة الرئيسية' : 'Navigation principale'}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={`/${lang}${item.path ? `/${item.path}` : ''}`}
                end={!item.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {t(item.label, lang)}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link className="button button--primary button--small" to={`/${lang}/membership`}>
              {lang === 'ar' ? 'انضمام مدرسة' : 'Adhérer'}
            </Link>
            <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-nav-wrap">
            <nav className="container mobile-nav">
              {navItems.map((item) => (
                <NavLink key={item.path} to={`/${lang}${item.path ? `/${item.path}` : ''}`} end={!item.path}>
                  {t(item.label, lang)}
                </NavLink>
              ))}
              <button type="button" onClick={switchLanguage}>
                <Globe2 size={17} /> {languageMeta[otherLanguage].label}
              </button>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content">{children}</main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__about">
            <div className="brand brand--footer">
              <span className="brand__logo"><LecimMark /></span>
              <span className="brand__text">
                <strong>LECIM</strong>
                <small>{lang === 'ar' ? 'نحو تعليم راسخ ومواطن مسؤول' : 'Pour une éducation solide et citoyenne'}</small>
              </span>
            </div>
            <p>
              {lang === 'ar'
                ? 'مظلة تربوية وطنية توحّد جهود المدارس الإسلامية والنموذجية، وتدعم الجودة والاعتراف الرسمي وبناء قدرات العاملين في التعليم.'
                : "Une plateforme éducative nationale qui fédère les établissements islamiques, renforce la qualité et accompagne leur reconnaissance officielle."}
            </p>
          </div>

          <div>
            <h3>{lang === 'ar' ? 'روابط سريعة' : 'Liens rapides'}</h3>
            <ul className="footer__links">
              {navItems.slice(1, 7).map((item) => (
                <li key={item.path}><Link to={`/${lang}/${item.path}`}>{t(item.label, lang)}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{lang === 'ar' ? 'الخدمات الأساسية' : 'Services clés'}</h3>
            <ul className="footer__links">
              <li><Link to={`/${lang}/schools`}>{lang === 'ar' ? 'دليل المدارس' : 'Annuaire des écoles'}</Link></li>
              <li><Link to={`/${lang}/exams`}>{lang === 'ar' ? 'بوابة الامتحانات' : 'Portail des examens'}</Link></li>
              <li><Link to={`/${lang}/membership`}>{lang === 'ar' ? 'طلب العضوية' : "Demande d'adhésion"}</Link></li>
              <li><Link to={`/${lang}/partners`}>{lang === 'ar' ? 'الشركاء' : 'Partenaires'}</Link></li>
              <li><Link to={`/${lang}/policies`}>{lang === 'ar' ? 'السياسات والوثائق' : 'Politiques et documents'}</Link></li>
              <li><Link to={`/${lang}/contact`}>{lang === 'ar' ? 'التواصل' : 'Contact'}</Link></li>
            </ul>
          </div>

          <div>
            <h3>{lang === 'ar' ? 'بيانات التواصل' : 'Coordonnées'}</h3>
            <ul className="footer__contact">
              <li>{lang === 'ar' ? contact.addressAr : contact.addressFr}</li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              {contact.phones.map((phone) => <li key={phone}><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© 2026 LECIM. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}</span>
          <span>{lang === 'ar' ? 'التعليم • الجودة • المواطنة' : 'Éducation • Qualité • Citoyenneté'}</span>
        </div>
      </footer>
    </div>
  );
}

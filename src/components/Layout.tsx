import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Globe2, Mail, Menu, Phone, X } from 'lucide-react';
import { contact, navItems } from '../data';
import { languageMeta, t } from '../i18n';
import type { Language } from '../types';

const ORIGINAL_LOGO = '/assets/lecim-logo-official.png?v=11';

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
        link.href = ORIGINAL_LOGO;
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
            <span className="brand__logo" aria-hidden="true">
              <img src={ORIGINAL_LOGO} alt="" />
            </span>
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
              <span className="brand__logo" aria-hidden="true">
                <img src={ORIGINAL_LOGO} alt="" />
              </span>
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

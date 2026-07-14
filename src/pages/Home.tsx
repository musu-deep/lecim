import { Link } from 'react-router-dom';
import {
  ArrowUpLeft,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CalendarCheck2,
  GraduationCap,
  Handshake,
  MapPin,
  Megaphone,
  School,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import { news, stats } from '../data';
import { SectionHeading, TextLink } from '../components/Ui';
import type { Language } from '../types';

const services = [
  {
    icon: BookOpenCheck,
    ar: 'تطوير وتوحيد المناهج',
    fr: 'Harmonisation des curricula',
    arText: 'أطر تعليمية تجمع بين العلوم الشرعية والمعارف الوطنية والمهارات الحديثة.',
    frText: 'Des référentiels conciliant enseignement religieux, programme national et compétences modernes.',
  },
  {
    icon: CalendarCheck2,
    ar: 'تنظيم الامتحانات',
    fr: 'Organisation des examens',
    arText: 'إعلانات وجداول وتعليمات موحدة للمدارس والطلاب ولجان الامتحانات.',
    frText: 'Annonces, calendriers et procédures harmonisées pour les établissements et les candidats.',
  },
  {
    icon: GraduationCap,
    ar: 'تدريب القيادات والمعلمين',
    fr: 'Formation des cadres',
    arText: 'برامج مهنية في القيادة المدرسية والجودة والتقويم وطرائق التدريس.',
    frText: 'Des programmes professionnels en leadership, qualité, évaluation et pédagogie.',
  },
  {
    icon: BadgeCheck,
    ar: 'دعم الاعتراف الرسمي',
    fr: 'Reconnaissance officielle',
    arText: 'مساندة المدارس في الجاهزية النظامية والتربوية والتواصل مع الجهات المختصة.',
    frText: 'Accompagnement réglementaire et pédagogique auprès des autorités compétentes.',
  },
  {
    icon: ShieldCheck,
    ar: 'تمثيل المدارس والدفاع عن مصالحها',
    fr: 'Représentation des établissements',
    arText: 'صوت مؤسسي موحد يعزز حقوق المدارس ويخدم استدامة التعليم العربي الإسلامي.',
    frText: 'Une voix institutionnelle commune au service des droits et de la pérennité des écoles.',
  },
  {
    icon: Handshake,
    ar: 'الشراكات والمشروعات',
    fr: 'Partenariats et projets',
    arText: 'مشروعات قابلة للشراكة في البنية التعليمية والتقنية والتدريب والمنح.',
    frText: 'Des projets ouverts aux partenariats en infrastructures, numérique, formation et bourses.',
  },
];

export function Home({ lang }: { lang: Language }) {
  return (
    <>
      <section className="hero">
        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="hero__eyebrow">
              <School size={18} />
              {lang === 'ar' ? 'منذ عام 2012 • كوت ديفوار' : 'Depuis 2012 • Côte d’Ivoire'}
            </span>
            <h1>
              {lang === 'ar' ? (
                <>المظلة الوطنية <em>للمدارس الإسلامية</em> والنموذجية</>
              ) : (
                <>La plateforme nationale des <em>établissements islamiques</em> et modèles</>
              )}
            </h1>
            <p>
              {lang === 'ar'
                ? 'نوحّد جهود المدارس، ونطوّر المناهج والكوادر، وندعم الاعتراف الرسمي بالتعليم العربي الإسلامي؛ لبناء تعليم راسخ ومواطن مسؤول يشارك في نهضة وطنه.'
                : "Nous fédérons les établissements, renforçons les curricula et les compétences, et accompagnons la reconnaissance officielle de l’enseignement arabo-islamique."}
            </p>
            <div className="hero__actions">
              <Link className="button button--accent" to={`/${lang}/membership`}>
                {lang === 'ar' ? 'انضمام مدرسة' : 'Adhérer à la Ligue'}
              </Link>
              <Link className="button button--ghost-light" to={`/${lang}/exams`}>
                {lang === 'ar' ? 'بوابة الامتحانات' : 'Portail des examens'}
              </Link>
            </div>
            <div className="hero__trust">
              <div><BadgeCheck size={18} /><span>{lang === 'ar' ? 'معايير واضحة' : 'Référentiels clairs'}</span></div>
              <div><UsersRound size={18} /><span>{lang === 'ar' ? 'مجتمع تعليمي واسع' : 'Réseau éducatif national'}</span></div>
              <div><Handshake size={18} /><span>{lang === 'ar' ? 'شراكات مؤثرة' : 'Partenariats structurants'}</span></div>
            </div>
          </div>

          <div className="hero__visual" aria-label={lang === 'ar' ? 'طلاب في بيئة تعليمية' : 'Élèves dans un environnement scolaire'}>
            <div className="hero__image-frame">
              <img src="/assets/students-illustration.svg" alt={lang === 'ar' ? 'طلاب في بيئة تعليمية' : 'Élèves dans un environnement scolaire'} />
              <div className="hero__image-gradient" />
            </div>
            <div className="floating-card floating-card--top">
              <span className="floating-card__icon"><Building2 size={20} /></span>
              <span><strong>1,010+</strong>{lang === 'ar' ? 'مدارس ضمن الشبكة' : 'Écoles dans le réseau'}</span>
            </div>
            <div className="floating-card floating-card--bottom">
              <span className="floating-card__icon"><MapPin size={20} /></span>
              <span><strong>53</strong>{lang === 'ar' ? 'فرعًا في أنحاء البلاد' : 'Branches nationales'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label={lang === 'ar' ? 'إحصاءات الرابطة' : 'Chiffres clés'}>
        <div className="container stats-grid">
          {stats.map((item) => (
            <div className="stat" key={item.ar}>
              <strong>{item.value}</strong>
              <span>{lang === 'ar' ? item.ar : item.fr}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow={lang === 'ar' ? 'ماذا نقدم؟' : 'Notre mission en action'}
            title={lang === 'ar' ? 'خدمات تبني مدرسة أقوى وتعليمًا أجود' : 'Des services pour des écoles plus fortes'}
            text={lang === 'ar'
              ? 'خدمات مترابطة تبدأ من تطوير المدرسة وتمتد إلى الامتحانات والاعتراف والشراكات.'
              : "Un accompagnement intégré, de l’amélioration scolaire aux examens, à la reconnaissance et aux partenariats."}
          />
          <div className="cards-grid cards-grid--three">
            {services.map(({ icon: Icon, ar, fr, arText, frText }) => (
              <article className="service-card" key={ar}>
                <span className="service-card__icon"><Icon size={25} /></span>
                <h3>{lang === 'ar' ? ar : fr}</h3>
                <p>{lang === 'ar' ? arText : frText}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="button button--outline" to={`/${lang}/services`}>
              {lang === 'ar' ? 'استكشف جميع الخدمات' : 'Découvrir tous les services'}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-feature">
          <div className="split-feature__content">
            <span className="eyebrow">{lang === 'ar' ? 'رؤية تربوية وطنية' : 'Une vision éducative nationale'}</span>
            <h2>{lang === 'ar' ? 'تعليم يجمع بين القيم والمعرفة والمواطنة' : 'Une éducation qui conjugue valeurs, savoir et citoyenneté'}</h2>
            <p>
              {lang === 'ar'
                ? 'نعمل من أجل تعليم عربي إسلامي معترف به وعالي الجودة، يصنع مواطنًا صالحًا ومتمكنًا، يحسن العيش المشترك ويشارك بإيجابية في نهضة كوت ديفوار.'
                : "Nous œuvrons pour un enseignement arabo-islamique reconnu et de qualité, formant des citoyens compétents, responsables et engagés dans le vivre-ensemble."}
            </p>
            <div className="feature-checks">
              {(lang === 'ar'
                ? ['توحيد المعايير مع احترام خصوصية المدارس', 'تحسين جودة القيادة والتعليم والتقويم', 'تعزيز الشراكة مع الدولة والمجتمع', 'توسيع فرص الطلاب والمعلمين']
                : ['Harmoniser les standards tout en respectant les spécificités', 'Améliorer le leadership, la pédagogie et l’évaluation', 'Renforcer le partenariat avec l’État et la société', 'Élargir les opportunités des élèves et enseignants']
              ).map((item) => <span key={item}><BadgeCheck size={19} />{item}</span>)}
            </div>
            <Link to={`/${lang}/about`} className="inline-cta">
              <TextLink lang={lang}>{lang === 'ar' ? 'اعرف أكثر عن الرابطة' : 'En savoir plus sur la Ligue'}</TextLink>
            </Link>
          </div>
          <div className="vision-panel">
            <div className="vision-panel__pattern" />
            <img src="https://www.lecimschool.com/wp-content/uploads/2024/06/photo_2025-02-08_11-30-35-removebg-preview2.png" alt="LECIM" />
            <blockquote>
              {lang === 'ar'
                ? 'نحو تعليم راسخ، ومدرسة فاعلة، ومواطن مسؤول.'
                : 'Pour une éducation solide, une école efficace et un citoyen responsable.'}
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container announcements">
          <div className="announcements__intro">
            <span className="eyebrow eyebrow--light"><Megaphone size={17} /> {lang === 'ar' ? 'إعلانات مهمة' : 'Informations importantes'}</span>
            <h2>{lang === 'ar' ? 'كل ما تحتاجه المدرسة والطالب في مكان واحد' : 'Tout ce dont les écoles et les élèves ont besoin'}</h2>
            <p>{lang === 'ar' ? 'تابع المواعيد والتعليمات والتعاميم الرسمية أولًا بأول.' : 'Suivez les échéances, procédures et communiqués officiels.'}</p>
            <Link className="button button--ghost-light" to={`/${lang}/exams`}>
              {lang === 'ar' ? 'عرض بوابة الامتحانات' : 'Voir le portail des examens'}
            </Link>
          </div>
          <div className="announcements__cards">
            <Link to={`/${lang}/exams`} className="announcement-card">
              <CalendarCheck2 size={24} />
              <div><small>{lang === 'ar' ? 'آخر موعد' : 'Échéance'}</small><strong>{lang === 'ar' ? 'تسجيل المرشحين للامتحانات' : 'Inscription des candidats'}</strong><span>30 / 08 / 2026</span></div>
              <ArrowUpLeft size={20} />
            </Link>
            <Link to={`/${lang}/schools`} className="announcement-card">
              <Building2 size={24} />
              <div><small>{lang === 'ar' ? 'خدمة المدارس' : 'Service écoles'}</small><strong>{lang === 'ar' ? 'تحديث بيانات المدرسة' : 'Mise à jour des données'}</strong><span>{lang === 'ar' ? 'متاح الآن' : 'Disponible'}</span></div>
              <ArrowUpLeft size={20} />
            </Link>
            <Link to={`/${lang}/media`} className="announcement-card">
              <Megaphone size={24} />
              <div><small>{lang === 'ar' ? 'تعميم' : 'Communiqué'}</small><strong>{lang === 'ar' ? 'جدول الاجتماعات الإقليمية' : 'Réunions régionales'}</strong><span>{lang === 'ar' ? 'يوليو – سبتمبر' : 'Juillet – septembre'}</span></div>
              <ArrowUpLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={lang === 'ar' ? 'المركز الإعلامي' : 'Actualités'}
            title={lang === 'ar' ? 'أخبار الرابطة ومستجداتها' : 'Les dernières nouvelles de la Ligue'}
            text={lang === 'ar' ? 'أخبار موثقة، إعلانات، وبرامج تهم المدارس والشركاء.' : 'Actualités, annonces et programmes utiles aux établissements et partenaires.'}
          />
          <div className="cards-grid cards-grid--three news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.id}>
                <div className="news-card__meta"><span>{lang === 'ar' ? item.category.ar : item.category.fr}</span><time>{new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'fr-FR', { dateStyle: 'medium' }).format(new Date(item.date))}</time></div>
                <h3>{lang === 'ar' ? item.title.ar : item.title.fr}</h3>
                <p>{lang === 'ar' ? item.excerpt.ar : item.excerpt.fr}</p>
                <Link to={`/${lang}/media`}><TextLink lang={lang}>{lang === 'ar' ? 'اقرأ التفاصيل' : 'Lire la suite'}</TextLink></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container partner-strip">
          <div>
            <span className="eyebrow">{lang === 'ar' ? 'الشراكة تصنع الأثر' : 'Le partenariat crée l’impact'}</span>
            <h2>{lang === 'ar' ? 'معًا نطوّر مستقبل التعليم' : 'Ensemble, faisons évoluer l’éducation'}</h2>
            <p>{lang === 'ar' ? 'نرحب بالشراكات الحكومية والأكاديمية والتنموية والتقنية التي تعزز جودة المدارس وفرص الطلاب.' : 'Nous accueillons les partenariats publics, académiques, techniques et de développement.'}</p>
          </div>
          <div className="partner-names">
            <span>CODISS</span>
            <span>MENET-FP</span>
            <span>Universités</span>
            <span>ONG & Fondations</span>
          </div>
          <Link className="button button--primary" to={`/${lang}/contact`}>{lang === 'ar' ? 'ابدأ شراكة' : 'Devenir partenaire'}</Link>
        </div>
      </section>
    </>
  );
}

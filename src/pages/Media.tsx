import { CalendarDays, Newspaper, Tag } from 'lucide-react';
import { news } from '../data';
import { PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function Media({ lang }: { lang: Language }) {
  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'المركز الإعلامي' : 'Actualités'} title={lang === 'ar' ? 'أخبار وإعلانات تهم المجتمع التعليمي' : 'Actualités et communiqués du réseau éducatif'} text={lang === 'ar' ? 'منصة موحدة لأخبار الرابطة والامتحانات والاجتماعات والبرامج والشراكات.' : 'Un espace unique pour les actualités, examens, réunions, programmes et partenariats.'} />
      <section className="section section--soft">
        <div className="container media-layout">
          <div className="media-feature">
            <div className="media-feature__icon"><Newspaper size={38} /></div>
            <span className="eyebrow">{lang === 'ar' ? 'آخر خبر' : 'À la une'}</span>
            <h2>{lang === 'ar' ? news[0].title.ar : news[0].title.fr}</h2>
            <p>{lang === 'ar' ? news[0].excerpt.ar : news[0].excerpt.fr}</p>
            <div className="news-card__meta"><span><Tag size={14} /> {lang === 'ar' ? news[0].category.ar : news[0].category.fr}</span><time><CalendarDays size={14} /> {new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'fr-FR', { dateStyle: 'long' }).format(new Date(news[0].date))}</time></div>
          </div>
          <div className="media-side">
            <SectionHeading align="start" eyebrow={lang === 'ar' ? 'المزيد' : 'À découvrir'} title={lang === 'ar' ? 'مستجدات الرابطة' : 'Dernières publications'} />
            {news.slice(1).map((item) => <article className="media-row" key={item.id}><time>{new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(item.date))}</time><h3>{lang === 'ar' ? item.title.ar : item.title.fr}</h3><p>{lang === 'ar' ? item.excerpt.ar : item.excerpt.fr}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={lang === 'ar' ? 'سياسة النشر' : 'Politique éditoriale'} title={lang === 'ar' ? 'محتوى رسمي، منظم، وقابل للتحقق' : 'Une information officielle, structurée et vérifiable'} text={lang === 'ar' ? 'تظهر في المركز الإعلامي الأخبار الصادرة عن الرابطة ولجانها وفروعها بعد المراجعة، مع تاريخ وتصنيف ومصدر واضح.' : 'Les publications de la Ligue, de ses commissions et de ses branches sont diffusées après validation, avec date, catégorie et source.'} />
        </div>
      </section>
    </>
  );
}

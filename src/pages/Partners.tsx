import { Building2, Globe2, GraduationCap, Handshake, Landmark, Network, Wrench } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function Partners({ lang }: { lang: Language }) {
  const categories = [
    [Landmark, 'الجهات الحكومية', 'Institutions publiques', 'التنظيم والاعتراف وتطوير السياسات التعليمية.', 'Réglementation, reconnaissance et politiques éducatives.'],
    [GraduationCap, 'الجامعات والمؤسسات الأكاديمية', 'Universités et institutions académiques', 'المناهج والبحث والتدريب والمنح والمسارات الانتقالية.', 'Curricula, recherche, formation, bourses et passerelles.'],
    [Globe2, 'المنظمات التنموية والدولية', 'Organisations internationales', 'التمويل الفني والبرامج الشاملة وحماية الطفل والتعليم في الأزمات.', 'Assistance technique, inclusion, protection et éducation en situation de crise.'],
    [Building2, 'القطاع الخاص والمؤسسات المانحة', 'Secteur privé et fondations', 'التجهيزات والمنح والتحول الرقمي والمسؤولية الاجتماعية.', 'Équipements, bourses, numérique et responsabilité sociétale.'],
    [Wrench, 'الشركاء التقنيون', 'Partenaires techniques', 'المنصات والاتصال والبنية الرقمية والبيانات والأمن السيبراني.', 'Plateformes, connectivité, données et cybersécurité.'],
    [Network, 'شبكات المدارس والمجتمع', 'Réseaux scolaires et communautés', 'التبادل المعرفي والأنشطة والتمثيل المجتمعي والتطوع.', 'Échanges, activités, représentation communautaire et volontariat.'],
  ] as const;

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'الشركاء' : 'Partenaires'} title={lang === 'ar' ? 'شراكات تجمع الموارد والخبرة لصناعة أثر تعليمي أوسع' : 'Des partenariats qui réunissent ressources et expertise'} text={lang === 'ar' ? 'تعمل الرابطة مع الحكومة والأكاديميين والقطاع الخاص والمنظمات لبناء حلول تعليمية قابلة للاستدامة والتوسع.' : 'La Ligue collabore avec les pouvoirs publics, le monde académique, le secteur privé et les organisations de développement.'} />
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow={lang === 'ar' ? 'مجالات التعاون' : 'Domaines de coopération'} title={lang === 'ar' ? 'لكل شريك مساحة واضحة لصناعة الأثر' : 'À chaque partenaire un rôle concret'} />
          <div className="cards-grid cards-grid--three">
            {categories.map(([Icon, ar, fr, arText, frText]) => <article className="service-card" key={ar}><span className="service-card__icon"><Icon size={25} /></span><h3>{lang === 'ar' ? ar : fr}</h3><p>{lang === 'ar' ? arText : frText}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container info-banner"><Handshake size={28} /><div><strong>{lang === 'ar' ? 'نبدأ الشراكة بتحديد الأثر المطلوب' : 'Le partenariat commence par l’impact recherché'}</strong><p>{lang === 'ar' ? 'تُبنى مذكرات التعاون على أهداف ومخرجات ومسؤوليات ومؤشرات وتقارير واضحة.' : 'Les accords précisent les objectifs, résultats, responsabilités, indicateurs et modalités de suivi.'}</p></div></div>
      </section>
    </>
  );
}

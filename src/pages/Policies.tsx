import { BookLock, Download, FileCheck2, Scale, ShieldCheck, UsersRound } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function Policies({ lang }: { lang: Language }) {
  const policies = [
    [ShieldCheck, 'سياسة حماية الطفل', "Politique de protection de l’enfant", 'إطار السلامة والإبلاغ والاستجابة والسلوك المهني داخل المؤسسات التعليمية.', 'Cadre de sécurité, signalement, réponse et conduite professionnelle.'],
    [Scale, 'مدونة السلوك والنزاهة', 'Code de conduite et d’intégrité', 'التزامات القيادات والعاملين والمتطوعين في النزاهة والاحترام وتعارض المصالح.', 'Engagements en matière d’intégrité, de respect et de conflits d’intérêts.'],
    [FileCheck2, 'سياسة العضوية والاعتماد', 'Politique d’adhésion et de reconnaissance', 'شروط الانضمام والتصنيف والتجديد والتعليق وآليات التظلم.', 'Conditions d’adhésion, classification, renouvellement et recours.'],
    [UsersRound, 'سياسة الشكاوى والملاحظات', 'Politique de plaintes et retours', 'قنوات آمنة وشفافة لاستقبال الشكاوى ومعالجتها وحماية أصحابها.', 'Canaux sûrs et transparents de réception et de traitement des plaintes.'],
    [BookLock, 'سياسة البيانات والخصوصية', 'Politique de données et confidentialité', 'قواعد جمع بيانات المدارس والطلاب وحفظها واستخدامها وصلاحيات الوصول إليها.', 'Règles de collecte, conservation, utilisation et accès aux données.'],
  ] as const;

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'السياسات والوثائق' : 'Politiques et documents'} title={lang === 'ar' ? 'حوكمة واضحة تحمي المدرسة والطالب والثقة المؤسسية' : 'Une gouvernance claire au service des écoles, des élèves et de la confiance'} text={lang === 'ar' ? 'مساحة مركزية للسياسات واللوائح والأدلة الرسمية، مع رقم إصدار وتاريخ اعتماد واضح.' : 'Un espace central pour les politiques, règlements et guides officiels, avec version et date de validation.'} />
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow={lang === 'ar' ? 'الوثائق الأساسية' : 'Documents essentiels'} title={lang === 'ar' ? 'سياسات مؤسسية قابلة للتطبيق' : 'Des politiques institutionnelles opérationnelles'} />
          <div className="cards-grid cards-grid--three">
            {policies.map(([Icon, ar, fr, arText, frText]) => (
              <article className="service-card service-card--detailed" key={ar}>
                <span className="service-card__icon"><Icon size={25} /></span>
                <h3>{lang === 'ar' ? ar : fr}</h3>
                <p>{lang === 'ar' ? arText : frText}</p>
                <button className="document-button" type="button"><Download size={16} /> {lang === 'ar' ? 'النسخة الرسمية قريبًا' : 'Version officielle à venir'}</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

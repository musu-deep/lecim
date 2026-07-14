import { BadgeCheck, BookOpenCheck, ChartNoAxesCombined, ClipboardCheck, GraduationCap, Handshake, Laptop2, Scale, School, ShieldCheck } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function Services({ lang }: { lang: Language }) {
  const services = [
    [BookOpenCheck, 'تطوير المناهج والمعايير', 'Développement des curricula', 'تصميم أطر مرجعية وأدلة تطبيقية تحقق التوازن بين التعليم الإسلامي والبرنامج الوطني.', 'Conception de référentiels conciliant enseignement islamique et programme national.'],
    [ClipboardCheck, 'الامتحانات والتقويم', 'Examens et évaluation', 'إدارة التسجيل والجداول والتعليمات والنتائج، وتطوير أدوات تقويم موثوقة.', 'Gestion des inscriptions, calendriers, consignes, résultats et outils d’évaluation.'],
    [GraduationCap, 'تدريب المعلمين والقيادات', 'Formation des enseignants et cadres', 'برامج عملية في القيادة المدرسية وطرائق التدريس والجودة والإدارة.', 'Programmes pratiques en leadership, pédagogie, qualité et gestion.'],
    [BadgeCheck, 'الاعتراف والامتثال', 'Reconnaissance et conformité', 'تقييم الجاهزية وتطوير الملفات واللوائح والإجراءات اللازمة للاعتراف الرسمي.', 'Diagnostic, préparation documentaire et accompagnement vers la reconnaissance officielle.'],
    [ChartNoAxesCombined, 'الجودة وقياس الأداء', 'Qualité et performance', 'مؤشرات أداء وبطاقات تقييم وخطط تحسين ومتابعة دورية للمدارس.', 'Indicateurs, tableaux de bord, évaluations et plans d’amélioration.'],
    [Laptop2, 'التحول الرقمي', 'Transformation numérique', 'منصات بيانات وخدمات إلكترونية للمدارس والطلاب والامتحانات.', 'Services numériques pour les établissements, les élèves et les examens.'],
    [Scale, 'التمثيل والمناصرة', 'Représentation et plaidoyer', 'تمثيل مصالح المدارس أمام الجهات المختصة وتقديم الرأي المهني الموحد.', 'Représentation des intérêts des établissements auprès des autorités.'],
    [Handshake, 'الشراكات والتمويل', 'Partenariats et financement', 'تصميم مشروعات قابلة للتمويل وربط المدارس بالشركاء والمانحين.', 'Montage de projets et mise en relation avec les partenaires et bailleurs.'],
    [ShieldCheck, 'السياسات وحماية الطفل', 'Politiques et protection de l’enfant', 'نماذج وسياسات للسلامة والسلوك المهني وحماية الأطفال داخل البيئة المدرسية.', 'Politiques de sécurité, conduite professionnelle et protection de l’enfant.'],
  ] as const;

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'الخدمات' : 'Services'} title={lang === 'ar' ? 'خدمات مؤسسية متكاملة للمدارس الأعضاء' : 'Un accompagnement institutionnel intégré'} text={lang === 'ar' ? 'من تطوير المدرسة إلى الاعتراف الرسمي والتحول الرقمي، تقدم الرابطة خدمات قابلة للقياس وموجهة للاحتياج.' : "De l’amélioration scolaire à la reconnaissance et au numérique, la Ligue propose des services concrets et mesurables."} />
      <section className="section section--soft">
        <div className="container">
          <div className="cards-grid cards-grid--three">
            {services.map(([Icon, ar, fr, arText, frText]) => <article className="service-card service-card--detailed" key={ar}><span className="service-card__icon"><Icon size={25} /></span><h3>{lang === 'ar' ? ar : fr}</h3><p>{lang === 'ar' ? arText : frText}</p><span className="service-card__status"><School size={15} /> {lang === 'ar' ? 'متاح للمدارس الأعضاء' : 'Réservé aux membres'}</span></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container process-block">
          <SectionHeading eyebrow={lang === 'ar' ? 'كيف تستفيد المدرسة؟' : 'Comment en bénéficier ?'} title={lang === 'ar' ? 'مسار خدمة واضح من الطلب إلى الأثر' : 'Un parcours clair, de la demande aux résultats'} />
          <div className="process-grid">
            {(lang === 'ar' ? ['تقديم الطلب وتحديد الاحتياج', 'التقييم والتشخيص', 'خطة تنفيذ متفق عليها', 'التنفيذ والمتابعة', 'قياس الأثر والتحسين'] : ['Soumission de la demande', 'Diagnostic', 'Plan d’action convenu', 'Mise en œuvre et suivi', 'Mesure des résultats']).map((item, index) => <div className="process-step" key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>
    </>
  );
}

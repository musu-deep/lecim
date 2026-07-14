import { BookMarked, Building, CircleDollarSign, Laptop2, LibraryBig, School, UsersRound } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function Projects({ lang }: { lang: Language }) {
  const projects = [
    [Building, 'برنامج جاهزية المدارس للاعتراف الرسمي', 'Programme de préparation à la reconnaissance', 'تقييم الفجوات، تطوير الملفات، تحسين البنية التعليمية، ومتابعة استيفاء المعايير.', 'Diagnostic, dossiers, amélioration des conditions d’enseignement et suivi de conformité.', '35%'],
    [Laptop2, 'المنصة الوطنية لبيانات المدارس', 'Plateforme nationale des données scolaires', 'قاعدة بيانات موحدة للمدارس والطلاب والمعلمين والامتحانات ومؤشرات الأداء.', 'Une base centralisée pour les écoles, élèves, enseignants, examens et indicateurs.', '20%'],
    [UsersRound, 'أكاديمية القيادات والمعلمين', 'Académie des cadres et enseignants', 'مسارات تدريب وشهادات مهنية لرفع كفاءة الإدارة والتدريس والتقويم.', 'Parcours de formation et certifications professionnelles en gestion et pédagogie.', '45%'],
    [LibraryBig, 'مركز المناهج والمصادر التعليمية', 'Centre des curricula et ressources', 'إنتاج أدلة وكتب ومواد رقمية ثنائية اللغة قابلة للاستخدام في المدارس.', 'Production de guides, manuels et ressources numériques bilingues.', '15%'],
    [School, 'مدارس نموذجية قابلة للتوسع', 'Écoles modèles réplicables', 'تطوير نماذج مدرسية تجمع الجودة الأكاديمية والهوية والقابلية للاستدامة.', 'Développement de modèles d’école conciliant qualité, identité et durabilité.', '10%'],
    [BookMarked, 'صندوق دعم التعليم الإسلامي', 'Fonds de soutien à l’éducation islamique', 'آلية تمويل شفافة للمنح والبنية الأساسية وتطوير المعلمين والمدارس الأقل قدرة.', 'Mécanisme transparent pour les bourses, infrastructures et écoles vulnérables.', '5%'],
  ] as const;

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'المشروعات' : 'Projets'} title={lang === 'ar' ? 'مشروعات قابلة للشراكة تصنع أثرًا تعليميًا مستدامًا' : 'Des projets structurants ouverts aux partenariats'} text={lang === 'ar' ? 'محفظة مشروعات تربوية ورقمية ومؤسسية، مصممة بمخرجات ومؤشرات واحتياجات تمويل واضحة.' : 'Un portefeuille de projets éducatifs, numériques et institutionnels, avec résultats et besoins clairement définis.'} />
      <section className="section section--soft">
        <div className="container projects-grid">
          {projects.map(([Icon, ar, fr, arText, frText, progress], index) => (
            <article className="project-card" key={ar}>
              <div className="project-card__head"><span><Icon size={25} /></span><small>0{index + 1}</small></div>
              <h3>{lang === 'ar' ? ar : fr}</h3>
              <p>{lang === 'ar' ? arText : frText}</p>
              <div className="progress-label"><span>{lang === 'ar' ? 'نسبة الإعداد' : 'Niveau de préparation'}</span><strong>{progress}</strong></div>
              <div className="progress-track"><i style={{ width: progress }} /></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container funding-model">
          <div>
            <span className="eyebrow">{lang === 'ar' ? 'نموذج الشراكة' : 'Modèle de partenariat'}</span>
            <h2>{lang === 'ar' ? 'من الفكرة إلى مشروع قابل للتمويل والتنفيذ' : 'De l’idée à un projet finançable et opérationnel'}</h2>
            <p>{lang === 'ar' ? 'تقدم الرابطة لكل مشروع وثيقة مفهوم، تحليل احتياج، موازنة، خطة تنفيذ، مؤشرات، وإطار حوكمة وتقارير.' : 'Chaque projet peut être documenté par une note conceptuelle, un diagnostic, un budget, un plan de mise en œuvre, des indicateurs et un cadre de gouvernance.'}</p>
          </div>
          <div className="funding-cards">
            <div><CircleDollarSign /><strong>{lang === 'ar' ? 'تمويل ومنح' : 'Financement et subventions'}</strong></div>
            <div><UsersRound /><strong>{lang === 'ar' ? 'خبرات وبناء قدرات' : 'Expertise et renforcement'}</strong></div>
            <div><Laptop2 /><strong>{lang === 'ar' ? 'تقنية وتجهيزات' : 'Technologie et équipements'}</strong></div>
          </div>
        </div>
      </section>
    </>
  );
}

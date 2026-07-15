import { BookMarked, Building, CircleDollarSign, Laptop2, LibraryBig, School, UsersRound } from 'lucide-react';
import { PageHero } from '../components/Ui';
import type { Language } from '../types';

export function Projects({ lang }: { lang: Language }) {
  const initiatives = [
    [Building, 'برنامج جاهزية المدارس للاعتراف الرسمي', 'Programme de préparation à la reconnaissance', 'تقييم الفجوات، تطوير الملفات، تحسين البنية التعليمية، ومتابعة استيفاء المعايير.', 'Diagnostic, dossiers, amélioration des conditions d’enseignement et suivi de conformité.', '35%'],
    [Laptop2, 'المنصة الوطنية لبيانات المدارس', 'Plateforme nationale des données scolaires', 'قاعدة بيانات موحدة للمدارس والطلاب والمعلمين والامتحانات ومؤشرات الأداء.', 'Une base centralisée pour les écoles, élèves, enseignants, examens et indicateurs.', '20%'],
    [UsersRound, 'أكاديمية القيادات والمعلمين', 'Académie des cadres et enseignants', 'مسارات تدريب وشهادات مهنية لرفع كفاءة الإدارة والتدريس والتقويم.', 'Parcours de formation et certifications professionnelles en gestion et pédagogie.', '45%'],
    [LibraryBig, 'مركز المناهج والمصادر التعليمية', 'Centre des curricula et ressources', 'إنتاج أدلة وكتب ومواد رقمية ثنائية اللغة قابلة للاستخدام في المدارس.', 'Production de guides, manuels et ressources numériques bilingues.', '15%'],
    [School, 'مدارس نموذجية قابلة للتوسع', 'Écoles modèles réplicables', 'تطوير نماذج مدرسية تجمع الجودة الأكاديمية والهوية والقابلية للاستدامة.', 'Développement de modèles d’école conciliant qualité, identité et durabilité.', '10%'],
    [BookMarked, 'صندوق دعم التعليم الإسلامي', 'Fonds de soutien à l’éducation islamique', 'آلية تمويل شفافة للمنح والبنية الأساسية وتطوير المعلمين والمدارس الأقل قدرة.', 'Mécanisme transparent pour les bourses, infrastructures et écoles vulnérables.', '5%'],
  ] as const;

  return (
    <>
      <PageHero
        eyebrow={lang === 'ar' ? 'مبادرات الرابطة' : 'Initiatives de la Ligue'}
        title={lang === 'ar' ? 'مبادرات وطنية تصنع أثرًا تعليميًا مستدامًا' : 'Des initiatives nationales pour un impact éducatif durable'}
        text={lang === 'ar'
          ? 'محفظة مبادرات تربوية ورقمية ومؤسسية تقودها الرابطة، وتفتح من خلالها فرص الشراكة والدعم والتمويل.'
          : 'Un portefeuille d’initiatives éducatives, numériques et institutionnelles porté par la Ligue et ouvert aux partenariats.'}
      />
      <section className="section section--soft">
        <div className="container projects-grid">
          {initiatives.map(([Icon, ar, fr, arText, frText, progress], index) => (
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
            <h2>{lang === 'ar' ? 'من المبادرة إلى برنامج قابل للتمويل والتنفيذ' : 'De l’initiative à un programme finançable et opérationnel'}</h2>
            <p>{lang === 'ar'
              ? 'تقدم الرابطة لكل مبادرة وثيقة مفهوم، وتحليل احتياج، وموازنة، وخطة تنفيذ، ومؤشرات قياس، وإطار حوكمة وتقارير.'
              : 'Chaque initiative peut être documentée par une note conceptuelle, un diagnostic, un budget, un plan de mise en œuvre, des indicateurs et un cadre de gouvernance.'}</p>
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
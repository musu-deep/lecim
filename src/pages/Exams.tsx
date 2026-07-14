import { CalendarDays, CheckCircle2, ClipboardList, Download, FileCheck2, Megaphone, SearchCheck } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function Exams({ lang }: { lang: Language }) {
  const steps = lang === 'ar'
    ? ['اعتماد المدرسة وبياناتها', 'رفع قوائم المرشحين', 'مراجعة الوثائق والرسوم', 'إصدار أرقام الجلوس', 'الاختبارات والنتائج']
    : ["Validation de l’établissement", 'Transmission des candidats', 'Contrôle des dossiers', 'Édition des convocations', 'Examens et résultats'];

  const resources = [
    ['دليل التسجيل للمدارس', "Guide d'inscription des écoles", 'PDF'],
    ['نموذج قائمة المرشحين', 'Modèle de liste des candidats', 'XLSX'],
    ['لائحة تنظيم الامتحانات', 'Règlement des examens', 'PDF'],
    ['تعليمات رؤساء المراكز', 'Consignes aux chefs de centre', 'PDF'],
  ];

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'بوابة الامتحانات' : 'Portail des examens'} title={lang === 'ar' ? 'معلومات وإجراءات الامتحانات بوضوح وفي وقتها' : 'Toutes les informations et procédures des examens'} text={lang === 'ar' ? 'مواعيد التسجيل، الأدلة، الجداول، التحقق من المرشحين، وإعلانات النتائج.' : 'Calendriers, guides, inscriptions, vérification des candidats et publication des résultats.'} />
      <section className="section section--soft">
        <div className="container exam-highlight-grid">
          <article className="deadline-card">
            <span className="deadline-card__icon"><CalendarDays /></span>
            <small>{lang === 'ar' ? 'آخر موعد للتسجيل' : "Clôture des inscriptions"}</small>
            <strong>30 / 08 / 2026</strong>
            <p>{lang === 'ar' ? 'يرجى استكمال قوائم المرشحين والوثائق قبل إغلاق البوابة.' : 'Merci de finaliser les listes et les dossiers avant la fermeture du portail.'}</p>
          </article>
          <article className="exam-action-card"><ClipboardList /><h3>{lang === 'ar' ? 'تسجيل المرشحين' : 'Inscrire les candidats'}</h3><p>{lang === 'ar' ? 'رفع القوائم والتحقق من البيانات.' : 'Déposer les listes et vérifier les données.'}</p><button type="button">{lang === 'ar' ? 'قريبًا' : 'Bientôt'}</button></article>
          <article className="exam-action-card"><SearchCheck /><h3>{lang === 'ar' ? 'التحقق من التسجيل' : "Vérifier l’inscription"}</h3><p>{lang === 'ar' ? 'بحث برقم المدرسة أو المرشح.' : 'Recherche par établissement ou candidat.'}</p><button type="button">{lang === 'ar' ? 'قريبًا' : 'Bientôt'}</button></article>
          <article className="exam-action-card"><FileCheck2 /><h3>{lang === 'ar' ? 'النتائج' : 'Résultats'}</h3><p>{lang === 'ar' ? 'الاستعلام عن النتائج بعد اعتمادها.' : 'Consulter les résultats après validation.'}</p><button type="button">{lang === 'ar' ? 'غير متاحة حاليًا' : 'Indisponible'}</button></article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={lang === 'ar' ? 'المسار الإجرائي' : 'Processus'} title={lang === 'ar' ? 'خمس خطوات من التسجيل إلى النتيجة' : 'Cinq étapes de l’inscription aux résultats'} />
          <div className="process-grid process-grid--five">
            {steps.map((step, index) => <div className="process-step" key={step}><span>{index + 1}</span><strong>{step}</strong>{index < steps.length - 1 && <i />}</div>)}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container resources-layout">
          <div>
            <span className="eyebrow">{lang === 'ar' ? 'الأدلة والنماذج' : 'Guides et modèles'}</span>
            <h2>{lang === 'ar' ? 'ملفات جاهزة للمدارس ولجان الامتحانات' : 'Documents utiles aux écoles et aux commissions'}</h2>
            <p>{lang === 'ar' ? 'يتم رفع النسخ الرسمية المعتمدة هنا بدل الروابط المتفرقة.' : 'Les versions officielles sont centralisées ici plutôt que dispersées dans plusieurs liens.'}</p>
          </div>
          <div className="resource-list">
            {resources.map(([ar, fr, type]) => <button type="button" key={ar}><span><Download size={20} /><strong>{lang === 'ar' ? ar : fr}</strong></span><small>{type}</small></button>)}
          </div>
        </div>
      </section>

      <section className="section section--navy section--compact">
        <div className="container notice-banner"><Megaphone size={30} /><div><strong>{lang === 'ar' ? 'التعليمات الرسمية فقط' : 'Seules les communications officielles font foi'}</strong><p>{lang === 'ar' ? 'تعتمد الرابطة الإعلانات المنشورة في هذه البوابة أو الصادرة عبر قنواتها الرسمية.' : 'La Ligue reconnaît uniquement les annonces publiées sur ce portail ou via ses canaux officiels.'}</p></div><CheckCircle2 size={28} /></div>
      </section>
    </>
  );
}

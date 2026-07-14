import { BadgeCheck, BookOpen, Building2, Flag, HeartHandshake, Landmark, Scale, Target, Users } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function About({ lang }: { lang: Language }) {
  const values = [
    { icon: BadgeCheck, ar: 'الجودة', fr: 'Qualité' },
    { icon: Scale, ar: 'العدالة', fr: 'Équité' },
    { icon: HeartHandshake, ar: 'التكامل', fr: 'Coopération' },
    { icon: Flag, ar: 'المواطنة', fr: 'Citoyenneté' },
    { icon: BookOpen, ar: 'الوسطية', fr: 'Modération' },
    { icon: Target, ar: 'التطوير المستمر', fr: 'Amélioration continue' },
  ];

  return (
    <>
      <PageHero
        eyebrow={lang === 'ar' ? 'عن الرابطة' : 'À propos'}
        title={lang === 'ar' ? 'رابطة تربوية وطنية تجمع المدارس وتدعم تطورها' : 'Une Ligue nationale au service des établissements et de leur développement'}
        text={lang === 'ar' ? 'منذ عام 2012 تعمل LECIM على تنظيم التعليم الإسلامي والنموذجي في كوت ديفوار وتعزيز جودته واعترافه الرسمي.' : "Depuis 2012, LECIM structure l’enseignement islamique et modèle en Côte d’Ivoire et accompagne sa qualité et sa reconnaissance."}
      />

      <section className="section">
        <div className="container split-feature split-feature--balanced">
          <div className="split-feature__content">
            <span className="eyebrow">{lang === 'ar' ? 'قصة التأسيس' : 'Notre histoire'}</span>
            <h2>{lang === 'ar' ? 'من مبادرة تربوية إلى شبكة وطنية مؤثرة' : "D’une initiative éducative à un réseau national"}</h2>
            <p>{lang === 'ar'
              ? 'تأسست رابطة المدارس الإسلامية والنموذجية في كوت ديفوار يوم الأحد 15 أبريل 2012 بجامعة الفرقان الإسلامية، استجابةً للحاجة إلى توحيد جهود المدارس، وتطوير المناهج، وتعزيز الحوار مع الحكومة، والدفاع عن الحقوق التربوية للمؤسسات الأعضاء.'
              : "La Ligue des Établissements Confessionnels Islamiques et des Médersas en Côte d’Ivoire a été fondée le 15 avril 2012 à l’Université Al-Fourqane pour fédérer les écoles, améliorer les curricula, dialoguer avec l’État et défendre les intérêts éducatifs de ses membres."}</p>
            <p>{lang === 'ar'
              ? 'واليوم تمثل الرابطة شبكة واسعة من المدارس والفروع والقيادات التربوية، وتعمل على الانتقال من التنسيق التقليدي إلى منظومة حديثة للحوكمة والجودة والخدمات الرقمية.'
              : "Aujourd’hui, elle anime un vaste réseau d’établissements, de branches et de responsables éducatifs, avec l’ambition de bâtir une gouvernance moderne et des services numériques performants."}</p>
          </div>
          <div className="timeline-card">
            <div><span>2012</span><strong>{lang === 'ar' ? 'التأسيس الرسمي' : 'Création officielle'}</strong></div>
            <div><span>53</span><strong>{lang === 'ar' ? 'فرعًا في أنحاء البلاد' : 'Branches nationales'}</strong></div>
            <div><span>1,010+</span><strong>{lang === 'ar' ? 'مدارس ضمن الشبكة' : 'Établissements membres'}</strong></div>
            <div><span>2026</span><strong>{lang === 'ar' ? 'إطلاق التحول الرقمي المؤسسي' : 'Transformation numérique institutionnelle'}</strong></div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="mission-grid">
            <article className="mission-card mission-card--primary">
              <Target size={30} />
              <h2>{lang === 'ar' ? 'رؤيتنا' : 'Notre vision'}</h2>
              <p>{lang === 'ar' ? 'تعليم عربي إسلامي معترف به وعالي الجودة، يصنع مواطنًا صالحًا ومتمكنًا ومشاركًا في نهضة كوت ديفوار.' : "Un enseignement arabo-islamique reconnu et de qualité, formant des citoyens compétents, responsables et engagés dans le développement de la Côte d’Ivoire."}</p>
            </article>
            <article className="mission-card">
              <Flag size={30} />
              <h2>{lang === 'ar' ? 'رسالتنا' : 'Notre mission'}</h2>
              <p>{lang === 'ar' ? 'تنظيم المدارس وتوحيد معاييرها ومناهجها، وبناء قدرات قياداتها ومعلميها، وتعزيز شراكتها مع الدولة والمجتمع.' : "Structurer les établissements, harmoniser leurs standards, renforcer les capacités et développer leur partenariat avec l’État et la société."}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={lang === 'ar' ? 'قيمنا' : 'Nos valeurs'} title={lang === 'ar' ? 'مبادئ تقود عملنا' : 'Les principes qui guident notre action'} />
          <div className="values-grid">
            {values.map(({ icon: Icon, ar, fr }) => <div className="value-card" key={ar}><Icon size={24} /><strong>{lang === 'ar' ? ar : fr}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container governance-grid">
          <div>
            <span className="eyebrow eyebrow--light">{lang === 'ar' ? 'الحوكمة' : 'Gouvernance'}</span>
            <h2>{lang === 'ar' ? 'هيكل مؤسسي يخدم المدارس بكفاءة' : 'Une gouvernance au service des établissements'}</h2>
            <p>{lang === 'ar' ? 'تعمل الرابطة من خلال الجمعية العامة ومجلس الإدارة والأمانة التنفيذية واللجان الفنية والفروع الإقليمية، ضمن صلاحيات ومسؤوليات قابلة للقياس.' : "La Ligue s’appuie sur l’Assemblée générale, le Conseil d’administration, le Secrétariat exécutif, les commissions techniques et les branches régionales."}</p>
          </div>
          <div className="governance-items">
            <div><Landmark /><span><strong>{lang === 'ar' ? 'الجمعية العامة' : 'Assemblée générale'}</strong><small>{lang === 'ar' ? 'المرجعية العليا للرابطة' : 'Autorité suprême de la Ligue'}</small></span></div>
            <div><Users /><span><strong>{lang === 'ar' ? 'مجلس الإدارة' : 'Conseil d’administration'}</strong><small>{lang === 'ar' ? 'التوجيه والرقابة' : 'Orientation et contrôle'}</small></span></div>
            <div><Building2 /><span><strong>{lang === 'ar' ? 'الأمانة التنفيذية' : 'Secrétariat exécutif'}</strong><small>{lang === 'ar' ? 'التشغيل وتنفيذ البرامج' : 'Mise en œuvre des programmes'}</small></span></div>
          </div>
        </div>
      </section>
    </>
  );
}

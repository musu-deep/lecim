import type { NavItem, NewsItem, School } from './types';

export const navItems: NavItem[] = [
  { path: '', label: { ar: 'الرئيسية', fr: 'Accueil' } },
  { path: 'about', label: { ar: 'عن الرابطة', fr: 'La Ligue' } },
  { path: 'schools', label: { ar: 'المدارس الأعضاء', fr: 'Établissements' } },
  { path: 'services', label: { ar: 'الخدمات', fr: 'Services' } },
  { path: 'exams', label: { ar: 'الامتحانات', fr: 'Examens' } },
  { path: 'projects', label: { ar: 'مبادرات الرابطة', fr: 'Initiatives' } },
  { path: 'membership', label: { ar: 'العضوية', fr: 'Adhésion' } },
  { path: 'media', label: { ar: 'المركز الإعلامي', fr: 'Actualités' } },
  { path: 'contact', label: { ar: 'تواصل معنا', fr: 'Contact' } },
];

export const stats = [
  { value: '1,010+', ar: 'مدارس أعضاء', fr: 'Établissements membres' },
  { value: '220K+', ar: 'طالب وطالبة', fr: 'Élèves' },
  { value: '1,992', ar: 'معلمًا ومعلمة', fr: 'Enseignants' },
  { value: '53', ar: 'فرعًا', fr: 'Branches' },
  { value: '325', ar: 'مدرسة معترفًا بها', fr: 'Écoles reconnues' },
];

export const schools: School[] = [
  {
    id: 1,
    name: { ar: 'مدارس الفرقان الإسلامية', fr: 'Établissements Al-Fourqane' },
    city: 'Abidjan',
    region: 'Abobo',
    level: { ar: 'ابتدائي ومتوسط', fr: 'Primaire et collège' },
    recognized: true,
  },
  {
    id: 2,
    name: { ar: 'مجمع النور التعليمي', fr: 'Complexe scolaire An-Nour' },
    city: 'Abidjan',
    region: 'Yopougon',
    level: { ar: 'ابتدائي وثانوي', fr: 'Primaire et lycée' },
    recognized: true,
  },
  {
    id: 3,
    name: { ar: 'مدارس دار الحديث', fr: 'École Dar Al-Hadith' },
    city: 'Bouaké',
    region: 'Gbêkê',
    level: { ar: 'جميع المراحل', fr: 'Tous niveaux' },
    recognized: true,
  },
  {
    id: 4,
    name: { ar: 'مدرسة السلام النموذجية', fr: 'École modèle As-Salam' },
    city: 'Korhogo',
    region: 'Poro',
    level: { ar: 'ابتدائي', fr: 'Primaire' },
    recognized: false,
  },
  {
    id: 5,
    name: { ar: 'مجمع الحكمة الإسلامي', fr: 'Complexe islamique Al-Hikma' },
    city: 'San-Pédro',
    region: 'San-Pédro',
    level: { ar: 'متوسط وثانوي', fr: 'Collège et lycée' },
    recognized: true,
  },
  {
    id: 6,
    name: { ar: 'مدرسة الإحسان العربية', fr: 'École arabe Al-Ihsane' },
    city: 'Daloa',
    region: 'Haut-Sassandra',
    level: { ar: 'ابتدائي ومتوسط', fr: 'Primaire et collège' },
    recognized: false,
  },
];

export const news: NewsItem[] = [
  {
    id: 1,
    title: {
      ar: 'إعلان التسجيل في امتحانات نهاية العام الدراسي',
      fr: "Ouverture des inscriptions aux examens de fin d'année",
    },
    excerpt: {
      ar: 'دعت لجنة الامتحانات المدارس الأعضاء إلى استكمال بيانات المرشحين ورفع الوثائق المطلوبة ضمن المدة المحددة.',
      fr: "La commission des examens invite les établissements membres à finaliser les dossiers des candidats dans les délais impartis.",
    },
    date: '2026-07-10',
    category: { ar: 'الامتحانات', fr: 'Examens' },
  },
  {
    id: 2,
    title: {
      ar: 'برنامج تدريبي لتطوير كفايات مديري المدارس',
      fr: "Programme de renforcement des compétences des directeurs",
    },
    excerpt: {
      ar: 'برنامج تنفيذي يركز على القيادة المدرسية، التخطيط، الجودة، والمتابعة المبنية على مؤشرات الأداء.',
      fr: "Un programme exécutif consacré au leadership scolaire, à la planification, à la qualité et au pilotage par les indicateurs.",
    },
    date: '2026-06-24',
    category: { ar: 'التدريب', fr: 'Formation' },
  },
  {
    id: 3,
    title: {
      ar: 'توسيع الشراكات لدعم الاعتراف الرسمي بالمدارس',
      fr: "Renforcement des partenariats pour la reconnaissance officielle",
    },
    excerpt: {
      ar: 'تواصل الرابطة جهودها مع الجهات الحكومية والشركاء التربويين لرفع جاهزية المدارس وتحسين جودة التعليم.',
      fr: "La Ligue poursuit son dialogue avec les autorités et les partenaires éducatifs afin d'améliorer la qualité et la conformité des établissements.",
    },
    date: '2026-06-02',
    category: { ar: 'الشراكات', fr: 'Partenariats' },
  },
];

export const contact = {
  addressAr: 'أبيدجان، أبوبو، حارة بيكا 18، كوت ديفوار',
  addressFr: "Abidjan, Abobo, quartier Béká 18, Côte d’Ivoire",
  email: 'lecimnational@gmail.com',
  phones: ['+225 05 04 50 07 21', '+225 07 07 59 65 83', '+225 07 09 72 97 60'],
};
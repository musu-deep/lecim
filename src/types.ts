export type Language = 'ar' | 'fr';

export type LocalizedText = {
  ar: string;
  fr: string;
};

export type NavItem = {
  path: string;
  label: LocalizedText;
};

export type School = {
  id: number;
  name: LocalizedText;
  city: string;
  region: string;
  level: LocalizedText;
  recognized: boolean;
};

export type NewsItem = {
  id: number;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  category: LocalizedText;
};

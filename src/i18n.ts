import type { Language, LocalizedText } from './types';

export const t = (value: LocalizedText, lang: Language) => value[lang];

export const languageMeta = {
  ar: {
    dir: 'rtl' as const,
    label: 'العربية',
    locale: 'ar-CI',
  },
  fr: {
    dir: 'ltr' as const,
    label: 'Français',
    locale: 'fr-CI',
  },
};

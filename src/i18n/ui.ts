import { SITE_DESCRIPTION } from '../data/site';

export const languages = {
  en: { label: 'English', hreflang: 'en', ogLocale: 'en_US' },
  pl: { label: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const en = {
  'site.description': SITE_DESCRIPTION,
  'home.software': 'Software',
  'home.others': 'Others',
  'home.language': 'Language',
  'home.contact': 'Contact',
  'home.write': 'Write us:',
  'nav.back': 'Back',
} as const;

export type UIKey = keyof typeof en;
type Dict = Record<UIKey, string>;

// Every language must be listed; missing keys fall back to English.
export const ui: Record<Lang, Partial<Dict>> & { en: Dict } = {
  en,
  pl: {
    'site.description': 'Kolekcja prostych i pomocnych rzeczy.',
    'home.software': 'Programy',
    'home.others': 'Inne',
    'home.language': 'Język',
    'home.contact': 'Kontakt',
    'home.write': 'Napisz do nas:',
    'nav.back': 'Wstecz',
  },
};

// For data files (like apps.ts): English required, others optional.
export type Localized = { en: string } & { [L in Lang]?: string };
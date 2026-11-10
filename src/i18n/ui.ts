import { SITE_DESCRIPTION } from '../data/site';

export const languages = {
  en: { label: 'English', hreflang: 'en', ogLocale: 'en_US' },
  pl: { label: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const en = {
  'site.description': SITE_DESCRIPTION,
  'home.intro': SITE_DESCRIPTION,
  'home.software': 'Software',
  'home.language': 'Language',
  'home.contact': 'Contact',
  'home.write': 'Write us:',
  'nav.back': 'Back',
  'notFound.title': 'Page not found',
  'notFound.text': "The page you're looking for doesn't exist.",
} as const;

export type UIKey = keyof typeof en;
type Dict = Record<UIKey, string>;

// Every language must be listed; missing keys fall back to English.
export const ui: Record<Lang, Partial<Dict>> & { en: Dict } = {
  en,
  pl: {
    'site.description': 'Metalogrom to kolekcja prostych i pomocnych programów.',
    'home.intro': 'Metalogrom to kolekcja prostych i pomocnych programów.',
    'home.software': 'Programy',
    'home.language': 'Język',
    'home.contact': 'Kontakt',
    'home.write': 'Napisz do nas:',
    'nav.back': 'Wstecz',
    'notFound.title': 'Nie znaleziono strony',
    'notFound.text': 'Strona, której szukasz, nie istnieje.',
  },
};

// For data files (like apps.ts): English required, others optional.
export type Localized = { en: string } & { [L in Lang]?: string };
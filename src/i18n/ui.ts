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
  'home.software': "Software",
  'nav.back': 'Back',
  'nav.contact': 'Contact',
  'contact.write': 'Write us:',
    'notFound.title': 'Page not found',
  'notFound.text': "The page you're looking for doesn't exist.",
} as const;

export type UIKey = keyof typeof en;
type Dict = Record<UIKey, string>;

// Every language must be listed; missing keys fall back to English.
export const ui: Record<Lang, Partial<Dict>> & { en: Dict } = {
  en,
  pl: {
    'site.description': 'Metalogrom to ekosystem produktów i usług do codziennej pracy i zabawy.',
    'home.intro': 'Metalogrom to ekosystem produktów i usług do codziennej pracy i zabawy.',
    'home.software': "Oprogramowanie",
    'nav.back': 'Wstecz',
    'nav.contact': 'Kontakt',
    'contact.write': 'Napisz do nas:',
  },
};

// For data files (like apps.ts): English required, others optional.
export type Localized = { en: string } & { [L in Lang]?: string };
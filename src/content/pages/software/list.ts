export type Translations = Record<string, string>;

export interface Software {
  slug: string;
  name: string;
  description: Translations;
}

export const software: Software[] = [
  {
    slug: 'deals',
    name: 'Deals',
    description: {
      en: 'Post what you want to buy, or find buyers.',
      pl: 'Napisz, czego szukasz, albo znajdź kupców.',
    },
  },
  {
    slug: 'herds',
    name: 'Herds',
    description: { 
      en: 'Chat with people in your city.', 
      pl: 'Rozmawiaj z ludźmi z twojego miasta.' 
    },
  },
];

export const getDescription = (item: Software, lang: string): string =>
  item.description[lang] ?? item.description.en;
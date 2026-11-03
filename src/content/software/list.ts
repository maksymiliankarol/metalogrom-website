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
      en: 'Something', 
      pl: 'something' 
    },
  },
];

export const getDescription = (item: Software, lang: string): string =>
  item.description[lang] ?? item.description.en;
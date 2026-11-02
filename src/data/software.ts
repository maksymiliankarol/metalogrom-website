// src/data/software.ts
export type Translations = Record<string, string>;

export interface Software {
  slug: string;
  name: string;
  url: string;
  description: Translations;
}

export const software: Software[] = [
  {
    slug: "deals",
    name: "Deals",
    url: "https://deals.metalogrom.com",
    description: {
      en: "Something",
      pl: "something",
    },
  }
];

// Falls back to English if a translation is missing
export const getDescription = (item: Software, lang: string): string =>
  item.description[lang] ?? item.description.en;
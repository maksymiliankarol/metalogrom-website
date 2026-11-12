import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { defaultLang, languages } from '../i18n/ui';
import type { Lang } from '../i18n/ui';

export type PageEntry = CollectionEntry<'pages'>;
export type PageMap = Map<string, Partial<Record<Lang, PageEntry>>>;

/** Groups entries by path: "software/deals/terms" -> { en, pl }. Validates the content tree. */
export async function getPages(): Promise<PageMap> {
  const entries = await getCollection('pages');
  const pages: PageMap = new Map();

  for (const entry of entries) {
    const parts = entry.id.split('/');
    const lang = parts.pop()!;
    const path = parts.join('/');

    if (!(lang in languages)) {
      throw new Error(
        `src/content/pages/${entry.id}.md: file name must be a language code (${Object.keys(languages).join(', ')})`
      );
    }
    if (!path) {
      throw new Error(`src/content/pages/${lang}.md: pages must live in a folder (the home page is not content)`);
    }
    if (parts[0] in languages && parts[0] !== defaultLang) {
      throw new Error(`src/content/pages/${path}: top-level folder "${parts[0]}" clashes with a language prefix`);
    }

    pages.set(path, { ...pages.get(path), [lang as Lang]: entry });
  }

  for (const [path, byLang] of pages) {
    if (!byLang[defaultLang]) throw new Error(`Missing src/content/pages/${path}/${defaultLang}.md`);
  }

  return pages;
}

/** The entry in the requested language, falling back to English. */
export function pickEntry(pages: PageMap, path: string, lang: Lang): PageEntry | undefined {
  const byLang = pages.get(path);
  return byLang?.[lang] ?? byLang?.[defaultLang];
}

/** Nearest ancestor that is an actual page. '' means home. */
export function parentPath(pages: PageMap, path: string): string {
  const parts = path.split('/');
  parts.pop();
  while (parts.length) {
    const p = parts.join('/');
    if (pages.has(p)) return p;
    parts.pop();
  }
  return '';
}

/** Direct children of a folder, e.g. listPages(pages, 'software', 'pl'). */
export function listPages(pages: PageMap, prefix: string, lang: Lang) {
  const depth = prefix.split('/').length + 1;
  return [...pages.keys()]
    .filter((p) => p.startsWith(`${prefix}/`) && p.split('/').length === depth)
    .sort()
    .map((path) => {
      const entry = pickEntry(pages, path, lang)!;
      return { path, title: entry.data.title, description: entry.data.description };
    });
}
import { languages, defaultLang, ui } from './ui';
import type { Lang, UIKey, Localized } from './ui';

export const langs = Object.keys(languages) as Lang[];

/** Turn the [...lang] route param into a valid Lang (undefined = default). */
export function getLang(param: string | undefined): Lang {
  return param && param in languages ? (param as Lang) : defaultLang;
}

/** getStaticPaths entries for every locale; the default has no prefix. */
export function getLangPaths() {
  return langs.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
  }));
}

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui.en[key];
}

export function localize(value: Localized, lang: Lang): string {
  return value[lang] ?? value.en;
}

/** localePath('/deals', 'pl') -> '/pl/deals'; localePath('/', 'pl') -> '/pl' */
export function localePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/** With build.format 'file', pathname can be "/index.html", "/pl.html", "/pl/deals/" ...
 *  "/index.html" -> "/", "/pl.html" -> "/pl", "/pl/" -> "/pl" */
export function normalizePath(p: string): string {
  let path = p.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return path || '/';
}

/** '/pl/deals' -> '/deals'; '/pl' -> '/'; '/deals' -> '/deals' */
export function stripLang(path: string): string {
  for (const l of langs) {
    if (l === defaultLang) continue;
    if (path === `/${l}`) return '/';
    if (path.startsWith(`/${l}/`)) return path.slice(l.length + 1);
  }
  return path;
}
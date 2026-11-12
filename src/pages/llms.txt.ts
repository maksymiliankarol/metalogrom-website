import type { APIRoute } from 'astro';
import { SITE_DESCRIPTION } from '../data/site';
import { getPages, parentPath, pickEntry } from '../data/pages';
import { defaultLang } from '../i18n/ui';
import { localePath } from '../i18n/utils';

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const pages = await getPages();

  const lines = [...pages.keys()].sort().map((path) => {
    const entry = pickEntry(pages, path, defaultLang)!;
    const parent = parentPath(pages, path);
    const parentEntry = parent ? pickEntry(pages, parent, defaultLang) : undefined;
    // "Deals: Terms" for children, so entries are unambiguous in a flat list
    const title = parentEntry ? `${parentEntry.data.title}: ${entry.data.title}` : entry.data.title;
    return `- [${title}](${url(localePath(`/${path}`, defaultLang))}): ${entry.data.description}`;
  });

  const body = `# Metalogrom

> ${SITE_DESCRIPTION}

Metalogrom is an umbrella brand. Each product and service is listed on the home page.

## Main pages

- [Home](${url('/')}): Overview of Metalogrom and its products and services.
${lines.join('\n')}

## Contact

- [X / Twitter](https://x.com/metalogrom): Official account.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
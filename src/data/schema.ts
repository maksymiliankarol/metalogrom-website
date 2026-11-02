import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './site';
import { languages } from '../i18n/ui';
import type { Lang } from '../i18n/ui';

export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
  },
  sameAs: ['https://x.com/metalogrom'],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: Object.keys(languages),
  publisher: { '@id': `${SITE_URL}/#organization` },
};

interface PageInfo {
  lang: Lang;
  url: string;
  name: string;
  description: string;
}

export function getPageGraph({ lang, url, name, description }: PageInfo) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      websiteSchema,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: lang,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
    ],
  };
}
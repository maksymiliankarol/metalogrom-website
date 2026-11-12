// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import { defaultLang, languages } from './src/i18n/ui';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://metalogrom.com',
  trailingSlash: 'never',

  vite: {
    plugins: []
  },
    integrations: [sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: defaultLang,
        locales: Object.fromEntries(
          Object.entries(languages).map(([code, l]) => [code, l.hreflang])
        ),
      },
    }), mdx()],
  build: { format: 'file' }
});
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://metalogrom.com',
  trailingSlash: 'never',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Lexend',
      cssVariable: '--font-sans',
      weights: [400],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Momo Trust Display',
      cssVariable: '--font-heading',
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    }
  ],

  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404'),
    }),
  ],
  build: { format: 'file' }
});
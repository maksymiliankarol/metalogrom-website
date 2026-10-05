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
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 600],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: "BBH Hegarty",
      cssVariable: "--font-bbh-hegarty",
      fallbacks: ["sans-serif"]
    },
    {
      provider: fontProviders.google(),
      name: "Caprasimo",
      cssVariable: "--font-caprasimo",
      fallbacks: ["serif"]
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
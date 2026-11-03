import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const software = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/software' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { software };
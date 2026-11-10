import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schema = z.object({
  title: z.string(),
  description: z.string(),
});

const software = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/software' }),
  schema,
});

const articles = defineCollection({
  loader: glob({ pattern: '*/*/*.md', base: './src/content/articles' }),
  schema,
});

export const collections = { software, articles };
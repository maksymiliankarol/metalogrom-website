import type { APIRoute } from 'astro';
import { SITE_DESCRIPTION } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;

  const body = `# Metalogrom

> ${SITE_DESCRIPTION}

Metalogrom is an umbrella brand. Each product and service is listed on the home page.

## Main pages

- [Home](${url('/')}): Overview of Metalogrom and its products and services.

## Contact

- [X / Twitter](https://x.com/metalogrom): Official account.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
import { readFileSync, readdirSync } from 'node:fs';

const HOST = 'metalogrom.com';
const KEY = '751a87adf9b74b9fa798a6c85d97580f'
if (!KEY) throw new Error('Set INDEXNOW_KEY to your key.');

// URLs passed as arguments, or every URL from the built sitemaps
let urls = process.argv.slice(2);
if (urls.length === 0) {
  urls = readdirSync('dist')
    .filter((f) => /^sitemap-\d+\.xml$/.test(f))
    .flatMap((f) =>
      [...readFileSync(`dist/${f}`, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
    );
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`Submitted ${urls.length} URL(s): HTTP ${res.status}`);
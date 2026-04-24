import { writeFileSync } from 'fs'

const BASE = 'https://text-fast.com'
const TODAY = new Date().toISOString().split('T')[0]

const SLUGS = [
  'word-counter',
  'character-counter',
  'lorem-ipsum-generator',
  'text-case-converter',
  'duplicate-line-remover',
  'word-frequency-counter',
  'whitespace-remover',
  'slug-generator',
  'url-encoder-decoder',
  'text-reverser',
]

const urls = [
  { loc: BASE, priority: '1.0' },
  ...SLUGS.map(s => ({ loc: `${BASE}/${s}`, priority: '0.9' })),
  { loc: `${BASE}/privacy`, priority: '0.3' },
  { loc: `${BASE}/terms`, priority: '0.3' },
  { loc: `${BASE}/cookies`, priority: '0.3' },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', xml)
console.log(`Sitemap generated: ${urls.length} URLs`)

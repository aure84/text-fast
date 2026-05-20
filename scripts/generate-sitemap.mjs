import { writeFileSync } from 'fs'

const BASE = 'https://text-fast.com'
const TODAY = new Date().toISOString().split('T')[0]

const TOOL_SLUGS = [
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
  'password-generator',
]

const BLOG_SLUGS = [
  'what-is-lorem-ipsum',
  'keyword-frequency-analysis',
  'what-is-a-url-slug',
  'how-to-count-words-online',
  'title-case-vs-sentence-case',
  'url-encoding-explained',
  'strong-password-tips-2026',
]

const urls = [
  { loc: BASE, priority: '1.0' },
  ...TOOL_SLUGS.map(s => ({ loc: `${BASE}/${s}`, priority: '0.9' })),
  { loc: `${BASE}/blog`, priority: '0.7' },
  ...BLOG_SLUGS.map(s => ({ loc: `${BASE}/blog/${s}`, priority: '0.8' })),
  { loc: `${BASE}/about`, priority: '0.5' },
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

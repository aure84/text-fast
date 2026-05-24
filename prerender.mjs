import { build } from 'vite'
import { readFileSync, mkdirSync, writeFileSync, rmSync } from 'fs'
import { resolve, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

console.log('Building SSR bundle...')
await build({
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server',
    rollupOptions: { output: { format: 'esm' } },
  },
  logLevel: 'warn',
})

const { render, getAllRoutes } = await import(
  resolve(__dirname, 'dist/server/entry-server.js')
)

const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')
const routes = getAllRoutes()

console.log(`Prerendering ${routes.length} routes...`)

let ok = 0
let fail = 0

for (const url of routes) {
  try {
    const { appHtml, meta } = render(url)

    let html = template
      // title
      .replace(
        '<title>text-fast.com — Free Online Text Tools</title>',
        `<title>${escapeHtml(meta.title)}</title>`
      )
      // description
      .replace(
        /(<meta name="description" content=")[^"]*(")/,
        `$1${escapeHtml(meta.description)}$2`
      )
      // canonical
      .replace(
        /(<link rel="canonical" href=")[^"]*(")/,
        `$1${escapeHtml(meta.canonical)}$2`
      )
      // og:title
      .replace(
        /(<meta property="og:title" content=")[^"]*(")/,
        `$1${escapeHtml(meta.ogTitle)}$2`
      )
      // og:description
      .replace(
        /(<meta property="og:description" content=")[^"]*(")/,
        `$1${escapeHtml(meta.ogDescription)}$2`
      )
      // og:type
      .replace(
        /(<meta property="og:type" content=")[^"]*(")/,
        `$1${escapeHtml(meta.ogType)}$2`
      )
      // og:url
      .replace(
        /(<meta property="og:url" content=")[^"]*(")/,
        `$1${escapeHtml(meta.ogUrl)}$2`
      )
      // twitter:card
      .replace(
        /(<meta name="twitter:card" content=")[^"]*(")/,
        `$1${escapeHtml(meta.twitterCard)}$2`
      )
      // twitter:title
      .replace(
        /(<meta name="twitter:title" content=")[^"]*(")/,
        `$1${escapeHtml(meta.twitterTitle)}$2`
      )
      // twitter:description
      .replace(
        /(<meta name="twitter:description" content=")[^"]*(")/,
        `$1${escapeHtml(meta.twitterDescription)}$2`
      )
      // app html
      .replace('<!--app-html-->', appHtml)

    const dir = url === '/'
      ? resolve(__dirname, 'dist')
      : resolve(__dirname, 'dist', url.slice(1))

    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
    ok++
  } catch (e) {
    console.warn(`  ⚠ skipped ${url}: ${e.message}`)
    fail++
  }
}

rmSync(resolve(__dirname, 'dist/server'), { recursive: true, force: true })

console.log(`Done: ${ok} prerendered, ${fail} skipped.`)

function escapeHtml(str) {
  if (str == null) return ''
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

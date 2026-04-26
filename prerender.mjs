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

    const html = template
      .replace(
        '<title>text-fast.com — Free Online Text Tools</title>',
        `<title>${escapeHtml(meta.title)}</title>`
      )
      .replace(
        'content="Free online text tools: word counter, character counter, case converter, lorem ipsum generator, and more. Fast, free, no sign-up."',
        `content="${escapeHtml(meta.description)}"`
      )
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
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

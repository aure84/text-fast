import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import AppContent from './AppContent'
import { SSRMetaContext, type CollectedMeta } from './components/SEOMeta'
import { TOOLS } from './data/tools'
import { POSTS } from './data/posts'

export function render(url: string): { appHtml: string; meta: CollectedMeta } {
  const meta: CollectedMeta = {
    title: 'text-fast.com — Free Online Text Tools',
    description: 'Free online text tools: word counter, character counter, case converter, lorem ipsum generator, and more. Fast, free, no sign-up.',
  }

  const appHtml = renderToString(
    <SSRMetaContext.Provider value={(m) => { meta.title = m.title; meta.description = m.description }}>
      <MemoryRouter initialEntries={[url]}>
        <AppContent />
      </MemoryRouter>
    </SSRMetaContext.Provider>
  )

  return { appHtml, meta }
}

export function getAllRoutes(): string[] {
  return [
    '/',
    '/about',
    '/privacy',
    '/terms',
    '/cookies',
    '/blog',
    ...POSTS.map(p => `/blog/${p.slug}`),
    ...TOOLS.map(t => `/${t.slug}`),
  ]
}

import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import AppContent from './AppContent'
import { SSRMetaContext, type CollectedMeta } from './components/SEOMeta'
import { TOOLS } from './data/tools'
import { POSTS } from './data/posts'

const BASE_URL = 'https://text-fast.com'

export function render(url: string): { appHtml: string; meta: CollectedMeta } {
  const canonicalUrl = `${BASE_URL}${url === '/' ? '' : url}`

  const meta: CollectedMeta = {
    title: 'text-fast.com — Free Online Text Tools',
    description: 'Free online text tools: word counter, character counter, case converter, lorem ipsum generator, and more. Fast, free, no sign-up.',
    canonical: canonicalUrl,
    ogTitle: 'text-fast.com — Free Online Text Tools',
    ogDescription: 'Free online text tools: word counter, character counter, case converter, lorem ipsum generator, and more. Fast, free, no sign-up.',
    ogUrl: canonicalUrl,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'text-fast.com — Free Online Text Tools',
    twitterDescription: 'Free online text tools: word counter, character counter, case converter, lorem ipsum generator, and more. Fast, free, no sign-up.',
  }

  const appHtml = renderToString(
    <SSRMetaContext.Provider value={(m) => {
      meta.title = m.title
      meta.description = m.description
      meta.canonical = m.canonical
      meta.ogTitle = m.ogTitle
      meta.ogDescription = m.ogDescription
      meta.ogUrl = m.ogUrl
      meta.ogType = m.ogType
      meta.twitterCard = m.twitterCard
      meta.twitterTitle = m.twitterTitle
      meta.twitterDescription = m.twitterDescription
    }}>
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

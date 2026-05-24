import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export interface CollectedMeta {
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogUrl: string
  ogType: string
  twitterCard: string
  twitterTitle: string
  twitterDescription: string
}

export const SSRMetaContext = createContext<((meta: CollectedMeta) => void) | null>(null)

interface Props {
  title: string
  description: string
  noIndex?: boolean
}

export default function SEOMeta({ title, description, noIndex = false }: Props) {
  const { pathname } = useLocation()
  const collect = useContext(SSRMetaContext)
  const canonicalUrl = `https://text-fast.com${pathname}`

  if (collect) {
    collect({
      title,
      description,
      canonical: canonicalUrl,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonicalUrl,
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: title,
      twitterDescription: description,
    })
  }

  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el) }
      el.content = content
    }
    const setProp = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el) }
      el.content = content
    }
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      if (!el) { el = document.createElement('link'); el.rel = rel; document.head.appendChild(el) }
      el.href = href
    }

    setMeta('description', description)
    setMeta('robots', noIndex ? 'noindex,nofollow' : 'index,follow')
    setProp('og:title', title)
    setProp('og:description', description)
    setProp('og:type', 'website')
    setProp('og:url', canonicalUrl)
    setProp('og:site_name', 'text-fast.com')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setLink('canonical', canonicalUrl)
  }, [title, description, noIndex, pathname])

  return null
}

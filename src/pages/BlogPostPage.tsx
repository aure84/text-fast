import { useParams, Navigate, Link } from 'react-router-dom'
import { POST_MAP } from '../data/posts'
import { TOOL_MAP } from '../data/tools'
import SEOMeta from '../components/SEOMeta'
import JsonLd from '../components/JsonLd'
import styles from './BlogPostPage.module.css'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = POST_MAP.get(slug ?? '')
  if (!post) return <Navigate to="/404" replace />

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    author: { '@type': 'Organization', name: 'text-fast.com', url: 'https://text-fast.com' },
    publisher: { '@type': 'Organization', name: 'text-fast.com', url: 'https://text-fast.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://text-fast.com/blog/${post.slug}` },
  }

  const faqLd = post.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <main className={styles.main}>
      <SEOMeta title={`${post.title} — text-fast.com`} description={post.description} />
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <Link to="/blog" className={styles.backLink}>← Blog</Link>
      <p className={styles.meta}>{post.publishDate}</p>
      <h1 className={styles.heading}>{post.title}</h1>
      <p className={styles.intro}>{post.intro}</p>

      {post.sections.map((section, i) => (
        <div key={i} className={styles.section}>
          <h2 className={styles.sectionHeading}>{section.heading}</h2>
          {section.body.split('\n\n').map((para, j) => (
            <p key={j} className={styles.para}>{para}</p>
          ))}
        </div>
      ))}

      {post.faq?.length ? (
        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently asked questions</h2>
          {post.faq.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <p className={styles.faqQ}>{item.q}</p>
              <p className={styles.faqA}>{item.a}</p>
            </div>
          ))}
        </div>
      ) : null}

      {post.relatedTools.length > 0 && (
        <div className={styles.cta}>
          <p className={styles.ctaTitle}>Try the tool</p>
          <div className={styles.ctaLinks}>
            {post.relatedTools.map(toolSlug => {
              const tool = TOOL_MAP.get(toolSlug)
              if (!tool) return null
              return (
                <Link key={toolSlug} to={`/${toolSlug}`} className={styles.ctaLink}>
                  {tool.heading} →
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </main>
  )
}

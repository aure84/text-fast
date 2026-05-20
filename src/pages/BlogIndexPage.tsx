import { Link } from 'react-router-dom'
import { POSTS } from '../data/posts'
import SEOMeta from '../components/SEOMeta'
import styles from './BlogIndexPage.module.css'

export default function BlogIndexPage() {
  const sorted = [...POSTS].sort((a, b) => b.publishDate.localeCompare(a.publishDate))
  return (
    <main className={styles.main}>
      <SEOMeta
        title="Blog — text-fast.com"
        description="Guides and explainers for text tools, SEO, writing, and web development from the team at text-fast.com."
      />
      <div className={styles.hero}>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.sub}>Guides on text tools, SEO, writing, and web development.</p>
      </div>
      <div className={styles.list}>
        {sorted.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className={styles.card}>
            <p className={styles.cardTitle}>{post.title}</p>
            <p className={styles.cardDesc}>{post.description}</p>
            <span className={styles.cardMeta}>{post.publishDate}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}

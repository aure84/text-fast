import { Link } from 'react-router-dom'
import { TOOL_MAP } from '../data/tools'
import styles from './RelatedTools.module.css'

interface Props {
  slugs: string[]
}

export default function RelatedTools({ slugs }: Props) {
  const tools = slugs.map(s => TOOL_MAP.get(s)).filter(Boolean)
  if (tools.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Related Tools</h2>
      <div className={styles.grid}>
        {tools.map(t => (
          <Link key={t!.slug} to={`/${t!.slug}`} className={styles.card}>
            {t!.heading}
          </Link>
        ))}
      </div>
    </section>
  )
}

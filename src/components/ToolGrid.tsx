import { Link } from 'react-router-dom'
import { TOOLS } from '../data/tools'
import styles from './ToolGrid.module.css'

export default function ToolGrid() {
  return (
    <div className={styles.grid}>
      {TOOLS.map(tool => (
        <Link key={tool.slug} to={`/${tool.slug}`} className={styles.card}>
          <h2 className={styles.title}>{tool.heading}</h2>
          <p className={styles.desc}>{tool.subheading}</p>
        </Link>
      ))}
    </div>
  )
}

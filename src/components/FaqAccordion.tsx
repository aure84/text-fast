import type { ToolFaq } from '../data/tools'
import styles from './FaqAccordion.module.css'

interface Props {
  items: ToolFaq[]
}

export default function FaqAccordion({ items }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.list}>
        {items.map((item, i) => (
          <details key={i} className={styles.item}>
            <summary className={styles.question}>{item.q}</summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

import type { ReactNode } from 'react'
import AdSlot from './AdSlot'
import styles from './ToolLayout.module.css'

interface Props {
  children: ReactNode
}

export default function ToolLayout({ children }: Props) {
  return (
    <main className={styles.main}>
      <AdSlot slot="top" />
      <div className={styles.content}>{children}</div>
      <AdSlot slot="bottom" />
    </main>
  )
}

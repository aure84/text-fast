import { useState } from 'react'
import type { ReactNode } from 'react'
import styles from './ResultPanel.module.css'

interface Props {
  label: string
  copyText?: string
  children: ReactNode
}

export default function ResultPanel({ label, copyText, children }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    if (!copyText) return
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {copyText && (
          <button className={styles.copy} onClick={copy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

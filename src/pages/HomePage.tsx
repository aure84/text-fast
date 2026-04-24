import ToolGrid from '../components/ToolGrid'
import SEOMeta from '../components/SEOMeta'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <SEOMeta
        title="text-fast.com — Free Online Text Tools"
        description="Free online text tools: word counter, character counter, case converter, lorem ipsum generator, and more. Fast, free, no sign-up."
      />
      <div className={styles.hero}>
        <h1 className={styles.heading}>Free Online Text Tools</h1>
        <p className={styles.sub}>Fast, free tools for writers, developers, and marketers. No sign-up required.</p>
      </div>
      <ToolGrid />
    </main>
  )
}

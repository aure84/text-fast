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
      <div className={styles.editorial}>
        <p>text-fast.com is a collection of free browser-based text tools. No account required — no text is ever sent to a server.</p>
        <p>Count words and characters, convert text between UPPERCASE and lowercase, generate lorem ipsum placeholder text for mockups, remove duplicate lines and extra whitespace, create URL-friendly slugs from titles, encode and decode URLs, reverse text, analyze word frequency, and generate strong random passwords. Each tool opens instantly and works offline after the first load.</p>
      </div>
      <ToolGrid />
    </main>
  )
}

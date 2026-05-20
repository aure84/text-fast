import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>text-fast.com</Link>
        <div className={styles.nav}>
          <Link to="/blog" className={styles.navLink}>Blog</Link>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}

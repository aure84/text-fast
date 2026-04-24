import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} text-fast.com — Free online text tools</p>
        <nav className={styles.links}>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  )
}

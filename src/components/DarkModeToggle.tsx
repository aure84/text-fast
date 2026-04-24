import { useDarkMode } from '../hooks/useDarkMode'
import styles from './DarkModeToggle.module.css'

export default function DarkModeToggle() {
  const { dark, toggle } = useDarkMode()
  return (
    <button onClick={toggle} className={styles.btn} aria-label="Toggle dark mode" title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {dark ? '☀️' : '🌙'}
    </button>
  )
}

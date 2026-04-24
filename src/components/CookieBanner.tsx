import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setVisible(true)
  }, [])

  useEffect(() => {
    document.body.style.paddingBottom = visible ? '80px' : ''
    return () => { document.body.style.paddingBottom = '' }
  }, [visible])

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false) }

  if (!visible) return null

  return (
    <div className={styles.banner} role="region" aria-label="Cookie consent">
      <p>We use cookies for analytics (GA4) and ads (AdSense). <a href="/cookies">Learn more</a>.</p>
      <button onClick={accept} className={styles.btn}>Accept</button>
    </div>
  )
}

import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

const CONSENT_KEY = 'cookie_consent'
const GA_ID = 'G-87NMDB5B7Q'

export function initGA() {
  if (typeof window === 'undefined') return
  if ((window as any).__gaInitialised) return
  ;(window as any).__gaInitialised = true
  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) { (window as any).dataLayer.push(args) }
  ;(window as any).gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID)
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

export function getConsent(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CONSENT_KEY)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setVisible(true)
    } else if (stored === 'accepted') {
      initGA()
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    initGA()
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent" aria-modal="false">
      <p className={styles.text}>
        We use cookies for analytics (Google Analytics) and advertising (Google AdSense).
        Text you enter into our tools is never sent to any server.{' '}
        <a href="/cookies" className={styles.link}>Cookie Policy</a>
        {' | '}
        <a href="/privacy" className={styles.link}>Privacy Policy</a>
      </p>
      <div className={styles.actions}>
        <button onClick={decline} className={styles.btnSecondary}>Decline</button>
        <button onClick={accept} className={styles.btn}>Accept</button>
      </div>
    </div>
  )
}

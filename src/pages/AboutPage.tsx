import SEOMeta from '../components/SEOMeta'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SEOMeta
        title="About — text-fast.com"
        description="text-fast.com is a collection of free, fast online text tools for writers, developers, and marketers. No sign-up, no ads, no data collection."
      />
      <div className={styles.content}>
        <h1 className={styles.heading}>About text-fast.com</h1>

        <p className={styles.lead}>
          text-fast.com is a free collection of online text tools built for speed and simplicity.
          Every tool runs entirely in your browser — nothing you type is ever sent to a server.
        </p>

        <h2 className={styles.h2}>What we offer</h2>
        <p>
          We currently offer ten text utilities covering the most common text processing tasks:
          counting words and characters, converting text case, removing duplicates and extra whitespace,
          generating lorem ipsum placeholder text, analyzing word frequency, creating URL slugs,
          encoding and decoding URLs, and reversing text.
        </p>
        <p>
          Each tool is designed to work instantly — no page reloads, no buttons to click,
          no accounts to create. Paste your text and get the result in real time.
        </p>

        <h2 className={styles.h2}>Who it is for</h2>
        <p>
          text-fast.com is built for anyone who works with text on a daily basis:
        </p>
        <ul className={styles.list}>
          <li><strong>Writers and editors</strong> — check word counts, fix capitalization, clean up pasted text.</li>
          <li><strong>Developers</strong> — generate slugs, encode URLs, remove duplicate lines from data files.</li>
          <li><strong>SEO professionals</strong> — analyze keyword frequency, check meta description character limits, generate URL-friendly slugs.</li>
          <li><strong>Designers</strong> — generate lorem ipsum placeholder text for mockups and wireframes.</li>
          <li><strong>Marketers and social media managers</strong> — stay within character limits for Twitter, Instagram, and SMS campaigns.</li>
        </ul>

        <h2 className={styles.h2}>Privacy</h2>
        <p>
          All text processing happens locally in your browser using JavaScript.
          No text you enter is transmitted to any server, stored, or logged.
          We collect only basic, anonymous usage statistics via Google Analytics to understand
          which tools are most useful. See our <a href="/privacy">Privacy Policy</a> for full details.
        </p>

        <h2 className={styles.h2}>Contact</h2>
        <p>
          Have a suggestion for a new tool, found a bug, or want to get in touch?
          Send an email to <a href="mailto:hello@text-fast.com">hello@text-fast.com</a>.
        </p>
      </div>
    </main>
  )
}

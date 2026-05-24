import SEOMeta from '../components/SEOMeta'

const h2Style: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 700,
  marginBottom: 'var(--spacing-md)',
  marginTop: 'var(--spacing-xl)',
}

const pStyle: React.CSSProperties = {
  color: 'var(--text-muted)',
  lineHeight: 1.7,
  marginBottom: 'var(--spacing-md)',
}

const ulStyle: React.CSSProperties = {
  color: 'var(--text-muted)',
  lineHeight: 1.7,
  marginBottom: 'var(--spacing-md)',
  paddingLeft: '1.5rem',
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
      <SEOMeta
        title="Privacy Policy | text-fast.com"
        description="Privacy Policy for text-fast.com — learn how we handle your data, cookies, and third-party services."
      />

      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>Privacy Policy</h1>
      <p style={{ ...pStyle, fontSize: '0.875rem', marginBottom: 'var(--spacing-xl)' }}>Last updated: 2026-05-24</p>

      <p style={pStyle}>
        This Privacy Policy explains how text-fast.com ("we", "us", or "our") collects, uses, and protects
        information when you visit and use our website. We are committed to protecting your privacy and being
        transparent about our data practices.
      </p>

      <h2 style={h2Style}>1. Who We Are</h2>
      <p style={pStyle}>
        text-fast.com is operated by an individual developer based in Hungary. If you have any questions about
        this policy, you can contact us at:{' '}
        <a href="mailto:aure84@gmail.com" style={{ color: 'var(--primary)' }}>aure84@gmail.com</a>.
      </p>

      <h2 style={h2Style}>2. What Data We Collect</h2>
      <p style={pStyle}>
        <strong>Text you enter into any tool is never collected, stored, or transmitted.</strong> All text
        processing — word counting, character counting, case conversion, lorem ipsum generation, and all other
        tools — runs entirely in your browser. Your text never leaves your device.
      </p>
      <p style={pStyle}>
        The following data may be collected indirectly through third-party services integrated on the site,
        only when you have given consent:
      </p>
      <ul style={ulStyle}>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages visited and time spent on them</li>
        <li>Referring website</li>
        <li>Approximate geographic location (country/region level)</li>
        <li>IP address (processed by third-party services, not stored by us)</li>
      </ul>
      <p style={pStyle}>
        We do not operate user accounts, registration forms, or any backend database. We have no access to
        the text you enter into any tool on this site.
      </p>

      <h2 style={h2Style}>3. How We Use Data</h2>
      <p style={pStyle}>We use data collected through third-party services to:</p>
      <ul style={ulStyle}>
        <li>Understand how visitors use the site (analytics)</li>
        <li>Improve the tools and user experience</li>
        <li>Display relevant advertisements to support free access to the site</li>
      </ul>

      <h2 style={h2Style}>4. Third-Party Services</h2>
      <p style={pStyle}>We use the following third-party services that may collect data about you:</p>

      <p style={{ ...pStyle, fontWeight: 600, color: 'inherit', marginBottom: 'var(--spacing-md)' }}>Google Analytics 4</p>
      <p style={pStyle}>
        We use Google Analytics 4 to understand site traffic and usage patterns. Google Analytics uses cookies
        and collects anonymised usage data. Google Analytics is only loaded after you accept analytics cookies
        via the consent banner. You can also opt out at any time via the{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
          Google Analytics Opt-out Browser Add-on
        </a>.
        Learn more at{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
          policies.google.com/privacy
        </a>.
      </p>

      <p style={{ ...pStyle, fontWeight: 600, color: 'inherit', marginBottom: 'var(--spacing-md)' }}>Google AdSense</p>
      <p style={pStyle}>
        We display advertisements served by Google AdSense (publisher ID: ca-pub-6164838820338976). Google
        AdSense uses cookies to serve ads based on your prior visits to this and other sites. Advertising
        cookies are only loaded after you accept them via the consent banner. You may also opt out of
        personalised advertising by visiting{' '}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
          Google Ads Settings
        </a>.
        Learn more at{' '}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
          policies.google.com/technologies/ads
        </a>.
      </p>

      <p style={{ ...pStyle, fontWeight: 600, color: 'inherit', marginBottom: 'var(--spacing-md)' }}>Cloudflare</p>
      <p style={pStyle}>
        Our site is hosted on Cloudflare Pages. Cloudflare may collect limited technical data (such as IP
        addresses) for security and performance purposes. Learn more at{' '}
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
          cloudflare.com/privacypolicy
        </a>.
      </p>

      <h2 style={h2Style}>5. Cookies</h2>
      <p style={pStyle}>
        We use cookies and similar technologies. A detailed breakdown of the cookies used on this site is
        available in our{' '}
        <a href="/cookies" style={{ color: 'var(--primary)' }}>Cookie Policy</a>.
        On your first visit, we display a cookie consent banner with Accept and Decline options. Non-essential
        cookies (analytics, advertising) are only set if you click Accept. Your preference is stored in your
        browser's localStorage under the key <code style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', padding: '0.1em 0.35em', borderRadius: '3px', fontSize: '0.875em' }}>cookie_consent</code>.
      </p>

      <h2 style={h2Style}>6. Legal Basis for Processing (GDPR)</h2>
      <p style={pStyle}>
        If you are located in the European Economic Area (EEA), we process personal data under the following
        legal bases:
      </p>
      <ul style={ulStyle}>
        <li>
          <strong>Consent</strong> — for analytics and advertising cookies, where you have given explicit
          consent via the cookie banner
        </li>
        <li>
          <strong>Legitimate interests</strong> — for basic security and site functionality (e.g. Cloudflare
          infrastructure protection)
        </li>
      </ul>
      <p style={pStyle}>
        You may withdraw consent at any time by clearing the <code style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', padding: '0.1em 0.35em', borderRadius: '3px', fontSize: '0.875em' }}>cookie_consent</code> key from your browser's
        localStorage and reloading the page. The consent banner will re-appear and you can make a new choice.
      </p>

      <h2 style={h2Style}>7. Your Rights (GDPR)</h2>
      <p style={pStyle}>
        If you are located in the EEA, you have the following rights regarding your personal data:
      </p>
      <ul style={ulStyle}>
        <li>The right to access the personal data we hold about you</li>
        <li>The right to rectification of inaccurate data</li>
        <li>The right to erasure ("right to be forgotten")</li>
        <li>The right to restrict processing</li>
        <li>The right to data portability</li>
        <li>The right to object to processing based on legitimate interests</li>
        <li>The right to withdraw consent at any time</li>
      </ul>
      <p style={pStyle}>
        Because we do not collect or store personal data directly, most requests will need to be directed to
        the relevant third-party services (Google, Cloudflare). For any questions, contact us at{' '}
        <a href="mailto:aure84@gmail.com" style={{ color: 'var(--primary)' }}>aure84@gmail.com</a>.
      </p>

      <h2 style={h2Style}>8. Data Retention</h2>
      <p style={pStyle}>
        We do not directly store personal data. Data collected by Google Analytics is retained for 26 months
        by default, per Google's data retention settings. Data collected by Google AdSense is retained
        according to Google's own policies. Consent preferences stored in your browser's localStorage remain
        until you clear your browser data or manually remove the <code style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', padding: '0.1em 0.35em', borderRadius: '3px', fontSize: '0.875em' }}>cookie_consent</code> key.
      </p>

      <h2 style={h2Style}>9. Children's Privacy</h2>
      <p style={pStyle}>
        This site is not directed at children under the age of 13. We do not knowingly collect personal data
        from children. If you believe a child has provided personal data through our site, please contact us
        and we will take appropriate action.
      </p>

      <h2 style={h2Style}>10. Changes to This Policy</h2>
      <p style={pStyle}>
        We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page
        reflects the most recent revision. Continued use of the site after any changes constitutes acceptance
        of the updated policy.
      </p>

      <h2 style={h2Style}>11. Contact</h2>
      <p style={pStyle}>
        For any privacy-related questions or requests, contact us at:{' '}
        <a href="mailto:aure84@gmail.com" style={{ color: 'var(--primary)' }}>aure84@gmail.com</a>
      </p>
    </main>
  )
}

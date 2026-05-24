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

const tableWrapStyle: React.CSSProperties = {
  overflowX: 'auto',
  marginBottom: 'var(--spacing-lg)',
}

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.9rem',
}

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0.625rem 0.75rem',
  background: 'var(--bg-surface)',
  border: '1px solid var(--border)',
  fontWeight: 600,
}

const tdStyle: React.CSSProperties = {
  padding: '0.625rem 0.75rem',
  border: '1px solid var(--border)',
  color: 'var(--text-muted)',
  verticalAlign: 'top',
}

export default function CookiesPage() {
  return (
    <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
      <SEOMeta
        title="Cookie Policy | text-fast.com"
        description="Cookie Policy for text-fast.com — what cookies we use, why, and how to control them."
      />

      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>Cookie Policy</h1>
      <p style={{ ...pStyle, fontSize: '0.875rem', marginBottom: 'var(--spacing-xl)' }}>Last updated: 2026-05-24</p>

      <p style={pStyle}>
        This Cookie Policy explains what cookies are, which cookies text-fast.com uses, and how you can
        control them. For a broader overview of our data practices, see our{' '}
        <a href="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
      </p>

      <h2 style={h2Style}>1. What Are Cookies</h2>
      <p style={pStyle}>
        Cookies are small text files placed on your device when you visit a website. They are widely used to
        make websites work, remember your preferences, and provide information to site owners. Cookies set by
        the website you are visiting are called "first-party cookies". Cookies set by other services are
        called "third-party cookies".
      </p>
      <p style={pStyle}>
        We also use localStorage — browser storage that works similarly to cookies but is never sent to a
        server. We use it solely to remember your cookie consent preference.
      </p>

      <h2 style={h2Style}>2. Cookies We Use</h2>

      <p style={{ ...pStyle, fontWeight: 600, color: 'inherit' }}>Strictly Necessary</p>
      <p style={pStyle}>
        These are required for the site to function. They cannot be disabled.
      </p>
      <div style={tableWrapStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Provider</th>
              <th style={thStyle}>Purpose</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Expiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>cookie_consent</td>
              <td style={tdStyle}>text-fast.com</td>
              <td style={tdStyle}>Stores your cookie consent preference (accepted/declined) so the banner is not shown on every visit</td>
              <td style={tdStyle}>localStorage</td>
              <td style={tdStyle}>Until browser data is cleared</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ ...pStyle, fontWeight: 600, color: 'inherit' }}>Analytics Cookies</p>
      <p style={pStyle}>
        These help us understand how visitors use the site. They are only set if you click Accept on the
        cookie consent banner.
      </p>
      <div style={tableWrapStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Provider</th>
              <th style={thStyle}>Purpose</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Expiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>_ga</td>
              <td style={tdStyle}>Google Analytics</td>
              <td style={tdStyle}>Distinguishes unique users by assigning a randomly generated number as a client identifier</td>
              <td style={tdStyle}>Cookie</td>
              <td style={tdStyle}>2 years</td>
            </tr>
            <tr>
              <td style={tdStyle}>_ga_*</td>
              <td style={tdStyle}>Google Analytics</td>
              <td style={tdStyle}>Stores and counts pageviews for a specific GA4 property</td>
              <td style={tdStyle}>Cookie</td>
              <td style={tdStyle}>2 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ ...pStyle, fontWeight: 600, color: 'inherit' }}>Advertising Cookies</p>
      <p style={pStyle}>
        These are set by Google AdSense to serve relevant advertisements. They are only active if you click
        Accept on the cookie consent banner. Learn more about how Google uses this data at{' '}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
          policies.google.com/technologies/ads
        </a>.
      </p>
      <div style={tableWrapStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Provider</th>
              <th style={thStyle}>Purpose</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Expiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>IDE</td>
              <td style={tdStyle}>Google DoubleClick</td>
              <td style={tdStyle}>Used to show Google ads that are relevant to the user based on recent web activity</td>
              <td style={tdStyle}>Cookie</td>
              <td style={tdStyle}>13 months</td>
            </tr>
            <tr>
              <td style={tdStyle}>test_cookie</td>
              <td style={tdStyle}>Google DoubleClick</td>
              <td style={tdStyle}>Checks whether the user's browser supports cookies</td>
              <td style={tdStyle}>Cookie</td>
              <td style={tdStyle}>15 minutes</td>
            </tr>
            <tr>
              <td style={tdStyle}>ANID, NID</td>
              <td style={tdStyle}>Google</td>
              <td style={tdStyle}>Used to store user preferences and serve personalised ads on Google services</td>
              <td style={tdStyle}>Cookie</td>
              <td style={tdStyle}>13 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style={h2Style}>3. Your Consent</h2>
      <p style={pStyle}>
        On your first visit to text-fast.com, a cookie consent banner is shown at the bottom of the page.
        You can click <strong>Accept</strong> to allow all cookies, or <strong>Decline</strong> to allow
        only strictly necessary storage. Your choice is stored in localStorage under the key{' '}
        <code style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', padding: '0.1em 0.35em', borderRadius: '3px', fontSize: '0.875em' }}>cookie_consent</code>.
      </p>
      <p style={pStyle}>
        Analytics and advertising cookies are only loaded after you click Accept. Strictly necessary
        localStorage entries are set regardless of consent because they are required for the consent mechanism
        itself to function.
      </p>

      <h2 style={h2Style}>4. How to Control Cookies</h2>
      <p style={pStyle}>
        You can withdraw or change your consent at any time using the following methods:
      </p>
      <ul style={{ ...pStyle, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Reset consent banner</strong> — open your browser's developer tools, go to Application
          &gt; Local Storage, delete the <code style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', padding: '0.1em 0.35em', borderRadius: '3px', fontSize: '0.875em' }}>cookie_consent</code> key for text-fast.com,
          then reload the page. The banner will re-appear.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Browser settings</strong> — most browsers allow you to block or delete cookies. Refer to
          your browser's help documentation for instructions.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Google opt-out</strong> — visit{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
            Google Ads Settings
          </a>{' '}
          or install the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
            Google Analytics Opt-out Add-on
          </a>.
        </li>
        <li>
          <strong>Industry opt-outs</strong> — visit{' '}
          <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
            Your Online Choices
          </a>{' '}
          (EU) or{' '}
          <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
            AboutAds.info
          </a>.
        </li>
      </ul>
      <p style={pStyle}>
        Please note that declining non-essential cookies may result in less relevant advertising, but all
        tools will continue to work normally.
      </p>

      <h2 style={h2Style}>5. Do Not Track</h2>
      <p style={pStyle}>
        Some browsers send a "Do Not Track" (DNT) signal. Our site does not currently alter its behaviour in
        response to DNT signals, as there is no universal standard for how websites should respond.
        Third-party services such as Google have their own DNT policies.
      </p>

      <h2 style={h2Style}>6. Changes to This Policy</h2>
      <p style={pStyle}>
        We may update this Cookie Policy from time to time. The "Last updated" date at the top of this page
        reflects the most recent revision.
      </p>

      <h2 style={h2Style}>7. Contact</h2>
      <p style={pStyle}>
        For any questions about our use of cookies, contact us at:{' '}
        <a href="mailto:aure84@gmail.com" style={{ color: 'var(--primary)' }}>aure84@gmail.com</a>
      </p>
    </main>
  )
}

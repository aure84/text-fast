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

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
      <SEOMeta
        title="Terms of Service | text-fast.com"
        description="Terms of Service for text-fast.com — the conditions for using our free online text tools."
      />

      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>Terms of Service</h1>
      <p style={{ ...pStyle, fontSize: '0.875rem', marginBottom: 'var(--spacing-xl)' }}>Last updated: April 24, 2026</p>

      <p style={pStyle}>
        By accessing or using text-fast.com ("the site", "we", "us", or "our"), you agree to be bound by these
        Terms of Service. If you do not agree to these terms, please do not use the site.
      </p>

      <h2 style={h2Style}>1. Description of Service</h2>
      <p style={pStyle}>
        text-fast.com provides free, browser-based text tools including (but not limited to) word counters,
        character counters, case converters, and lorem ipsum generators. All tools run entirely in your browser.
        No text you enter is transmitted to or stored on any server.
      </p>
      <p style={pStyle}>
        The site is provided free of charge and is supported by advertising. No account or registration is
        required to use any tool.
      </p>

      <h2 style={h2Style}>2. Acceptable Use</h2>
      <p style={pStyle}>You agree to use the site only for lawful purposes and in a manner that does not:</p>
      <ul style={ulStyle}>
        <li>Infringe the rights of others</li>
        <li>Transmit any unlawful, harmful, or offensive content</li>
        <li>Attempt to disrupt or interfere with the site's functionality</li>
        <li>Scrape, crawl, or systematically extract content from the site without permission</li>
        <li>Circumvent or attempt to bypass any security measures</li>
      </ul>

      <h2 style={h2Style}>3. Intellectual Property</h2>
      <p style={pStyle}>
        All content on this site — including the code, design, text, and tool implementations — is owned by
        or licensed to us. You may not copy, reproduce, distribute, or create derivative works from any part
        of the site without our prior written permission.
      </p>
      <p style={pStyle}>
        The text you enter into any tool on this site remains entirely yours. We make no claim over your
        content and cannot access it.
      </p>

      <h2 style={h2Style}>4. Disclaimer of Warranties</h2>
      <p style={pStyle}>
        The site and all tools are provided "as is" and "as available" without any warranties of any kind,
        either express or implied. We do not warrant that:
      </p>
      <ul style={ulStyle}>
        <li>The site will be available at all times or free from errors</li>
        <li>The results produced by any tool are accurate, complete, or suitable for any particular purpose</li>
        <li>The site is free from viruses or other harmful components</li>
      </ul>
      <p style={pStyle}>
        You use the tools at your own risk. Always verify outputs before relying on them for professional,
        academic, or commercial purposes.
      </p>

      <h2 style={h2Style}>5. Limitation of Liability</h2>
      <p style={pStyle}>
        To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental,
        special, consequential, or punitive damages arising from your use of — or inability to use — the site
        or its tools, even if we have been advised of the possibility of such damages.
      </p>
      <p style={pStyle}>
        Our total liability to you for any claim arising from your use of the site shall not exceed €100.
      </p>

      <h2 style={h2Style}>6. Third-Party Advertising</h2>
      <p style={pStyle}>
        The site displays advertisements provided by Google AdSense. These ads are served by Google and are
        subject to Google's terms and policies. We are not responsible for the content of third-party
        advertisements, and their presence does not constitute an endorsement by us.
      </p>

      <h2 style={h2Style}>7. Third-Party Links</h2>
      <p style={pStyle}>
        The site may contain links to third-party websites. These links are provided for convenience only. We
        have no control over the content of those sites and accept no responsibility for them or for any loss
        or damage that may arise from your use of them.
      </p>

      <h2 style={h2Style}>8. Privacy</h2>
      <p style={pStyle}>
        Your use of the site is also governed by our{' '}
        <a href="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</a> and{' '}
        <a href="/cookies" style={{ color: 'var(--primary)' }}>Cookie Policy</a>, which are incorporated into
        these Terms by reference.
      </p>

      <h2 style={h2Style}>9. Changes to These Terms</h2>
      <p style={pStyle}>
        We may update these Terms of Service at any time. The "Last updated" date at the top of this page
        reflects the most recent revision. Continued use of the site after any changes constitutes acceptance
        of the updated terms.
      </p>

      <h2 style={h2Style}>10. Governing Law</h2>
      <p style={pStyle}>
        These Terms are governed by and construed in accordance with the laws of Hungary. Any disputes arising
        from these Terms or your use of the site shall be subject to the exclusive jurisdiction of the courts
        of Hungary.
      </p>

      <h2 style={h2Style}>11. Contact</h2>
      <p style={pStyle}>
        If you have any questions about these Terms, contact us at:{' '}
        <a href="mailto:aure84@gmail.com" style={{ color: 'var(--primary)' }}>aure84@gmail.com</a>
      </p>
    </main>
  )
}

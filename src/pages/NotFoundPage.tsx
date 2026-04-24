import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'

export default function NotFoundPage() {
  return (
    <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 'var(--spacing-xl) var(--spacing-lg)', textAlign: 'center' }}>
      <SEOMeta title="404 — Page Not Found | text-fast.com" description="Page not found." noIndex />
      <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>404</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>This page does not exist.</p>
      <Link to="/" style={{ color: 'var(--primary)' }}>← Back to all tools</Link>
    </main>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ToolPage from './pages/ToolPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/:slug" element={<ToolPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  )
}

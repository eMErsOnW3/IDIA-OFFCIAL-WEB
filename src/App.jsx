import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Download from './pages/Download';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

const metadata = {
  '/terms': ['Terms of Service — IORA / IDIA', 'Terms governing access to and use of IDIA, the privacy-focused software product developed by IORA. Effective October 5, 2026.'],
  '/privacy': ['IDIA Privacy Policy', 'How the IDIA Chrome extension processes information, uses local browser storage, and protects user privacy. Last updated October 4, 2026.'],
  '/': ['IDIA by IORA — Privacy before the prompt', 'Protect your data before AI sees it. IDIA detects and protects sensitive information before you share text, files, or images with generative AI.'],
  '/download': ['Download IDIA — Your AI privacy layer', 'Download the IDIA Chrome Extension and learn how to install it. macOS Beta is available; Windows protection is coming soon.'],
  '/pricing': ['Pricing — IDIA', 'Explore IDIA Free, upcoming Pro protection, and planned Enterprise capabilities.'],
  '/about': ['About Us — IORA', 'Privacy should be built into how we use AI. Learn about IORA’s mission, the team behind IDIA, and our principles.'],
};
export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const [title, description] = metadata[pathname.replace(/\/$/, '') || '/'] || ['Page not found — IDIA', 'Return to IDIA, your privacy layer for generative AI.'];
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
    if (!hash) { window.scrollTo({ top: 0, behavior: 'instant' }); document.getElementById('main-content')?.focus({ preventScroll: true }); }
    else requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
  }, [pathname, hash]);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content" tabIndex={-1}><Routes><Route path="/" element={<Home />} /><Route path="/download" element={<Download />} /><Route path="/pricing" element={<Pricing />} /><Route path="/about" element={<About />} /><Route path="/privacy" element={<Privacy />} /><Route path="/terms" element={<Terms />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /></>;
}


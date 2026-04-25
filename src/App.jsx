import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Blog from './pages/Blog';
import AIStudies from './pages/AIStudies';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import ContactPage from './pages/ContactPage';
import { CurrencyProvider } from './contexts/CurrencyContext';

function App() {
  return (
    <HelmetProvider>
      <CurrencyProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ai-studies" element={<AIStudies />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
      </CurrencyProvider>
    </HelmetProvider>
  );
}

export default App;

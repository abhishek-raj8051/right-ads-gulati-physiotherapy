import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactBox from './components/FloatingContactBox';
import Lenis from 'lenis';

// Page Imports
import Home from './pages/Home';
import AboutDoctor from './pages/AboutDoctor';
import OurTeam from './pages/OurTeam';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PatientGuidelines from './pages/PatientGuidelines';
import WarrantiesGuarantees from './pages/WarrantiesGuarantees';

// Dynamic Treatment Page
import TreatmentPage from './pages/TreatmentPage';
import NotFound from './pages/NotFound';

// Smooth scrolling with Lenis
function SmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);
  
  useEffect(() => {
    // Try to use lenis for smooth scroll, fallback to native
    const scrollToTop = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };
    
    scrollToTop();
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router basename="/gulatiphysiotherapy">
      <SmoothScroll />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-bg text-text-main font-sans">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Routes */}
            <Route path="/about/dr-vinay-gulati" element={<AboutDoctor />} />
            <Route path="/about-doctor" element={<AboutDoctor />} />
            <Route path="/about/team" element={<OurTeam />} />
            <Route path="/our-team" element={<OurTeam />} />
            
            {/* General Routes */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patient-guidelines" element={<PatientGuidelines />} />
            <Route path="/warranties-and-guarantees" element={<WarrantiesGuarantees />} />
            <Route path="/warranties-guarantees" element={<WarrantiesGuarantees />} />
            
            {/* Dynamic Treatment Route */}
            <Route path="/treatments/:slug" element={<TreatmentPage />} />

            {/* 404 Routes */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
      <FloatingContactBox />
    </Router>
  );
}

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import "./App.css"
import Landing from "./components/Landing";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CarLoanForm from "./components/CarLoanForm";
import Documentation from './components/Documentation';
import AboutUs from './components/AboutUs';
import Cookie from './components/Cookie';
import Disclaimer from './components/Disclaimer';
import PrivacyPolicy from './components/PrivacyPolicy';

const Navbar = ({ isScrolled, isMenuOpen, toggleMenu, setIsMenuOpen }) => {
  const location = useLocation();
  const isFormPage = location.pathname === '/carloanform';

  if (isFormPage) {
    return null; 
  }

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className='navbar'>
        <div className='logo'>
          <a href="/">
            <img src="/logo.png" alt="AMFirst Logo" className="logo-image" />
          </a>
        </div>
        
        <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className='nav-items' onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/#about" className='nav-items' onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="/#Features" className='nav-items' onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="/#contact-main" className='nav-items' onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          <a href="/carloanform" className="btn-apply-navbar" onClick={() => setIsMenuOpen(false)}>Apply Now</a>
        </div>
      </nav>
    </div>
  );
};

// Footer wrapper to conditionally render Footer
const FooterWrapper = () => {
  const location = useLocation();
  const isFormPage = location.pathname === '/carloanform';
  if (isFormPage) return null;
  return <Footer />;
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Navbar 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="main-content-wrapper">
        <Routes>
          <Route path="/carloanform" element={<CarLoanForm />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/" element={
            <>
              <Landing />
              <Features />
              <Documentation/>
              <AboutUs/>
              <Contact />
            </>
          } />
        </Routes>
      </div>

      <FooterWrapper />
    </Router>
  )
}

export default App

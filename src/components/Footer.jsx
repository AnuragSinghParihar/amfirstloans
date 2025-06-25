import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer id="site-footer" className="amfirst-footer-container">
    <div className="amfirst-footer-main">
      
      
      <div className="amfirst-footer-section description">
        <h3>ABOUT AM FIRST LOAN</h3>
        <p className="amfirst-description">
        AM First is a leading financial services group specializing in used car refinance, with a growing presence in personal, business, and home loans.
Founded in 2015, we operate 9 branches across India and have disbursed ₹150 Cr in FY25 alone.
Our mission: Easy. Fast. 200% Loan for Used Cars.
        </p>
        
      </div>

      
      <div className="amfirst-footer-section logo-social-section">
        <div className='footer-logo'>
          <a href="/">
            <img src="/logo.png" alt="AMFirst Logo" className="footer-logo-image" />
          </a>
        </div>
        
        <div className="social-follow">
           <h3>Follow us on</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/_amfirst_?igsh=MW5hdzh0dzZyaTI0dw==" aria-label="Instagram"><img src="/instagramicon.webp" alt="Instagram"  /></a>
              <a href="https://x.com/amfirstloans" aria-label="Twitter"><img src="/x.png" alt="Twitter" /></a>
              <a href="https://www.facebook.com/profile.php?id=61577128086595" aria-label="Facebook"><img src="/facebookicon.webp" alt="Facebook" /></a>
              <a href="https://www.linkedin.com/in/am-first-8b09b736a/" aria-label="LinkedIn"><img src="/linkedinicon.webp" alt="LinkedIn" /></a>
            </div>
        </div>

      </div>

      
      <div className="amfirst-footer-section contact-info">
        <h3>CONTACT US</h3>
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <span>+91-8818884843</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <span>amfirst.contact@gmail.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📍</span> 
          <span>418A, City Center, MG Road, Indore, Madhya Pradesh</span>
        </div>
      </div>

    </div>

    <div className="amfirst-footer-bottom">
      <p>
        © 2025 AM First Finance Private Limited. All rights reserved. 
        <a href="/cookie-policy">Cookie Policy</a> | 
        <a href="/disclaimer">Disclaimer</a> | 
        <a href="/privacy-policy">Privacy Policy</a>
      </p>
      </div>
    </footer>
  );

export default Footer;

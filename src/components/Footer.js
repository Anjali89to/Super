import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ThinkAcademies</h3>
          <p>Empowering students for success abroad.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@thinkacademies.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ThinkAcademies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

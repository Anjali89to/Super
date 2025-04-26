import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Think Academies</h3>
          <p>Empowering students for success abroad.</p>
          <p>We help you find the right opportunities</p>
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
          <p>Phone: +91-8743947546</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/thinkacademies/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Think Academies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

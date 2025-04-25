import React, { useState } from 'react';
import './Navbar.css';
import './CounselingForm.css'; // For form styling

function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [menuActive, setMenuActive] = useState(false); // Track menu state for mobile

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <h2>ThinkAcademies</h2>
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Free Counseling Button */}
        <button className="free-counseling-btn" onClick={toggleForm}>
          Free Counseling
        </button>
      </nav>

      {/* Modal Form */}
      {showForm && (
        <div className="counseling-modal">
          <div className="counseling-form-container">
            <button className="close-btn" onClick={toggleForm}>✖</button>
            <h2>Free Counseling Form</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

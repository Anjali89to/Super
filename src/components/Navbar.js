import React, { useState } from 'react';
import './Navbar.css';
import './CounselingForm.css'; // for form styling

function Navbar() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <h2>ThinkAcademies</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Open form on click */}
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

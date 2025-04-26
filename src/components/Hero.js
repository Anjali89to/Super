import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Text on the left side */}
        <div className="hero-text">
          <h1>Welcome to Think Academies</h1>
          <p className="intro-text">Your path to success starts here.</p>
          <p className="extra-text">We help students grow with the right skills and guidance.</p>
          <div className="cta-button">
            <a 
              href="https://forms.gle/LgzVCPchfGKSX5qv9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button>Apply Now</button>
            </a>
          </div>
        </div>

        {/* Image on the right side */}
        <div className="hero-image">
          <img 
            src="https://sydoverseas.com/wp-content/uploads/2020/08/hero-women-accountant.jpg" 
            alt="Confident woman planning her future" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

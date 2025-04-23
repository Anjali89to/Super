import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to ThinkAcademies</h1>
          <p className="intro-text">Your path to success starts here.</p>
          <div className="cta-button">
            <a href="https://forms.gle/LgzVCPchfGKSX5qv9" target="_blank" rel="noopener noreferrer">
              <button>Apply Now</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://www.monetizemore.com/wp-content/uploads/2023/03/program-overview-img.png" alt="Program Overview" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

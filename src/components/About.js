import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>We guide students to achieve their dreams with expert mentoring and support.</p>
      <div className="boxes">
        <div className="box">
          <h3>Expert Mentorship</h3>
          <p>We provide personalized mentoring to help students navigate their educational journey.</p>
        </div>
        <div className="box">
          <h3>Comprehensive Support</h3>
          <p>From application guidance to visa assistance, we ensure students have all the support they need.</p>
        </div>
        <div className="box">
          <h3>Global Opportunities</h3>
          <p>We connect students with opportunities to study abroad and pursue their higher education dreams.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

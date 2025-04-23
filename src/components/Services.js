import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>We offer a wide range of services to help students achieve their academic goals.</p>
      
      <div className="service">
        <div className="service-text">
          <h3>Study Abroad</h3>
          <ul>
            <li>Expert guidance for studying abroad</li>
            <li>University and program selection</li>
            <li>Visa application support</li>
          </ul>
        </div>
      </div>

      <div className="service">
        <div className="service-text">
          <h3>Test Prep</h3>
          <ul>
            <li>Prepare for competitive exams</li>
            <li>Expert tutors and resources</li>
            <li>Practice tests and strategies</li>
          </ul>
        </div>
      </div>

      <div className="service">
        <div className="service-text">
          <h3>Visa Support</h3>
          <ul>
            <li>Assistance with visa applications</li>
            <li>Documentation support</li>
            <li>Guidance for interviews and approvals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;

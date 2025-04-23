import React from 'react';
import Navbar from './components/Navbar';  // Default import
import Hero from './components/Hero';      // Default import
import About from './components/About';    // Default import
import Services from './components/Services'; // Default import
import Contact from './components/Contact';  // Default import
import Footer from './components/Footer';    // Default import

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;

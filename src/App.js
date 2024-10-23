import React from 'react';
import { Link } from 'react-scroll';
import Home from './components/HomePage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ProjectsGallery from './components/ProjectsGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div>
      <nav>
        <h1>Interior Design Co.</h1>
        <div>
          <Link to="home" >Home</Link>
          <Link to="about" >About Us</Link>
          <Link to="services"  >Services</Link>
          <Link to="gallery">Projects Gallery</Link>
          <Link to="contact" >Contact</Link>
        </div>
      </nav>

   
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <ProjectsGallery />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import { FaCouch, FaPaintBrush, FaRulerCombined } from 'react-icons/fa';

const Services = () => (
  <section className="services" id="services">
    <h2>Our Services</h2>
    <div className="service-list">
      <div>
        <FaCouch size={50} />
        <h3>Interior Design</h3>
      </div>

      <div>
        <FaPaintBrush size={50} />
        <h3>Custom Furniture</h3>
      </div>
      
      <div>
        <FaRulerCombined size={50} />
        <h3>Space Planning</h3>
      </div>
    </div>
  </section>
);

export default Services;

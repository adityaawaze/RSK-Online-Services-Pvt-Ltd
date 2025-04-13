import React from "react";
import "./Footer.css"; // Make sure to create a corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Join Our Team */}
      <div className="careers">
        <h2>Join Our Team - Innovate with Us</h2>
        <p>Be a part of our journey in transforming digital solutions.</p>
        <a href="/careers" >
        <button className="explore-careers">Explore Careers</button>
        </a>
      </div>

      <div className="info">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="contact">
          <h4>Contact</h4>
         
          <p>📧 admin@rskonlineservices.com</p>
          <p>📍649 Harikrupa Appartment Old bagadganj nagpur 440008</p>
        </div>
        <div className="social-links">
          <h4>Follow Us</h4>
          <p>🔗 Social Media Icons</p>
        </div>
        <div className="wearehiring">
          <h4>We Are Hiring</h4>
          <p>Join Our Innovative Team</p>
          <button className="explore-careers">View Openings</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 RSK Online Services. All rights reserved.
          
        </p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;

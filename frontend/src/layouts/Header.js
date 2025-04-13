import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../layouts/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // NEW
  const servicesTimeoutRef = useRef(null);
  const solutionsTimeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 500);
  };

  const handleSolutionsMouseEnter = () => {
    clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 500);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="RSK Logo" />
      </div>

     

      {/* Navigation Links */}
      <nav>
        <ul className={`nav-links ${isMobileMenuOpen ? "show-mobile" : ""}`}>
          <li onClick={closeMobileMenu}><Link to="/">Home</Link></li>
          <li onClick={closeMobileMenu}><Link to="/about">About Us</Link></li>

          {/* Solutions Dropdown */}
          <li
            className="solutions"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <Link to="/solutions">Solutions</Link>
            {isSolutionsOpen && (
              <ul
                className="submenu"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <li><a href="https://admin.wesavemore.in/" target="_blank" rel="noopener noreferrer">Wesavemore</a></li>
                <li><a href="https://jstpay.online" target="_blank" rel="noopener noreferrer">Jstpay</a></li>
                <li><a href="http://rkrechargeapi.in/" target="_blank" rel="noopener noreferrer">RKRechargeAPI</a></li>
                <li><a href="https://billnest.in/" target="_blank" rel="noopener noreferrer">BillNest</a></li>
              </ul>
            )}
          </li>

          <li onClick={closeMobileMenu}><Link to="/services">Services</Link></li>
          <li onClick={closeMobileMenu}><Link to="/blog">Blog</Link></li>
          <li onClick={closeMobileMenu}><Link to="/careers">Career</Link></li>
          <li onClick={closeMobileMenu}>
            <Link to="/contact" className="contact-btn">Contact Us</Link>
          </li>
        </ul>
      </nav>
       {/* Hamburger */}
       <div className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;

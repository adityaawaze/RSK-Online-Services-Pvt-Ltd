import React from "react";
import "./HomePage.css";
 // Importing the separate CSS file
import Curve from "../assets/curve.svg"; // Replace with the correct path to your image
import "@fontsource/montserrat"; // Importing Montserrat font
import aboutImage from "../assets/about-image.png"; // Replace with the correct path to your image
import CountUp from "../components/CountUp";
import SpotlightCard from "../components/SpotlightCard"; // Importing the SpotlightCard component

import { motion } from "framer-motion"; // Importing framer-motion for 
import { useEffect } from "react"; // Importing useEffect for side effects
import MediaQuery from 'react-responsive';



const HomePage = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
   // Scroll to the top of the page on every reload
   
  return (
    

    <div className="homepage">
     
      {/* Header Section */}
      

      {/* Hero Section */}
      <section className="hero">

        <MediaQuery query="(min-width: 480px)">
      
        
        <h1>
          Connecting <span className="effect">Businesses</span> and <span  className="effect">Customers</span>, <div><span className="effect">One Solution</span> at a Time</div>
        </h1>
        </MediaQuery>
        <MediaQuery query="(max-width: 480px)">
        <h1>
          Connecting <span className="effect">Businesses</span> and <span  className="effect">Customers</span>, One Solution at a Time
        </h1>
        </MediaQuery>

        <MediaQuery query="(max-width: 480px)">
        <p>
        RSK Online Services empowers businesses and customers with seamless bill payments, recharges, and innovative software solutions. We bring your ideas to life with cutting-edge technology that simplifies everyday tasks and boosts efficiency.
        </p>
        </MediaQuery>
        <MediaQuery query="(min-width: 480px)">
        <p>
        RSK Online Services empowers businesses and customers with seamless bill payments, recharges,<br/> and innovative software solutions. We bring your ideas to life with cutting-edge technology that<br/> simplifies everyday tasks and boosts efficiency.
        </p>
        </MediaQuery>
        <a href="/about">
        <button className="learn-more">Learn More</button>
        </a>

        <MediaQuery query="(min-width: 769px)">
        
        
        <div className="hero-stats">
        <div className="stat stat1">
          <div>
        <CountUp from={0} to={50} duration={2} className="count-up-text" />k+</div>
         <p>Daily Transaction</p>       
      </div>
      <div className="stat stat2">
      <div>
        <CountUp from={0} to={24} duration={2} className="count-up-text" />/7</div>
        <p>Support</p>
        
      </div>
      <div className="stat stat3">
      <div>
        <CountUp from={0} to={5} duration={2} className="count-up-text" />+ </div>
        <p>Years Of Experience</p>
        
      </div>
      

    </div>
        </MediaQuery> 
    
    
      </section>
      


      {/* About Us Section */}
      <section className="about-us">
        
        <div className="about-text">
          <h2>About <span className="effect">Us</span></h2>
          <MediaQuery query="(min-width: 480px)">
          <p>
            RSK Online Services provides B2B, B2C, and API software<br/>solutions for
            seamless bill payments<br/>and recharge services—all on one platform.
          </p>
          </MediaQuery>

          <MediaQuery query="(max-width: 480px)">
          <p>
            RSK Online Services provides B2B, B2C, and API software solutions for
            seamless bill payments and recharge services—all on one platform.
          </p>
          </MediaQuery>
          <a href="/about" >
          <button className="learn-more">Learn More</button>
          </a>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </section>

      {/* Our Services */}
    
      <section className="section-services">
  <h2>
    Our <span className="highlight-effect">Services</span>
  </h2>

  <div className="grid-services">
    {[
      {
        name: "Bill Payment Solutions",
        description: "Simplify your bill payments with our all-in-one platform, covering utilities, credit cards, subscriptions, and more.",
        anchor: "bill-payment",
      },
      {
        name: "Recharge Services",
        description: "Fast, hassle-free recharges for mobile, DTH, and data plans—anytime, anywhere.",
        anchor: "recharge-services",
      },
      {
        name: "Custom Software Solutions",
        description: "Tailored software development to meet your business needs, from startups to enterprises..",
        anchor: "custom-software",
      },
      {
        name: "API Integration Services",
        description: "Seamlessly integrate our payment, recharge, and billing solutions into your platform.",
        anchor: "api-integration",
      },
      {
        name: "Retailer Solutions (B2B)",
        description: "A comprehensive platform for retailers to manage customer bill payments and recharges.",
        anchor: "retailer-solutions",
      },
      {
        name: " Payment Gateway Solutions",
        description: "Secure, reliable payment processing for businesses of all sizes.",
        anchor: "payment-gateway",
      },
      {
        name: "Cloud Solutions",
        description: "Scalable cloud infrastructure to streamline operations and enhance collaboration.",
        anchor: "cloud-solutions",
      },
      {
        name: "Data Analytics & Insights",
        description: "Transform your data into actionable insights for smarter decision-making.",
        anchor: "data-analytics",
      },
    ].map((service, index) => (
      <motion.div
        key={index}
        className="services-card-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <SpotlightCard
          className="services-spotlight-card"
          spotlightColor="rgba(117, 23, 154, 0.57)"
        >
          <div className="card-service">
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <a href={`/services#${service.anchor}`} >
              <button className="btn-learn-more">Learn More</button>
            </a>
          </div>
        </SpotlightCard>
      </motion.div>
    ))}
  </div>
</section>


<section className="section-products">
  <h2>
    Our <span className="highlight-effect">Solutions</span>
  </h2>

  <div className="grid-products">
    {[
      {
        name: "WeSaveMore (B2C Platform)",
        description: "A platform for customers to manage their bills and recharges.",
        image: "/wesavemore.png",
        url: "https://admin.wesavemore.in/"
      },
      {
        name: "BILLNEST (B2B Software Suite)",
        description: "Comprehensive software suite for businesses.",
        image: "/billnest.png",
        url: "https://billnest.in/"
      },
      {
        name: "RKRechargeAPI (API Solutions)",
        description: "API solutions for seamless integration.",
        image: "/rkrecharge.png",
        url: "http://rkrechargeapi.in/"
      },
      {
        name: "JSTPAY",
        description: "A dedicated panel for retailers and distributors.",
        image: "/jstpay.png",
        url: "https://jstpay.online"
      }
    ].map((product, index) => (
      <motion.div
        key={index}
        className="products-card-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <SpotlightCard
          className="products-spotlight-card"
          spotlightColor="rgba(117, 23, 154, 0.57)"
        >
          <div className="card-product">
            
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="product-bottom">
            <a href={product.url} target="_blank" rel="noopener noreferrer">
  <button className="btn-learn-more">Learn More</button>
</a>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px"
              }}
            />
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    ))}
  </div>
</section>




      <MediaQuery query="(min-width: 768px)">

      {/*}<JourneySection />*/}
      <motion.section 
      className="journey"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }}
    >
      <h2>Our <span className="effect">Journey</span></h2>

      <motion.div 
        className="journey-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div className="timeline-year" style={{ textAlign: "right" }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>2021</motion.div>
        <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
          <h3>Founded</h3>
          <p>Established RSK Online Services</p>
        </motion.div>

        <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
          <h3 style={{ textAlign: "right" }}>B2C Launch</h3>
          <p style={{ textAlign: "right" }}>Launched WeSaveMore platform</p>
        </motion.div>
        <motion.div className="timeline-year" variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>2023</motion.div>

        <motion.div className="timeline-year" style={{ textAlign: "right" }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>2024</motion.div>
        <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
          <h3>API Solutions</h3>
          <p>Launched rkrechargeapi.in</p>
        </motion.div>

        <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
          <h3 style={{ textAlign: "right" }}>B2B Solutions</h3>
          <p style={{ textAlign: "right" }}>Launched BILLNEST platform</p>
        </motion.div>
        <motion.div className="timeline-year" variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>2024</motion.div>

        <motion.div className="timeline-year" style={{ textAlign: "right" }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>2025</motion.div>
        <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
          <h3>Global Expansion</h3>
          <p>Expanded operations across India</p>
        </motion.div>
      </motion.div>
    </motion.section>

    </MediaQuery>

    <MediaQuery query="(max-width: 480px)">
    <motion.section 
  className="journey"
  initial={{ opacity: 0, y: 50 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }} 
  viewport={{ once: true }}
>
  <h2>Our <span className="effect">Journey</span></h2>

  <motion.div 
    className="journey-grid"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
    }}
  >

    {/* 2021 */}
    <motion.div className="timeline-year" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
      2021
    </motion.div>
    <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
      <h3>Founded</h3>
      <p>Established RSK Online Services</p>
    </motion.div>

    {/* 2023 */}
    <motion.div className="timeline-year" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
      2023
    </motion.div>
    <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
      <h3>B2C Launch</h3>
      <p>Launched WeSaveMore platform</p>
    </motion.div>

    {/* 2024 - API */}
    <motion.div className="timeline-year" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
      2024
    </motion.div>
    <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
      <h3>API Solutions</h3>
      <p>Launched rkrechargeapi.in</p>
    </motion.div>

    {/* 2024 - B2B */}
    <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
      <h3>B2B Solutions</h3>
      <p>Launched BILLNEST platform</p>
    </motion.div>

    {/* 2025 */}
    <motion.div className="timeline-year" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
      2025
    </motion.div>
    <motion.div className="timeline-item" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
      <h3>Global Expansion</h3>
      <p>Expanded operations across India</p>
    </motion.div>

  </motion.div>
</motion.section>

</MediaQuery>

      

      

      
    </div>
  );
};

export default HomePage;

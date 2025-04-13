import React from "react";
import "../pages/AboutUs.css"; // Importing the CSS file
import CountUp from "../components/CountUp"; // Importing CountUp for animations
import "@fontsource/montserrat"; // Importing Montserrat font
import { Link } from "react-router-dom"; // Importing Link for navigation
import Linkedin from "../assets/LinkedInlogo.png"
import Team from "../assets/aboutuspage.png"
import MediaQuery from "react-responsive";

// Importing images correctly
import Rohan from "../assets/rohan.png";
import Mohnish from "../assets/mohnish.jpg";
import Ankit from "../assets/ankit.jpg"; // Correct import for the image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="AboutUs-hero">
        <div className="hero-top">
              <div className="hero-text">
                <MediaQuery query="(min-width: 769px)">
                <h2>Empowering<br/>businesses and<br/>consumers</h2>
                <p> with innovative payment solutions since 2021.</p>
                </MediaQuery>
                <MediaQuery query="(max-width: 768px)">
                <h2>Empowering businesses and consumers</h2>  
                <p> with innovative payment solutions since 2021.</p>
                </MediaQuery>
                </div>

                <div className="hero-image">
                          <img src={Team} alt="Team" />
                     </div>
                   </div>
                        
                   <div className="hero-bottom">
          <p>
            RSK Online Services is a fintech innovator, providing seamless bill payments, recharges, B2B, B2C, and API solutions. Focused on innovation, security, and efficiency, we empower businesses and consumers with cutting-edge technology. With a trusted network and customer-centric approach, we drive the future of digital finance and software solutions.
          </p>
          </div>
        </section>
          
    
  

    {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Our <span>Mission</span></h3>
          <p>To empower businesses and consumers with seamless, innovative software solutions that simplify bill payments, recharges, and day-to-day operations.</p>
        </div>
        <div className="vision">
          <h3>Our <span>Vision</span></h3>
          <p>To be the leading provider of integrated payment, recharge, and software solutions, recognized for delivering exceptional value and creating lasting partnerships..</p>
        </div>
      </section>

       {/* Core Values */}
       <section className="core-values">
      <h2>
        Core <span>Values</span>
      </h2>
      <div className="values-container">
        {[
          { title: "Innovation", description: "Constantly pushing boundaries to create cutting-edge solutions." },
          { title: "Integrity", description: "Maintaining highest standards of honesty and transparency." },
          { title: "Excellence", description: "Striving for the best." },
          { title: "Collaboration", description: "Working together to create impact." },
          { title: "Customer-Centricity", description: "Putting our customers first in everything we do." },
        ].map((value, index) => (
          <div key={index} className={`value-card value-${index}`}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>



      {/* Leadership */}
     {/* Leadership */}
     <section className="leadership">
  <h2>Our <span>Leadership</span></h2>
  <div className="leaders">
    {[
      {
        name: "Rohan Kesharwani",
        position: "Founder & CEO",
        image: Rohan, 
        description: "Visionary leader with a passion for technology and innovation.",
        linkedin: "https://www.linkedin.com/in/rohan-kesharwani"
      },
      {
        name: "Mohnish Chimurkar",
        position: "Chief Operations Officer",
        image: Mohnish, 
        description: "Optimizing operations & efficiency.",
        linkedin: "https://www.linkedin.com/in/mohnish-chimurkar"
      },
      {
        name: "Ankit Kesharwani",
        position: "Chief Financial Officer",
        image: Ankit, 
        description: "Managing finances & growth.",
        linkedin: "https://www.linkedin.com/in/ankit-kesharwani"
      }
    ].map((leader, index) => (
      <div key={index} className="leader-card-container">
        <div className="leader-card">
          <img src={leader.image} alt={leader.name} />
        </div>
        <div className="leader-card-info">
          <div className="leader-header">
            <h4>{leader.name}</h4>
            {leader.linkedin && (
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="linkedin-icon" />
              </a>
            )}
          </div>
          <p>{leader.position}</p>
          <p>{leader.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Impact */}
      <section className="impact">
        <h2>Our <span>Impact</span></h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3><CountUp to={5} duration={3} separator="," />L+</h3>
            <p>B2C Customers</p>
          </div>
          <div className="impact-card">
            <h3><CountUp to={50000} duration={3} separator="," />+</h3>
            <p>B2B Retailer</p>
          </div>
          <div className="impact-card">
            <h3><CountUp to={100} duration={3} separator="," />+</h3>
            <p>API Users</p>
          </div>
          <div className="impact-card">
            <h3><CountUp to={50000} duration={3} separator="," />+</h3>
            <p>Daily Transaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

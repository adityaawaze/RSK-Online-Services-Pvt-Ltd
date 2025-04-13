import React from "react";
import "../pages/ContactUs.css"; // Importing the CSS file
import ContactStepperForm from "../components/ContactStepperForm";



const ContactForm = () => {
  return (
    <div>
      {/* Main Heading Above the Container */}
      <h1 className="main-heading">Get in Touch with Us</h1>


      <div className="container">
        <div className="form-container">
          {/* Left Column - Form */}
          <div className="left-column">
            <ContactStepperForm />
            
          </div>

          {/* Right Column - Contact Info */}
          <div className="right-column">
            <h2 className="heading">Contact Us</h2>

            {/* Location & Map */}
            <div className="info-box">
              <h3 className="sub-heading">649 Harikrupa Appartment Old bagadganj nagpur 440008</h3>
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1981440470504!2d79.12164871125952!3d21.144511480452767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c79483a5ffeb%3A0xdf943dee44802b7!2sRSK%20ONLINE%20SERVICES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sus!4v1744278789069!5m2!1sen!2sus"
  width="100%"
  height="full"
  style={{ border: "0" }  } // ✅ Fixed here
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>

            {/* Address */}
           

           

            {/* Email */}
            <div className="info-box">
              <span>📧 admin@rskonlineservices.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

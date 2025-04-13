import React, { useState, useEffect } from "react";
import "./Careers.css";

function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    linkedin: "",
    resume: null,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "resume" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      linkedin: "",
      resume: null,
    });

    document.getElementById("resumeInput").value = "";
  };

  return (
    <div className="career-container">
      <h2 className="career-heading">Ready to Grow? Apply Now!</h2>
      <form className="career-form" onSubmit={handleSubmit}>
        <div className="career-form-row">
          <div className="career-input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="career-input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="career-form-row">
          <div className="career-input-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              required
            />
          </div>
          <div className="career-input-group">
            <label>Experience Level</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Fresher / 2 years / etc."
              required
            />
          </div>
        </div>
        <div className="career-form-row">
          <div className="career-input-group">
            <label>LinkedIn URL</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          <div className="career-input-group">
            <label>Upload CV/Resume</label>
            <input
              type="file"
              name="resume"
              id="resumeInput"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="career-submit-container">
          <button type="submit">Submit</button>
        </div>
      </form>

      {showSuccess && (
        <div className="career-popup-success">
          <p>✅ Our team will get back to you soon.</p>
        </div>
      )}
    </div>
  );
}

export default Careers;

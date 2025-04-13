import React, { useState } from 'react';
import './ContactStepperForm.css';

export default function ContactStepperForm() {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState('');
  const [formData, setFormData] = useState({});

  const handleInterestChange = (value) => setInterest(value);
  const handleChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleNext = () => {
    if (interest) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        {step === 1 && (
          <div className="step-1">
            <h3 className="form-title">You are Interested in ...</h3>
            <div className="button-group">
              <button
                onClick={() => handleInterestChange('services')}
                className={`select-button ${
                  interest === 'services' ? 'active' : ''
                }`}
              >
                Service
              </button>
              <button
                onClick={() => handleInterestChange('investor')}
                className={`select-button ${
                  interest === 'investor' ? 'active' : ''
                }`}
              >
                Investor
              </button>
            </div>
            <button
              onClick={handleNext}
              disabled={!interest}
              className={`next-button ${interest ? 'active' : 'disabled'}`}
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="form-fields">
            <h3 className="form-title">{interest} </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            {interest === 'investor' && (
              <>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="investmentInterest"
                  placeholder="What kind of investment are you interested in?"
                  onChange={handleChange}
                  required
                ></textarea>
              </>
            )}

            {interest === 'services' && (
              <>
                <input
                  type="text"
                  name="service"
                  placeholder="Type of Service Required"
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Describe your requirements"
                  onChange={handleChange}
                  required
                ></textarea>
              </>
            )}

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

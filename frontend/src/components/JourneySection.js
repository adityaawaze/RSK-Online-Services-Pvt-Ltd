import React from "react";
import "./JourneySection.css";

const journeyData = [
  { year: "2021", title: "Founded", description: "Established RSK Online Services" },
  { year: "2023", title: "B2C Launch", description: "Launched WeSaveMore platform" },
  { year: "2024", title: "API Solutions", description: "Launched rkrechargeapi.in" },
  { year: "2024", title: "B2B Solutions", description: "Launched BILLNEST platform" },
  { year: "2025", title: "Global Expansion", description: "Expanded operations across India" },
];

const JourneySection = () => {
  return (
    <div className="journey-container">
      <h2 className="journey-title">Our Journey</h2>
      <div className="timeline">
        {journeyData.map((event, index) => (
          <div key={index}className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <span className="year">{event.year}</span>
            <div className="event-box">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneySection;

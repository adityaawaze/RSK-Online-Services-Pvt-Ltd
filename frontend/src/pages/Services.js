import React, { useEffect } from "react";
import "./Services.css";
import MediaQuery from "react-responsive";
import { useLocation } from "react-router-dom";

const ServiceCard = ({ title, description, features, image, id }) => {
  return (
    <div
      className="service-card"
      id={id}
      style={{ scrollMarginTop: "120px" }} // Adjust if your navbar height is different
    >
      <div className="card-content">
        {/* Left side: Text */}
        <div className="card-text">
          <h2>
            {title} <span className="highlight">Platform</span>
          </h2>
          <p>{description}</p>

          <MediaQuery query="(max-width: 480px)">
            <div className="card-image">
              <img src={image} alt={`${title} illustration`} />
            </div>
          </MediaQuery>

          <h3>Features</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>✅ {feature}</li>
            ))}
          </ul>
        </div>

        <MediaQuery query="(min-width: 480px)">
          {/* Right side: Image */}
          <div className="card-image">
            <img src={image} alt={`${title} illustration`} />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

const Services = () => {
  const location = useLocation();

  const servicesData = [
    {
      id: "bill-payment",
      title: "Bill Payment",
      description:
        "Simplify your bill payments with our all-in-one platform, covering utilities, credit cards, subscriptions, and more.",
      features: [
        "Convenience: One platform for all bill payments.",
        "Instant Processing: Real-time confirmations.",
        "Secure Transactions: Multi-layer encryption for data safety.",
        "Broad Payment Options: Credit/debit cards, bank transfers, and wallets.",
      ],
      image: "",
    },
    {
      id: "recharge-services",
      title: "Recharge Services (Mobile, DTH, Data Plans, etc.)",
      description:
        "Fast, hassle-free recharges for mobile, DTH, and data plans—anytime, anywhere.",
      features: [
        "Multi-Service Recharge: One-stop for all your recharges.",
        "Quick & Easy: Instant top-ups with minimal steps.",
        "Bulk Recharges: Simplified recharge management for businesses.",
        "24/7 Availability: Recharge anytime, anywhere.",
      ],
      image: "/images/mobile-recharge.png",
    },
    {
      id: "custom-software",
      title: "Custom Software Solutions",
      description:
        "Tailored software development to meet your business needs, from startups to enterprise.",
      features: [
        "Personalized Solutions: Built to solve your unique challenges.",
        "Scalable & Future-Ready: Grows as your business expands.",
        "Cross-Platform Compatibility: Accessible on web, mobile, and desktop.",
        "Cutting-Edge Technology: Secure, high-performance software.",
      ],
      image: "/images/api-solutions.png",
    },
    {
      id: "payment-gateway",
      title: "Payment Gateway Solutions",
      description:
        "Secure, reliable payment processing for businesses of all sizes.",
      features: [
        "Secure Transactions: Advanced encryption for data protection.",
        "Multiple Payment Methods: Supports cards, net banking, wallets, and UPI.",
        "Easy Integration: Plug into your existing system with minimal effort.",
        "Real-Time Reporting: Track transactions and insights instantly.",
      ],
      image: "/payment-gateway.png",
    },
    {
      id: "api-integration",
      title: "API Integration Services",
      description:
        "Seamlessly integrate our payment, recharge, and billing solutions into your platform.",
      features: [
        "Smooth Integration: Hassle-free implementation",
        "Customizable APIs: Adapted to fit your business needs.",
        "Real-Time Data Sync: Ensures accurate and updated transactions.",
        "Scalable & Reliable: Grows alongside your business.",
      ],
      image: "/images/b2b-solutions.png",
    },
    {
      id: "retailer-solutions",
      title: "Retailer Solutions (B2B)",
      description:
        "A comprehensive platform for retailers to manage customer bill payments and recharges.",
      features: [
        "All-in-One Dashboard: Monitor transactions effortlessly.",
        "Bulk Transaction Management: Simplifies large-scale operations.",
        "Revenue Growth: Increase earnings with easy payment services.",
        "Enhanced Customer Service: Quick, efficient, and seamless transactions.",
      ],
      image: "/images/b2c-solutions.png",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure to streamline operations and enhance collaboration.",
      features: [
        "Scalable & Flexible: Expand as needed.",
        "Cost-Efficient: Pay for what you use.",
        "Seamless Collaboration: Real-time access and sharing.",
        "Enterprise-Level Security: Secure, encrypted cloud storage.",
      ],
      image: "/images/custom-software.png",
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Insights",
      description:
        "Transform your data into actionable insights for smarter decision-making.",
      features: [
        "In-Depth Analytics: Understand customer trends and transaction patterns.",
        "Custom Dashboards: Monitor key business metrics.",
        "Real-Time Data: Make informed decisions instantly.",
        "Strategic Growth: Optimize marketing and operations using data-driven insights.",
      ],
      image: "/images/api-integration.png",
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  

  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;

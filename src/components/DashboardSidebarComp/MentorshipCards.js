// import React from "react";

// const MentorshipPlans = () => {
//   // Plan data to make the component reusable
//   const plans = [
//     {
//       id: "starter",
//       title: "Starter",
//       icon: "bi-star-fill",
//       sessions: "3 sessions over 3 months",
//       price: "USD $749.50",
//       features: [
//         "Fundamental concepts",
//         "Basic trading strategies",
//         { text: "Market structure", indent: true },
//         { text: "Essential tools", indent: true },
//         "Hands-on exercises",
//       ],
//       buttonText: "Manage My Sessions",
//       buttonIcon: "bi-arrow-right",
//     },
//     {
//       id: "intermediate",
//       title: "Intermediate",
//       icon: "bi-graph-up",
//       sessions: "10 sessions over 6 months",
//       price: "USD $2,450",
//       features: [
//         "Advanced strategies",
//         "Risk management",
//         { text: "Technical analysis", indent: true },
//         { text: "Portfolio optimization", indent: true },
//         "Market psychology",
//       ],
//       buttonText: "Contact Us",
//       buttonIcon: "bi-arrow-right",
//     },
//     {
//       id: "advanced",
//       title: "Advanced",
//       icon: "bi-bar-chart-fill",
//       sessions: "29 sessions over 12 months",
//       price: "USD $7,000",
//       features: [
//         "Complex strategies",
//         "Institutional techniques",
//         { text: "Algorithmic trading", indent: true },
//         { text: "Volatility analysis", indent: true },
//         "Professional mentorship",
//       ],
//       buttonText: "Contact Us",
//       buttonIcon: "bi-arrow-right",
//     },
//   ];

//   return (
//     <div className="mentorship-container">
//       <div className="mentorship-header text-center mb-4">
//         <h2 className="mentorship-title">Choose Your Plan</h2>
//       </div>

//       <div className="row plan-cards-container">
//         {plans.map((plan) => (
//           <div className="col-md-4" key={plan.id}>
//             <div className="plan-card">
//               <div className="plan-icon">
//                 <i className={plan.icon}></i>
//               </div>

//               <h3 className="plan-title">{plan.title}</h3>
//               <p className="plan-sessions">{plan.sessions}</p>

//               <div className="plan-price">{plan.price}</div>

//               <div className="plan-features">
//                 {plan.features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className={`feature-item ${
//                       typeof feature === "object" && feature.indent ? "" : ""
//                     }`}
//                   >
//                     <i className="bi bi-check-circle-fill feature-icon"></i>
//                     <span className="feature-text">
//                       {typeof feature === "object" ? feature.text : feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="plan-action">
//                 <button className="btn action-button mentorhip-btn">
//                   <span>{plan.buttonText}</span>
//                   <i className={`${plan.buttonIcon} button-icon`}></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mentorship-badge">
//         <div className="badge-inner">
//           <div className="badge-icon">
//             <i className="bi bi-shield-fill"></i>
//           </div>
//           <div className="badge-text">EXPERT</div>
//           <div className="badge-subtext">MENTORSHIP</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorshipPlans;

import React from "react";
import { Star, MessageCircle, BarChart3 } from "lucide-react";

// Individual Feature Item Component
const FeatureItem = ({ text }) => (
  <div className="feature-item d-flex align-items-start mb-2">
    <div
      className="feature-check bg-success rounded-circle me-2"
      style={{ width: "8px", height: "8px", marginTop: "6px" }}
    ></div>
    <span>{text}</span>
  </div>
);

// Main PricingCard Component
const PricingCard = ({ type, icon, sessions, duration, price, features }) => {
  // Choose the appropriate icon based on the type
  const renderIcon = () => {
    switch (icon) {
      case "star":
        return <Star className="card-icon mb-2 text-primary" size={24} />;
      case "message":
        return (
          <MessageCircle className="card-icon mb-2 text-success" size={24} />
        );
      case "chart":
        return <BarChart3 className="card-icon mb-2 text-danger" size={24} />;
      default:
        return <Star className="card-icon mb-2" size={24} />;
    }
  };

  return (
    <div className="pricing-card p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-between">
      <div className="card-header text-center mb-3">
        {renderIcon()}
        <h2 className="card-type h5 fw-bold">{type}</h2>
        <p className="card-sessions text-muted">
          {sessions} over {duration}
        </p>
        <h1 className="card-price h3 mt-2">USD ${price}</h1>
      </div>

      <div className="card-features mb-3">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>

      <button className="btn btn-dark w-100">
        {type === "Starter" ? "Manage My Sessions" : "Contact Us"}{" "}
        <span className="ms-2">→</span>
      </button>
    </div>
  );
};

// PricingCards Container Component
const PricingCards = () => {
  const cardsData = [
    {
      type: "Starter",
      icon: "star",
      sessions: "3 sessions",
      duration: "3 months",
      price: "749.50",
      features: [
        "Fundamental concepts",
        "Basic trading strategies",
        "Market structure",
        "Essential tools",
        "Hands-on exercises",
      ],
    },
    {
      type: "Intermediate",
      icon: "message",
      sessions: "10 sessions",
      duration: "6 months",
      price: "2,450",
      features: [
        "Advanced strategies",
        "Risk management",
        "Technical analysis",
        "Portfolio optimization",
        "Market psychology",
      ],
    },
    {
      type: "Advanced",
      icon: "chart",
      sessions: "25 sessions",
      duration: "12 months",
      price: "7,000",
      features: [
        "Complex strategies",
        "Institutional techniques",
        "Algorithmic trading",
        "Volatility analysis",
        "Professional mentorship",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <PricingCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;

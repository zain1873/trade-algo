// import React, { useState } from "react";
// import "../DashboardSidebarComp/styles/mentorship.css";

// const Mentorship = ({ darkMode }) => {
//   const [activeTab, setActiveTab] = useState("sessions");
//   const [activeSubTab, setActiveSubTab] = useState("platinum");

//   // this data is one on on ementorship data  and transfer to platinum program

//   return (
//     <div className="container mt-4">
//       {/* Primary Navigation Tabs */}
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === "sessions" ? "active" : ""}`}
//             onClick={() => setActiveTab("sessions")}
//           >
//             Manage My Sessions
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === "pricing" ? "active" : ""}`}
//             onClick={() => setActiveTab("pricing")}
//           >
//             View All Price Plans
//           </button>
//         </li>
//       </ul>

//       <div className={`tab-content mt-3 ${darkMode ? "dark-mode-tab" : ""}`}>
//         {/* Sessions Tab */}
//         {activeTab === "sessions" && (
//           <div className="tab-pane fade show active">
//             <h5>Sessions available:</h5>
//             <p>
//               <strong>5</strong> Starter | <strong>0</strong> Intermediate |{" "}
//               <strong>0</strong> Advanced | <strong>0</strong> Platinum |{" "}
//               <strong>0</strong> Emerald
//             </p>

//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-12 p-0">
//                   <div className="mentorship-card">
//                     <div className="mentorship-banner">
//                       <h6 className="mentorship-category">
//                         Options Mentorship:
//                       </h6>
//                       <h2 className="mentorship-title">Starter Level</h2>
//                     </div>
//                     <div className="mentorship-content">
//                       <p className="mentorship-description">
//                         The starter level sessions focus on introducing the
//                         fundamental concepts and principles of options trading.
//                         Participants will learn about market structure, basic
//                         trading strategies, and essential tools for success.
//                       </p>
//                       <p className="mentorship-description">
//                         Through hands-on exercises and engaging examples,
//                         newcomers will develop a strong foundation in the world
//                         of options trading, preparing them for more advanced
//                         topics.
//                       </p>
//                       <div className="mentorship-link">
//                         <span>Access the telegram channel here:</span>
//                         <button className="mentorship-btn">
//                           <a className="text-decoration-none" href="https://t.me/+nO3GSU_Jvts5MGE0" target="blank">
//                           Mentorship Telegram Alerts
//                           </a>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Pricing Tab */}
//         {activeTab === "pricing" && (
//           <div className="tab-pane fade show active">
//             <div className="container">
//               <div className="row justify-content-center">
//                 <div className="col-lg-12">
//                   <h3 className="pricing-title">Choose Your Plan:</h3>
//                   <p className="pricing-subtitle">
//                     Options trading pro-led personalized coaching.
//                   </p>
//                 </div>

//                 {/* Starter Plan */}
//                 <div className="col-lg-4 col-md-6 mb-4">
//                   <div className="pricing-card">
//                     <h4 className="pricing-card-title">Starter</h4>
//                     <p className="pricing-card-sessions">
//                       3 sessions over 3 months
//                     </p>
//                     <p className="pricing-card-price">
//                       USD <span>$749.50</span>
//                     </p>
//                     <button className="pricing-btn active theme_btn">Current Plan</button>
//                   </div>
//                 </div>

//                 {/* Intermediate Plan */}
//                 <div className="col-lg-4 col-md-6 mb-4">
//                   <div className="pricing-card">
//                     <h4 className="pricing-card-title">Intermediate</h4>
//                     <p className="pricing-card-sessions">
//                       10 sessions over 6 months
//                     </p>
//                     <p className="pricing-card-price">
//                       USD <span>$2,450</span>
//                     </p>
//                     <button className="pricing-btn theme_btn">
//                       <a href="/contact">Contact Us</a>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Advanced Plan */}
//                 <div className="col-lg-4 col-md-6 mb-4">
//                   <div className="pricing-card">
//                     <h4 className="pricing-card-title">Advanced</h4>
//                     <p className="pricing-card-sessions">
//                       29 sessions over 12 months
//                     </p>
//                     <p className="pricing-card-price">
//                       USD <span>$7,000</span>
//                     </p>
//                     <button className="pricing-btn theme_btn">
//                     <a href="/contact">Contact Us</a>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Mentorship;

import React, { useState } from "react";
import MentorshipPlans from "./MentorshipCards";
import "../DashboardSidebarComp/styles/mentorship.css";

const SessionsComponent = () => {
  const [activeTab, setActiveTab] = useState("mentorship");

  return (
    <div className="sessions-container">
      {/* Top Buttons */}
      <div className="buttons-container">
        <button
          className="btn btn-secondary manage-btn"
          onClick={() => setActiveTab("mentorship")}
        >
          Manage My Sessions
        </button>
        <button
          className="btn btn-outline-light price-btn"
          onClick={() => setActiveTab("pricing")}
        >
          View All Price Plans
        </button>
      </div>

      {/* Sessions Count Panel */}
      <div className="sessions-panel">
        <div className="sessions-header">
          <h5>Sessions available:</h5>
          <div className="sessions-badges">
            <div className="session-type">
              <span className="badge bg-secondary">5</span>
              <span className="session-name">Starter</span>
            </div>
            <div className="session-type">
              <span className="badge bg-dark">0</span>
              <span className="session-name">Intermediate</span>
            </div>
            <div className="session-type">
              <span className="badge bg-dark">0</span>
              <span className="session-name">Advanced</span>
            </div>
            <div className="session-type">
              <span className="badge bg-dark">0</span>
              <span className="session-name">Platinum</span>
            </div>
            <div className="session-type">
              <span className="badge bg-dark">0</span>
              <span className="session-name">Emerald</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mentorship Description */}
      {activeTab === "mentorship" && (
        <div className="mentorship-panel">
          <div className="mentorship-header">
            <div className="icon-container">
              <span className="book-icon">📚</span>
            </div>
            <div className="mentorship-title">
              <p className="text-muted mb-0">Options Mentorship:</p>
              <h3>Starter Level</h3>
            </div>
          </div>
          <hr />
          <div className="mentorship-content">
            <p>
              The starter level sessions focus on introducing the fundamental
              concepts and principles of options trading. Participants will
              learn about market structure, basic trading strategies, and
              essential tools for success.
            </p>
            <p>
              Through hands-on exercises and engaging examples, newcomers will
              develop a strong foundation in the world of options trading,
              preparing them for more advanced topics.
            </p>
            <div className="telegram-access">
              <p>Access the telegram channel here:</p>
              <button className="btn btn-dark telegram-btn">
                <i className="telegram-icon">✈️</i> Mentorship Telegram Alerts
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Plans */}
      {activeTab === "pricing" && <MentorshipPlans />}
    </div>
  );
};

export default SessionsComponent;

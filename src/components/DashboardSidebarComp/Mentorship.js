import React, { useState } from "react";
import "../DashboardSidebarComp/styles/mentorship.css";
import MentorshipPlans from "./MentorshipCards";

const Mentorship = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("sessions");
  const [activeSubTab, setActiveSubTab] = useState("platinum");

  // this data is one on on ementorship data  and transfer to platinum program

  return (
    <div className="container mt-4">
      {/* Primary Navigation Tabs */}
      <ul className="nav nav-tabs tabs-simple">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "sessions" ? "active" : ""}`}
            onClick={() => setActiveTab("sessions")}
          >
            Manage My Sessions
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "pricing" ? "active" : ""}`}
            onClick={() => setActiveTab("pricing")}
          >
            View All Price Plans
          </button>
        </li>
      </ul>

      <div className={`tab-content mt-3 ${darkMode ? "dark-mode-tab" : ""}`}>
        {/* Sessions Tab */}
        {activeTab === "sessions" && (
          <div className="tab-pane fade show active">
            <h5>Sessions available:</h5>
            <p>
              <strong>5</strong> Starter | <strong>0</strong> Intermediate |{" "}
              <strong>0</strong> Advanced | <strong>0</strong> Platinum |{" "}
              <strong>0</strong> Emerald
            </p>

            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-0">
                  <div className="mentorship-card">
                    <div className="mentorship-banner">
                      <h6 className="mentorship-category">
                        Options Mentorship:
                      </h6>
                      <h2 className="mentorship-title">Starter Level</h2>
                    </div>
                    <div className="mentorship-content">
                      <p className="mentorship-description">
                        The starter level sessions focus on introducing the
                        fundamental concepts and principles of options trading.
                        Participants will learn about market structure, basic
                        trading strategies, and essential tools for success.
                      </p>
                      <p className="mentorship-description">
                        Through hands-on exercises and engaging examples,
                        newcomers will develop a strong foundation in the world
                        of options trading, preparing them for more advanced
                        topics.
                      </p>
                      <div className="mentorship-link">
                        <span>Access the telegram channel here:</span>
                        <button className="mentorship-btn">
                          <a className="text-decoration-none" href="https://t.me/+nO3GSU_Jvts5MGE0" target="blank">
                          Mentorship Telegram Alerts
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === "pricing" && (
          <div className="tab-pane fade show active">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <h3 className="pricing-title">Choose Your Plan:</h3>
                  <p className="pricing-subtitle">
                    Options trading pro-led personalized coaching.
                  </p>
                </div>

                {/* Starter Plan */}
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="pricing-card">
                    <h4 className="pricing-card-title">Starter</h4>
                    <p className="pricing-card-sessions">
                      3 sessions over 3 months
                    </p>
                    <p className="pricing-card-price">
                      USD <span>$749.50</span>
                    </p>
                    <button className="pricing-btn active theme_btn">Current Plan</button>
                  </div>
                </div>

                {/* Intermediate Plan */}
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="pricing-card">
                    <h4 className="pricing-card-title">Intermediate</h4>
                    <p className="pricing-card-sessions">
                      10 sessions over 6 months
                    </p>
                    <p className="pricing-card-price">
                      USD <span>$2,450</span>
                    </p>
                    <button className="pricing-btn theme_btn">
                      <a href="/contact">Contact Us</a>
                    </button>
                  </div>
                </div>

                {/* Advanced Plan */}
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="pricing-card">
                    <h4 className="pricing-card-title">Advanced</h4>
                    <p className="pricing-card-sessions">
                      29 sessions over 12 months
                    </p>
                    <p className="pricing-card-price">
                      USD <span>$7,000</span>
                    </p>
                    <button className="pricing-btn theme_btn">
                    <a href="/contact">Contact Us</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <MentorshipPlans/>
    </div>


  );
};

export default Mentorship;

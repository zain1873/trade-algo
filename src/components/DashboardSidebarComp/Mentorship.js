import React, { useState } from "react";
import "../DashboardSidebarComp/styles/mentorship.css";
import MentorshipPlans from "./MentorshipCards";

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
          Contact Us
        </button>
        <button
          className="btn btn-outline-light price-btn"
          onClick={() => setActiveTab("pricing")}
        >
          View All Price Plans
        </button>
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
                <a
                  target="_blank"
                  className="text-decoration-none text-white"
                  href="https://t.me/+nO3GSU_Jvts5MGE0"
                >
                  <i className="telegram-icon">✈</i> Mentorship Telegram Alerts
                </a>
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

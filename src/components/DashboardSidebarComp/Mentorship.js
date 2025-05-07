import React, { useState } from 'react';
import MentorshipPlans from "./MentorshipCards";
import "../DashboardSidebarComp/styles/mentorship.css";




const SessionsComponent = () => {
  const [activeTab, setActiveTab] = useState('mentorship'); 

  return (
    <div className="sessions-container">
      {/* Top Buttons */}
      <div className="buttons-container">
        <button
          className="btn btn-secondary manage-btn"
          onClick={() => setActiveTab('mentorship')}
        >
          Manage My Sessions
        </button>
        <button
          className="btn btn-outline-light price-btn"
          onClick={() => setActiveTab('pricing')}
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
      {activeTab === 'mentorship' && (
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
              The starter level sessions focus on introducing the fundamental concepts and principles of 
              options trading. Participants will learn about market structure, basic trading strategies, 
              and essential tools for success.
            </p>
            <p>
              Through hands-on exercises and engaging examples, newcomers will develop a strong foundation 
              in the world of options trading, preparing them for more advanced topics.
            </p>
            <div className="telegram-access">
              <p>Access the telegram channel here:</p>
              <button className="btn btn-dark telegram-btn">
                <a target='_blank' className='text-decoration-none text-white' href="https://t.me/+nO3GSU_Jvts5MGE0">
                <i className="telegram-icon">✈️</i> Mentorship Telegram Alerts
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Plans */}
      {activeTab === 'pricing' && (
          <MentorshipPlans/>
      )}
    </div>
  );
};

export default SessionsComponent;

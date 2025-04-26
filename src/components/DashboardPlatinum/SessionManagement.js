import React, { useState } from "react";

const SessionManagement = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const sessions = {
    upcoming: [
      {
        id: 1,
        status: "Confirmed",
        title: "Forex Trading Strategy Review",
        host: "Sarah Johnson",
        date: "April 15, 2025",
        time: "10:00 AM EST",
        duration: "45 minutes",
      },
      {
        id: 2,
        status: "Confirmed",
        title: "Options Portfolio Analysis",
        host: "Michael Chen",
        date: "April 22, 2025",
        time: "2:00 PM EST",
        duration: "45 minutes",
      },
    ],
    past: [
      {
        id: 3,
        status: "Completed",
        title: "Market Trend Analysis",
        host: "Emma Wilson",
        date: "April 5, 2025",
        time: "1:00 PM EST",
        duration: "45 minutes",
      },
      {
        id: 4,
        status: "Completed",
        title: "Investment Strategy Review",
        host: "James Brown",
        date: "March 28, 2025",
        time: "11:00 AM EST",
        duration: "60 minutes",
      },
    ],
  };

  return (
    <div className="session-management">
      <div className="container-fluid">
        <div className="tabs-container">
          <div className="nav-tabs">
            <button
              className={`tab-button ${
                activeTab === "upcoming" ? "active" : ""
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Sessions
            </button>
            <button
              className={`tab-button ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}
            >
              Past Sessions
            </button>
          </div>
        </div>

        <div className="tab-content-platinum">
          <div
            className={`tab-pane ${
              activeTab === "upcoming" ? "show active" : ""
            }`}
          >
            {sessions.upcoming.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-header">
                  <div className="session-avatar">
                    <img src="/api/placeholder/50/50" alt="Avatar" />
                  </div>
                  <div className="session-status">{session.status}</div>
                </div>
                <div className="session-title">{session.title}</div>
                <div className="session-host">with {session.host}</div>
                <div className="session-details">
                  <div className="detail-item">
                    <i className="bi bi-calendar"></i> {session.date}
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-clock"></i> {session.time}
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-hourglass"></i> {session.duration}
                  </div>
                </div>
                <div className="session-actions">
                  <button className="btn btn-primary">Join Session</button>
                  <button className="btn btn-outline-secondary">
                    Reschedule
                  </button>
                  <button className="btn btn-link text-danger">
                    Cancel Session
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`tab-pane ${activeTab === "past" ? "show active" : ""}`}
          >
            {sessions.past.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-header">
                  <div className="session-avatar">
                    <img src="/api/placeholder/50/50" alt="Avatar" />
                  </div>
                  <div className="session-status">{session.status}</div>
                </div>
                <div className="session-title">{session.title}</div>
                <div className="session-host">with {session.host}</div>
                <div className="session-details">
                  <div className="detail-item">
                    <i className="bi bi-calendar"></i> {session.date}
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-clock"></i> {session.time}
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-hourglass"></i> {session.duration}
                  </div>
                </div>
                <div className="session-actions">
                  <button className="btn btn-outline-primary">
                    View Notes
                  </button>
                  <button className="btn btn-outline-secondary">
                    Download Recording
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionManagement;

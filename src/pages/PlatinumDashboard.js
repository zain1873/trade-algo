import React, { useState, useRef } from "react";
import "../styles/platinumDashboard.css";
import WeeklyBriefing from "../components/DashboardPlatinum/WeeklyBriefing";
import Leaderboard from "../components/DashboardPlatinum/Leaderboard";
import MarketNews from "../components/DashboardPlatinum/MarketNews";
import Wabinars from "../components/DashboardPlatinum/Wabinars";
import TradingChallenges from "../components/DashboardPlatinum/TradingChallenge";
import ScheduleCall from "../components/DashboardPlatinum/ScheduleCall";
import PortfolioHeatmap from "../components/DashboardPlatinum/PortfolioHeatmap";
import FeatureVoting from "../components/DashboardPlatinum/FeatureVoting";
import PlatinumMembershipNFT from "../components/DashboardPlatinum/MembershipNft";
import JournalPage from "../components/DashboardPlatinum/JournalPage";

const PlatinumDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeDashboardTab, setActiveDashboardTab] = useState("market");
  const collapseRef = useRef(null);

  const handleNavClick = (key) => {
    setActiveSection(key);
    if (collapseRef.current?.classList.contains("show")) {
      collapseRef.current.classList.remove("show");
    }
  };

  return (
    <div className="platinum-dashboard">
      {/* Top Navbar */}
      <nav className="navbar navbar-platinum navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            PLATINUMTRADE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "dashboard" ? "active" : ""}`}
                  href="#"
                  onClick={() => handleNavClick("dashboard")}
                >
                  Dashboard
                </a>
              </li>
              {["webinars", "challenges", "portfolio-heatmap", "news"].map((key) => (
                <li className="nav-item" key={key}>
                  <a
                    className={`nav-link ${activeSection === key ? "active" : ""}`}
                    href="#"
                    onClick={() => handleNavClick(key)}
                  >
                    {key.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </a>
                </li>
              ))}
              <ul className="navbar-nav">
                <li className="nav-item dropdown premium-dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fw-bold"
                    href="#"
                    id="premiumDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Premium Features
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="premiumDropdown">
                    <li className="dropdown-header">Platinum Exclusives</li>
                    {["briefing", "webinars", "news", "leaderboard", "challenges", "schedule-call", "feature-voting", "membership-nft", "journal-page"].map(key => (
                      <li key={key}>
                        <a className="dropdown-item" href="#" onClick={() => handleNavClick(key)}>
                          {key.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </ul>
            <div className="d-flex align-items-center position-relative profile-wrapper">
              <div className="position-relative me-3">
                <i className="bi bi-bell fs-5 text-light"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">3</span>
              </div>
              <div className="position-relative me-3">
                <i className="bi bi-chat fs-5 text-light"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">5</span>
              </div>
              <div className="position-relative profile-wrapper">
                <div className="profile-avatar" id="profileAvatar" onClick={() => {
                  const dropdown = document.querySelector(".profile-dropdown");
                  dropdown.classList.toggle("show");
                }}>
                  <span>P</span>
                </div>
                <div className="profile-dropdown">
                  <a href="#" className="dropdown-item">Edit Profile</a>
                  <a href="#" className="dropdown-item text-danger">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid p-4">
        {activeSection === "dashboard" && (
          <>
            <div className="row header-section mb-4">
              <div className="col-md-8">
                <h1>Good Afternoon, Platinum Member</h1>
                <p className="text-white">
                  Welcome to your exclusive platinum dashboard. Access premium
                  features, connect with analysts, and elevate your trading experience.
                </p>
                <div className="d-flex flex-wrap align-items-center mt-3">
                  <span className="badge platinum-badge me-3 mb-2">Platinum Status</span>
                  <div className="call-credits me-3 mb-2">
                    <i className="bi bi-clock me-1"></i>
                    <span>Call Credits: 10 hours remaining</span>
                  </div>
                  <a href="#" className="benefits-link mb-2">View Benefits <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-end align-items-start">
                <div className="large-profile-avatar"><span>P</span></div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="tabs-container mb-4">
              <div className="nav-tabs">
                <button className={`tab-button ${activeDashboardTab === "market" ? "active" : ""}`} onClick={() => setActiveDashboardTab("market")}>Dashboard</button>
                <button className={`tab-button ${activeDashboardTab === "schedule-Calls" ? "active" : ""}`} onClick={() => setActiveDashboardTab("schedule-Calls")}>Schedule Calls</button>
                <button className={`tab-button ${activeDashboardTab === "webinars" ? "active" : ""}`} onClick={() => setActiveDashboardTab("webinars")}>Webinars</button>
                <button className={`tab-button ${activeDashboardTab === "leaderboard" ? "active" : ""}`} onClick={() => setActiveDashboardTab("leaderboard")}>Leaderboard</button>
              </div>
            </div>

            {/* Dashboard Tab Content */}
            {activeDashboardTab === "market" && (
              <div className="row">
                <div className="col-lg-7 mb-4">
                  <div className="card insight-card platinum-card">
                    <div className="card-body">
                      <h5 className="card-title mb-4 text-start">Market Insights</h5>
                      <div className="chart-placeholder mb-4">
                        <svg viewBox="0 0 600 120" className="w-100">
                          <path d="M0,60 C100,40 200,80 300,60 C400,40 500,70 600,60" fill="none" stroke="#2a3042" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                      </div>
                      <div className="market-data">
                        {[{"pair": "EUR/USD", "bid": "1.0850", "ask": "1.0852", "trend": "up" },{"pair": "GBP/USD", "bid": "1.2450", "ask": "1.2452", "trend": "down" },{"pair": "USD/JPY", "bid": "135.50", "ask": "135.52", "trend": "up" },{"pair": "BTC/USD", "bid": "63,245.00", "ask": "63,250.00", "trend": "up" }].map(({ pair, bid, ask, trend }) => (
                          <div className="market-row" key={pair}>
                            <div className="market-cell currency">
                              <i className={`bi bi-arrow-${trend === "up" ? "up" : "down"}-right ${trend === "up" ? "text-success" : "text-danger"} me-2`}></i>
                              <span>{pair}</span>
                            </div>
                            <div className="market-cell">
                              <div className="price-label">Bid</div>
                              <div className="price-value">{bid}</div>
                            </div>
                            <div className="market-cell">
                              <div className="price-label">Ask</div>
                              <div className="price-value">{ask}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb-4">
                  <div className="card chat-card">
                    <div className="card-body">
                      <h5 className="card-title mb-4">Chat with Analysts</h5>
                      <div className="chat-container">
                        <div className="chat-message">
                          <div className="analyst-avatar"><span></span></div>
                          <div className="message-bubble">
                            <div className="message-text text-white">Hello! How can I help with your trading strategy today?</div>
                            <div className="message-time">10:30 AM</div>
                          </div>
                        </div>
                        <div className="chat-input-container">
                          <input type="text" className="form-control" placeholder="Type your message..." />
                          <button className="send-button"><i className="bi bi-send-fill"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeDashboardTab === "schedule-Calls" && <ScheduleCall/>}
            {activeDashboardTab === "webinars" && <Wabinars />}
            {activeDashboardTab === "leaderboard" && <Leaderboard />}
            </>
        )}

        {/* Other Sections */}
        {activeSection === "briefing" && <WeeklyBriefing />}
        {activeSection === "challenges" && <TradingChallenges />}
        {activeSection === "leaderboard" && <Leaderboard />}
        {activeSection === "news" && <MarketNews />}
        {activeSection === "schedule-call" && <ScheduleCall />}
        {activeSection === "webinars" && <Wabinars />}
        {activeSection === "portfolio-heatmap" && <PortfolioHeatmap />}
        {activeSection === "feature-voting" && <FeatureVoting />}
        {activeSection === "membership-nft" && <PlatinumMembershipNFT />}
        {activeSection === "journal-page" && <JournalPage />}
      </div>
    </div>
  );
};

export default PlatinumDashboard;

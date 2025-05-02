import React from 'react';
import "../DashboardSidebarComp/styles/DashboardData.css";
import HistoricalDataFlow from './HistoricalDataFlow';
import ProgressBar from './ProgressBar';
import LiveTrainingSession from './liveTrainingSession';
import backgroundVideo from "../../assets/images/bannergreen.mp4";

function DashboardData({ darkMode }) {
  return (
    <div className="container p-0">
      <div className="dashboard-header">
        {/* Background Video */}
        <video
          className="dashboard-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <div className="header-content">
          <div className="header-left">
            <h2>
              Hello, <span className="highlight">ValourWealth</span>
            </h2>
            <p>
              Here are the top stocks handpicked by our AI from over 10,000
              tickers in the <span className="">Stock Exchange</span>
            </p>
            <p>Choose from the available styles of trading that will suit your needs</p>
          </div>
          <div className="header-right">
            <button className="date-btn">Date: February 24th, 2025</button>
          </div>
        </div>
      </div>

      <LiveTrainingSession />
      <ProgressBar />
      <HistoricalDataFlow darkMode={darkMode} />
    </div>
  );
}

export default DashboardData;

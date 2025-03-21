import React, { useState } from 'react';
import "../DashboardSidebarComp/styles/live-training-session.css";
import brianImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";
import ericImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";

function LiveTrainingSession() {
  const [isLocked, setIsLocked] = useState(true); // Lock state

  return (
    <section className="live-trading-sessions">
      <div className="container">
        <div className="row">
          <div className="sec_heading">
            <h2 className="live-session-title">Live Trading Sessions</h2>
          </div>

          <div className="col-lg-6">
            <div className={`session-card ${isLocked ? "locked" : ""}`}>
              <img src={brianImg} alt="Jack" className="session-img" />
              <div className="session-content">
                <h5 className="session-title">Live Trade Sessions</h5>
                <p className="session-host">By Jack</p>
                <p className="session-time">10:30am - 11:30am EST • Mon - Fri</p>
              </div>
              {isLocked && <div className="lock-icon">🔒</div>}
            </div>
          </div>

          <div className="col-lg-6">
            <div className={`session-card ${isLocked ? "locked" : ""}`}>
              <img src={ericImg} alt="IAN image" className="session-img" />
              <div className="session-content">
                <h5 className="session-title">Daily Livestreams</h5>
                <p className="session-host">By IAN</p>
                <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
              </div>
              {isLocked && <div className="lock-icon">🔒</div>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LiveTrainingSession;

import React from 'react';
import "../DashboardSidebarComp/styles/live-training-session.css";
import brianImg from "../DashboardSidebarComp/images/live_stream.png";
import ericImg from "../DashboardSidebarComp/images/live_stream.png";

function LiveTrainingSession() {
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className='sec_heading'>
          <h2 className='live-session-title'>Live Trading Sessions</h2>
        </div>

        <div className="col-lg-6">
          <div className="session-card">
            <img src={brianImg} alt="Jack" className="session-img" />
            <div className="session-content">
              <h5 className="session-title">Live Trade Sessions</h5>
              <p className="session-host">By Jack</p>
              <p className="session-time">10:30am - 11:30am EST • Mon - Fri</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="session-card">
            <img src={ericImg} alt="Eric Armenteros" className="session-img" />
            <div className="session-content">
              <h5 className="session-title">Daily Livestreams</h5>
              <p className="session-host">By Eric Armenteros</p>
              <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
}

export default LiveTrainingSession;




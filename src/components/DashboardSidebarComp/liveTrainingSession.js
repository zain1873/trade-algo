import React, { useState } from 'react';
import "../DashboardSidebarComp/styles/live-training-session.css";
import brianImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";
import ericImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";

function LiveTrainingSession() {
  const [isLocked, setIsLocked] = useState(true); 

  return (
    <section className="live-trading-sessions pt-0">
      <div className="container">
        <div className="row">
          <div className="sec_heading">
            <h2 className="live-session-title">Live Trading Sessions</h2>
          </div>

          <div className="col-lg-6">
          <a
            href="https://us06web.zoom.us/rec/play/cif9AgHIo2NnsojBTn9AZBNJgrSCXHErA_lsI9sFfOPBOI7XoRgtmzlg7HkmpiXlN26ukeFXZPRdixWM.Jo8AooXwpX0XD0IG?accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FMlHcAiJmuy8EI9EjBAVW2TkelLlI-l51pbR_k5rShrAF4evlRWkzWHDbjPSysCSp.-frkC3th8JO3N2dT"
            target="_blank"
            rel="noopener noreferrer"
            className="session-link"
          >
            <div className={`session-card ${isLocked ? "locked" : ""}`}>
              <img src={brianImg} alt="Jack" className="session-img" />
              <div className="session-content">
                <h5 className="session-title">Live Trade Sessions</h5>
                <p className="session-host">By Jack</p>
                <p className="session-time">10:30am - 11:30am EST • Mon - Fri</p>
              </div>
              {/* {isLocked && <div className="lock-icon">🔒</div>} */}
            </div>
          </a>
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

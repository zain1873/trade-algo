import React from "react";
import "./styles/liveSessions.css";  
import stream_img from "./images/thubnail_stream.png"; // Import your uploaded image

const sessions = [
  { date: "Wed, Feb 12, 2025 10:54 PM", duration: "52m" },
  { date: "Wed, Feb 5, 2025 10:52 PM", duration: "55m" },
  { date: "Wed, Jan 29, 2025 10:54 PM", duration: "55m" },
  { date: "Wed, Jan 22, 2025 9:30 PM", duration: "48m" },
  { date: "Wed, Jan 15, 2025 8:20 PM", duration: "50m" },
  { date: "Wed, Jan 8, 2025 7:10 PM", duration: "53m" },
];

const LiveSessions = () => {
  return (
    <div className="container mt-4">
      <h4 className="section-title mb-3">Previous Streams</h4>
      <div className="row">
        {sessions.map((session, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card stream_cards shadow-sm">
              <img src={stream_img} alt="Live Session" className="card-img-top" />
              <div className="card-body">
                <p className="session-date mb-1">{session.date}</p>
                <p className="session-duration">{session.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveSessions;

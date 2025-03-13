import React from "react";
import "./styles/liveSessions.css";  
import stream_img from "./images/thubnail_stream.png"; // Your image
import { Link } from "react-router-dom";


const LiveSessions = () => {
  return (
    <div className="container mt-4">
      <h4 className="section-title mb-3">Courses</h4>
      <div className="row">

        {/* Single Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card stream_cards shadow-sm">
            <img src={stream_img} alt="Live Session" className="card-img-top" />
            <div className="course-card">
              <h4 className="course-title">
                The Complete FOREX Scalping Trading Course
              </h4>
              <p className="course-desc">
                What you'll learn Introduction to Forex Scalping Trading Which
                timeframe's we use Scalping Trading in the forex market. You’re
                going to learn my favorite...
              </p>
              <p className="session-date mb-1">3/9/2025</p>
              <Link to="/course-detail" className="theme_btn">View Details</Link>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveSessions;

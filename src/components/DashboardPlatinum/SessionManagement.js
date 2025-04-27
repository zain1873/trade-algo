// import React, { useState } from "react";

// const SessionManagement = () => {
//   const [activeTab, setActiveTab] = useState("upcoming");

//   const sessions = {
//     upcoming: [
//       {
//         id: 1,
//         status: "Confirmed",
//         title: "Forex Trading Strategy Review",
//         host: "Sarah Johnson",
//         date: "April 15, 2025",
//         time: "10:00 AM EST",
//         duration: "45 minutes",
//       },
//       {
//         id: 2,
//         status: "Confirmed",
//         title: "Options Portfolio Analysis",
//         host: "Michael Chen",
//         date: "April 22, 2025",
//         time: "2:00 PM EST",
//         duration: "45 minutes",
//       },
//     ],
//     past: [
//       {
//         id: 3,
//         status: "Completed",
//         title: "Market Trend Analysis",
//         host: "Emma Wilson",
//         date: "April 5, 2025",
//         time: "1:00 PM EST",
//         duration: "45 minutes",
//       },
//       {
//         id: 4,
//         status: "Completed",
//         title: "Investment Strategy Review",
//         host: "James Brown",
//         date: "March 28, 2025",
//         time: "11:00 AM EST",
//         duration: "60 minutes",
//       },
//     ],
//   };

//   return (
//     <div className="session-management">
//       <div className="container-fluid">
//         <div className="tabs-container">
//           <div className="nav-tabs">
//             <button
//               className={`tab-button ${
//                 activeTab === "upcoming" ? "active" : ""
//               }`}
//               onClick={() => setActiveTab("upcoming")}
//             >
//               Upcoming Sessions
//             </button>
//             <button
//               className={`tab-button ${activeTab === "past" ? "active" : ""}`}
//               onClick={() => setActiveTab("past")}
//             >
//               Past Sessions
//             </button>
//           </div>
//         </div>

//         <div className="tab-content-platinum">
//           <div
//             className={`tab-pane ${
//               activeTab === "upcoming" ? "show active" : ""
//             }`}
//           >
//             {sessions.upcoming.map((session) => (
//               <div key={session.id} className="psession-card">
//                 <div className="session-header">
//                   <div className="session-avatar">
//                     <img src="/api/placeholder/50/50" alt="Avatar" />
//                   </div>
//                   <div className="session-status">{session.status}</div>
//                 </div>
//                 <div className="session-title">{session.title}</div>
//                 <div className="session-host">with {session.host}</div>
//                 <div className="session-details">
//                   <div className="detail-item">
//                     <i className="bi bi-calendar"></i> {session.date}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-clock"></i> {session.time}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-hourglass"></i> {session.duration}
//                   </div>
//                 </div>
//                 <div className="session-actions">
//                   <button className="btn btn-primary">Join Session</button>
//                   <button className="btn btn-outline-secondary">
//                     Reschedule
//                   </button>
//                   <button className="btn btn-link text-danger">
//                     Cancel Session
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className={`tab-pane ${activeTab === "past" ? "show active" : ""}`}
//           >
//             {sessions.past.map((session) => (
//               <div key={session.id} className="psession-card">
//                 <div className="session-header">
//                   <div className="session-avatar">
//                     <img src="/api/placeholder/50/50" alt="Avatar" />
//                   </div>
//                   <div className="session-status">{session.status}</div>
//                 </div>
//                 <div className="session-title">{session.title}</div>
//                 <div className="session-host">with {session.host}</div>
//                 <div className="session-details">
//                   <div className="detail-item">
//                     <i className="bi bi-calendar"></i> {session.date}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-clock"></i> {session.time}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-hourglass"></i> {session.duration}
//                   </div>
//                 </div>
//                 <div className="session-actions">
//                   <button className="btn btn-outline-primary">
//                     View Notes
//                   </button>
//                   <button className="btn btn-outline-secondary">
//                     Download Recording
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SessionManagement;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SessionManagement = () => {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [upcomingSessions, setUpcomingSessions] = useState([]);
//   const [pastSessions, setPastSessions] = useState([]);
//   const accessToken = localStorage.getItem("accessToken");
//   const API_URL = process.env.REACT_APP_API_URL;

//   const fetchSessions = async () => {
//     try {
//       const resUpcoming = await axios.get(`${API_URL}api/sessions/upcoming/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       const resPast = await axios.get(`${API_URL}api/sessions/past/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       setUpcomingSessions(resUpcoming.data);
//       setPastSessions(resPast.data);
//     } catch (error) {
//       console.error("Error fetching sessions:", error);
//     }
//   };

//   useEffect(() => {
//     fetchSessions();
//   }, []);

//   const handleCancel = async (id) => {
//     try {
//       await axios.patch(
//         `${API_URL}api/sessions/${id}/cancel/`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );
//       alert("Session Cancelled Successfully");
//       fetchSessions();
//     } catch (error) {
//       console.error("Error cancelling session:", error);
//     }
//   };

//   const handleJoin = (session) => {
//     // If you have zoom/google link saved in recording_link
//     if (session.recording_link) {
//       window.open(session.recording_link, "_blank");
//     } else {
//       alert("Session link not available.");
//     }
//   };

//   return (
//     <div className="session-management">
//       <div className="container-fluid">
//         <div className="tabs-container">
//           <div className="nav-tabs">
//             <button
//               className={`tab-button ${
//                 activeTab === "upcoming" ? "active" : ""
//               }`}
//               onClick={() => setActiveTab("upcoming")}
//             >
//               Upcoming Sessions
//             </button>
//             <button
//               className={`tab-button ${activeTab === "past" ? "active" : ""}`}
//               onClick={() => setActiveTab("past")}
//             >
//               Past Sessions
//             </button>
//           </div>
//         </div>

//         <div className="tab-content-platinum">
//           {/* UPCOMING */}
//           <div
//             className={`tab-pane ${
//               activeTab === "upcoming" ? "show active" : ""
//             }`}
//           >
//             {upcomingSessions.map((session) => (
//               <div key={session.id} className="psession-card">
//                 <div className="session-header">
//                   <div className="session-avatar">
//                     <img src="/api/placeholder/50/50" alt="Avatar" />
//                   </div>
//                   <div className="session-status">{session.status}</div>
//                 </div>
//                 <div className="session-title">
//                   {session.title || "1-on-1 Session"}
//                 </div>
//                 <div className="session-host">with {session.analyst_name}</div>
//                 <div className="session-details">
//                   <div className="detail-item">
//                     <i className="bi bi-calendar"></i> {session.date}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-clock"></i> {session.time_slot}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-hourglass"></i> 1 Hour
//                   </div>
//                 </div>
//                 <div className="session-actions">
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleJoin(session)}
//                   >
//                     Join Session
//                   </button>
//                   {/* You can add reschedule logic if needed */}
//                   <button
//                     className="btn btn-link text-danger"
//                     onClick={() => handleCancel(session.id)}
//                   >
//                     Cancel Session
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* PAST */}
//           <div
//             className={`tab-pane ${activeTab === "past" ? "show active" : ""}`}
//           >
//             {pastSessions.map((session) => (
//               <div key={session.id} className="psession-card">
//                 <div className="session-header">
//                   <div className="session-avatar">
//                     <img src="/api/placeholder/50/50" alt="Avatar" />
//                   </div>
//                   <div className="session-status">{session.status}</div>
//                 </div>
//                 <div className="session-title">
//                   {session.title || "1-on-1 Session"}
//                 </div>
//                 <div className="session-host">with {session.analyst_name}</div>
//                 <div className="session-details">
//                   <div className="detail-item">
//                     <i className="bi bi-calendar"></i> {session.date}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-clock"></i> {session.time_slot}
//                   </div>
//                   <div className="detail-item">
//                     <i className="bi bi-hourglass"></i> 1 Hour
//                   </div>
//                 </div>
//                 <div className="session-actions">
//                   {session.notes_pdf && (
//                     <a
//                       href={session.notes_pdf}
//                       className="btn btn-outline-primary"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View Notes
//                     </a>
//                   )}
//                   {session.recording_link && (
//                     <a
//                       href={session.recording_link}
//                       className="btn btn-outline-secondary"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Download Recording
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SessionManagement;

import React, { useState, useEffect } from "react";
import axios from "axios";

const SessionManagement = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [pastSessions, setPastSessions] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchSessions = async () => {
    try {
      const resUpcoming = await axios.get(`${API_URL}api/sessions/upcoming/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const resPast = await axios.get(`${API_URL}api/sessions/past/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setUpcomingSessions(resUpcoming.data);
      setPastSessions(resPast.data);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.patch(
        `${API_URL}api/sessions/${id}/cancel/`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      alert("Session Cancelled Successfully");
      fetchSessions(); // Refresh sessions after cancel
    } catch (error) {
      console.error("Error cancelling session:", error);
    }
  };

  const handleJoin = (session) => {
    if (session.recording_link) {
      window.open(session.recording_link, "_blank");
    } else {
      alert("Session link not available yet.");
    }
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

        <div className="tab-content-platinum mt-4">
          {/* Upcoming Sessions */}
          {activeTab === "upcoming" && (
            <div className="tab-pane show active">
              {upcomingSessions.length === 0 ? (
                <p>No upcoming sessions found.</p>
              ) : (
                upcomingSessions.map((session) => (
                  <div key={session.id} className="psession-card mb-4">
                    <div className="session-header">
                      <div className="session-avatar">
                        <img src="/api/placeholder/50/50" alt="Avatar" />
                      </div>
                      <div className="session-status">{session.status}</div>
                    </div>
                    <div className="session-title">1-on-1 Session</div>
                    <div className="session-host">
                      with {session.analyst_name}
                    </div>
                    <div className="session-details">
                      <div className="detail-item">
                        <i className="bi bi-calendar"></i> {session.date}
                      </div>
                      <div className="detail-item">
                        <i className="bi bi-clock"></i> {session.time_slot}
                      </div>
                      <div className="detail-item">
                        <i className="bi bi-hourglass"></i> 1 Hour
                      </div>
                    </div>
                    <div className="session-actions">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleJoin(session)}
                      >
                        Join Session
                      </button>
                      <button
                        className="btn btn-link text-danger"
                        onClick={() => handleCancel(session.id)}
                      >
                        Cancel Session
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Past Sessions */}
          {activeTab === "past" && (
            <div className="tab-pane show active">
              {pastSessions.length === 0 ? (
                <p>No past sessions found.</p>
              ) : (
                pastSessions.map((session) => (
                  <div key={session.id} className="psession-card mb-4">
                    <div className="session-header">
                      <div className="session-avatar">
                        <img src="/api/placeholder/50/50" alt="Avatar" />
                      </div>
                      <div className="session-status">{session.status}</div>
                    </div>
                    <div className="session-title">1-on-1 Session</div>
                    <div className="session-host">
                      with {session.analyst_name}
                    </div>
                    <div className="session-details">
                      <div className="detail-item">
                        <i className="bi bi-calendar"></i> {session.date}
                      </div>
                      <div className="detail-item">
                        <i className="bi bi-clock"></i> {session.time_slot}
                      </div>
                      <div className="detail-item">
                        <i className="bi bi-hourglass"></i> 1 Hour
                      </div>
                    </div>
                    <div className="session-actions">
                      {session.notes_pdf && (
                        <a
                          href={session.notes_pdf}
                          className="btn btn-outline-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Notes
                        </a>
                      )}
                      {session.recording_link && (
                        <a
                          href={session.recording_link}
                          className="btn btn-outline-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download Recording
                        </a>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionManagement;

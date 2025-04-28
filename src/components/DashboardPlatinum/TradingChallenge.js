// import React, { useState } from 'react';

// const TradingChallenges = () => {
//   const [activeTab, setActiveTab] = useState('Active Challenges');

//   // Challenge data categorized
//   const activeChallenges = [
//     {
//       id: 1,
//       title: 'April Performance Challenge',
//       description: 'Achieve the highest percentage return in your portfolio during the month of April.',
//       duration: 'April 1, 2025 - April 30, 2025',
//       timeRemaining: '18 days',
//       participants: '78 members',
//       progress: 40,
//       prize: '3 Months Free Platinum Membership',
//       leaderboard: [
//         { rank: 1, name: 'Alex T.', avatar: '', performance: '+18.7%' },
//         { rank: 2, name: 'Maria R.', avatar: '', performance: '+15.2%' },
//         { rank: 3, name: 'James W.', avatar: '', performance: '+12.9%' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Options Trading Sprint',
//       description: 'Two-week challenge focused on options trading strategies with defined risk parameters. Compete to achieve the highest ROI with a simulated $10,000 account.',
//       duration: 'April 10, 2025 - April 24, 2025',
//       timeRemaining: '12 days',
//       participants: '42 members',
//       progress: 15,
//       prize: 'Exclusive Strategy Session with Options Expert',
//       leaderboard: [
//         { rank: 1, name: 'Sophia C.', avatar: '', performance: '+24.3%' },
//         { rank: 2, name: 'David K.', avatar: '', performance: '+19.8%' },
//         { rank: 3, name: 'Emma J.', avatar: '', performance: '+16.5%' }
//       ]
//     }
//   ];

//   const upcomingChallenges = [
//     {
//       id: 3,
//       title: 'May Swing Trading Challenge',
//       description: 'Prepare for a month-long challenge focused on swing trading techniques.',
//       duration: 'May 1, 2025 - May 31, 2025',
//       timeRemaining: 'Starts in 14 days',
//       participants: 'Registration Open',
//       progress: 0,
//       prize: 'Live Session with Senior Analyst',
//       leaderboard: []
//     }
//   ];

//   const pastChallenges = [
//     {
//       id: 4,
//       title: 'March Momentum Challenge',
//       description: 'Compete for the highest return from short-term momentum trades during March.',
//       duration: 'March 1, 2025 - March 31, 2025',
//       timeRemaining: 'Completed',
//       participants: '90 members',
//       progress: 100,
//       prize: '1 Month Platinum + Feature in Newsletter',
//       leaderboard: [
//         { rank: 1, name: 'Daniel Z.', avatar: '', performance: '+22.5%' },
//         { rank: 2, name: 'Linda B.', avatar: '', performance: '+19.1%' },
//         { rank: 3, name: 'Chris M.', avatar: '', performance: '+17.3%' }
//       ]
//     }
//   ];

//   const getChallenges = () => {
//     switch (activeTab) {
//       case 'Active Challenges':
//         return activeChallenges;
//       case 'Upcoming Challenges':
//         return upcomingChallenges;
//       case 'Past Challenges':
//         return pastChallenges;
//       default:
//         return [];
//     }
//   };

//   const challenges = getChallenges();

//   return (
//     <div className="trading-challenges-container">
//       <div className="challenges-header">
//         <div className="trophy-icon-container">
//           <i className="bi bi-trophy"></i>
//         </div>
//         <div>
//           <h2 className="challenges-title">Private Trading Challenges</h2>
//           <p className="challenges-subtitle">Compete with fellow platinum members in exclusive trading competitions</p>
//         </div>
//       </div>

//       <div className="tabs-container">
//         <div className="nav-tabs">
//           <button
//             className={`tab-button ${activeTab === 'Active Challenges' ? 'active' : ''}`}
//             onClick={() => setActiveTab('Active Challenges')}
//           >
//             Active Challenges
//           </button>
//           <button
//             className={`tab-button ${activeTab === 'Upcoming Challenges' ? 'active' : ''}`}
//             onClick={() => setActiveTab('Upcoming Challenges')}
//           >
//             Upcoming Challenges
//           </button>
//           <button
//             className={`tab-button ${activeTab === 'Past Challenges' ? 'active' : ''}`}
//             onClick={() => setActiveTab('Past Challenges')}
//           >
//             Past Challenges
//           </button>
//         </div>
//       </div>

//       <div className="challenges-list">
//         {challenges.map((challenge) => (
//           <div key={challenge.id} className="challenge-card">
//             <div className="challenge-main">
//               <div className="challenge-header">
//                 <div className="challenge-icon">
//                   <i className="bi bi-trophy"></i>
//                 </div>
//                 <div className="challenge-title-section">
//                   <h3 className="challenge-title">{challenge.title}</h3>
//                   <p className="challenge-description">{challenge.description}</p>
//                 </div>
//               </div>

//               <div className="challenge-details">
//                 <div className="detail-item">
//                   <i className="bi bi-calendar-event"></i>
//                   <div className="detail-content">
//                     <div className="detail-label">Duration</div>
//                     <div className="detail-value">{challenge.duration}</div>
//                   </div>
//                 </div>

//                 <div className="detail-item">
//                   <i className="bi bi-clock"></i>
//                   <div className="detail-content">
//                     <div className="detail-label">Time Remaining</div>
//                     <div className="detail-value">{challenge.timeRemaining}</div>
//                   </div>
//                 </div>

//                 <div className="detail-item">
//                   <i className="bi bi-people"></i>
//                   <div className="detail-content">
//                     <div className="detail-label">Participants</div>
//                     <div className="detail-value">{challenge.participants}</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="challenge-progress-section">
//                 <div className="progress-label">Challenge Progress</div>
//                 <div className="progress-container">
//                   <div className="progress">
//                     <div
//                       className="progress-bar"
//                       role="progressbar"
//                       style={{ width: `${challenge.progress}%` }}
//                       aria-valuenow={challenge.progress}
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                   <div className="progress-percentage">{challenge.progress}%</div>
//                 </div>
//               </div>

//               <div className="prize-section">
//                 <div className="prize-icon">
//                   <i className="bi bi-gift"></i>
//                 </div>
//                 <div className="prize-content">
//                   <div className="prize-label">Prize</div>
//                   <div className="prize-value">{challenge.prize}</div>
//                 </div>
//               </div>

//               <div className="challenge-actions">
//                 <button className="action-button outline">View Challenge Details</button>
//                 <button className="action-button filled">View Your Performance</button>
//               </div>
//             </div>

//             {challenge.leaderboard && challenge.leaderboard.length > 0 && (
//               <div className="challenge-leaderboard">
//                 <div className="leaderboard-header">
//                   <h4 className="leaderboard-title">Current Leaderboard</h4>
//                   <div className="info-icon">
//                     <i className="bi bi-info-circle"></i>
//                   </div>
//                 </div>

//                 <div className="leaderboard-entries">
//                   {challenge.leaderboard.map((entry) => (
//                     <div key={entry.rank} className="leaderboard-entry">
//                       <div className="entry-rank">{entry.rank}</div>
//                       <div className="entry-avatar"></div>
//                       <div className="entry-name">{entry.name}</div>
//                       <div className="entry-performance">{entry.performance}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="view-full-leaderboard">
//                   <a href="#" className="leaderboard-link">
//                     View Full Leaderboard <i className="bi bi-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TradingChallenges;

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment"; // install if not installed

const TradingChallenges = () => {
  const [activeTab, setActiveTab] = useState("Active Challenges");
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://valourwealthdjango-production.up.railway.app/api/challenges/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setChallenges(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching challenges:", error);
      setLoading(false);
    }
  };

  const joinChallenge = async (challengeId) => {
    try {
      const token = localStorage.getItem("accessTtoken");
      await axios.post(
        `https://valourwealthdjango-production.up.railway.app/api/challenges/${challengeId}/join/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Successfully joined the challenge!");
    } catch (error) {
      console.error("Error joining challenge:", error);
      alert("Failed to join challenge.");
    }
  };

  const viewLeaderboard = (challengeId) => {
    window.location.href = `/leaderboard/${challengeId}`; // You can change routing accordingly
  };

  const getFilteredChallenges = () => {
    const today = moment();
    if (activeTab === "Active Challenges") {
      return challenges.filter(
        (challenge) =>
          moment(challenge.start_date).isSameOrBefore(today) &&
          moment(challenge.end_date).isSameOrAfter(today)
      );
    } else if (activeTab === "Past Challenges") {
      return challenges.filter((challenge) =>
        moment(challenge.end_date).isBefore(today)
      );
    }
    return [];
  };

  if (loading) {
    return <div>Loading challenges...</div>;
  }

  return (
    <div className="trading-challenges-container">
      <div className="challenges-header">
        <div className="trophy-icon-container">
          <i className="bi bi-trophy"></i>
        </div>
        <div>
          <h2 className="challenges-title">Private Trading Challenges</h2>
          <p className="challenges-subtitle">
            Compete with fellow platinum members in exclusive trading
            competitions
          </p>
        </div>
      </div>

      <div className="tabs-container">
        <div className="nav-tabs">
          <button
            className={`tab-button ${
              activeTab === "Active Challenges" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Active Challenges")}
          >
            Active Challenges
          </button>
          <button
            className={`tab-button ${
              activeTab === "Past Challenges" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Past Challenges")}
          >
            Past Challenges
          </button>
        </div>
      </div>

      <div className="challenges-list">
        {getFilteredChallenges().map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <div className="challenge-main">
              <div className="challenge-header">
                <div className="challenge-icon">
                  <i className="bi bi-trophy"></i>
                </div>
                <div className="challenge-title-section">
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">
                    {challenge.description}
                  </p>
                </div>
              </div>

              <div className="challenge-details">
                <div className="detail-item">
                  <i className="bi bi-calendar-event"></i>
                  <div className="detail-content">
                    <div className="detail-label">Start Date</div>
                    <div className="detail-value">
                      {moment(challenge.start_date).format("MMMM D, YYYY")}
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-calendar-event"></i>
                  <div className="detail-content">
                    <div className="detail-label">End Date</div>
                    <div className="detail-value">
                      {moment(challenge.end_date).format("MMMM D, YYYY")}
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-people"></i>
                  <div className="detail-content">
                    <div className="detail-label">Participants</div>
                    <div className="detail-value">
                      {challenge.participants_count} members
                    </div>
                  </div>
                </div>
              </div>

              <div className="prize-section">
                <div className="prize-icon">
                  <i className="bi bi-gift"></i>
                </div>
                <div className="prize-content">
                  <div className="prize-label">Prize</div>
                  <div className="prize-value">{challenge.prize}</div>
                </div>
              </div>

              <div className="challenge-actions">
                <button
                  className="action-button outline"
                  onClick={() => joinChallenge(challenge.id)}
                >
                  Join Challenge
                </button>
                <button
                  className="action-button filled"
                  onClick={() => viewLeaderboard(challenge.id)}
                >
                  View Leaderboard
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingChallenges;

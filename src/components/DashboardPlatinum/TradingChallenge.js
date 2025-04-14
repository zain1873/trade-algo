import React, { useState } from 'react';


const TradingChallenges = () => {
  const [activeTab, setActiveTab] = useState('Active Challenges');

  // Sample data for challenges
  const challenges = [
    {
      id: 1,
      title: 'April Performance Challenge',
      description: 'Achieve the highest percentage return in your portfolio during the month of April.',
      duration: 'April 1, 2025 - April 30, 2025',
      timeRemaining: '18 days',
      participants: '78 members',
      progress: 40,
      prize: '3 Months Free Platinum Membership',
      leaderboard: [
        { rank: 1, name: 'Alex T.', avatar: '', performance: '+18.7%' },
        { rank: 2, name: 'Maria R.', avatar: '', performance: '+15.2%' },
        { rank: 3, name: 'James W.', avatar: '', performance: '+12.9%' }
      ]
    },
    {
      id: 2,
      title: 'Options Trading Sprint',
      description: 'Two-week challenge focused on options trading strategies with defined risk parameters. Compete to achieve the highest ROI with a simulated $10,000 account.',
      duration: 'April 10, 2025 - April 24, 2025',
      timeRemaining: '12 days',
      participants: '42 members',
      progress: 15,
      prize: 'Exclusive Strategy Session with Options Expert',
      leaderboard: [
        { rank: 1, name: 'Sophia C.', avatar: '', performance: '+24.3%' },
        { rank: 2, name: 'David K.', avatar: '', performance: '+19.8%' },
        { rank: 3, name: 'Emma J.', avatar: '', performance: '+16.5%' }
      ]
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="trading-challenges-container">
      <div className="challenges-header">
        <div className="trophy-icon-container">
          <i className="bi bi-trophy"></i>
        </div>
        <div>
          <h2 className="challenges-title">Private Trading Challenges</h2>
          <p className="challenges-subtitle">Compete with fellow platinum members in exclusive trading competitions</p>
        </div>
      </div>

      <div className="tabs-container">
        <div className="nav-tabs">
          <button 
            className={`tab-button ${activeTab === 'Active Challenges' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Active Challenges')}
          >
            Active Challenges
          </button>
          <button 
            className={`tab-button ${activeTab === 'Upcoming Challenges' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Upcoming Challenges')}
          >
            Upcoming Challenges
          </button>
          <button 
            className={`tab-button ${activeTab === 'Past Challenges' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Past Challenges')}
          >
            Past Challenges
          </button>
        </div>
      </div>

      <div className="challenges-list">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <div className="challenge-main">
              <div className="challenge-header">
                <div className="challenge-icon">
                  <i className="bi bi-trophy"></i>
                </div>
                <div className="challenge-title-section">
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">{challenge.description}</p>
                </div>
              </div>

              <div className="challenge-details">
                <div className="detail-item">
                  <i className="bi bi-calendar-event"></i>
                  <div className="detail-content">
                    <div className="detail-label">Duration</div>
                    <div className="detail-value">{challenge.duration}</div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-clock"></i>
                  <div className="detail-content">
                    <div className="detail-label">Time Remaining</div>
                    <div className="detail-value">{challenge.timeRemaining}</div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-people"></i>
                  <div className="detail-content">
                    <div className="detail-label">Participants</div>
                    <div className="detail-value">{challenge.participants}</div>
                  </div>
                </div>
              </div>

              <div className="challenge-progress-section">
                <div className="progress-label">Challenge Progress</div>
                <div className="progress-container">
                  <div className="progress">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${challenge.progress}%` }} 
                      aria-valuenow={challenge.progress} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress-percentage">{challenge.progress}%</div>
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
                <button className="action-button outline">View Challenge Details</button>
                <button className="action-button filled">View Your Performance</button>
              </div>
            </div>

            <div className="challenge-leaderboard">
              <div className="leaderboard-header">
                <h4 className="leaderboard-title">Current Leaderboard</h4>
                <div className="info-icon">
                  <i className="bi bi-info-circle"></i>
                </div>
              </div>

              <div className="leaderboard-entries">
                {challenge.leaderboard.map((entry) => (
                  <div key={entry.rank} className="leaderboard-entry">
                    <div className="entry-rank">{entry.rank}</div>
                    <div className="entry-avatar"></div>
                    <div className="entry-name">{entry.name}</div>
                    <div className="entry-performance">{entry.performance}</div>
                  </div>
                ))}
              </div>

              <div className="view-full-leaderboard">
                <a href="#" className="leaderboard-link">
                  View Full Leaderboard <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingChallenges;
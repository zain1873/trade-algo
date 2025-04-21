import React, { useState } from 'react';

const TraderLeaderboard = () => {
  const [activeTab, setActiveTab] = useState('Performance');
  
  // Sample data for the leaderboard
  const traders = [
    {
      id: 1,
      name: 'Alex Thompson',
      type: 'Forex Trader',
      performance: '+42.8%',
      rank: 1,
      status: 'Elite'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      type: 'Crypto Trader',
      performance: '+38.5%',
      rank: 2,
      status: 'Platinum'
    },
    {
      id: 3,
      name: 'James Wilson',
      type: 'Stocks Trader',
      performance: '+35.2%',
      rank: 3,
      status: 'Platinum'
    },
    {
      id: 4,
      name: 'Sophia Chen',
      type: 'Commodities Trader',
      performance: '+31.7%',
      rank: 4,
      status: 'Platinum'
    },
    {
      id: 5,
      name: 'David Kim',
      type: 'Forex Trader',
      performance: '+28.9%',
      rank: 5,
      status: 'Platinum'
    },
    {
      id: 6,
      name: 'Emma Johnson',
      type: 'Stocks Trader',
      performance: '+26.4%',
      rank: 6,
      status: 'Platinum'
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <div className="trophy-icon-container">
          <i className="bi bi-trophy"></i>
        </div>
        <div>
          <h2 className="leaderboard-title">Trader Leaderboard</h2>
          <p className="leaderboard-subtitle">See how you rank among other platinum members</p>
        </div>
      </div>

      <div className="leaderboard-card">
        <div className="leaderboard-card-header">
          <div>
            <h3 className="leaderboard-card-title">Trader Leaderboard</h3>
            <p className="leaderboard-card-subtitle">Top performing platinum members this month</p>
          </div>
          <div className="trophy-icon-circle">
            <i className="bi bi-trophy"></i>
          </div>
        </div>

        <div className="tab-container">
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === 'Performance' ? 'active' : ''}`} 
              onClick={() => handleTabClick('Performance')}
            >
              Performance
            </button>
            <button 
              className={`tab-button ${activeTab === 'Consistency' ? 'active' : ''}`} 
              onClick={() => handleTabClick('Consistency')}
            >
              Consistency
            </button>
            <button 
              className={`tab-button ${activeTab === 'Historical' ? 'active' : ''}`} 
              onClick={() => handleTabClick('Historical')}
            >
              Historical
            </button>
          </div>
        </div>

        <div className="leaderboard-list">
          {traders.map((trader) => (
            <div key={trader.id} className="trader-row">
              <div className="trader-info">
                <div className="rank-circle">{trader.rank}</div>
                <div className="avatar-circle"></div>
                <div className="trader-details">
                  <div className="trader-name">{trader.name}</div>
                  <div className="trader-type">{trader.type}</div>
                </div>
              </div>
              <div className="trader-stats">
                <span className={`trader-status ${trader.status.toLowerCase()}`}>
                  {trader.status}
                </span>
                <span className="trader-performance">
                  <i className="bi bi-graph-up-arrow"></i> {trader.performance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraderLeaderboard;
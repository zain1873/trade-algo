import React from 'react';

const DiversificationLevel = () => {
  // Sample data for diversification breakdown
  const diversificationData = [
    {
      id: 1,
      category: 'Asset Classes',
      score: 72,
      maxScore: 100,
      color: 'medium-risk-bg'
    },
    {
      id: 2,
      category: 'Sectors',
      score: 65,
      maxScore: 100,
      color: 'medium-risk-bg'
    },
    {
      id: 3,
      category: 'Geographic Regions',
      score: 58,
      maxScore: 100,
      color: 'high-risk-bg'
    },
    {
      id: 4,
      category: 'Market Cap',
      score: 77,
      maxScore: 100,
      color: 'medium-risk-bg'
    }
  ];

  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <h2 className="section-title">Diversification Level</h2>
        <div className="info-icon ms-2">
          <i className="bi bi-info-circle"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <div className="diversification-card">
            <div className="diversification-chart-container">
              <div className="diversification-chart">
                <div className="diversification-score">
                  <div className="score-value">68</div>
                  <div className="score-label">out of 100</div>
                </div>
              </div>
            </div>
            <h3 className="diversification-title">Moderate Diversification</h3>
            <p className="diversification-description">
              Your portfolio has a moderate level of diversification across multiple dimensions.
            </p>
          </div>
        </div>
        
        <div className="col-lg-7">
          <div className="breakdown-card">
            <h3 className="breakdown-title mb-4">Diversification Breakdown</h3>
            
            {diversificationData.map(item => (
              <div key={item.id} className="breakdown-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <div className="breakdown-category">{item.category}</div>
                  <div className="breakdown-score">{item.score}/{item.maxScore}</div>
                </div>
                <div className="progress">
                  <div 
                    className={`progress-bar ${item.category === 'Geographic Regions' ? 'high-risk-bg' : 'medium-risk-bg'}`} 
                    role="progressbar" 
                    style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                    aria-valuenow={item.score} 
                    aria-valuemin="0" 
                    aria-valuemax={item.maxScore}
                  ></div>
                </div>
              </div>
            ))}
            
            <div className="insight-box mt-4">
              <div className="d-flex align-items-center mb-2">
                <div className="insight-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5 className="insight-title">Diversification Insight</h5>
              </div>
              <p className="insight-text">
                Your portfolio shows good diversification across market caps but needs improvement in geographic regions. Consider adding international exposure to enhance your overall diversification score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiversificationLevel;
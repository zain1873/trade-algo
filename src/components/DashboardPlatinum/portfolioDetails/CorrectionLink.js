import React from 'react';

const correlationData = [
  { pair: 'AAPL / MSFT', correlation: 0.85, level: 'High' },
  { pair: 'AAPL / GOOGL', correlation: 0.78, level: 'High' },
  { pair: 'MSFT / GOOGL', correlation: 0.82, level: 'High' },
  { pair: 'JPM / BAC', correlation: 0.91, level: 'High' },
  { pair: 'AMZN / TSLA', correlation: 0.45, level: 'Medium' },
  { pair: 'JNJ / PFE', correlation: 0.72, level: 'Medium' },
  { pair: 'XOM / CVX', correlation: 0.88, level: 'High' },
  { pair: 'AAPL / XOM', correlation: 0.12, level: 'Low' },
  { pair: 'MSFT / JNJ', correlation: 0.18, level: 'Low' },
];

const getBarColor = (level) => {
  switch (level) {
    case 'High':
      return '#ff4d6d';
    case 'Medium':
      return '#ffae42';
    case 'Low':
      return '#2ecc71';
    default:
      return '#ccc';
  }
};

const CorrelationRisk = () => {
  return (
    <div className="correlation-risk">
      <h3 className="correlation-title">Correlation Risk</h3>
      <div className="correlation-table">
        <div className="correlation-header">
          <span>Asset Pair</span>
          <span>Correlation</span>
          <span>Risk Level</span>
          <span>Visualization</span>
        </div>
        {correlationData.map((item, index) => (
          <div className="correlation-row" key={index}>
            <span>{item.pair}</span>
            <span>{item.correlation.toFixed(2)}</span>
            <span className={`risk-pill ${item.level.toLowerCase()}`}>{item.level}</span>
            <div className="bar-container">
              <div
                className="bar-fill"
                style={{
                  width: `${item.correlation * 100}%`,
                  backgroundColor: getBarColor(item.level),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorrelationRisk;

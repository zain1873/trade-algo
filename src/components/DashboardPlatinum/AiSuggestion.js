import React from 'react';

const AISuggestions = () => {
  // Sample data for AI suggestions
  const suggestions = [
    {
      id: 1,
      title: 'Reduce Technology Exposure',
      description: 'Your portfolio is heavily weighted towards technology stocks, which increases sector-specific risk. Consider reducing exposure by 10-15%.',
      impact: 'High Impact',
      impactLevel: 'high'
    },
    {
      id: 2,
      title: 'Add International Exposure',
      description: 'Your portfolio is primarily focused on US markets. Consider adding 15-20% exposure to international markets for better geographic diversification.',
      impact: 'Medium Impact',
      impactLevel: 'medium'
    },
    {
      id: 3,
      title: 'Reduce Correlation Risk',
      description: 'High correlation between your tech holdings (AAPL, MSFT, GOOGL) increases portfolio volatility. Consider diversifying within the sector.',
      impact: 'High Impact',
      impactLevel: 'high'
    },
    {
      id: 4,
      title: 'Add Fixed Income',
      description: 'Your portfolio is heavily weighted towards equities. Consider adding 10-15% in fixed income securities to reduce overall volatility.',
      impact: 'Medium Impact',
      impactLevel: 'medium'
    }
  ];

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h2 className="ai-suggestions-title">AI-Powered Portfolio Suggestions</h2>
        <div className="info-icon ms-2">
          <i className="bi bi-info-circle"></i>
        </div>
      </div>

      <div className="suggestions-container">
        {suggestions.map(suggestion => (
          <div key={suggestion.id} className="suggestion-card">
            <div className="suggestion-header">
              <div className="suggestion-icon-title">
                <div className={`suggestion-icon ${suggestion.impactLevel}-icon`}>
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h3 className="suggestion-title">{suggestion.title}</h3>
              </div>
              <div className={`impact-badge ${suggestion.impactLevel}-impact`}>
                {suggestion.impact}
              </div>
            </div>
            
            <p className="suggestion-description">
              {suggestion.description}
            </p>
            
            <div className="suggestion-actions">
              <button className="btn btn-view-details">View Details</button>
              <button className="btn btn-apply-suggestion">Apply Suggestion</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AISuggestions;
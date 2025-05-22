const AISuggestions = () => {
  // Sample data for AI suggestions
  const suggestions = [
    {
      id: 1,
      title: "Exposure",
      description: "Your portfolio currently down",
      impact: "High Impact",
      impactLevel: "high",
    },
  ];

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h2 className="ai-suggestions-title">
          AI-Powered Portfolio Suggestions
        </h2>
        <div className="info-icon ms-2">
          <i className="bi bi-info-circle"></i>
        </div>
      </div>

      <div className="suggestions-container">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion-card">
            <div className="suggestion-header">
              {/* <div className="suggestion-icon-title">
                <div
                  className={`suggestion-icon ${suggestion.impactLevel}-icon`}
                >
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h3 className="suggestion-title">{suggestion.title}</h3>
              </div> */}
              <div className={`impact-badge ${suggestion.impactLevel}-impact`}>
                {suggestion.impact}
              </div>
            </div>

            <p className="suggestion-description">{suggestion.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AISuggestions;

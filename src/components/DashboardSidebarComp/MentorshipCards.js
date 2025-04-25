import React from 'react';


const MentorshipPlans = () => {
  // Plan data to make the component reusable
  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      icon: 'bi-star-fill',
      sessions: '3 sessions over 3 months',
      price: 'USD $749.50',
      features: [
        'Fundamental concepts',
        'Basic trading strategies',
        { text: 'Market structure', indent: true },
        { text: 'Essential tools', indent: true },
        'Hands-on exercises'
      ],
      buttonText: 'Manage My Sessions',
      buttonIcon: 'bi-arrow-right'
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      icon: 'bi-graph-up',
      sessions: '10 sessions over 6 months',
      price: 'USD $2,450',
      features: [
        'Advanced strategies',
        'Risk management',
        { text: 'Technical analysis', indent: true },
        { text: 'Portfolio optimization', indent: true },
        'Market psychology'
      ],
      buttonText: 'Contact Us',
      buttonIcon: 'bi-arrow-right'
    },
    {
      id: 'advanced',
      title: 'Advanced',
      icon: 'bi-bar-chart-fill',
      sessions: '29 sessions over 12 months',
      price: 'USD $7,000',
      features: [
        'Complex strategies',
        'Institutional techniques',
        { text: 'Algorithmic trading', indent: true },
        { text: 'Volatility analysis', indent: true },
        'Professional mentorship'
      ],
      buttonText: 'Contact Us',
      buttonIcon: 'bi-arrow-right'
    }
  ];

  return (
    <div className="mentorship-container">
      <div className="mentorship-header text-center mb-4">
        <h2 className="mentorship-title">Choose Your Plan</h2>
        <p className="mentorship-subtitle">Options trading pro-led personalized coaching.</p>
      </div>

      <div className="row plan-cards-container">
        {plans.map((plan) => (
          <div className="col-md-4" key={plan.id}>
            <div className="plan-card">
              <div className="plan-icon">
                <i className={plan.icon}></i>
              </div>
              
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-sessions">{plan.sessions}</p>
              
              <div className="plan-price">{plan.price}</div>
              
              <div className="plan-features">
                {plan.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`feature-item ${typeof feature === 'object' && feature.indent ? '' : ''}`}
                  >
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">
                      {typeof feature === 'object' ? feature.text : feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="plan-action">
                <button className="btn action-button mentorhip-btn">
                  <span>{plan.buttonText}</span>
                  <i className={`${plan.buttonIcon} button-icon`}></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mentorship-badge">
        <div className="badge-inner">
          <div className="badge-icon">
            <i className="bi bi-shield-fill"></i>
          </div>
          <div className="badge-text">EXPERT</div>
          <div className="badge-subtext">MENTORSHIP</div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPlans;
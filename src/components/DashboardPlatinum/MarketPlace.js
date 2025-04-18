import React from 'react';

const NFTMarketplace = () => {
  return (
    <div className="marketplace-container">
      <h2 className="marketplace-title">NFT Marketplace</h2>
      
      <div className="marketplace-content">
        <div className="coming-soon-container">
          <div className="badge-icon">
            <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" stroke="#777" strokeWidth="4"/>
              <path d="M100 140C100 140 130 120 130 90C130 73.4315 116.569 60 100 60C83.4315 60 70 73.4315 70 90C70 120 100 140 100 140Z" stroke="#777" strokeWidth="4"/>
              <circle cx="100" cy="90" r="15" stroke="#777" strokeWidth="4"/>
            </svg>
          </div>
          
          <h3 className="coming-soon-title">NFT Marketplace Coming Soon</h3>
          
          <p className="coming-soon-description">
            Our exclusive NFT marketplace will allow you to trade special 
            edition badges, achievement trophies, and limited-time collectibles 
            with other platinum members.
          </p>
          
          <div className="action-buttons">
            <button className="btn-join-waitlist">Join Waitlist</button>
            <button className="btn-learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTMarketplace;
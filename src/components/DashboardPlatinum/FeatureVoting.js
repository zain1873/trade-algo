import React, { useState } from 'react';
import FeatureVotingTabs from './FeatureVotingTabs';

function FeatureVoting() {
  const [featureTitle, setFeatureTitle] = useState('');
  const [featureDescription, setFeatureDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ featureTitle, featureDescription });
    // Reset form
    setFeatureTitle('');
    setFeatureDescription('');
  };

  return (
    <div className="feature-voting-container">
      <div className="header">
        <div className="icon-container">
          <i className="bi bi-check-square"></i>
        </div>
        <div className="title-container">
          <h1>Early Access & Voting</h1>
          <p>Shape the future of our platform with your exclusive voting power</p>
        </div>
      </div>

      <div className="form-container">
        <div className="">
          <div className="card-body">
            <h2 className="form-title text-white">Submit a Feature Request</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="featureTitle" className="form-label">Feature Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="featureTitle"
                  placeholder="Enter a clear, concise title for your feature request"
                  value={featureTitle}
                  onChange={(e) => setFeatureTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="featureDescription" className="form-label">Feature Description</label>
                <textarea
                  className="form-control"
                  id="featureDescription"
                  rows="5"
                  placeholder="Describe the feature in detail, including how it would benefit platinum members"
                  value={featureDescription}
                  onChange={(e) => setFeatureDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn submit-btn-feature text-white">
                  <i className="bi bi-lightbulb me-2"></i>
                  Submit Feature Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <FeatureVotingTabs/>
    </div>
  );
}

export default FeatureVoting;
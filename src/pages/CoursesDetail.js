import React, { useState } from 'react';
import "../styles/coursedetails.css";

function CoursesDetail() {
  const [activeTab, setActiveTab] = useState('beginner');
  const [showModal, setShowModal] = useState(false);

  // Function to handle tab switching
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="course-details-container">
      <div className="course-header">
        <h1>The Complete FOREX Scalping Trading Course</h1>
        <p className="course-subtitle">Master the art of FOREX scalping with our comprehensive course</p>
      </div>

      <div className="course-tabs">
        <ul className="nav nav-tabs" id="courseTabs" role="tablist">
          <li className="nav-item  flex-grow-1" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'beginner' ? 'active' : ''}`}
              onClick={() => handleTabChange('beginner')}
              id="beginner-tab"
              type="button"
              role="tab"
              aria-controls="beginner"
              aria-selected={activeTab === 'beginner'}
            >
              Beginner
            </button>
          </li>
          <li className="nav-item  flex-grow-1" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'intermediate' ? 'active' : ''}`}
              onClick={() => handleTabChange('intermediate')}
              id="intermediate-tab"
              type="button"
              role="tab"
              aria-controls="intermediate"
              aria-selected={activeTab === 'intermediate'}
            >
              Intermediate
            </button>
          </li>
          <li className="nav-item  flex-grow-1" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'professional' ? 'active' : ''}`}
              onClick={() => handleTabChange('professional')}
              id="professional-tab"
              type="button"
              role="tab"
              aria-controls="professional"
              aria-selected={activeTab === 'professional'}
            >
              Professional
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" id="courseTabsContent">
          {/* Beginner Tab Content */}
          <div 
            className={`tab-pane fade ${activeTab === 'beginner' ? 'show active' : ''}`}
            id="beginner"
            role="tabpanel"
            aria-labelledby="beginner-tab"
          >
            <div className="level-header">
              <h2>Beginner Level</h2>
              <button className="btn btn-danger">View Level</button>
            </div>
            <div className="progress mb-4">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            {/* Video Section */}
            <div className="video-container">
              <div className="ratio">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="FOREX Scalping for Beginners" allowFullScreen></iframe>
              </div>
              <div className="video-controls mt-3">
                {/* <button className="btn btn-success play-btn">Play Video</button> */}
              </div>
            </div>

            {/* Course Modules */}
            <div className="course-modules mt-4">
              <div className="module-item">
                <h3>Introduction to FOREX Scalping</h3>
                <p>Learn the basics of scalping in the FOREX market</p>
              </div>
              
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Best Forex Currency pairs to Scalp</h3>
                <p>Discover which currency pairs are best for scalping strategies</p>
              </div>
              
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>How to Choose Your Broker</h3>
                <p>Learn how to select the right broker for scalping</p>
              </div>

              <div className="quiz_btn">
              <button className="theme_btn" onClick={() => setShowModal(true)}>
                Take Quiz
              </button>
            </div>
            </div>
          </div>

          {/* Intermediate Tab Content */}
          <div 
            className={`tab-pane fade ${activeTab === 'intermediate' ? 'show active' : ''}`}
            id="intermediate"
            role="tabpanel"
            aria-labelledby="intermediate-tab"
          >
            <div className="level-header">
              <h2>Intermediate Level</h2>
              <button className="btn btn-danger">View Level</button>
            </div>
            <div className="progress mb-4">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            {/* Video Section */}
            <div className="video-container locked-video">
              <div className="ratio">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Intermediate FOREX Scalping Techniques" allowFullScreen></iframe>
                <div className="video-lock-overlay">
                  <div className="lock-content">
                    <i className="bi bi-lock-fill"></i>
                    <h4>Unlock Intermediate Content</h4>
                    <p>Complete beginner level to unlock</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="course-modules mt-4">
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Advanced Scalping Patterns</h3>
                <p>Master advanced patterns for more profitable trades</p>
              </div>
              
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Risk Management for Scalpers</h3>
                <p>Learn essential risk management techniques</p>
              </div>

              <div className="quiz_btn">
              <button className="theme_btn" onClick={() => setShowModal(true)}>
                Take Quiz
              </button>
            </div>
            </div>
          </div>

          {/* Professional Tab Content */}
          <div 
            className={`tab-pane fade ${activeTab === 'professional' ? 'show active' : ''}`}
            id="professional"
            role="tabpanel"
            aria-labelledby="professional-tab"
          >
            <div className="level-header">
              <h2>Professional Level</h2>
              <button className="btn btn-danger">View Level</button>
            </div>
            <div className="progress mb-4">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            {/* Video Section */}
            <div className="video-container locked-video">
              <div className="ratio">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Professional FOREX Scalping Strategies" allowFullScreen></iframe>
                <div className="video-lock-overlay">
                  <div className="lock-content">
                    <i className="bi bi-lock-fill"></i>
                    <h4>Unlock Professional Content</h4>
                    <p>Complete intermediate level to unlock</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="course-modules mt-4">
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Expert Scalping Strategies</h3>
                <p>Advanced techniques used by professional traders</p>
              </div>
              
              <div className="module-item locked">
                <div className="locked-overlay">
                  <i className="bi bi-lock-fill"></i>
                  <span>Locked</span>
                </div>
                <h3>Automating Your Scalping Strategy</h3>
                <p>Learn how to automate your scalping strategies</p>
              </div>
              <div className="quiz_btn">
              <button className="theme_btn" onClick={() => setShowModal(true)}>
                Take Quiz
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    

      {/* Modal (Added) */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Starting Quiz</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>Are you ready to start the quiz?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              <button className="btn btn-success">Start Quiz</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default CoursesDetail;

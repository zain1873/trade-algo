import React, { useState } from 'react';
import '../styles/academy.css';
import { FaBookOpen, FaFileAlt, FaLightbulb, FaBookReader, FaSignal } from "react-icons/fa"
import videoImg from '../assets/images/crypto-latest.png'

const ValourAcademy = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('beginner'); // Track selected level

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="valour-container">
      {/* Header */}
      <div className="valour-header">
        <div className="header-brand">Valour Academy</div>
        <div className="header-login">
          <button className="theme_btn">Username</button>
        </div>
      </div>

      <div className="valour-main">
        {/* Sidebar */}
        <div className="valour-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-heading">COURSE LEVELS</div>

            <div 
              className={`sidebar-item ${selectedLevel === 'beginner' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('beginner')}
            >
              <span>Beginner</span>
              <i className={`arrow-icon ${selectedLevel === 'beginner' ? 'down' : 'right'}`}></i>
            </div>

            <div 
              className={`sidebar-item ${selectedLevel === 'intermediate' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('intermediate')}
            >
              <span>Intermediate</span>
              <i className={`arrow-icon ${selectedLevel === 'intermediate' ? 'down' : 'right'}`}></i>
            </div>

            <div 
              className={`sidebar-item ${selectedLevel === 'professional' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('professional')}
            >
              <span>Professional</span>
              <i className={`arrow-icon ${selectedLevel === 'professional' ? 'down' : 'right'}`}></i>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="valour-content p-0">
          {/* Dynamic Content Based on Selected Level */}
          {selectedLevel === 'beginner' && (
            <div className='main_module'>
              <div className="content-breadcrumb">
                <span>Beginner</span>
                <span className="separator">›</span>
                <span>Module 1</span>
              </div>

              <h1 className="content-title">Introduction to Wealth Management</h1>
              <p className="content-description">
                Master the fundamentals of wealth management and learn how to build a solid financial foundation for long-term success.
              </p>

              <div className="content-info">
                <div className="lesson-count">
                <FaBookReader className="accordion-icon resources"/>
                  <span>4 Lessons</span>
                </div>
                <div className="level-badge">
                <FaSignal  className="accordion-icon resources" />
                  <span>Beginner Level</span>
                </div>
              </div>
            </div>
          )}

          {selectedLevel === 'intermediate' && (
            <div className = 'main_module'>
              <div className="content-breadcrumb">
                <span>Intermediate</span>
                <span className="separator">›</span>
                <span>Module 1</span>
              </div>

              <h1 className="content-title">Advanced Wealth Strategies</h1>
              <p className="content-description">
                Learn advanced strategies for wealth growth, risk management, and diversified investment techniques.
              </p>

              <div className="content-info">
                <div className="lesson-count">
                <FaBookReader className="accordion-icon resources"/>
                  <span>6 Lessons</span>
                </div>
                <div className="level-badge">
                <FaSignal  className="accordion-icon resources" />
                  <span>Intermediate Level</span>
                </div>
              </div>
            </div>
          )}

          {selectedLevel === 'professional' && (
            <div className='main_module'>
            
              <div className="content-breadcrumb">
                <span>Professional</span>
                <span className="separator">›</span>
                <span>Module 1</span>
              </div>

              <h1 className="content-title">Expert Financial Planning</h1>
              <p className="content-description">
                Master expert-level financial planning techniques to manage portfolios, taxes, and wealth preservation strategies.
              </p>

              <div className="content-info">
                <div className="lesson-count">
                <FaBookReader className="accordion-icon resources"/>
                  <span>8 Lessons</span>
                </div>
                <div className="level-badge">
                <FaSignal  className="accordion-icon resources" />
                  <span>Professional Level</span>
                </div>
              </div>
            </div>
          )}

          {/* Accordion Sections */}
          <div className="accordion-container">

          <div className={`accordion-item ${activeSection === 'resources' ? 'active' : ''}`}>
            <div 
              className="accordion-header"
              onClick={() => toggleSection('resources')}
            >
              <div className="accordion-title">
                <FaBookOpen className="accordion-icon resources" />
                <span>Resources</span>
              </div>
              <i className={`arrow-icon ${activeSection === 'resources' ? 'up' : 'down'}`}></i>
            </div>
            {activeSection === 'resources' && (
              <div className="accordion-content">
              <div className="container">
                <div className="row">
                  {/* Video Card 1 */}
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="video-card">
                      <div className="video-thumbnail">
                        <img className='obj_fit' src={videoImg} alt="Video 1" />
                      </div>
                      <div className="video-info">
                        <h5 className="video-title">Introduction to Course</h5>
                        <p className="video-duration">10 min</p>
                      </div>
                    </div>
                  </div>
            
                  {/* Video Card 2 */}
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="video-card">
                      <div className="video-thumbnail">
                        <img className='obj_fit' src= {videoImg} alt="Video 2" />
                      </div>
                      <div className="video-info">
                        <h5 className="video-title">Lesson 1: Basics</h5>
                        <p className="video-duration">15 min</p>
                      </div>
                    </div>
                  </div>
            
                  {/* Video Card 3 */}
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="video-card">
                      <div className="video-thumbnail">
                        <img className='obj_fit' src={videoImg} alt="Video 3" />
                      </div>
                      <div className="video-info">
                        <h5 className="video-title">Advanced Concepts</h5>
                        <p className="video-duration">20 min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            )}
          </div>

          <div className={`accordion-item ${activeSection === 'notes' ? 'active' : ''}`}>
            <div 
              className="accordion-header"
              onClick={() => toggleSection('notes')}
            >
              <div className="accordion-title">
                <FaFileAlt className="accordion-icon notes resources" />
                <span>Notes</span>
              </div>
              <i className={`arrow-icon ${activeSection === 'notes' ? 'up' : 'down'}`}></i>
            </div>
            {activeSection === 'notes' && (
                <div className="accordion-content">
                <div className="container">
                  <div className="row">
                    {/* Video Card 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="video-card">
                        <div className="video-thumbnail">
                          <img className='obj_fit' src={videoImg} alt="Video 1" />
                        </div>
                        <div className="video-info">
                          <h5 className="video-title">Introduction to Course</h5>
                          <p className="video-duration">10 min</p>
                        </div>
                      </div>
                    </div>
              
                    {/* Video Card 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="video-card">
                        <div className="video-thumbnail">
                          <img className='obj_fit' src= {videoImg} alt="Video 2" />
                        </div>
                        <div className="video-info">
                          <h5 className="video-title">Lesson 1: Basics</h5>
                          <p className="video-duration">15 min</p>
                        </div>
                      </div>
                    </div>
              
                    {/* Video Card 3 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="video-card">
                        <div className="video-thumbnail">
                          <img className='obj_fit' src={videoImg} alt="Video 3" />
                        </div>
                        <div className="video-info">
                          <h5 className="video-title">Advanced Concepts</h5>
                          <p className="video-duration">20 min</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={`accordion-item ${activeSection === 'knowledge' ? 'active' : ''}`}>
            <div 
              className="accordion-header"
              onClick={() => toggleSection('knowledge')}
            >
              <div className="accordion-title">
                <FaLightbulb className="accordion-icon knowledge resources" />
                <span>Knowledge</span>
              </div>
              <i className={`arrow-icon ${activeSection === 'knowledge' ? 'up' : 'down'}`}></i>
            </div>
            {activeSection === 'knowledge' && (
                <div className="accordion-content">
                <div className="container">
                  <div className="row">
                    {/* Video Card 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="video-card">
                        <div className="video-thumbnail">
                          <img className='obj_fit' src={videoImg} alt="Video 1" />
                        </div>
                        <div className="video-info">
                          <h5 className="video-title">Introduction to Course</h5>
                          <p className="video-duration">10 min</p>
                        </div>
                      </div>
                    </div>
              
                    {/* Video Card 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="video-card">
                        <div className="video-thumbnail">
                          <img className='obj_fit' src= {videoImg} alt="Video 2" />
                        </div>
                        <div className="video-info">
                          <h5 className="video-title">Lesson 1: Basics</h5>
                          <p className="video-duration">15 min</p>
                        </div>
                      </div>
                    </div>
              
                    {/* Video Card 3 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="video-card">
                        <div className="video-thumbnail">
                          <img className='obj_fit' src={videoImg} alt="Video 3" />
                        </div>
                        <div className="video-info">
                          <h5 className="video-title">Advanced Concepts</h5>
                          <p className="video-duration">20 min</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          </div>


          {/* Navigation Buttons */}
          <div className="navigation-controls">
            <button className="prev-btn" disabled>Previous Lesson</button>
            <button className="next-btn">Next Lesson <i className="arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValourAcademy;

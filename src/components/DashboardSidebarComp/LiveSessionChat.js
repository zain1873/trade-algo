import React, { useState } from 'react';
import analystImg from "../DashboardSidebarComp/images/dane-img.png"

const TradingPlatform = () => {
  const [name, setName] = useState('');
  
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Left Side - Video Player */}
        <div className="col-md-8 position-relative">
          {/* Video Player */}
          <div className="ratio ratio-16x9">
            <video controls className="w-100 h-100">
              <source src="https://example.com/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Live Schedule Button */}
          <div className="position-absolute top-0 start-0 m-3">
            <button className="btn btn-outline-light rounded-pill">
              <span className="me-2">●</span> LIVE Schedule
            </button>
          </div>
          
          {/* Analyst Info */}
          <div className="position-absolute top-0 end-0 m-3 text-white">
            <div>Dane Glisek</div>
            <div>TradeAlgo Analyst</div>
          </div>
          
          

           {/* Analyst Profile Section */}
           <div className="p-3 border-top border-secondary">
            <div className="d-flex align-items-center">
              <img 
                src={analystImg} 
                alt="Dane Glisek" 
                className="rounded-circle me-2 obj_fit"
                style={{width: "50px", height: "50px"}} 
              />
              <div>
                <div className="d-flex align-items-center">
                  <span>Dane Glisek</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-primary ms-1" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                  </svg>
                </div>
                <div className="text-secondary small">TradeAlgo Analyst</div>
              </div>
            </div>
            
            {/* Session Details */}
            <div className="row mt-4">
              <div className="col-12 mb-4">
                <h6>Pre-market Analysis Sessions</h6>
                <p className="small text-secondary">
                  Analyst will go over platform to identify potential dashboard picks, will
                  provide levels to watch out for with day-trades and set ups.
                </p>
                
                <div className="small">
                  <div className="text-secondary mb-1">LIVE Schedule</div>
                  <div>Every Monday to Friday</div>
                  <div>Time: 9:00am-9:30am est</div>
                </div>
              </div>
              
              <div className="col-12">
                <h6>Live Trading Sessions</h6>
                <p className="small text-secondary">
                  These group training sessions are designed to explain how to take full
                  advantage of the alerts Trade Algo has to offer.
                </p>
                
                <div className="small">
                  <div className="text-secondary mb-1">LIVE Schedule</div>
                  <div>Every Monday to Friday</div>
                  <div>Time: 3:00pm-4:00pm est</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Chat Feature */}
        <div className="col-md-4 bg-dark text-white d-flex flex-column" style={{ minHeight: '100vh' }}>
          <div className="text-center p-5 flex-grow-1 d-flex flex-column justify-content-center">
            <div className="mb-4">
              <i className="bi bi-chat-dots fs-1"></i>
            </div>
            <p className="mb-4">Share your name to join</p>
            
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control bg-dark text-white border-secondary" 
                id="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <button className="btn btn-info text-white w-100 mb-3">Join audience</button>
            <button className="btn btn-outline-secondary w-100 mb-4">Log in with Vimeo</button>
            
            <div className="small text-secondary text-center">
              Content you submit through chat is subject to the 
              <a href="#" className="text-info text-decoration-none"> Terms of Service </a>
              and
              <a href="#" className="text-info text-decoration-none"> Privacy Policy</a>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default TradingPlatform;
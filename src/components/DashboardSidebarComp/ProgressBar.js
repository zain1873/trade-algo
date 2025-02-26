import React from 'react';
import '../DashboardSidebarComp/styles/progressbar.css';

const CircularProgressBar = ({ percentage, color }) => {
  // Calculate the rotation based on percentage
  const rotation = percentage * 3.6; // 3.6 degrees per percentage point (360/100)
  
  return (
    <div className="circular-progress">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="percentage">
            {percentage}<span className="percent-symbol">%</span>
          </div>
        </div>
      </div>
      
      {/* Progress indicator using CSS ::before and ::after pseudo-elements */}
      <div 
        className="progress-circle" 
        style={{ 
          '--percentage': percentage,
          '--color': color 
        }}
      ></div>
    </div>
  );
};

const ProgressBarsDisplay = () => {
  return (
    <div className="container mt-5 mb-5">
    <div className="progress_container shadow p-3">
        <div className="sec_heading ">
            <h2 className='text-white'>QBTS</h2>

        </div>
      <div className="row justify-content-center p-3">
        <div className="col-md-3">
          <CircularProgressBar percentage={45} color="#3CD4A0" />
        </div>
        <div className="col-md-3">
          <CircularProgressBar percentage={75} color="#9333EA" />
        </div>
        <div className="col-md-3">
          <CircularProgressBar percentage={95} color="#F05252" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProgressBarsDisplay;







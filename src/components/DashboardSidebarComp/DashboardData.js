import React from 'react'
import "../DashboardSidebarComp/styles/DashboardData.css"; 
import HistoricalDataFlow from './HistoricalDataFlow';
import ProgressBar from './ProgressBar';
import LiveTrainingSession from './liveTrainingSession';


function DashboardData({darkMode}) {
      return (
        <div className="container p-0">
           <div className="dashboard-header">
          <div className="header-content">
            <div className="header-left">
              <h2>
                Hello, <span className="highlight">ValourWealth</span>
              </h2>
              <p>
                Here are the top stocks handpicked by our AI from over 10,000
                tickers in the <span className="underline">Stock Exchange</span>
              </p>
              <p>Choose from the available styles of trading that will suit your needs</p>
            </div>
            <div className="header-right">
              <button className="date-btn">Date: February 24th, 2025</button>
            </div>
          </div>         
        </div>  
        <LiveTrainingSession />
        <ProgressBar />
        <HistoricalDataFlow  darkMode={darkMode}/>
        </div>
      );
      };

export default DashboardData

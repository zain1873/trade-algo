import React from 'react'
import "../DashboardSidebarComp/styles/DashboardData.css"; // Import the CSS
import HistoricalDataFlow from './HistoricalDataFlow';


function DashboardData() {

      return (
        <div className="container">
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
              <div className="buttons">
                <button className="btn btn-primary">Intraday Trading</button>
                <button className="btn btn-outline">Swing Trading</button>
              </div>
            </div>
            <div className="header-right">
              <button className="date-btn">Date: February 24th, 2025</button>
            </div>
          </div>         
        </div>  
        <HistoricalDataFlow />
        </div>
       
        
      );
      };
    


export default DashboardData

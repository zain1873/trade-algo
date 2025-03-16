import React from "react";
import "../DashboardSidebarComp/styles/wealthseries.css"; 

const WealthSeries = ({ darkMode }) => {
  return (
    <section className={`wealth-series ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className={`container mt-4 wealth-container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <h2 className="text-center title">Wealth Management Series</h2>

        <div className="row">
          {/* Diamond Alerts Section */}
          <div className="col-lg-6">
            <div className="wealth-card">
              <h3 className="wealth-title">Diamond Alerts</h3>
              <p className="investment-amount">Minimum Investment: <strong>$50,000</strong></p>
              <p className="description">
                The Diamond Alerts program provides high-net-worth individuals with 
                exclusive market insights, real-time alerts, and strategic investment 
                opportunities. Our AI-powered analytics ensure maximum profitability 
                with precise risk management.
              </p>
            </div>
          </div>

          {/* Valour Wealth Fund Section */}
          <div className="col-lg-6">
            <div className="wealth-card">
              <h3 className="wealth-title">Valour Wealth Fund</h3>
              <p className="investment-amount">Minimum Investment: <strong>$125,000</strong></p>
              <p className="description">
                The Valour Wealth Fund is a premier investment vehicle for elite investors 
                seeking long-term financial growth. With a diversified portfolio and access 
                to top-tier market strategies, this fund is designed for wealth preservation 
                and expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthSeries;

import React from "react";
import "../DashboardSidebarComp/styles/wealthseries.css"; 

const WealthSeries = ({ darkMode }) => {
  return (
    <section className={`wealth-series blur ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className={`container mt-4 wealth-container pt-0 ${darkMode ? "dark-mode" : ""}`}>
        <h2 className="text-center title-wealth mb-5">Wealth Management Series</h2>

        <div className="row">
          {/* Diamond Alerts Section */}
          <div className="col-lg-4">
            <div className="wealth-card">
              <h3 className="wealth-title">Diamond Alerts</h3>
              <p className="investment-amount">Minimum Investment: <br /> <strong>$50,000</strong></p>
              <p className="description">
                The Diamond Alerts program provides high-net-worth individuals with 
                exclusive market insights, real-time alerts, and strategic investment 
                opportunities. Our AI-powered analytics ensure maximum profitability 
                with precise risk management.
              </p>
              <a className="theme_btn" href="">
                Learn More
              </a>
            </div>
          </div>

          {/* Valour Wealth Fund Section */}
          <div className="col-lg-4">
            <div className="wealth-card">
              <h3 className="wealth-title">Valour Wealth Fund</h3>
              <p className="investment-amount">Minimum Investment: <br /> <strong>$125,000</strong></p>
              <p className="description">
                The Valour Wealth Fund is a premier investment vehicle for elite investors 
                seeking long-term financial growth. With a diversified portfolio and access 
                to top-tier market strategies, this fund is designed for wealth preservation 
                and expansion.
              </p>
              <a className="theme_btn" href="">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthSeries;

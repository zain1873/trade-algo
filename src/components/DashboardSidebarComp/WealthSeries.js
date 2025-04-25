// import React from "react";
// import "../DashboardSidebarComp/styles/wealthseries.css";

// const WealthSeries = ({ darkMode }) => {
//   return (
//     <section className={`wealth-series ${darkMode ? "dark-mode" : "light-mode"}`}>
//       <div className={`container mt-4 wealth-container pt-0 ${darkMode ? "dark-mode" : ""}`}>
//         <h2 className="text-center title-wealth mb-5">Wealth Management Series</h2>

//         <div className="row justify-content-center">
//           {/* Diamond Alerts Section */}
//           <div className="col-lg-4">
//             <div className="wealth-card">
//               <h3 className="wealth-title">Diamond Alerts</h3>
//               <p className="investmaent-amount">Minimum Investment: <br /> <strong>$50,000</strong></p>
//               <p className="description">
//                 The Diamond Alerts program provides high-net-worth individuals with
//                 exclusive market insights, real-time alerts, and strategic investment
//                 opportunities. Our AI-powered analytics ensure maximum profitability
//                 with precise risk management.
//               </p>
//               <a className="theme_btn" href="/contact">
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Valour Wealth Fund Section */}
//           <div className="col-lg-4">
//             <div className="wealth-card">
//               <h3 className="wealth-title">Valour Wealth Fund</h3>
//               <p className="investment-amount">Minimum Investment: <br /> <strong>$125,000</strong></p>
//               <p className="description">
//                 The Valour Wealth Fund is a premier investment vehicle for elite investors
//                 seeking long-term financial growth. With a diversified portfolio and access
//                 to top-tier market strategies, this fund is designed for wealth preservation
//                 and expansion.
//               </p>
//               <a className="theme_btn" href="/contact">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WealthSeries;

/////////////////

// import React from "react";
// import "../DashboardSidebarComp/styles/wealthseries.css";

// const WealthSeries = ({ darkMode }) => {
//   return (
//     <section className={`wealth-series ${darkMode ? "dark-mode" : "light-mode"}`}>
//       <div className={`container mt-4 wealth-container pt-0 ${darkMode ? "dark-mode" : ""}`}>
//         <h2 className="text-center title-wealth mb-5">Wealth Management Series</h2>

//         <div className="row justify-content-center">
//           {/* Diamond Alerts Section */}
//           <div className="col-lg-4">
//             <div className="wealth-card">
//               <h3 className="wealth-title">Diamond Alerts</h3>
//               <p className="investment-amount">Minimum Investment: <br /> <strong>$50,000</strong></p>
//               <p className="description">
//                 The Diamond Alerts program provides high-net-worth individuals with
//                 exclusive market insights, real-time alerts, and strategic investment
//                 opportunities. Our AI-powered analytics ensure maximum profitability
//                 with precise risk management.
//               </p>
//               <a className="theme_btn" href="/contact">
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Valour Wealth Fund Section */}
//           <div className="col-lg-4">
//             <div className="wealth-card">
//               <h3 className="wealth-title">Valour Wealth Fund</h3>
//               <p className="investment-amount">Minimum Investment: <br /> <strong>$125,000</strong></p>
//               <p className="description">
//                 The Valour Wealth Fund is a premier investment vehicle for elite investors
//                 seeking long-term financial growth. With a diversified portfolio and access
//                 to top-tier market strategies, this fund is designed for wealth preservation
//                 and expansion.
//               </p>
//               <a className="theme_btn" href="/contact">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WealthSeries;

import React from "react";

const GoldInvestmentCards = () => {
  // Bootstrap 5 CSS
  const bootstrapCSS = `
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  `;

  // Custom CSS for the gold cards
  const customStyles = `
    .card-container {
      font-family: 'Poppins', sans-serif;
      padding: 30px;
      border-radius: 8px;
    }
    
    .gold-card {
      background: linear-gradient(145deg, #1a1500, #1c1100);
      border: 1px solid #b38728;
      border-radius: 12px;
      padding: 24px;
      height: 100%;
      position: relative;
      overflow: hidden;
      color: #e6e6e6;
    }
    
    .gold-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #d4af37, #f9d76e, #d4af37);
    }
    
    .gold-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #d4af37, #f9d76e, #d4af37);
    }
    
    .card-logo {
      background-color: #d4af37;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      color: #121212;
      font-size: 24px;
    }
    
    .card-title {
      color: #d4af37;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .min-investment {
      color: #e6e6e6;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 16px;
    }
    
    .card-description {
      color: #bfbfbf;
      font-size: 14px;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .feature-list {
      list-style: none;
      padding: 0;
      margin-bottom: 20px;
    }
    
    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      color: #bfbfbf;
      font-size: 14px;
    }
    
    .feature-icon {
      color: #d4af37;
      margin-right: 10px;
      font-size: 16px;
    }
    
    .learn-more-btn {
      background: linear-gradient(90deg, #b38728, #fcf6ba, #bf953f);
      border: none;
      color: #000;
      font-weight: 600;
      padding: 10px 20px;
      border-radius: 6px;
      width: 100%;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .learn-more-btn:hover {
      background: linear-gradient(90deg, #bf953f, #fcf6ba, #b38728);
      box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
    }
    
    .btn-text {
      margin-right: 5px;
    }
  `;

  return (
    <div className="container-fluid p-4">
      <style>{bootstrapCSS}</style>
      <style>{customStyles}</style>

      <div className="card-container">
        <div className="row g-4">
          {/* Diamond Alerts Card */}
          <div className="col-12 col-md-6">
            <div className="gold-card">
              <div className="card-logo">
                <i className="bi bi-diamond-fill"></i>
              </div>
              <h2 className="card-title">Diamond Alerts</h2>
              <p className="min-investment">Minimum Investment: $50,000</p>
              <p className="card-description">
                The Diamond Alerts program provides high-net-worth individuals
                with exclusive market insights, real-time alerts, and strategic
                investment opportunities. Our AI-powered analytics ensure
                maximum profitability with precise risk management.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Exclusive market insights
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Real-time trading alerts
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  AI-powered analytics
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Strategic investment opportunities
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Precise risk management
                </li>
              </ul>
              <button className="learn-more-btn">
                <span className="btn-text">Learn More</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Valour Wealth Fund Card */}
          <div className="col-12 col-md-6">
            <div className="gold-card">
              <div className="card-logo">
                <i className="bi bi-graph-up"></i>
              </div>
              <h2 className="card-title">Valour Wealth Fund</h2>
              <p className="min-investment">Minimum Investment: $125,000</p>
              <p className="card-description">
                The Valour Wealth Fund is a premier investment vehicle for elite
                investors seeking long-term financial growth. With a diversified
                portfolio and access to top-tier market strategies, this fund is
                designed for wealth preservation and expansion.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Premier investment vehicle
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Long-term financial growth
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Diversified portfolio
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Top-tier market strategies
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  Wealth preservation and expansion
                </li>
              </ul>
              <button className="learn-more-btn">
                <span className="btn-text">Learn More</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldInvestmentCards;

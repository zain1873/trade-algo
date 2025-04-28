// import React from "react";
// import PortfolioDetails from "./portfolioDetails/PortfolioDetail";
// import HeatmapDetails from "./portfolioDetails/HeatmapDetails";

// function PortfolioComponent() {
//   return (
//     <div className="portfolio-container">
//       <div className="portfolio-header">
//         <div className="portfolio-title">
//           <div className="trophy-icon-container">
//             <i className="bi bi-briefcase"></i>
//           </div>
//         </div>

//         <div>
//           <h2 class="portfolio-title">Portfolio</h2>
//           <p class="portfolio-subtitle">
//             Track and manage your investments with exclusive platinum tools
//           </p>
//         </div>
//       </div>

//       <div className="dashboard-container">
//         <div className="row">
//           {/* Portfolio Summary Section */}
//           <div className="col-lg-8 pe-lg-2">
//             <div className="card summary-card p-0">
//               <div className="card-body">
//                 <h5 className="card-title">Portfolio Summary</h5>
//                 <div className="total-value-section">
//                   <div>
//                     <div className="small">Total Portfolio Value</div>
//                     <div className="total-value">
//                       $245,678.90
//                       <span className="value-change">
//                         <i className="bi bi-arrow-up"></i> +$3,245.67 (+1.34%)
//                       </span>
//                     </div>
//                   </div>
//                   <div className="button-group">
//                     <button className="btn btn-light">
//                       <i className="bi bi-plus"></i> Add Funds
//                     </button>
//                     <button className="btn btn-dark">
//                       <i className="bi bi-bar-chart-line"></i> Analytics
//                     </button>
//                   </div>
//                 </div>

//                 <div className="asset-categories">
//                   <div className="asset-card stocks">
//                     <div className="asset-header">
//                       <span>Stocks</span>
//                       <span className="asset-percentage">45%</span>
//                     </div>
//                     <div className="asset-value">$110,555.51</div>
//                   </div>
//                   <div className="asset-card crypto">
//                     <div className="asset-header">
//                       <span>Crypto</span>
//                       <span className="asset-percentage">30%</span>
//                     </div>
//                     <div className="asset-value">$73,703.67</div>
//                   </div>
//                   <div className="asset-card forex">
//                     <div className="asset-header">
//                       <span>Forex</span>
//                       <span className="asset-percentage">15%</span>
//                     </div>
//                     <div className="asset-value">$36,851.84</div>
//                   </div>
//                   <div className="asset-card commodities">
//                     <div className="asset-header">
//                       <span>Commodities</span>
//                       <span className="asset-percentage">10%</span>
//                     </div>
//                     <div className="asset-value">$24,567.89</div>
//                   </div>
//                 </div>

//                 <div className="chart-container">
//                   {/* This would be your actual chart component */}
//                   <div className="chart-line"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Asset Allocation Section */}
//           <div className="col-lg-4 ps-lg-2">
//             <div className="card allocation-card p-0">
//               <div className="card-body">
//                 <h5 className="card-title">Asset Allocation</h5>

//                 <div className="pie-chart-container">
//                   {/* This would be your actual pie chart component */}
//                   <div className="pie-chart">
//                     <div className="pie-chart-inner"></div>
//                   </div>
//                 </div>

//                 <div className="allocation-breakdown">
//                   <div className="allocation-item">
//                     <div>Stocks</div>
//                     <div>45%</div>
//                   </div>
//                   <div className="allocation-item">
//                     <div>Crypto</div>
//                     <div>30%</div>
//                   </div>
//                   <div className="allocation-item">
//                     <div>Forex</div>
//                     <div>15%</div>
//                   </div>
//                   <div className="allocation-item">
//                     <div>Commodities</div>
//                     <div>10%</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <PortfolioDetails />
//       <HeatmapDetails /> */}
//     </div>
//   );
// }

// export default PortfolioComponent;

import React, { useEffect, useState } from "react";
import axios from "axios";

import PortfolioDetails from "./portfolioDetails/PortfolioDetail";
import HeatmapDetails from "./portfolioDetails/HeatmapDetails";
function PortfolioComponent() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const token = localStorage.getItem("accessToken"); // Assuming you store JWT token here
      const response = await axios.get(
        "https://valourwealthdjango-production.up.railway.app/api/portfolio/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPortfolio(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading portfolio...</div>;
  }

  if (!portfolio) {
    return <div>No portfolio data available.</div>;
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="portfolio-title">
          <div className="trophy-icon-container">
            <i className="bi bi-briefcase"></i>
          </div>
        </div>

        <div>
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-subtitle">
            Track and manage your investments with exclusive platinum tools
          </p>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="row">
          {/* Portfolio Summary Section */}
          <div className="col-lg-8 pe-lg-2">
            <div className="card summary-card p-0">
              <div className="card-body">
                <h5 className="card-title">Portfolio Summary</h5>
                <div className="total-value-section">
                  <div>
                    <div className="small">Total Portfolio Value</div>
                    <div className="total-value">
                      ${parseFloat(portfolio.total_value).toLocaleString()}
                      <span className="value-change">
                        <i className="bi bi-arrow-up"></i> +$
                        {parseFloat(
                          portfolio.total_gain_loss
                        ).toLocaleString()}{" "}
                        ({portfolio.total_gain_loss_percent}%)
                      </span>
                    </div>
                  </div>
                  <div className="button-group">
                    <button className="btn btn-light">
                      <i className="bi bi-plus"></i> Add Funds
                    </button>
                    <button className="btn btn-dark">
                      <i className="bi bi-bar-chart-line"></i> Analytics
                    </button>
                  </div>
                </div>

                <div className="asset-categories">
                  {portfolio.assets.map((asset) => (
                    <div
                      key={asset.id}
                      className={`asset-card ${asset.asset_type}`}
                    >
                      <div className="asset-header">
                        <span>
                          {asset.asset_type.charAt(0).toUpperCase() +
                            asset.asset_type.slice(1)}
                        </span>
                        <span className="asset-percentage">
                          {asset.percentage}%
                        </span>
                      </div>
                      <div className="asset-value">
                        ${parseFloat(asset.value).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="chart-container">
                  {/* Chart will come later */}
                  <div className="chart-line"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Allocation Section */}
          <div className="col-lg-4 ps-lg-2">
            <div className="card allocation-card p-0">
              <div className="card-body">
                <h5 className="card-title">Asset Allocation</h5>

                <div className="pie-chart-container">
                  {/* Pie chart will come later */}
                  <div className="pie-chart">
                    <div className="pie-chart-inner"></div>
                  </div>
                </div>

                <div className="allocation-breakdown">
                  {portfolio.assets.map((asset) => (
                    <div key={asset.id} className="allocation-item">
                      <div>
                        {asset.asset_type.charAt(0).toUpperCase() +
                          asset.asset_type.slice(1)}
                      </div>
                      <div>{asset.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future: PortfolioDetails + HeatmapDetails can be uncommented */}
      <PortfolioDetails />
      <HeatmapDetails />
    </div>
  );
}

export default PortfolioComponent;

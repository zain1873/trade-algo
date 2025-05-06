import React from "react";
import wealthcardimg from "../DashboardSidebarComp/images/wealthseries-1.jpg";
import wealthcardimg2 from "../DashboardSidebarComp/images/wealthseries-2.jpg";

function WealthSeries() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 mb-4">
            <div className="card-wealth-series">
              <div className="wealth-card-img">
                <img src={wealthcardimg} className="obj_fit" alt="Card 1" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card-wealth-series">
              <div className="wealth-card-img">
                <img src={wealthcardimg2} className="obj_fit" alt="Card 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WealthSeries;

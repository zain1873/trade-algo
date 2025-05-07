import React from "react";
import wealthcardimg from "../DashboardSidebarComp/images/wealthseries-1.jpg";
import wealthcardimg2 from "../DashboardSidebarComp/images/wealthseries-2.jpg";
import SalesContactForm from "./sales-form";

function WealthSeries() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card-wealth-series">
              <div
                className="wealth-card-img"
                onClick={() => setShowForm(true)}
              >
                <img
                  src={wealthcardimg}
                  className="obj_fit cursor-pointer"
                  style={{ borderRadius: "20px" }}
                  alt="Card 1"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card-wealth-series">
              <div
                className="wealth-card-img"
                onClick={() => setShowForm(true)}
              >
                <img
                  src={wealthcardimg2}
                  className="obj_fit cursor-pointer"
                  style={{ borderRadius: "20px" }}
                  alt="Card 1"
                />
              </div>
            </div>
          </div>
        </div>
        {showForm && <SalesContactForm onClose={() => setShowForm(false)} />}
      </div>
    </div>
  );
}

export default WealthSeries;

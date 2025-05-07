import React, { useState } from "react";
import "../DashboardSidebarComp/styles/mentorship.css";
import PlatinumCard from "../DashboardSidebarComp/platinumCard";
import platinumIMg from "../DashboardSidebarComp/images/TradeGPT.png"

const Mentorship = ( {darkMode} ) => {

  
  return (
    <div className="container mt-4">
      {/* <PlatinumCard/> */}
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="platinum_img">
              <img className="obj_fit" src={platinumIMg} alt="" />
            </div>
          </div>

          <div class="col-lg-4">
            <div class="platinum_img">
              <img className="obj_fit" src={platinumIMg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;

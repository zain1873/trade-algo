import React from "react";
import toolImg from "../DashboardSidebarComp/images/live-option.jpg";


function LiveOption() {
  return (
    <section className="scanner_tool pt-0">
      <div className="container">
        <div className="col-lg-12">
          <div className="tool-img">
            <img className="obj_fit" src={toolImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveOption;

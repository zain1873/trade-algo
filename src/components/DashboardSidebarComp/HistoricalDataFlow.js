import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HistoricalDataFlow = () => {
  const [activeTab, setActiveTab] = useState("largeCaps");

  return (
    <div className="container mt-4">
      <h2>Historic ATS Gainers & Losers</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs gap-2 mt-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "largeCaps" ? "active" : ""}`}
            onClick={() => setActiveTab("largeCaps")}
          >
            Large Caps
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "mediumCaps" ? "active" : ""}`}
            onClick={() => setActiveTab("mediumCaps")}
          >
            Medium Caps
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "smallCaps" ? "active" : ""}`}
            onClick={() => setActiveTab("smallCaps")}
          >
            Small Caps
          </button>
        </li>
      </ul>

      {/* Table */}
      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>TICKER</th>
              <th>FROM</th>
              <th>TO</th>
              <th>IRREGULAR VOL</th>
              <th>PERCENT CHANGE</th>
            </tr>
          </thead>
          <tbody>
            {activeTab === "largeCaps" && (
              <>
                <tr>
                  <td>LLY</td>
                  <td>
                    $857.21 <br /> <small>Feb 19th 8:15 AM</small>
                  </td>
                  <td>
                    $871.53 <br /> <small>Feb 19th 12:36 PM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">392.99x</span>
                  </td>
                  <td>
                    +1.67% <br /> <small>4 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>GRMN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>

                <tr>
                  <td>CTAS</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>TXN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>DY</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>NXPI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>ADI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>TPL</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>QCOM</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MMC</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>BKNG</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MA</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>COF</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>WM</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>CMI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>PEN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MDGL</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
              </>
            )}
            {activeTab === "mediumCaps" && (
              <>
                <tr>
                  <td>CTAS</td>
                  <td>
                    $857.21 <br /> <small>Feb 19th 8:15 AM</small>
                  </td>
                  <td>
                    $871.53 <br /> <small>Feb 19th 12:36 PM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">392.99x</span>
                  </td>
                  <td>
                    +1.67% <br /> <small>4 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>TXN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>

                <tr>
                  <td>CTAS</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>TXN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>DY</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>NXPI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>ADI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>TPL</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>QCOM</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MMC</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>BKNG</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MA</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>COF</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>WM</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>CMI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>PEN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MDGL</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
              </>
            )}
            {activeTab === "smallCaps" && (
              <>
                <tr>
                  <td>LLY</td>
                  <td>
                    $857.21 <br /> <small>Feb 19th 8:15 AM</small>
                  </td>
                  <td>
                    $871.53 <br /> <small>Feb 19th 12:36 PM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">392.99x</span>
                  </td>
                  <td>
                    +1.67% <br /> <small>4 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>GRMN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>

                <tr>
                  <td>CTAS</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>TXN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>DY</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>NXPI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>ADI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>TPL</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>QCOM</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MMC</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>BKNG</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MA</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>COF</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>WM</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>CMI</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>PEN</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
                <tr>
                  <td>MDGL</td>
                  <td>
                    $214.80 <br /> <small>Feb 19th 8:03 AM</small>
                  </td>
                  <td>
                    $242.06 <br /> <small>Feb 20th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">250.53x</span>
                  </td>
                  <td>
                    +12.69% <br /> <small>1 day</small>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalDataFlow;

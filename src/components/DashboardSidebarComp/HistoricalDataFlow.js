import React, { useState } from "react";
import "../DashboardSidebarComp/styles/historicalDataFlow.css";

const HistoricalDataFlow = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("largeCaps");

  return (
    <div
      className="container"
      style={{
        backgroundColor: darkMode ? "#000000" : "#ffffff", // Full black background
        color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
        padding: "20px",
        borderRadius: "10px",
        border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
      }}
    >
      <h2>Historic ATS Gainers & Losers</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs gap-2 mt-4 historic-table">
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
        <table className="table table-bordered table_history">
          <thead
            className="table-primary"
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff", // Pure black in dark mode
              color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
              border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
            }}
          >
            <tr>
              <th>TICKER</th>
              <th>FROM</th>
              <th>TO</th>
              <th>IRREGULAR VOL</th>
              <th>PERCENT CHANGE</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff", // Pure black in dark mode
              color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
              border: darkMode ? "1px solid #444" : "1px solid #ddd", // Smooth borders
            }}
             >
            {activeTab === "largeCaps" && (
            <>
              <tr>
                <td>DRI</td>
                <td>
                  $187.87
                  <br /> <small>Mar 20th 8:27 AM</small>
                </td>
                <td>
                  $188.89 <br /> <small>Mar 20th 9:57 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2702.53x</span>
                </td>
                <td>
                  +0.86% <br /> <small>1.5 hours</small>
                </td>
              </tr>
              <tr>
                <td>PODD</td>
                <td>
                  $265.55
                  <br /> <small>Mar 20th 8:02 AM</small>
                </td>
                <td>
                  $265.56 <br /> <small>Mar 20th 9:48 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">254.54x</span>
                </td>
                <td>
                  +0.01% <br /> <small>1 hour</small>
                </td>
              </tr>
              <tr>
                <td>MDY</td>
                <td>
                  $535.97
                  <br /> <small>Mar 20th 8:02 AM</small>
                </td>
                <td>
                  $546.08 <br /> <small>Mar 20th 9:34 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">25.86x</span>
                </td>
                <td>
                  +0.02% <br /> <small>1.5 hours</small>
                </td>
              </tr>
              <tr>
                <td>FLUT</td>
                <td>
                  $36.63
                  <br /> <small>Mar 20th 8:16 AM</small>
                </td>
                <td>
                  $37.42 <br /> <small>Mar 20th 10:21 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">14.46x</span>
                </td>
                <td>
                  +2.16% <br /> <small>2 hours</small>
                </td>
              </tr>
              <tr>
                <td>BLD</td>
                <td>
                  $336.03
                  <br /> <small>Mar 20th 8:03 AM</small>
                </td>
                <td>
                  $358.49 <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">11.61x</span>
                </td>
                <td>
                  +0.75% <br /> <small>29 minutes</small>
                </td>
              </tr>
              <tr>
                <td>PNC</td>
                <td>
                  $171.79
                  <br /> <small>Mar 20th 8:44 AM</small>
                </td>
                <td>
                  $172.50 <br /> <small>Mar 20th 10:02 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">10.9x</span>
                </td>
                <td>
                  +0.41% <br /> <small>1.5 hours</small>
                </td>
              </tr>
              <tr>
                <td>CYRX</td>
                <td>
                  $104.08
                  <br /> <small>Mar 20th 8:08 AM</small>
                </td>
                <td>
                  $105.54 <br /> <small>Mar 21st 8:03 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">10.64x</span>
                </td>
                <td>
                  +1.27% <br /> <small>23 hours</small>
                </td>
              </tr>
              <tr>
                <td>TYL</td>
                <td>
                  $579.18
                  <br /> <small>Mar 20th 8:35 AM</small>
                </td>
                <td>
                  $579.55 <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">9.52x</span>
                </td>
                <td>
                  +0.07% <br /> <small>57 minutes</small>
                </td>
              </tr>
              <tr>
                <td>HEI</td>
                <td>
                  $185.39
                  <br /> <small>Mar 20th 9:10 AM</small>
                </td>
                <td>
                  $186.88 <br /> <small>Mar 20th 9:16 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">9.08x</span>
                </td>
                <td>
                  +0.8% <br /> <small>6 minutes</small>
                </td>
              </tr>
              <tr>
                <td>ZS</td>
                <td>
                  $203.93
                  <br /> <small>Mar 20th 8:14 AM</small>
                </td>
                <td>
                  $204.03 <br /> <small>Mar 20th 8:21 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">6.46x</span>
                </td>
                <td>
                  +0.77% <br /> <small>7 minutes</small>
                </td>
              </tr>
              <tr>
                <td>ADP</td>
                <td>
                  $259.40
                  <br /> <small>Mar 20th 8:03 AM</small>
                </td>
                <td>
                  $259.35 <br /> <small>Mar 20th 9:04 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">5.8x</span>
                </td>
                <td>
                  -0.77% <br /> <small>1 hour</small>
                </td>
              </tr>
              <tr>
                <td>LOW</td>
                <td>
                  $225.52
                  <br /> <small>Mar 20th 8:30 AM</small>
                </td>
                <td>
                  $225.75 <br /> <small>Mar 20th 9:46 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">5.78x</span>
                </td>
                <td>
                  +0.10% <br /> <small>26 minutes</small>
                </td>
              </tr>
              <tr>
                <td>ROK</td>
                <td>
                  $280.02
                  <br /> <small>Mar 20th 8:30 AM</small>
                </td>
                <td>
                  $280.18 <br /> <small>Mar 20th 9:25 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">5.6x</span>
                </td>
                <td>
                  +0.06% <br /> <small>50 minutes</small>
                </td>
              </tr>
              <tr>
                <td>MSGS</td>
                <td>
                  $93.69
                  <br /> <small>Mar 20th 9:56 AM</small>
                </td>
                <td>
                  $94.11 <br /> <small>Mar 21st 8:03 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">5.09x</span>
                </td>
                <td>
                  +0.45% <br /> <small>22 hours</small>
                </td>
              </tr>
              <tr>
                <td>PH</td>
                <td>
                  $560.37
                  <br /> <small>Mar 20th 8:20 AM</small>
                </td>
                <td>
                  $562.36 <br /> <small>Mar 20th 9:18 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">5.07x</span>
                </td>
                <td>
                  +0.10% <br /> <small>53 minutes</small>
                </td>
              </tr>
              <tr>
                <td>FI</td>
                <td>
                  $220.30
                  <br /> <small>Mar 20th 8:34 AM</small>
                </td>
                <td>
                  $222.26 <br /> <small>Mar 20th 1:28 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">5.06x</span>
                </td>
                <td>
                  +0.72% <br /> <small>5 hours</small>
                </td>
              </tr>
              <tr>
                <td>MLM</td>
                <td>
                  $489.96
                  <br /> <small>Mar 20th 8:34 AM</small>
                </td>
                <td>
                  $490.36 <br /> <small>Mar 20th 9:48 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">5.02x</span>
                </td>
                <td>
                  +0.08% <br /> <small>1 hour</small>
                </td>
              </tr>
              <tr>
                <td>KNSL</td>
                <td>
                  $453.27
                  <br /> <small>Mar 20th 8:03 AM</small>
                </td>
                <td>
                  $451.48 <br /> <small>Mar 20th 9:10 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">4.9x</span>
                </td>
                <td>
                  +0.04% <br /> <small>7 minutes</small>
                </td>
              </tr>
              <tr>
                <td>ACN</td>
                <td>
                  $339.70
                  <br /> <small>Mar 20th 9:36 AM</small>
                </td>
                <td>
                  $340.98 <br /> <small>Mar 21st 8:03 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">4.16x</span>
                </td>
                <td>
                  +0.6% <br /> <small>22 hours</small>
                </td>
              </tr>
              <tr>
                <td>RSP</td>
                <td>
                  $175.31
                  <br /> <small>Mar 20th 8:26 AM</small>
                </td>
                <td>
                  $175.32 <br /> <small>Mar 20th 9:03 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">3.42x</span>
                </td>
                <td>
                  +0.10% <br /> <small>37 minutes</small>
                </td>
              </tr>
              <tr>
                <td>WCC</td>
                <td>
                  $195.27
                  <br /> <small>Mar 20th 8:10 AM</small>
                </td>
                <td>
                  $195.54 <br /> <small>Mar 20th 10:01 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">3.30x</span>
                </td>
                <td>
                  +0.44% <br /> <small>2 hours</small>
                </td>
              </tr>
              <tr>
                <td>LULU</td>
                <td>
                  $329.48
                  <br /> <small>Mar 20th 8:44 AM</small>
                </td>
                <td>
                  $329.71 <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">3.29x</span>
                </td>
                <td>
                  +0.07% <br /> <small>48 minutes</small>
                </td>
              </tr>
              <tr>
                <td>NFLX</td>
                <td>
                  $598.75
                  <br /> <small>Mar 20th 8:32 AM</small>
                </td>
                <td>
                  $599.82 <br /> <small>Mar 20th 9:44 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">3.2x</span>
                </td>
                <td>
                  +0.31% <br /> <small>51 minutes</small>
                </td>
              </tr>
              <tr>
                <td>ALL</td>
                <td>
                  $162.69
                  <br /> <small>Mar 20th 8:35 AM</small>
                </td>
                <td>
                  $162.48 <br /> <small>Mar 20th 3:59 PM</small>
                </td>
                <td>
                  <span className="badge bg-success">3.2x</span>
                </td>
                <td>
                  -0.13% <br /> <small>7 hours</small>
                </td>
              </tr>
              <tr>
                <td>MTN</td>
                <td>
                  $193.77
                  <br /> <small>Mar 20th 8:03 AM</small>
                </td>
                <td>
                  $194.80 <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.89x</span>
                </td>
                <td>
                  +0.55% <br /> <small>29 minutes</small>
                </td>
              </tr>
              <tr>
                <td>CLH</td>
                <td>
                  $186.85
                  <br /> <small>Mar 20th 8:04 AM</small>
                </td>
                <td>
                  $186.75 <br /> <small>Mar 20th 1:27 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.57x</span>
                </td>
                <td>
                  -0.04% <br /> <small>5 hours</small>
                </td>
              </tr>
              <tr>
                <td>WM</td>
                <td>
                  $227.41
                  <br /> <small>Mar 20th 8:16 AM</small>
                </td>
                <td>
                  $228.06 <br /> <small>Mar 20th 10:33 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.36x</span>
                </td>
                <td>
                  +0.29% <br /> <small>2 hours</small>
                </td>
              </tr>
              <tr>
                <td>UTHR</td>
                <td>
                  $376.64
                  <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  $378.89 <br /> <small>Mar 20th 9:41 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.33x</span>
                </td>
                <td>
                  +0.71% <br /> <small>9 minutes</small>
                </td>
              </tr>
              <tr>
                <td>DE</td>
                <td>
                  $407.80
                  <br /> <small>Mar 20th 10:03 AM</small>
                </td>
                <td>
                  $407.93 <br /> <small>Mar 20th 10:41 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.3x</span>
                </td>
                <td>
                  +0.03% <br /> <small>38 minutes</small>
                </td>
              </tr>
              <tr>
                <td>GS</td>
                <td>
                  $397.48
                  <br /> <small>Mar 20th 8:08 AM</small>
                </td>
                <td>
                  $397.99 <br /> <small>Mar 20th 9:31 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.28x</span>
                </td>
                <td>
                  +0.06% <br /> <small>1 hour</small>
                </td>
              </tr>
              <tr>
                <td>INBX</td>
                <td>
                  $175.43
                  <br /> <small>Mar 20th 8:10 AM</small>
                </td>
                <td>
                  $177.99 <br /> <small>Mar 20th 10:04 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.24x</span>
                </td>
                <td>
                  +0.43% <br /> <small>2 hours</small>
                </td>
              </tr>
              <tr>
                <td>TT</td>
                <td>
                  $330.38
                  <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  $331.13 <br /> <small>Mar 20th 11:31 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2.22x</span>
                </td>
                <td>
                  +0.43% <br /> <small>2 hours</small>
                </td>
              </tr>
              <tr>
                <td>ESS</td>
                <td>
                  $298.08
                  <br /> <small>Mar 20th 8:34 AM</small>
                </td>
                <td>
                  $298.54 <br /> <small>Mar 20th 8:44 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">2x</span>
                </td>
                <td>
                  +0.16% <br /> <small>10 minutes</small>
                </td>
              </tr>
              <tr>
                <td>AGM</td>
                <td>
                  $86.68
                  <br /> <small>Mar 20th 12:21 PM</small>
                </td>
                <td>
                  $86.72 <br /> <small>Mar 20th 2:41 PM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.88x</span>
                </td>
                <td>
                  +0.05% <br /> <small>2 hours</small>
                </td>
              </tr>
              <tr>
                <td>DEF</td>
                <td>
                  $77.38
                  <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  $77.98 <br /> <small>Mar 20th 9:31 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.87x</span>
                </td>
                <td>
                  +0.58% <br /> <small>18 minutes</small>
                </td>
              </tr>
              <tr>
                <td>RGLD</td>
                <td>
                  $124.77
                  <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  $124.91 <br /> <small>Mar 20th 10:33 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.87x</span>
                </td>
                <td>
                  +0.03% <br /> <small>1 minute</small>
                </td>
              </tr>
              <tr>
                <td>AN</td>
                <td>
                  $160.73
                  <br /> <small>Mar 20th 10:03 AM</small>
                </td>
                <td>
                  $160.71 <br /> <small>Mar 20th 10:10 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.82x</span>
                </td>
                <td>
                  -0.59% <br /> <small>7 minutes</small>
                </td>
              </tr>
              <tr>
                <td>ISRG</td>
                <td>
                  $493.37
                  <br /> <small>Mar 20th 9:43 AM</small>
                </td>
                <td>
                  $495.38 <br /> <small>Mar 20th 9:46 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.79x</span>
                </td>
                <td>
                  +0.41% <br /> <small>3 minutes</small>
                </td>
              </tr>
              <tr>
                <td>CDNS</td>
                <td>
                  $305.23
                  <br /> <small>Mar 20th 8:14 AM</small>
                </td>
                <td>
                  $305.18 <br /> <small>Mar 20th 9:19 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.77x</span>
                </td>
                <td>
                  -0.02% <br /> <small>1 hour</small>
                </td>
              </tr>
              <tr>
                <td>LDPE</td>
                <td>
                  $170.31
                  <br /> <small>Mar 20th 11:30 AM</small>
                </td>
                <td>
                  $170.32 <br /> <small>Mar 20th 12:25 PM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.76x</span>
                </td>
                <td>
                  +0.41% <br /> <small>49 minutes</small>
                </td>
              </tr>
              <tr>
                <td>AMP</td>
                <td>
                  $447.18
                  <br /> <small>Mar 20th 8:15 AM</small>
                </td>
                <td>
                  $450.51 <br /> <small>Mar 20th 10:56 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.72x</span>
                </td>
                <td>
                  +0.41% <br /> <small>3 hours</small>
                </td>
              </tr>
              <tr>
                <td>LIN</td>
                <td>
                  $459.00
                  <br /> <small>Mar 20th 9:38 AM</small>
                </td>
                <td>
                  $459.10 <br /> <small>Mar 20th 10:06 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.68x</span>
                </td>
                <td>
                  +0.22% <br /> <small>1 hour</small>
                </td>
              </tr>
              <tr>
                <td>CVX</td>
                <td>
                  $153.39
                  <br /> <small>Mar 20th 9:43 AM</small>
                </td>
                <td>
                  $153.73 <br /> <small>Mar 20th 9:48 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.67x</span>
                </td>
                <td>
                  +0.22% <br /> <small>5 minutes</small>
                </td>
              </tr>
              <tr>
                <td>SAP</td>
                <td>
                  $191.99
                  <br /> <small>Mar 20th 11:36 AM</small>
                </td>
                <td>
                  $192.18 <br /> <small>Mar 21st 8:03 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.64x</span>
                </td>
                <td>
                  +0.06% <br /> <small>20 hours</small>
                </td>
              </tr>
              <tr>
                <td>KLR</td>
                <td>
                  $213.35
                  <br /> <small>Mar 20th 9:11 AM</small>
                </td>
                <td>
                  $214.45 <br /> <small>Mar 20th 10:03 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.63x</span>
                </td>
                <td>
                  +0.40% <br /> <small>12 minutes</small>
                </td>
              </tr>
              <tr>
                <td>MSCI</td>
                <td>
                  $558.30
                  <br /> <small>Mar 20th 9:46 AM</small>
                </td>
                <td>
                  $559.05 <br /> <small>Mar 20th 10:46 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.6x</span>
                </td>
                <td>
                  +0.10% <br /> <small>45 minutes</small>
                </td>
              </tr>
              <tr>
                <td>EME</td>
                <td>
                  $402.02
                  <br /> <small>Mar 20th 10:31 AM</small>
                </td>
                <td>
                  $403.29 <br /> <small>Mar 20th 1:42 PM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.6x</span>
                </td>
                <td>
                  +0.17% <br /> <small>3 hours</small>
                </td>
              </tr>
              <tr>
                <td>TSM</td>
                <td>
                  $175.74
                  <br /> <small>Mar 20th 8:02 AM</small>
                </td>
                <td>
                  $175.75 <br /> <small>Mar 20th 8:34 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.57x</span>
                </td>
                <td>
                  +0.01% <br /> <small>31 minutes</small>
                </td>
              </tr>
              <tr>
                <td>OTLS</td>
                <td>
                  $16.28
                  <br /> <small>Mar 20th 10:10 AM</small>
                </td>
                <td>
                  $16.40 <br /> <small>Mar 20th 2:45 PM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.56x</span>
                </td>
                <td>
                  +0.77% <br /> <small>4 hours</small>
                </td>
              </tr>
              <tr>
                <td>PGR</td>
                <td>
                  $276.83
                  <br /> <small>Mar 20th 8:46 AM</small>
                </td>
                <td>
                  $277.82 <br /> <small>Mar 20th 9:56 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.5x</span>
                </td>
                <td>
                  +0.31% <br /> <small>10 minutes</small>
                </td>
              </tr>
              <tr>
                <td>SPY</td>
                <td>
                  $517.02
                  <br /> <small>Mar 20th 8:31 AM</small>
                </td>
                <td>
                  $518.80 <br /> <small>Mar 20th 9:58 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.4x</span>
                </td>
                <td>
                  +0.34% <br /> <small>1 hour</small>
                </td>
              </tr>
              <tr>
                <td>AAPL</td>
                <td>
                  $170.25
                  <br /> <small>Mar 20th 8:02 AM</small>
                </td>
                <td>
                  $170.32 <br /> <small>Mar 20th 8:34 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.22x</span>
                </td>
                <td>
                  +0.03% <br /> <small>31 minutes</small>
                </td>
              </tr>
              <tr>
                <td>QQQ</td>
                <td>
                  $479.42
                  <br /> <small>Mar 20th 9:32 AM</small>
                </td>
                <td>
                  $479.80 <br /> <small>Mar 20th 9:36 AM</small>
                </td>
                <td>
                  <span className="badge bg-success">1.19x</span>
                </td>
                <td>
                  +0.51% <br /> <small>3 minutes</small>
                </td>
              </tr>
            </>
          )}

            {activeTab === "mediumCaps" && (
              <>
                <tr>
                  <td>COHR</td>
                  <td>
                    $62.84 <br /> <small>Mar 11th 8:06 AM</small>
                  </td>
                  <td>
                    $64.92 <br /> <small>Mar 11th 11:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">233.49x</span>
                  </td>
                  <td>
                    +3.32% <br /> <small>2 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>
                    $56.54 <br /> <small>Mar 11th 9:16 AM</small>
                  </td>
                  <td>
                    $56.72 <br /> <small>Mar 11th 9:54 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">184.11x</span>
                  </td>
                  <td>
                    +0.32% <br /> <small>38 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>RBLX</td>
                  <td>
                    $53.61 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    $54.73 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">49.69x</span>
                  </td>
                  <td>
                    +2.10% <br /> <small>22 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>DG</td>
                  <td>
                    $82.83 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $82.87 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">17.52x</span>
                  </td>
                  <td>
                    +0.05% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>DEO</td>
                  <td>
                    $112.09 <br /> <small>Mar 11th 8:20 AM</small>
                  </td>
                  <td>
                    $112.16 <br /> <small>Mar 11th 8:54 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">16.57x</span>
                  </td>
                  <td>
                    +0.06% <br /> <small>33 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>DOCU</td>
                  <td>
                    $79.47 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $80.82 <br /> <small>Mar 11th 11:25 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">16.02x</span>
                  </td>
                  <td>
                    +1.70% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>CCK</td>
                  <td>
                    $91.24 <br /> <small>Mar 11th 8:34 AM</small>
                  </td>
                  <td>
                    $91.33 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.62x</span>
                  </td>
                  <td>
                    +0.10% <br /> <small>57 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>MMM</td>
                  <td>
                    $147.56 <br /> <small>Mar 11th 8:26 AM</small>
                  </td>
                  <td>
                    $147.58 <br /> <small>Mar 11th 8:34 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.07x</span>
                  </td>
                  <td>
                    +0.01% <br /> <small>8 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>IRM</td>
                  <td>
                    $84.00 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $84.18 <br /> <small>Mar 11th 10:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">7.91x</span>
                  </td>
                  <td>
                    +0.21% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>ALB</td>
                  <td>
                    $76.33 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $76.36 <br /> <small>Mar 11th 8:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">7.85x</span>
                  </td>
                  <td>
                    +0.04% <br /> <small>39 minutes</small>
                  </td>
                </tr>
              </>
            )}

            {activeTab === "smallCaps" && (
              <>
                <tr>
                  <td>HCC</td>
                  <td>
                    $47.05 <br /> <small>Mar 11th 8:19 AM</small>
                  </td>
                  <td>
                    $47.07 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">190.36x</span>
                  </td>
                  <td>
                    +0.04% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>CUTR</td>
                  <td>
                    $0.12 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $0.16 <br /> <small>Mar 11th 11:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">58.28x</span>
                  </td>
                  <td>
                    +34.24% <br /> <small>2 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>HAL</td>
                  <td>
                    $24.95 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $25.03 <br /> <small>Mar 11th 9:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">29.9x</span>
                  </td>
                  <td>
                    +0.32% <br /> <small>8 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>HLF</td>
                  <td>
                    $8.90 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $8.91 <br /> <small>Mar 11th 8:34 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">25.44x</span>
                  </td>
                  <td>
                    +0.06% <br /> <small>29 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>HSAI</td>
                  <td>
                    $19.88 <br /> <small>Mar 11th 9:35 AM</small>
                  </td>
                  <td>
                    $24.12 <br /> <small>Mar 12th 8:15 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">15.71x</span>
                  </td>
                  <td>
                    +21.33% <br /> <small>22 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>EPD</td>
                  <td>
                    $33.62 <br /> <small>Mar 11th 8:06 AM</small>
                  </td>
                  <td>
                    $33.64 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">14.73x</span>
                  </td>
                  <td>
                    +0.06% <br /> <small>1 hour</small>
                  </td>
                </tr>
                <tr>
                  <td>COMP</td>
                  <td>
                    $8.57 <br /> <small>Mar 11th 9:10 AM</small>
                  </td>
                  <td>
                    $8.58 <br /> <small>Mar 11th 9:31 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">14.35x</span>
                  </td>
                  <td>
                    +0.12% <br /> <small>20 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>VNET</td>
                  <td>
                    $11.43 <br /> <small>Mar 11th 8:04 AM</small>
                  </td>
                  <td>
                    $11.43 <br /> <small>Mar 11th 8:44 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">13.14x</span>
                  </td>
                  <td>
                    +0.04% <br /> <small>39 minutes</small>
                  </td>
                </tr>
                <tr>
                  <td>ASAN</td>
                  <td>
                    $12.18 <br /> <small>Mar 11th 10:56 AM</small>
                  </td>
                  <td>
                    $12.65 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">11.99x</span>
                  </td>
                  <td>
                    +3.86% <br /> <small>21 hours</small>
                  </td>
                </tr>
                <tr>
                  <td>SFIX</td>
                  <td>
                    $4.15 <br /> <small>Mar 11th 8:44 AM</small>
                  </td>
                  <td>
                    $4.21 <br /> <small>Mar 12th 8:03 AM</small>
                  </td>
                  <td>
                    <span className="badge bg-success">10.45x</span>
                  </td>
                  <td>
                    +1.45% <br /> <small>23 hours</small>
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

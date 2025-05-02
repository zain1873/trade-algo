import React, { useState } from "react";

import "../DashboardSidebarComp/styles/TradeAlertsTable.css";

const TradeAlertsTable = () => {
  const [activeTab, setActiveTab] = useState("Auto");

  // Sample data for each tab category
  const tabData = {
    Auto: [
      {
        time: "May 2nd 2:26 PM",
        ticker: "SE",
        company: "Sea Limited American Depositary",
        volume: "1.6x",
        price: "$142.96",
      },
      {
        time: "May 2nd 2:26 PM",
        ticker: "UAL",
        company: "United Airlines Holdings, Inc.",
        volume: "1.88x",
        price: "$75.06",
      },
      {
        time: "May 2nd 2:16 PM",
        ticker: "BABA",
        company: "Alibaba Group Holding Limited",
        volume: "2.11x",
        price: "$126.10",
      },
      {
        time: "May 2nd 1:51 PM",
        ticker: "CW",
        company: "Curtiss-Wright Corporation",
        volume: "1.84x",
        price: "$357.99",
      },
      {
        time: "May 2nd 1:21 PM",
        ticker: "JLL",
        company: "Jones Lang LaSalle Incorporated",
        volume: "1.57x",
        price: "$236.14",
      },
      {
        time: "May 2nd 1:05 PM",
        ticker: "LDOS",
        company: "Leidos Holdings, Inc. Common Stock",
        volume: "1.54x",
        price: "$148.51",
      },
      {
        time: "May 2nd 1:01 PM",
        ticker: "SXI",
        company: "Standex International Corporation",
        volume: "1.54x",
        price: "$157.80",
      },
      {
        time: "May 2nd 12:51 PM",
        ticker: "SITM",
        company: "SiTime Corporation - Common Stock",
        volume: "1.5x",
        price: "$167.21",
      },
      {
        time: "May 2nd 12:36 PM",
        ticker: "COF",
        company: "Capital One Financial Corporation",
        volume: "1.55x",
        price: "$188.07",
      },
    ],
    "Large Caps": [
      {
        time: "May 2nd 3:15 PM",
        ticker: "AAPL",
        company: "Apple Inc.",
        volume: "2.3x",
        price: "$182.53",
      },
      {
        time: "May 2nd 3:02 PM",
        ticker: "MSFT",
        company: "Microsoft Corporation",
        volume: "1.75x",
        price: "$415.22",
      },
      {
        time: "May 2nd 2:48 PM",
        ticker: "AMZN",
        company: "Amazon.com Inc.",
        volume: "1.92x",
        price: "$183.95",
      },
      {
        time: "May 2nd 2:30 PM",
        ticker: "GOOGL",
        company: "Alphabet Inc.",
        volume: "1.63x",
        price: "$171.77",
      },
      {
        time: "May 2nd 1:47 PM",
        ticker: "META",
        company: "Meta Platforms Inc.",
        volume: "2.05x",
        price: "$476.20",
      },
      {
        time: "May 2nd 1:22 PM",
        ticker: "TSLA",
        company: "Tesla Inc.",
        volume: "2.45x",
        price: "$177.84",
      },
    ],
    "Medium Caps": [
      {
        time: "May 2nd 3:22 PM",
        ticker: "ETSY",
        company: "Etsy Inc.",
        volume: "2.7x",
        price: "$63.45",
      },
      {
        time: "May 2nd 2:54 PM",
        ticker: "SNAP",
        company: "Snap Inc.",
        volume: "3.1x",
        price: "$16.29",
      },
      {
        time: "May 2nd 2:10 PM",
        ticker: "PINS",
        company: "Pinterest Inc.",
        volume: "1.9x",
        price: "$42.78",
      },
      {
        time: "May 2nd 1:38 PM",
        ticker: "ROKU",
        company: "Roku Inc.",
        volume: "2.4x",
        price: "$58.96",
      },
      {
        time: "May 2nd 12:45 PM",
        ticker: "PLTR",
        company: "Palantir Technologies Inc.",
        volume: "3.3x",
        price: "$24.32",
      },
    ],
    "Small Caps": [
      {
        time: "May 2nd 3:05 PM",
        ticker: "BNGO",
        company: "Bionano Genomics Inc.",
        volume: "4.2x",
        price: "$1.12",
      },
      {
        time: "May 2nd 2:41 PM",
        ticker: "VZIO",
        company: "VIZIO Holding Corp.",
        volume: "3.8x",
        price: "$11.25",
      },
      {
        time: "May 2nd 1:59 PM",
        ticker: "CLSK",
        company: "CleanSpark Inc.",
        volume: "5.1x",
        price: "$16.77",
      },
      {
        time: "May 2nd 1:33 PM",
        ticker: "BLNK",
        company: "Blink Charging Co.",
        volume: "3.6x",
        price: "$2.95",
      },
      {
        time: "May 2nd 12:27 PM",
        ticker: "MVIS",
        company: "MicroVision Inc.",
        volume: "4.5x",
        price: "$0.78",
      },
      {
        time: "May 2nd 11:52 AM",
        ticker: "EXPR",
        company: "Express Inc.",
        volume: "6.2x",
        price: "$0.92",
      },
    ],
  };

  // Function to handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="ats-container p-0 container">
      <h2 className="theme-title mb-4">ATS Irregular Activity Alerts</h2>

      {/* Tabs */}
      <div className="tabs-container ">
        {["Large Caps", "Medium Caps", "Small Caps"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="table-container table_history">
        <table className="alerts-table">
          <thead>
            <tr>
              <th className="time-col">
                TIME ENTERED
                <i className="arrow-down"></i>
              </th>
              <th>TICKER</th>
              <th>COMPANY NAME</th>
              <th>IRREGULAR VOLUME</th>
              <th>PRICE DETECTED</th>
            </tr>
          </thead>
          <tbody>
            {tabData[activeTab].map((alert, index) => (
              <tr key={index}>
                <td>{alert.time}</td>
                <td className="ticker-col">{alert.ticker}</td>
                <td>{alert.company}</td>
                <td className="volume-col">{alert.volume}</td>
                <td>{alert.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart and settings icons */}
      <div className="action-buttons">
        <button className="chart-btn">
          <span className="chart-icon"></span>
        </button>
        <button className="settings-btn">
          <span className="settings-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default TradeAlertsTable;

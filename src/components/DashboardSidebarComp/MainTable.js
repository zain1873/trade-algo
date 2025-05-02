import React, { useState } from "react";

import "../DashboardSidebarComp/styles/mainTable.css";

const MainTable = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("intraday");
  const [activeCapSize, setActiveCapSize] = useState("auto");

  // Large cap stocks data
  const largeCapData = [
    {
      ticker: "AAPL",
      sharePrice: "$183.79",
      performance: "+5.92%",
      change: "+10.28",
      newsSentiment: 42,
      aiScore: "71%",
      darkPoolActivity: "+124.63%",
      callRatio: "75%",
      marketCap: "$2.88T",
      shareVolume: "18.7M",
    },
    {
      ticker: "MSFT",
      sharePrice: "$427.12",
      performance: "+8.75%",
      change: "+34.50",
      newsSentiment: 65,
      aiScore: "78%",
      darkPoolActivity: "+187.45%",
      callRatio: "82%",
      marketCap: "$3.17T",
      shareVolume: "22.3M",
    },
    {
      ticker: "GOOG",
      sharePrice: "$174.12",
      performance: "+4.63%",
      change: "+7.70",
      newsSentiment: 31,
      aiScore: "72%",
      darkPoolActivity: "+115.38%",
      callRatio: "77%",
      marketCap: "$2.19T",
      shareVolume: "12.8M",
    },
    {
      ticker: "AMZN",
      sharePrice: "$189.35",
      performance: "+4.81%",
      change: "+8.69",
      newsSentiment: 38,
      aiScore: "68%",
      darkPoolActivity: "+138.92%",
      callRatio: "80%",
      marketCap: "$1.97T",
      shareVolume: "14.5M",
    },
    {
      ticker: "META",
      sharePrice: "$497.65",
      performance: "+5.36%",
      change: "+25.29",
      newsSentiment: 45,
      aiScore: "82%",
      darkPoolActivity: "+176.93%",
      callRatio: "85%",
      marketCap: "$1.27T",
      shareVolume: "15.1M",
    },
  ];

  // Medium cap stocks data
  const mediumCapData = [
    {
      ticker: "ETSY",
      sharePrice: "$68.23",
      performance: "+7.15%",
      change: "+4.55",
      newsSentiment: 27,
      aiScore: "58%",
      darkPoolActivity: "+145.22%",
      callRatio: "72%",
      marketCap: "$8.1B",
      shareVolume: "3.5M",
    },
    {
      ticker: "PINS",
      sharePrice: "$42.87",
      performance: "+6.33%",
      change: "+2.55",
      newsSentiment: 31,
      aiScore: "67%",
      darkPoolActivity: "+128.91%",
      callRatio: "81%",
      marketCap: "$29.3B",
      shareVolume: "5.7M",
    },
    {
      ticker: "SNAP",
      sharePrice: "$15.42",
      performance: "+4.28%",
      change: "+0.63",
      newsSentiment: 12,
      aiScore: "54%",
      darkPoolActivity: "+98.45%",
      callRatio: "65%",
      marketCap: "$25.4B",
      shareVolume: "7.9M",
    },
    {
      ticker: "ROKU",
      sharePrice: "$57.34",
      performance: "+8.92%",
      change: "+4.70",
      newsSentiment: 19,
      aiScore: "63%",
      darkPoolActivity: "+211.17%",
      callRatio: "88%",
      marketCap: "$8.2B",
      shareVolume: "4.3M",
    },
    {
      ticker: "RBLX",
      sharePrice: "$39.12",
      performance: "+5.48%",
      change: "+2.03",
      newsSentiment: 15,
      aiScore: "61%",
      darkPoolActivity: "+157.36%",
      callRatio: "79%",
      marketCap: "$24.5B",
      shareVolume: "5.2M",
    },
  ];

  // Small cap stocks data
  const smallCapData = [
    {
      ticker: "FUBO",
      sharePrice: "$2.67",
      performance: "+12.18%",
      change: "+0.29",
      newsSentiment: 23,
      aiScore: "71%",
      darkPoolActivity: "+287.56%",
      callRatio: "91%",
      marketCap: "$788.4M",
      shareVolume: "9.8M",
    },
    {
      ticker: "EXPR",
      sharePrice: "$0.85",
      performance: "+15.77%",
      change: "+0.12",
      newsSentiment: 17,
      aiScore: "59%",
      darkPoolActivity: "+345.12%",
      callRatio: "93%",
      marketCap: "$31.5M",
      shareVolume: "3.6M",
    },
    {
      ticker: "BBIG",
      sharePrice: "$0.38",
      performance: "+18.34%",
      change: "+0.06",
      newsSentiment: 15,
      aiScore: "67%",
      darkPoolActivity: "+412.29%",
      callRatio: "96%",
      marketCap: "$28.1M",
      shareVolume: "12.7M",
    },
    {
      ticker: "ATNF",
      sharePrice: "$1.42",
      performance: "+14.52%",
      change: "+0.18",
      newsSentiment: 8,
      aiScore: "64%",
      darkPoolActivity: "+254.81%",
      callRatio: "89%",
      marketCap: "$65.3M",
      shareVolume: "2.5M",
    },
    {
      ticker: "ATER",
      sharePrice: "$0.47",
      performance: "+16.91%",
      change: "+0.07",
      newsSentiment: 21,
      aiScore: "73%",
      darkPoolActivity: "+378.45%",
      callRatio: "94%",
      marketCap: "$44.9M",
      shareVolume: "5.8M",
    },
  ];

  // Sample data for different tabs
  const intradayData = [
    {
      ticker: "IESC",
      sharePrice: "$239.01",
      performance: "+10.90%",
      change: "+23.51",
      newsSentiment: 0,
      aiScore: "0%",
      darkPoolActivity: "+339.80%",
      callRatio: "100%",
      marketCap: "$3.9B",
      shareVolume: "119K",
    },
    {
      ticker: "IRTC",
      sharePrice: "$131.81",
      performance: "+9.90%",
      change: "+11.89",
      newsSentiment: -58,
      aiScore: "63%",
      darkPoolActivity: "+992.85%",
      callRatio: "100%",
      marketCap: "$3.4B",
      shareVolume: "768.9K",
    },
    {
      ticker: "DUOL",
      sharePrice: "$475.38",
      performance: "+8.80%",
      change: "+38.45",
      newsSentiment: 45,
      aiScore: "63%",
      darkPoolActivity: "+341.79%",
      callRatio: "77%",
      marketCap: "$18.2B",
      shareVolume: "1.4M",
    },
    {
      ticker: "SXI",
      sharePrice: "$158.57",
      performance: "+5.80%",
      change: "+8.71",
      newsSentiment: 4,
      aiScore: "60%",
      darkPoolActivity: "+207.20%",
      callRatio: "0%",
      marketCap: "$1.7B",
      shareVolume: "39.3K",
    },
    {
      ticker: "DAVE",
      sharePrice: "$103.11",
      performance: "+5.30%",
      change: "+5.23",
      newsSentiment: 12,
      aiScore: "63%",
      darkPoolActivity: "+161.13%",
      callRatio: "0%",
      marketCap: "$1.3B",
      shareVolume: "136.8K",
    },
  ];

  const weeklyData = [
    {
      ticker: "NVDA",
      sharePrice: "$918.45",
      performance: "+15.20%",
      change: "+122.31",
      newsSentiment: 87,
      aiScore: "92%",
      darkPoolActivity: "+512.70%",
      callRatio: "95%",
      marketCap: "$2.26T",
      shareVolume: "42.1M",
    },
    {
      ticker: "MSFT",
      sharePrice: "$427.12",
      performance: "+8.75%",
      change: "+34.50",
      newsSentiment: 65,
      aiScore: "78%",
      darkPoolActivity: "+187.45%",
      callRatio: "82%",
      marketCap: "$3.17T",
      shareVolume: "22.3M",
    },
    {
      ticker: "AAPL",
      sharePrice: "$183.79",
      performance: "+5.92%",
      change: "+10.28",
      newsSentiment: 42,
      aiScore: "71%",
      darkPoolActivity: "+124.63%",
      callRatio: "75%",
      marketCap: "$2.88T",
      shareVolume: "18.7M",
    },
    {
      ticker: "AMZN",
      sharePrice: "$189.35",
      performance: "+4.81%",
      change: "+8.69",
      newsSentiment: 38,
      aiScore: "68%",
      darkPoolActivity: "+138.92%",
      callRatio: "80%",
      marketCap: "$1.97T",
      shareVolume: "14.5M",
    },
    {
      ticker: "GOOG",
      sharePrice: "$174.12",
      performance: "+4.63%",
      change: "+7.70",
      newsSentiment: 31,
      aiScore: "72%",
      darkPoolActivity: "+115.38%",
      callRatio: "77%",
      marketCap: "$2.19T",
      shareVolume: "12.8M",
    },
  ];

  const popularData = [
    {
      ticker: "TSLA",
      sharePrice: "$187.56",
      performance: "+7.32%",
      change: "+12.77",
      newsSentiment: 15,
      aiScore: "65%",
      darkPoolActivity: "+245.18%",
      callRatio: "88%",
      marketCap: "$597.2B",
      shareVolume: "25.6M",
    },
    {
      ticker: "AMD",
      sharePrice: "$165.23",
      performance: "+6.78%",
      change: "+10.51",
      newsSentiment: 28,
      aiScore: "75%",
      darkPoolActivity: "+198.42%",
      callRatio: "92%",
      marketCap: "$266.8B",
      shareVolume: "17.3M",
    },
    {
      ticker: "META",
      sharePrice: "$497.65",
      performance: "+5.36%",
      change: "+25.29",
      newsSentiment: 45,
      aiScore: "82%",
      darkPoolActivity: "+176.93%",
      callRatio: "85%",
      marketCap: "$1.27T",
      shareVolume: "15.1M",
    },
    {
      ticker: "NFLX",
      sharePrice: "$625.87",
      performance: "+4.91%",
      change: "+29.28",
      newsSentiment: 33,
      aiScore: "71%",
      darkPoolActivity: "+152.76%",
      callRatio: "79%",
      marketCap: "$273.5B",
      shareVolume: "7.2M",
    },
    {
      ticker: "INTC",
      sharePrice: "$34.78",
      performance: "+3.25%",
      change: "+1.10",
      newsSentiment: -12,
      aiScore: "45%",
      darkPoolActivity: "+87.42%",
      callRatio: "62%",
      marketCap: "$147.9B",
      shareVolume: "12.7M",
    },
  ];

  // Determine which data to display based on active tab and cap size
  const getActiveData = () => {
    // Get the appropriate base data set based on the active tab
    let baseData;
    switch (activeTab) {
      case "intraday":
        baseData = intradayData;
        break;
      case "weekly":
        baseData = weeklyData;
        break;
      case "popular":
        baseData = popularData;
        break;
      default:
        baseData = intradayData;
    }

    // Then apply cap size filtering
    if (activeCapSize === "large") {
      return largeCapData;
    } else if (activeCapSize === "medium") {
      return mediumCapData;
    } else if (activeCapSize === "small") {
      return smallCapData;
    }

    return baseData;
  };

  const stockData = getActiveData();

  // Function to determine the style class for news sentiment
  const getNewsSentimentClass = (value) => {
    if (value > 0) return "bg-success bg-opacity-25 text-success";
    if (value < 0) return "bg-danger bg-opacity-25 text-danger";
    return "bg-secondary bg-opacity-25 text-secondary";
  };

  // Function to determine the AI score badge class
  const getAIScoreClass = (score) => {
    const numScore = parseInt(score);
    if (numScore >= 80) return "bg-primary";
    if (numScore >= 60) return "bg-info";
    if (numScore >= 40) return "bg-warning";
    return "bg-secondary";
  };

  return (
    <div className="container px-4 py-4">
      <div className="mb-4">
        <h1 className="h3 mb-3">Stocks Performance Summary</h1>

        {/* Activity Tabs */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <ul className="nav nav-tabs flex-grow-1 intrady-table-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "intraday" ? "active" : ""
                }`}
                onClick={() => setActiveTab("intraday")}
              >
                Intraday Activity
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "weekly" ? "active" : ""}`}
                onClick={() => setActiveTab("weekly")}
              >
                Weekly Activity
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "popular" ? "active" : ""
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Popular Stocks
              </button>
            </li>
          </ul>
        </div>

        <div className="text-muted small mb-3">May 2nd, 2025</div>

        {/* Market Cap Tabs */}
        <div className="cap-tabs mb-3">
          <ul className="nav nav-pills cap-nav">
            <li className="nav-item">
              <button
                className={`cap-btn ${
                  activeCapSize === "large" ? "active" : ""
                }`}
                onClick={() => setActiveCapSize("large")}
              >
                Large Caps
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`cap-btn ${
                  activeCapSize === "medium" ? "active" : ""
                }`}
                onClick={() => setActiveCapSize("medium")}
              >
                Medium Caps
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`cap-btn ${
                  activeCapSize === "small" ? "active" : ""
                }`}
                onClick={() => setActiveCapSize("small")}
              >
                Small Caps
              </button>
            </li>
          </ul>
        </div>

        {/* Current View Indicator */}
        <div className="alert alert-info p-2 small">
          <strong>Currently viewing:</strong>{" "}
          {activeTab === "intraday"
            ? "Intraday Activity"
            : activeTab === "weekly"
            ? "Weekly Activity"
            : "Popular Stocks"}
          {activeCapSize !== "auto" &&
            ` - ${
              activeCapSize === "large"
                ? "Large Caps"
                : activeCapSize === "medium"
                ? "Medium Caps"
                : "Small Caps"
            }`}
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive table_history">
        <table className="table table-hover stocks-table">
          <thead className="bg-primary text-white">
            <tr>
              <th>TICKER</th>
              <th>SHARE PRICE</th>
              <th>PERFORMANCE</th>
              <th>CHANGE</th>
              <th>NEWS SENTIMENT</th>
              <th>AI SCORE</th>
              <th>DARK POOL ACTIVITY</th>
              <th>CALL RATIO</th>
              <th>MARKET CAP</th>
              <th>SHARE VOLUME</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock, index) => (
              <tr key={index}>
                <td className="fw-bold">{stock.ticker}</td>
                <td>{stock.sharePrice}</td>
                <td className="text-success fw-medium">{stock.performance}</td>
                <td className="text-success fw-medium">{stock.change}</td>
                <td>
                  <span
                    className={`sentiment-pill ${getNewsSentimentClass(
                      stock.newsSentiment
                    )}`}
                  >
                    {stock.newsSentiment > 0
                      ? `+${stock.newsSentiment}`
                      : stock.newsSentiment}
                  </span>
                </td>
                <td>
                  <span
                    className={`ai-score-pill badge ${getAIScoreClass(
                      stock.aiScore
                    )}`}
                  >
                    {stock.aiScore}
                  </span>
                </td>
                <td className="text-success fw-medium">
                  {stock.darkPoolActivity}
                </td>
                <td>{stock.callRatio}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.shareVolume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;

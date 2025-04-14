// new dashboard
import React, { useState, useEffect } from "react";
import {
  Menu,
  Search,
  Sun,
  Moon,
  Home,
  Tv,
  Building,
  Wrench,
  Book,
  Package,
  DollarSign,
  Gem,
  Star,
  GraduationCap,
  Users,
} from "lucide-react";
import "../styles/dashboard.css";
import HistoricalDataFlow from "./DashboardSidebarComp/HistoricalDataFlow";
import user_logo from "../assets/images/dashboard_logo.png";
import valourWealth from "../assets/images/Valour_Wealth.png";
import valourWealthInverted from "../assets/images/full-transparent.png";
import DashboardData from "./DashboardSidebarComp/DashboardData";
import LiveSessions from "./DashboardSidebarComp/LiveSessions";
import TradeProducts from "./DashboardSidebarComp/TradeProducts";
import Emerald from "./DashboardSidebarComp/Emerald";
import Platinum from "./DashboardSidebarComp/Platinum";
import OptionsAcademy from "./DashboardSidebarComp/OptionsAcademy";
import Mentorship from "./DashboardSidebarComp/Mentorship";
import WealthSeries from "./DashboardSidebarComp/WealthSeries";
import Resources from "./DashboardSidebarComp/Resources";
// import ChartGrid from "./DashboardSidebarComp/ChartGrid";
// import LiveOption from "./DashboardSidebarComp/LiveOption";
// import OptionChain from "./DashboardSidebarComp/OpenChain";
// import TradeAlerts from "./DashboardSidebarComp/TradeAlerts";
// import ProgramLite from "./DashboardSidebarComp/programLite";
// import WealthPremium from "./DashboardSidebarComp/wealthPremium";


// trading tools
// import ScannerTool from "./DashboardSidebarComp/ScannerTool";
// import SwingTradeAI from "./DashboardSidebarComp/SwingTradeAI";
import EditProfile from "./DashboardSidebarComp/EditProfile";
import Logout from "./DashboardSidebarComp/Logout";
import ForexData from "./DashboardSidebarComp/ForexData";
import StocksData from "./DashboardSidebarComp/StocksData";
import CryptoData from "./DashboardSidebarComp/CryptoData";
import TradingTools from "./DashboardSidebarComp/TradingTools";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Apply CSS variables for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--text-color", "#ffffff"); // White text
      document.documentElement.style.setProperty(
        "--background-color",
        "#1c1e20"
      ); // Full black background
      document.documentElement.style.setProperty("--sidebar-color", "#1a1d1e"); // Full black sidebar
      document.documentElement.style.setProperty(
        "--card-background",
        "#000000"
      ); // Full black cards
      document.documentElement.style.setProperty(
        "--input-background",
        "#222222"
      ); // Darker input fields
      document.documentElement.style.setProperty("--border-color", "#444444"); // Softer borders in dark mode
    } else {
      document.documentElement.style.setProperty("--text-color", "#000000"); // Black text
      document.documentElement.style.setProperty(
        "--background-color",
        "#ffffff"
      ); // White background
      document.documentElement.style.setProperty("--sidebar-color", "#f8f9fa"); // Light sidebar
      document.documentElement.style.setProperty(
        "--card-background",
        "#ffffff"
      ); // White cards
      document.documentElement.style.setProperty(
        "--input-background",
        "#ffffff"
      ); // White input fields
      document.documentElement.style.setProperty("--border-color", "#dddddd"); // Light borders
    }
  }, [darkMode]);

  // Responsive behavior: auto-collapse sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Auto-collapse on screens smaller than 992px (Bootstrap's lg breakpoint)
      if (window.innerWidth < 992) {
        setSidebarCollapsed(true);
      } else if (window.innerWidth >= 992) {
        // Only auto-expand if this is the initial load or resize from small to large
        if (windowWidth < 992) {
          setSidebarCollapsed(false);
        }
      }
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // Handle tab click - collapse sidebar after selection on mobile
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    // Auto-collapse after tab selection on smaller screens
    if (windowWidth < 992 && !sidebarCollapsed) {
      setSidebarCollapsed(true);
    }
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { id: "live-sessions", label: "Live Sessions", icon: <Tv size={20} /> },
    {
      id: "darkpool-data",
      label: "Darkpool Data",
      icon: <Building size={20} />,
    },
    { id: "trading-tools", label: "Trading Tools", icon: <Wrench size={20} /> },
    { id: "resources", label: "Resources", icon: <Book size={20} /> },
    {
      id: "Trade-products",
      label: "ValourWealth Products",
      icon: <Package size={20} />,
    },
    {
      id: "wealth-series",
      label: "Wealth Management Series",
      icon: <DollarSign size={20} />,
      isNew: true,
    },
    { id: "emerald", label: "Emerald Inc.", icon: <Gem size={20} /> },
    { id: "platinum", label: "Platinum Program", icon: <Star size={20} /> },
    {
      id: "options-academy",
      label: "Trading Academy",
      icon: <GraduationCap size={20} />,
    },
    { id: "mentorship", label: "1 on 1 Mentorship", icon: <Users size={20} /> },
  ];

  const renderContent = () => {
    return (
      <div className={darkMode ? "dark-mode-content" : "light-mode-content"}>
        {(() => {
          switch (activeTab) {
            case "dashboard":
              return <DashboardData darkMode={darkMode} />;
            case "darkpool-data":
              return <HistoricalDataFlow darkMode={darkMode} />;
            case "live-sessions":
              return <LiveSessions darkMode={darkMode} />;
            case "Trade-products":
              return <TradeProducts darkMode={darkMode} />;
            case "trading-tools":
              return <TradingTools darkMode={darkMode} />;
            case "emerald":
              return <Emerald darkMode={darkMode} />;
            case "platinum":
              return <Platinum darkMode={darkMode} />;
            case "options-academy":
              return <OptionsAcademy darkMode={darkMode} />;
            case "wealth-series":
              return <WealthSeries darkMode={darkMode} />;
            case "mentorship":
              return <Mentorship darkMode={darkMode} />;
            case "resources":
              return <Resources darkMode={darkMode} />;

            //  New Trading Tools Components (Dropdown items)

            // case "scanner":
            //   return <ScannerTool darkMode={darkMode} />;
            // case "swing-trade-ai":
            //   return <SwingTradeAI darkMode={darkMode} />;
            // case "chart-grid":
            //   return <ChartGrid darkMode={darkMode} />;
            // case "live-option":
            //   return <LiveOption darkMode={darkMode} />;
            // case "option-chain":
            //   return <OptionChain darkMode={darkMode} />;
            // case "trade-alerts":
            //   return <TradeAlerts darkMode={darkMode} />;

            case "forex":
              return <ForexData darkMode={darkMode} />;

            case "crypto":
              return <CryptoData darkMode={darkMode} />;

            case "stocks":
              return <StocksData darkMode={darkMode} />;

            //Wealth management series

            // case "lite":
            //   return <ProgramLite darkMode={darkMode} />;
            // case "premium":
            //   return <WealthPremium darkMode={darkMode} />;

            //User profile

            case "edit-profile":
              return <EditProfile darkMode={darkMode} />; // Edit Profile Component
            case "logout":
              return <Logout darkMode={darkMode} />; // Logout Component

              default:

          }
        })()}
      </div>
    );
  };

  return (
    <div className={darkMode ? "bg-dark text-white vh-100" : "bg-light vh-100"}>
      <div className="row dashboard_row g-0">
        {/* Sidebar */}
        <div
          className={`${
            sidebarCollapsed ? "col-1" : "col-3"
          } position-fixed h-100 transition-width sidebar-mbl`}
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
          }}
        >
          {/* Sidebar Header */}
          <div className="d-flex justify-content-between align-items-center border-bottom p-lg-3 p-sm-2 left-toggle">
            {!sidebarCollapsed && (
              <h4
                className={`m-0 d-flex align-items-center ${
                  darkMode ? "text-white" : ""
                }`}
              >
                <div className={`sidebar_logo ${darkMode ? "dark-mode" : ""}`}>
                  <img
                    src={valourWealth}
                    alt="Logo"
                    className="sidebar-logo obj_fit me-2 default-logo"
                  />
                  <img
                    src={valourWealthInverted}
                    alt="Logo"
                    className="sidebar-logo obj_fit me-2 inverted-logo"
                  />
                </div>
              </h4>
            )}
            <button
              className={`btn mbl-toggle btn-link p-0 ${
                darkMode ? "text-white" : ""
              }`}
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu />
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="nav flex-column">
          {menuItems.map((item) => (
            <div key={item.id} className="position-relative">
              <button
                onClick={() => handleTabClick(item.id)}
                className={`nav-link border-0 d-flex align-items-center justify-content-${
                  sidebarCollapsed ? "center" : "start"
                } ${activeTab === item.id ? "active" : ""} ${
                  darkMode ? "text-white" : ""
                }`}
                style={darkMode ? { color: "white" } : {}}
              >
                <span className="me-2" style={darkMode ? { color: "white" } : {}}>
                  {item.icon}
                </span>
                {!sidebarCollapsed && (
                  <div className="d-flex align-items-center justify-content-between flex-grow-1">
                    <span style={darkMode ? { color: "white" } : {}}>{item.label}</span>

                    {/* 🔽 Add Play Icon for Dropdown Indicator */}
                    {(item.id === "trading-tools") && (
                      <i
                        className="fas fa-play ms-2 indicator"
                        style={{
                          fontSize: "10px",
                          transform: "rotate(360deg)",
                          color: "#000",
                        }}
                      ></i>
                    )}
                  </div>
                )}
              </button>

              {/* Dropdown for Wealth Management Series */}
              {/* {item.id === "wealth-series" && (
                <div className="dropdown-container shadow wealth-container p-0">
                  <div className="dropdown-content-wrap">
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("lite")}>
                    <li>Lite</li>
                    </div>
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("premium")}>
                    <li>Premium</li>
                    </div>
                  </div>
                </div>
              )} */}

              {/* Dropdown for   */}
              {item.id === "trading-tools" && (
                <div className="dropdown-container shadow tools-container p-0">

                  {/* <div className="dropdown-content-wrap">
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("scanner")}>
                      Scanner
                    </div>
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("swing-trade-ai")}>
                      Swing Trade AI
                    </div>
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("chart-grid")}>
                      Chart Grid
                    </div>
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("live-option")}>
                      Live Option
                    </div>
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("option-chain")}>
                      Option Chain
                    </div>
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("trade-alerts")}>
                      Trade Alerts
                    </div>
                  </div> */}

                  <div className="dropdown-content-wrap">
                  <div className="p-2 dropdown-inside" onClick={() => setActiveTab("forex")}>
                      Forex
                    </div>
                    <div className="p-2 dropdown-inside" onClick={() => setActiveTab("crypto")}>
                      Crypto
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


          {/* Dark Mode Toggle */}
          <div className="position-absolute bottom-0 w-100 ">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`btn btn-link d-flex align-items-center w-100 text-decoration-none night-btn ${
                darkMode ? "text-white" : ""
              }`}
              style={darkMode ? { color: "white" } : {}}
            >
              {darkMode ? (
                <Sun className="me-2" style={{ color: "white" }} />
              ) : (
                <Moon className="me-2" />
              )}
              {!sidebarCollapsed && (
                <span style={darkMode ? { color: "white" } : {}}>
                  {darkMode ? "Light Mode" : "Dark Mode"}{" "}
                  <sup style={{ fontSize: "0.7rem", color: "red" }}>Beta</sup>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className={`${
            sidebarCollapsed ? "col-11 offset-1" : "col-9 offset-3"
          } transition-margin`}
        >
          <div
            className="container-fluid"
            style={{
              backgroundColor: "var(--background-color)",
              color: "var(--text-color)",
              minHeight: "100vh",
            }}
          >
            {/* Header with Search */}
            <div className="row align-items-center dashboard-head">
              <div className="col position-relative search-main">
                <input
                  type="text"
                  className={`search_bar ${darkMode ? "dark-mode" : ""}`}
                  placeholder="Search Tickers..."
                />
                <i className="fas fa-search search-icon"></i>
              </div>

              <div className="col-auto user_info position-relative">
                <img
                  src={user_logo}
                  alt="Profile"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
                <div className="username_data">
                  <h5 className={`mb-0 ${darkMode ? "text-white" : ""}`}>
                    Valourwealth Platform
                  </h5>
                </div>

                {/* Dropdown Menu */}
                <div className="user-dropdown shadow py-0">
                  <div
                    className="dropdown-item"
                    onClick={() => setActiveTab("edit-profile")}
                  >
                    Edit Profile
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => setActiveTab("logout")}
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={
                darkMode ? "" : "card dashboard_card text-dark right-bar py-0"
              }
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { Menu, Search, Sun, Moon } from 'lucide-react';
import "../styles/dashboard.css";
import HistoricalDataFlow from './DashboardSidebarComp/HistoricalDataFlow';
import user_logo from "../assets/images/dashboard_logo.png";


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'live-sessions', label: 'Live Sessions', icon: '📺' },
    { id: 'historical-darkflow', label: 'Historical Darkflow', icon: '🏢' },
    { id: 'trading-tools', label: 'Trading Tools', icon: '🛠️' },
    { id: 'resources', label: 'Resources', icon: '📚' },
    { id: 'tradealgo-products', label: 'TradeAlgo Products', icon: '🏢' },
    { id: 'wealth-series', label: 'Wealth Series', icon: '💰', isNew: true },
    { id: 'emerald', label: 'Emerald Inc.', icon: '💎' },
    { id: 'platinum', label: 'Platinum Program', icon: '⭐' },
    { id: 'options-academy', label: 'Options Academy', icon: '🎓' },
    { id: 'mentorship', label: 'Options Mentorship', icon: '👥' },
];

  // Content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <h1>Welcome to the Dashboard</h1>;

      case 'historical-darkflow':
        return <HistoricalDataFlow />;


      case 'trading-tools':
        return <h1>Trading Tools Section</h1>;
      case 'resources':
        return <h1>Resources Section</h1>;
      default:
        return <h1>Welcome to {menuItems.find(item => item.id === activeTab)?.label}</h1>;
    }
  };

  return (
    <div className={`vh-100 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
      <div className="row g-0">
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'col-1' : 'col-3'} position-fixed h-100 border-end transition-width justify-content-center ${darkMode ? 'bg-dark' : 'bg-white'}`}>
          {/* Logo and Toggle */}
          <div className="d-flex justify-content-between align-items-center  border-bottom p-3">
            {!sidebarCollapsed && <h4 className="m-0">ValourWealth</h4>}
            <button 
              className="btn btn-link p-0"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu />
            </button>
          </div>

          {/* Menu Items */}
          <div className="nav flex-column">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-link border-0 d-flex align-items-center  ${
                  activeTab === item.id ? 'active' : ''
                }`}
              >
                <span className="me-3">{item.icon}</span>
                {!sidebarCollapsed && (
                  <div className="d-flex align-items-center justify-content-between flex-grow-1">
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="badge bg-primary ms-2">NEW</span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="position-absolute bottom-0 w-100  border-top">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="btn btn-link d-flex align-items-center w-100 text-decoration-none"
            >
              {darkMode ? <Sun className="me-2" /> : <Moon className="me-2" />}
              {!sidebarCollapsed && <span>Dark Mode</span>}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`${sidebarCollapsed ? 'col-11 offset-1' : 'col-9 offset-3'}`}>
          <div className="container-fluid py-4">
            {/* Search Bar */}
            <div className="row mb-4 align-items-center">
              <div className="col position-relative">
                <Search className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  className={`search_bar form-control-lg ps-5 ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}
                  placeholder="Search Tickers..."
                />
              </div>
              <div className="col-auto">
                <img
                  src={user_logo}
                  alt="Profile"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
            </div>

            {/* Dynamic Content Based on Active Tab */}
            <div className="card bg-light text-dark p-4">
              {renderContent()}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { Menu, Search, Sun, Moon, Home, Tv, Building, Wrench, Book, Package, DollarSign, Gem, Star, GraduationCap, Users } from 'lucide-react';
import "../styles/dashboard.css";
import HistoricalDataFlow from './DashboardSidebarComp/HistoricalDataFlow';
import user_logo from "../assets/images/dashboard_logo.png";
import valourWealth from "../assets/images/Valour_Wealth.png";
import DashboardData from './DashboardSidebarComp/DashboardData';
import LiveSessions from './DashboardSidebarComp/LiveSessions';
import TradeProducts from './DashboardSidebarComp/TradeProducts';
import Emerald from './DashboardSidebarComp/Emerald';
import Platinum from './DashboardSidebarComp/Platinum';
import OptionsAcademy from './DashboardSidebarComp/OptionsAcademy';
import Mentorship from './DashboardSidebarComp/Mentorship';
import WealthSeries from './DashboardSidebarComp/WealthSeries';
import Resources from './DashboardSidebarComp/Resources';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'live-sessions', label: 'Live Sessions', icon: <Tv size={20} /> },
    { id: 'historical-darkflow', label: 'Historical Darkflow', icon: <Building size={20} /> },
    { id: 'trading-tools', label: 'Trading Tools', icon: <Wrench size={20} /> },
    { id: 'resources', label: 'Resources', icon: <Book size={20} /> },
    { id: 'Trade-products', label: 'TradeAlgo Products', icon: <Package size={20} /> },
    { id: 'wealth-series', label: 'Wealth Series', icon: <DollarSign size={20} />, isNew: true },
    { id: 'emerald', label: 'Emerald Inc.', icon: <Gem size={20} /> },
    { id: 'platinum', label: 'Platinum Program', icon: <Star size={20} /> },
    { id: 'options-academy', label: 'Options Academy', icon: <GraduationCap size={20} /> },
    { id: 'mentorship', label: 'Options Mentorship', icon: <Users size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardData />;
      case 'historical-darkflow':
        return <HistoricalDataFlow />;
      case 'live-sessions':
        return <LiveSessions />;
      case 'Trade-products':
        return <TradeProducts />;
      case 'trading-tools':
        return <LiveSessions />;
      case 'emerald':
        return <Emerald />;
      case 'platinum':
        return <Platinum />;
      case 'options-academy':
        return <OptionsAcademy />;
      case 'wealth-series':
        return <WealthSeries />;
      case 'mentorship':
        return <Mentorship />;
      case 'resources':
        return <Resources />;
   
    }
  };

  return (
    <div className={`vh-100 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
      <div className="row g-0">
        <div className={`${sidebarCollapsed ? 'col-1' : 'col-3'} position-fixed h-100 border-end transition-width justify-content-center ${darkMode ? 'bg-dark' : 'bg-white'}`}>
          <div className="d-flex justify-content-between align-items-center border-bottom p-3">
                {!sidebarCollapsed && (
                <h4 className="m-0 d-flex align-items-center">
                  <div className="sidebar_logo">
                  <img src={valourWealth} alt="Logo" className="sidebar-logo obj_fit me-2" />
                  </div>
                  ValourWealth
                </h4>
              )}
            <button className="btn btn-link p-0" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <Menu />
            </button>
          </div>
          <div className="nav flex-column">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-link border-0 d-flex align-items-center justify-content-${sidebarCollapsed ? "center" : "start"} ${activeTab === item.id ? "active" : ""}`}
            >
              <span className="me-3">{item.icon}</span>
              {!sidebarCollapsed && (
                <div className="d-flex align-items-center justify-content-between flex-grow-1">
                  <span>{item.label}</span>
                  {item.isNew && <span className="badge bg-primary ms-2">NEW</span>}
                </div>
              )}
            </button>
          ))}
        </div>

          <div className="position-absolute bottom-0 w-100 border-top">
            <button onClick={() => setDarkMode(!darkMode)} className="btn btn-link d-flex align-items-center w-100 text-decoration-none">
              {darkMode ? <Sun className="me-2" /> : <Moon className="me-2" />}
              {!sidebarCollapsed && <span>Dark Mode</span>}
            </button>
          </div>
        </div>
        <div className={`${sidebarCollapsed ? 'col-11 offset-1' : 'col-9 offset-3'}`}>
          <div className="container-fluid py-4">
            <div className="row mb-4 align-items-center">
            <div className="col position-relative d-flex align-items-center">
            <input
              type="text"
              className={`search_bar pe-5 ${darkMode ? "dark-mode" : ""}`}
              placeholder="Search Tickers..."
            />
            <Search className="search-icon"  style={{marginLeft: "-30px"}} color='#5555'/>
          </div>
              <div className="col-auto user_info">
                <img src={user_logo} alt="Profile" className="rounded-circle" width="40" height="40" />
                <div className='username_data'>
                <h5 className='mb-0'>Valourwealth Platform</h5>
                <p className='mb-0'>Premium Member</p>
                </div>
              </div>
            </div>
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


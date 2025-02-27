import React, { useState } from "react";
import "../styles/navbar.css";
import "../styles/variable.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/Valour_Wealth.png";
import ForexTicker from "./forexTicker";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
    {/* forex ticker component */}
    <ForexTicker/>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img src={logo} alt="TradeAlgo Logo" height="40" className="me-2" />
          </Link>

        <div className="login_mbl d-flex">
          <button
            className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
              {/* Login Button */}
              <button className="btn-login-mobile d-lg-none d-md-block">
              <a href="/login" className="text-decoration-none text-white">Login</a>
             </button>
              </div>
  

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/features" onClick={closeNavbar}>Features</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/support" onClick={closeNavbar}>Customer Support</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/analysts" onClick={closeNavbar}>Our Analysts</Link></li>
              <li className="nav-item"><Link className="theme_btn mx-2" to="/dashboard" onClick={closeNavbar}>Request Demo</Link></li>
              <li className="nav-item"><Link className="btn login-btn head-btn" to="/login" onClick={closeNavbar}>My Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Second Navbar (Header Below) */}
      <nav className="second-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Sections */}
          <ul className="nav-links">
            <li><Link id="markets" to="/markets">Markets</Link></li>
            <li><Link id="technology" to="/technology">Technology</Link></li>
            <li><Link id="wealth" to="/wealth">Wealth</Link></li>
            <li><Link id="events" to="/events">Events</Link></li>
            <li><Link id="crypto" to="/crypto">Crypto</Link></li>
            <li><Link id="products" to="/products">Products</Link></li>
            <li><Link id="more" to="/more">More</Link></li>
          </ul>

          {/* Search Bar - Always Visible */}
          <div className="search-box">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-icon">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

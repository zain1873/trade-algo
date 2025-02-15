import React from "react";
import "../styles/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - About */}
        <div className="footer-left">
          <h2 className="footer-logo-title">TradeAlgo</h2>
          <p className="footer-text">
            Headquartered in New York. TradeAlgo delivers unparalleled access to market tools with over 50 billion
            events processed daily.
          </p>

          {/* Subscribe Form */}
          <div className="footer-subscribe">
            <h3 className="subscribe-title">Subscribe</h3>
            <form className="footer-form">
              <input type="email" placeholder="Your Email" required className="footer-input" />
              <button type="submit" className="footer-join-btn">Join!</button>
            </form>
          </div>
        </div>

        {/* Middle Section - Menu */}
        <div className="footer-middle">
          <h3 className="footer-title">Menu</h3>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/features">Technology</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/leave-a-review">Leave a Review</a></li>
          </ul>
        </div>

        {/* Right Section - Pages */}
        <div className="footer-right">
          <h3 className="footer-title">Pages</h3>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms Of Service</a></li>
            <li><a href="/acceptable-use-policy">Acceptable Use Policy</a></li>
            <li><a href="/legal-disclaimer">Legal Disclaimer</a></li>
            <li><a href="/regcf">Form CAR</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="https://twitter.com/tradealgo_" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;

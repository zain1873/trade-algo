import React from 'react';
import './styles/products.css';

const Products = () => {
  return (
    <div className="finance-dashboard container-fluid p-4">
      <div className="row g-4">
        <div class="dashboard-title text-center">
          <h2 className='text-center fw-bold'>ValourWealth Products</h2>
          <p
          style={{
            width: "530px",
            textAlign: "center",
            margin: "auto",
          }}
          className="text-gray-400 text-base sm:text-lg"
        >
          Discover our comprehensive suite of premium financial products and services
          designed to elevate your trading and investment experience.
        </p>

        </div>
        {/* Row 1 */}
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-icon mb-4">
                <i className="bi bi-file-text"></i>
              </div>
              <h3 className="card-title">Resources</h3>
              <p className="card-text">Access a comprehensive library of educational materials, guides, and research reports.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-book"></i>
                  <span>Trading guides</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-graph-up"></i>
                  <span>Market research</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  Browse Library
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-icon mb-4">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <h3 className="card-title">ValourWealth Products</h3>
              <p className="card-text">Discover our suite of premium financial products designed for serious investors and traders.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-star-fill"></i>
                  <span>Premium offerings</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-unlock"></i>
                  <span>Exclusive access</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  View Products
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-icon mb-4">
                <i className="bi bi-bank"></i>
              </div>
              <h3 className="card-title">Wealth Management Series</h3>
              <p className="card-text">Comprehensive wealth management solutions for high-net-worth individuals seeking long-term growth.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-wallet2"></i>
                  <span>Portfolio management</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-shield-check"></i>
                  <span>Wealth preservation</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  Explore Series
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-image mb-4">
                <div className="emerald-icon"></div>
              </div>
              <h3 className="card-title">Emerald Inc.</h3>
              <p className="card-text">Elite investment opportunities through our premium Emerald tier services and exclusive offerings.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-gem text-emerald"></i>
                  <span>Elite opportunities</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-lock text-emerald"></i>
                  <span>Exclusive investments</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center text-emerald">
                  Discover Elite
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100 platinum-card">
            <div className="card-body">
              <div className="card-image mb-4">
                <div className="platinum-icon"></div>
              </div>
              <h3 className="card-title">Platinum Program</h3>
              <p className="card-text">Our flagship program offering personalized coaching and premium resources for serious traders.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-person-check"></i>
                  <span>One-on-one coaching</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-star"></i>
                  <span>Premium resources</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  Join Program
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-image mb-4">
                <div className="trading-academy-image">
                  <div className="academy-level-icons">
                    <span className="level-icon beginner">Beginner</span>
                    <span className="level-icon intermediate">Intermediate</span>
                    <span className="level-icon advanced">Advanced</span>
                  </div>
                </div>
              </div>
              <h3 className="card-title">Trading Academy</h3>
              <p className="card-text">Structured educational programs to develop your trading skills from beginner to advanced levels.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-journal-check"></i>
                  <span>Structured curriculum</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-person-workspace"></i>
                  <span>Expert instructors</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  Start Learning
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Row 3 */}
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-image mb-4">
                <div className="mentorship-image">
                  <div className="mentor-icons">
                    <i className="bi bi-person-fill"></i>
                    <div className="connection-line">
                      <div className="slider-dot"></div>
                    </div>
                    <i className="bi bi-person-fill"></i>
                  </div>
                </div>
              </div>
              <h3 className="card-title">1 on 1 Mentorship</h3>
              <p className="card-text">Personalized mentorship with experienced traders tailored to your specific goals and needs.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-compass"></i>
                  <span>Personalized guidance</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-graph-up-arrow"></i>
                  <span>Strategy development</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  Connect Now
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add placeholders for remaining 3 cards that are not visible in the screenshot */}
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-icon mb-4">
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <h3 className="card-title">Market Analytics</h3>
              <p className="card-text">Advanced market analytics and insights to help you make informed trading decisions.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-graph-up"></i>
                  <span>Real-time data</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-lightning-charge"></i>
                  <span>Quick insights</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  Explore Analytics
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-icon mb-4">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="card-title">Community Forum</h3>
              <p className="card-text">Join our exclusive community of traders and investors to share insights and strategies.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-chat-dots"></i>
                  <span>Expert discussions</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-pin-angle"></i>
                  <span>Trading ideas</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  Join Community
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <div className="card-icon mb-4">
                <i className="bi bi-calendar-event"></i>
              </div>
              <h3 className="card-title">Exclusive Events</h3>
              <p className="card-text">Access to exclusive webinars, conferences, and networking events with industry experts.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-laptop"></i>
                  <span>Live webinars</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-people-fill"></i>
                  <span>Networking sessions</span>
                </div>
              </div>
              
              <div className="card-action">
                <a href="#" className="d-flex align-items-center">
                  View Schedule
                  <i className="bi bi-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
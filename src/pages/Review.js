import React from 'react';

function Review() {
  return (
    <section className="review-section text-center py-5">
      <div className="container">
        <div className="review-container">
        {/* Heading Section */}
        <h6 className="review-title">OUR MISSION AT VALOUR WEALTH IS TO EMPOWER OVER 100 MILLION TRADERS TO TAKE CONTROL OF THEIR FINANCIAL DESTINY.</h6>
        <h2 className="fw-bold mt-lg-5 mt-3">
          Leave Us An Honest Review <span role="img" aria-label="hand"></span>
        </h2>
        <p className="text-white mt-2">
          We want to hear from you how we can improve our service.
        </p>

        {/* Subscription Form */}
        <div className="review-form   d-flex justify-content-center">
          <input 
            type="email" 
            className="review-input form-input" 
            placeholder="Enter your email" 
          />
          <button className="theme_btn review-btn">Subscribe</button>
        </div>

        {/* Footer Text */}
        <div className="mt-4 text-white small">
          ✅ It's <a href="#" className="text-decoration-none fw-bold">100% free</a> and we will only email you confirmation of your rating.
        </div>
        </div>
      </div>
    </section>
  );
}

export default Review;

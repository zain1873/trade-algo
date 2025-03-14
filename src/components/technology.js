import React from 'react';
import Technology1 from "../assets/images/technology1.webp"; 
import Technology2 from "../assets/images/technology_latest.png"; 



function Technology() {
  return (
    <section>
      <div className="container">
        <div className="technology">
          <div className="row" data-aos="fade-top">
            {/* Section Heading */}
            <div className="col-12">
              <div className="sec_heading">
                <h2 className="pb-4">Technology</h2>
              </div>
            </div>

            {/* Technology Card 1 */}
            <div className="col-lg-6 mb-lg-0 mb-3">
         
              <div className="popular_card">
              <a href="">
                <img src={Technology1} alt="Technology" className="img-fluid" />
                <div className="card-desc">
                  <h3>Technology</h3>
                  <p>Meta Launches AI Coding Software in Competition With OpenAI</p>
                </div>
                </a>
              </div>
            
            </div>

            {/* Technology Card 2 (Duplicate for another column) */}
            <div className="col-lg-6 mb-3">        
              <div className="popular_card">
              <a href="">
                <img src={Technology2} alt="Technology" className="img-fluid" />
                <div className="card-desc">
                  <h3>Technology</h3>
                  <p>Google Unveils New AI-Powered Search Features</p>
                </div>
                </a>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;

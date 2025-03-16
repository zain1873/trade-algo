import React from 'react';
import defaultImg from "../assets/images/defaualt-img.webp"

function Analyst() {
  return (
    <section className="our-analyst py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Meet Our Team of Analysts</h2>
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <div className="card shadow-lg border-0 rounded-3 p-4 team-card">
              <div className="row align-items-center">
                {/* Analyst Image */}
                <div className="col-md-4 text-center">
                  <img
                    src={defaultImg}
                    alt="Brian Mitchell"  
                    className="img-fluid rounded-circle"
                  />
                </div>
                {/* Analyst Details */}
                <div className="col-md-8">
                  <h4 className="fw-bold profile-name">Brian Jack</h4>
                  <p className="text-muted">
                    Brian is a thoroughbred trader who started his career trading in the crypto space. After
                    both bull runs in 2017 and 2021, he jumped into options for stock and began dominating that space
                    as well. As seasoned as they come, Brian is conservative and stresses risk management to stay
                    profitable no matter how hard or easy a market we are in. A passionate educator for technical
                    analysis and as patient as they come to wait for the big home runs.
                  </p>
                  <p className="fw-bold">
                    Areas of Focus: <span className="text-dark">Straight Calls / Puts / Day Trading / Scalping Options</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 mb-3">
            <div className="card shadow-lg border-0 rounded-3 p-4 team-card">
              <div className="row align-items-center">
                {/* Analyst Image */}
                <div className="col-md-4 text-center">
                  <img
                    src={defaultImg}
                    alt="Brian Mitchell"  
                    className="img-fluid rounded-circle"
                  />
                </div>
                {/* Analyst Details */}
                <div className="col-md-8">
                  <h4 className="fw-bold profile-name">Bronco Anderson</h4>
                  <p className="text-muted">
                    Brian is a thoroughbred trader who started his career trading in the crypto space. After
                    both bull runs in 2017 and 2021, he jumped into options for stock and began dominating that space
                    as well. As seasoned as they come, Brian is conservative and stresses risk management to stay
                    profitable no matter how hard or easy a market we are in. A passionate educator for technical
                    analysis and as patient as they come to wait for the big home runs.
                  </p>
                  <p className="fw-bold">
                    Areas of Focus: <span className="text-dark">Straight Calls / Puts / Day Trading / Scalping Options</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 mb-3">
            <div className="card shadow-lg border-0 rounded-3 p-4 team-card">
              <div className="row align-items-center">
                {/* Analyst Image */}
                <div className="col-md-4 text-center">
                  <img
                    src={defaultImg}
                    alt="Brian Mitchell"  
                    className="img-fluid rounded-circle"
                  />
                </div>
                {/* Analyst Details */}
                <div className="col-md-8">
                  <h4 className="fw-bold profile-name">Dane Glisek</h4>
                  <p className="text-muted">
                    Brian is a thoroughbred trader who started his career trading in the crypto space. After
                    both bull runs in 2017 and 2021, he jumped into options for stock and began dominating that space
                    as well. As seasoned as they come, Brian is conservative and stresses risk management to stay
                    profitable no matter how hard or easy a market we are in. A passionate educator for technical
                    analysis and as patient as they come to wait for the big home runs.
                  </p>
                  <p className="fw-bold">
                    Areas of Focus: <span className="text-dark">Straight Calls / Puts / Day Trading / Scalping Options</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Analyst;

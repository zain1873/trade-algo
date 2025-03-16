import React from "react";
import crypto from "../assets/images/crypto2.webp";
import crypto1 from "../assets/images/crypto1.webp";
import crypto2 from "../assets/images/event1.webp";
import crypto3 from "../assets/images/apple-img.webp";
import crypto4 from "../assets/images/wealth1.webp";
import crypto5 from "../assets/images/editor-choice3.webp";
import crypto6 from "../assets/images/forex-latest.png";

function postEditor() {
  return (
    <section className="section_latest">
      <div className="container-fluid p-0">
        <div className="container">
          <div className="recents">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec_heading">
                  <h2 className="pb-4">Crypto</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {/* <div className="col-lg-12">
              <div className="recent_post">
                <h3 className="mb-0">Editors' Choice</h3>
              </div>
            </div> */}
            </div>

            <div className="row pt-5" data-aos="fade-up">
              <div className="col-lg-8">
                <div className="news-wrap">
                <a href="https://coincheckup.com/predictions" target="_blank" rel="noopener noreferrer">
                    <img className="obj_fit" src={crypto} alt="Walmart News" />
                    <h3>
                       Bitcoin Surged Beyond $30,000. Is Another Crypto Boom On The Way?
                    </h3>
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="other-news_section">
                  <div className="other-news-wrap">
                    <div className="other-news-card">
                      <a
                        className="other-news-img"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="side-news-img">
                          <img
                            className="obj_fit"
                            src={crypto1}
                            alt="Walmart News"
                          />
                        </div>
                      </a>
                      <div className="other-news-info">
                        <h4 className="mb-0">
                          Wednesday's Biggest Analyst Calls: Nvidia, Apple,
                          Tesla, Walmart...
                        </h4>

                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div className="other-news-wrap">
                    <div className="other-news-card">
                      <a
                        className="other-news-img"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="side-news-img">
                          <img
                            className="obj_fit"
                            src={crypto2}
                            alt="Walmart News"
                          />
                        </div>
                      </a>
                      <div className="other-news-info">
                        <h4 className="mb-0">
                          Wednesday's Biggest Analyst Calls: Nvidia, Apple,
                          Tesla, Walmart...
                        </h4>

                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div className="other-news-wrap">
                    <div className="other-news-card">
                      <a
                        className="other-news-img"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="side-news-img">
                          <img
                            className="obj_fit"
                            src={crypto3}
                            alt="Walmart News"
                          />
                        </div>
                      </a>
                      <div className="other-news-info">
                        <h4 className="mb-0">
                          Wednesday's Biggest Analyst Calls: Nvidia, Apple,
                          Tesla, Walmart...
                        </h4>

                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div className="other-news-wrap">
                    <div className="other-news-card">
                      <a
                        className="other-news-img"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="side-news-img">
                          <img
                            className="obj_fit"
                            src={crypto4}
                            alt="Walmart News"
                          />
                        </div>
                      </a>
                      <div className="other-news-info">
                        <h4 className="mb-0">
                          Wednesday's Biggest Analyst Calls: Nvidia, Apple,
                          Tesla, Walmart...
                        </h4>

                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div className="other-news-wrap">
                    <div className="other-news-card">
                      <a
                        className="other-news-img"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="side-news-img">
                          <img
                            className="obj_fit"
                            src={crypto5}
                            alt="Walmart News"
                          />
                        </div>
                      </a>
                      <div className="other-news-info">
                        <h4 className="mb-0">
                          Wednesday's Biggest Analyst Calls: Nvidia, Apple,
                          Tesla, Walmart...
                        </h4>

                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div className="other-news-wrap">
                    <div className="other-news-card">
                      <a
                        className="other-news-img"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="side-news-img">
                          <img
                            className="obj_fit"
                            src={crypto6}
                            alt="Walmart News"
                          />
                        </div>
                      </a>
                      <div className="other-news-info">
                        <h4 className="mb-0">
                          Wednesday's Biggest Analyst Calls: Nvidia, Apple,
                          Tesla, Walmart...
                        </h4>

                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default postEditor;

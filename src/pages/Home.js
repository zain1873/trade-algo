import React, { useEffect } from "react";
import "../styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Posts from "../components/posts";
import Technology from "../components/technology";
import PostEditor from "../components/postEditor";


import appStoreImg from "../assets/images/app-store-img.png"; 
import googleImg from "../assets/images/google-img.png";


function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="home-banner">
              <div className="banner-text" data-aos="fade-up">
                <h5>Introducing</h5>
                <h1>TradeGPT</h1>
                <p>The revolutionary A.I. powered trading assistant is here to help you elevate your trading to the next level</p>
                <button className="try-btn">Try It For Free</button>
 
                <div className='mt-5'>
                <p>Available now on mobile</p>
                <div className="store-images">
                  {/* App Store Link */}
                  <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <img className='store-img app-btn' src={appStoreImg} alt="Download on App Store" />
                  </a>
                  {/* Google Play Link */}
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img className='google-img app-btn' src={googleImg} alt="Get it on Google Play" />
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* posts components */}
        <Posts />
        <Technology/>
        <PostEditor/>

      </div>

 


    
  );
}

export default Home;

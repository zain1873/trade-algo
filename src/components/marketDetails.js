import React from 'react'
import market1 from "../assets/images/intel-mrket-img.webp";
import editorChoice2 from "../assets/images/editor-choice2.webp";
import editorChoice3 from "../assets/images/editor-choice3.webp";
import editorChoice4 from "../assets/images/reddit-market-img.webp";
import editorChoice5 from "../assets/images/crypto2.webp";



function marketDetails() {
  return ( 
    <section className='market_details_section'>
    <div className="container">
    <div className="row ">

    <div className="col-lg-3">
        <div className="editors-choice market_details">
            <a href="">
            <div className="market_detail_img">
            <img
                className="obj_fit"
                src={editorChoice2}
                alt="editorChoiceimg"
            />
            </div>
            <div className="editor_desc">
                <h3>Markets</h3>
                <p>
                The 10-year Yield Drops to Its Lowest Level in Three Weeks as the Fed's Preferred Inflation Measure Rises
                </p>
            </div>
            </a>
        </div>

        <div className="editors-choice market_details">
              <a href="">
                <div className="market_detail_img">
                <img
                  className="obj_fit"
                  src={editorChoice3}
                  alt="editorChoiceimg"
                />
                </div>
                <div className="editor_desc">
                  <h3>Markets</h3>
                  <p>
                  The Stock of AMD Faces a New Risk And This One Has Nothing to Do With AI
                  </p>
                </div>
              </a>
        </div>
    </div>

     <div className="col-lg-6">
        <div className="editors-choice market_details">
            <a href="">
            <div className="market_detail_img img_height">
            <img
                className="obj_fit"
                src={market1}
                alt="editorChoiceimg"
            />
            </div>
            <div className="editor_desc max_height mb-0">
                <h3>Markets</h3>
                <h2 className='extra-heading'>
                Intel's Stock is Rising. Here's the Latest Rescue Hope
                </h2>
                <h4 className='name'>Editorial Board</h4>
            </div>
            </a>
        </div>
    </div>

    <div className="col-lg-3">
    <div className="editors-choice market_details">
        <a href="">
        <div className="market_detail_img">
        <img
            className="obj_fit"
            src={editorChoice4}
            alt="editorChoiceimg"
        />
        </div>
        
        <div className="editor_desc">
            <h3>Markets</h3>
            <p>
            Google's 'Curveball' of Reddit Traffic Offers Investors a Buying Opportunity
            </p>
        </div>
        </a>
    </div>
    <div className="editors-choice market_details">
        <a href="">
        <div className="market_detail_img">
        <img
            className="obj_fit"
            src={editorChoice5}
            alt="editorChoiceimg"
        />
        </div>
        
        <div className="editor_desc">
            <h3>Markets</h3>
            <p>
            Wednesday's Biggest Analyst Calls: Nvidia, Apple, Tesla, Walmart, Netflix, Shopify, Super Micro & More
            </p>
        </div>
        </a>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default marketDetails
